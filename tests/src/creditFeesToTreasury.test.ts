//
// This file is subject to the terms and conditions defined in
// file 'LICENSE', which is part of this source code package.
//

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { default as usingApi, submitTransactionAsync, submitTransactionExpectFailAsync } from './substrate/substrate-api';
import { alicesPublicKey, bobsPublicKey } from './accounts';
import privateKey from './substrate/privateKey';
import { BigNumber } from 'bignumber.js';
import { IKeyringPair } from '@polkadot/types/types';
import { 
  createCollectionExpectSuccess, 
  createItemExpectSuccess,
  getGenericResult,
  transferExpectSuccess,
} from './util/helpers';

import { default as waitNewBlocks } from './substrate/wait-new-blocks';
import { ApiPromise } from '@polkadot/api';

chai.use(chaiAsPromised);
const expect = chai.expect;

const Treasury = '5EYCAe5ijiYfyeZ2JJCGq56LmPyNRAKzpG4QkoQkkQNB5e6Z';
const saneMinimumFee = 0.05;
const saneMaximumFee = 0.5;
const createCollectionDeposit = 100;

let alice: IKeyringPair;
let bob: IKeyringPair;

// Skip the inflation block pauses if the block is close to inflation block 
// until the inflation happens
/*eslint no-async-promise-executor: "off"*/
function skipInflationBlock(api: ApiPromise): Promise<void> {
  const promise = new Promise<void>(async (resolve) => {
    const blockInterval = parseInt((await api.consts.inflation.inflationBlockInterval).toString());
    const unsubscribe = await api.rpc.chain.subscribeNewHeads(head => {
      const currentBlock = parseInt(head.number.toString());
      if (currentBlock % blockInterval < blockInterval - 10) {
        unsubscribe();
        resolve();
      } else {
        console.log(`Skipping inflation block, current block: ${currentBlock}`);
      }
    });
  });

  return promise;
}

