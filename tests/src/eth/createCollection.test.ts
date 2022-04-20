// Copyright 2019-2022 Unique Network (Gibraltar) Ltd.
// This file is part of Unique Network.

// Unique Network is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Unique Network is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Unique Network. If not, see <http://www.gnu.org/licenses/>.

import {ApiPromise} from '@polkadot/api';
import {evmToAddress} from '@polkadot/util-crypto';
import {expect} from 'chai';
import {getCreatedCollectionCount, getDetailedCollectionInfo} from '../util/helpers';
import {collectionHelper, collectionIdFromAddress, createEthAccountWithBalance, itWeb3, normalizeAddress} from './util/helpers';

async function getCollectionAddressFromResult(api: ApiPromise, result: any) {
  const collectionIdAddress = normalizeAddress(result.events[0].raw.topics[2]);
  const collectionId = collectionIdFromAddress(collectionIdAddress);  
  const collection = (await getDetailedCollectionInfo(api, collectionId))!;
  return {collectionIdAddress, collectionId, collection};
}

describe('Create collection from EVM', () => {
  itWeb3('Create collection', async ({api, web3}) => {
    const owner = await createEthAccountWithBalance(api, web3);
    const helper = collectionHelper(web3, owner);
    const collectionName = 'CollectionEVM';
    const description = 'Some description';
    const tokenPrefix = 'token prefix';
  
    const collectionCountBefore = await getCreatedCollectionCount(api);
    const result = await helper.methods
      .create721Collection(collectionName, description, tokenPrefix)
      .send();
    const collectionCountAfter = await getCreatedCollectionCount(api);
  
    const {collectionId, collection} = await getCollectionAddressFromResult(api, result);
    expect(collectionCountAfter - collectionCountBefore).to.be.eq(1);
    expect(collectionId).to.be.eq(collectionCountAfter);
    expect(collection.name.map(v => String.fromCharCode(v.toNumber())).join('')).to.be.eq(collectionName);
    expect(collection.description.map(v => String.fromCharCode(v.toNumber())).join('')).to.be.eq(description);
    expect(collection.tokenPrefix.toHuman()).to.be.eq(tokenPrefix);
    expect(collection.schemaVersion.type).to.be.eq('ImageURL');
  });
  
  itWeb3('Set sponsorship', async ({api, web3}) => {
    const owner = await createEthAccountWithBalance(api, web3);
    const helper = collectionHelper(web3, owner);
    let result = await helper.methods.create721Collection('Sponsor collection', '1', '1').send();
    const {collectionIdAddress, collectionId} = await getCollectionAddressFromResult(api, result);
    const sponsor = await createEthAccountWithBalance(api, web3);
    result = await helper.methods.setSponsor(collectionIdAddress, sponsor).send();
    const collection = (await getDetailedCollectionInfo(api, collectionId))!;
    expect(collection.sponsorship.isUnconfirmed).to.be.true;
    expect(collection.sponsorship.asUnconfirmed.toHuman()).to.be.eq(evmToAddress(sponsor));
  });


});