describe('integration test: Fees must be credited to Treasury:', () => {
  before(async () => {
    await usingApi(async () => {
      alice = privateKey('//Alice');
      bob = privateKey('//Bob');
    });
  });

  it('Total issuance does not change', async () => {
    await usingApi(async (api) => {
      await skipInflationBlock(api);
      await waitNewBlocks(api, 1);

      const totalBefore = new BigNumber((await api.query.balances.totalIssuance()).toString());

      const alicePrivateKey = privateKey('//Alice');
      const amount = new BigNumber(1);
      const transfer = api.tx.balances.transfer(bobsPublicKey, amount.toFixed());

      const result = getGenericResult(await submitTransactionAsync(alicePrivateKey, transfer));

      const totalAfter = new BigNumber((await api.query.balances.totalIssuance()).toString());

      expect(result.success).to.be.true;
      expect(totalAfter.toFixed()).to.be.equal(totalBefore.toFixed());
    });
  });

  it('Sender balance decreased by fee+sent amount, Treasury balance increased by fee', async () => {
    await usingApi(async (api) => {
      await skipInflationBlock(api);
      await waitNewBlocks(api, 1);

      const alicePrivateKey = privateKey('//Alice');
      const treasuryBalanceBefore = new BigNumber((await api.query.system.account(Treasury)).data.free.toString());
      const aliceBalanceBefore = new BigNumber((await api.query.system.account(alicesPublicKey)).data.free.toString());

      const amount = new BigNumber(1);
      const transfer = api.tx.balances.transfer(bobsPublicKey, amount.toFixed());
      const result = getGenericResult(await submitTransactionAsync(alicePrivateKey, transfer));

      const treasuryBalanceAfter = new BigNumber((await api.query.system.account(Treasury)).data.free.toString());
      const aliceBalanceAfter = new BigNumber((await api.query.system.account(alicesPublicKey)).data.free.toString());
      const fee = aliceBalanceBefore.minus(aliceBalanceAfter).minus(amount);
      const treasuryIncrease = treasuryBalanceAfter.minus(treasuryBalanceBefore);

      expect(result.success).to.be.true;
      expect(treasuryIncrease.toFixed()).to.be.equal(fee.toFixed());
    });
  });

  it('Treasury balance increased by failed tx fee', async () => {
    await usingApi(async (api) => {
      await skipInflationBlock(api);
      await waitNewBlocks(api, 1);

      const bobPrivateKey = privateKey('//Bob');
      const treasuryBalanceBefore = new BigNumber((await api.query.system.account(Treasury)).data.free.toString());
      const bobBalanceBefore = new BigNumber((await api.query.system.account(bobsPublicKey)).data.free.toString());

      const badTx = api.tx.balances.setBalance(alicesPublicKey, 0, 0);
      await expect(submitTransactionExpectFailAsync(bobPrivateKey, badTx)).to.be.rejected;

      const treasuryBalanceAfter = new BigNumber((await api.query.system.account(Treasury)).data.free.toString());
      const bobBalanceAfter = new BigNumber((await api.query.system.account(bobsPublicKey)).data.free.toString());
      const fee = bobBalanceBefore.minus(bobBalanceAfter);
      const treasuryIncrease = treasuryBalanceAfter.minus(treasuryBalanceBefore);

      expect(treasuryIncrease.toFixed()).to.be.equal(fee.toFixed());
    });
  });

  it('NFT Transactions also send fees to Treasury', async () => {
    await usingApi(async (api) => {
      await skipInflationBlock(api);
      await waitNewBlocks(api, 1);

      const treasuryBalanceBefore = new BigNumber((await api.query.system.account(Treasury)).data.free.toString());
      const aliceBalanceBefore = new BigNumber((await api.query.system.account(alicesPublicKey)).data.free.toString());

      await createCollectionExpectSuccess();

      const treasuryBalanceAfter = new BigNumber((await api.query.system.account(Treasury)).data.free.toString());
      const aliceBalanceAfter = new BigNumber((await api.query.system.account(alicesPublicKey)).data.free.toString());
      const fee = aliceBalanceBefore.minus(aliceBalanceAfter);
      const treasuryIncrease = treasuryBalanceAfter.minus(treasuryBalanceBefore);

      expect(treasuryIncrease.toFixed()).to.be.equal(fee.toFixed());
    });
  });

  it('Fees are sane', async () => {
    await usingApi(async (api) => {
      await skipInflationBlock(api);
      await waitNewBlocks(api, 1);

      const aliceBalanceBefore = new BigNumber((await api.query.system.account(alicesPublicKey)).data.free.toString());

      await createCollectionExpectSuccess();

      const aliceBalanceAfter = new BigNumber((await api.query.system.account(alicesPublicKey)).data.free.toString());
      const fee = aliceBalanceBefore.minus(aliceBalanceAfter);

      expect(fee.dividedBy(1e15).toNumber()).to.be.lessThan(saneMaximumFee + createCollectionDeposit);
      expect(fee.dividedBy(1e15).toNumber()).to.be.greaterThan(saneMinimumFee  + createCollectionDeposit);
    });
  });

  it('NFT Transfer fee is close to 0.1 Unique', async () => {
    await usingApi(async (api) => {
      await skipInflationBlock(api);
      await waitNewBlocks(api, 1);

      const collectionId = await createCollectionExpectSuccess();
      const tokenId = await createItemExpectSuccess(alice, collectionId, 'NFT');

      const aliceBalanceBefore = new BigNumber((await api.query.system.account(alicesPublicKey)).data.free.toString());
      await transferExpectSuccess(collectionId, tokenId, alice, bob, 1, 'NFT');
      const aliceBalanceAfter = new BigNumber((await api.query.system.account(alicesPublicKey)).data.free.toString());
      const fee = aliceBalanceBefore.minus(aliceBalanceAfter);

      // console.log(fee.toString());
      const expectedTransferFee = 0.1;
      const tolerance = 0.001;
      expect(fee.dividedBy(1e15).minus(expectedTransferFee).abs().toNumber()).to.be.lessThan(tolerance);
    });
  });

});

