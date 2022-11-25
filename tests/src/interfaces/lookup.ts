// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup3: frame_system::AccountInfo<Index, pallet_balances::AccountData<Balance>>
   **/
  FrameSystemAccountInfo: {
    nonce: 'u32',
    consumers: 'u32',
    providers: 'u32',
    sufficients: 'u32',
    data: 'PalletBalancesAccountData'
  },
  /**
   * Lookup5: pallet_balances::AccountData<Balance>
   **/
  PalletBalancesAccountData: {
    free: 'u128',
    reserved: 'u128',
    miscFrozen: 'u128',
    feeFrozen: 'u128'
  },
  /**
   * Lookup7: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
   **/
  FrameSupportDispatchPerDispatchClassWeight: {
    normal: 'SpWeightsWeightV2Weight',
    operational: 'SpWeightsWeightV2Weight',
    mandatory: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup8: sp_weights::weight_v2::Weight
   **/
  SpWeightsWeightV2Weight: {
    refTime: 'Compact<u64>',
    proofSize: 'Compact<u64>'
  },
  /**
   * Lookup13: sp_runtime::generic::digest::Digest
   **/
  SpRuntimeDigest: {
    logs: 'Vec<SpRuntimeDigestDigestItem>'
  },
  /**
   * Lookup15: sp_runtime::generic::digest::DigestItem
   **/
  SpRuntimeDigestDigestItem: {
    _enum: {
      Other: 'Bytes',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Consensus: '([u8;4],Bytes)',
      Seal: '([u8;4],Bytes)',
      PreRuntime: '([u8;4],Bytes)',
      __Unused7: 'Null',
      RuntimeEnvironmentUpdated: 'Null'
    }
  },
  /**
   * Lookup18: frame_system::EventRecord<opal_runtime::RuntimeEvent, primitive_types::H256>
   **/
  FrameSystemEventRecord: {
    phase: 'FrameSystemPhase',
    event: 'Event',
    topics: 'Vec<H256>'
  },
  /**
   * Lookup20: frame_system::pallet::Event<T>
   **/
  FrameSystemEvent: {
    _enum: {
      ExtrinsicSuccess: {
        dispatchInfo: 'FrameSupportDispatchDispatchInfo',
      },
      ExtrinsicFailed: {
        dispatchError: 'SpRuntimeDispatchError',
        dispatchInfo: 'FrameSupportDispatchDispatchInfo',
      },
      CodeUpdated: 'Null',
      NewAccount: {
        account: 'AccountId32',
      },
      KilledAccount: {
        account: 'AccountId32',
      },
      Remarked: {
        _alias: {
          hash_: 'hash',
        },
        sender: 'AccountId32',
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup21: frame_support::dispatch::DispatchInfo
   **/
  FrameSupportDispatchDispatchInfo: {
    weight: 'SpWeightsWeightV2Weight',
    class: 'FrameSupportDispatchDispatchClass',
    paysFee: 'FrameSupportDispatchPays'
  },
  /**
   * Lookup22: frame_support::dispatch::DispatchClass
   **/
  FrameSupportDispatchDispatchClass: {
    _enum: ['Normal', 'Operational', 'Mandatory']
  },
  /**
   * Lookup23: frame_support::dispatch::Pays
   **/
  FrameSupportDispatchPays: {
    _enum: ['Yes', 'No']
  },
  /**
   * Lookup24: sp_runtime::DispatchError
   **/
  SpRuntimeDispatchError: {
    _enum: {
      Other: 'Null',
      CannotLookup: 'Null',
      BadOrigin: 'Null',
      Module: 'SpRuntimeModuleError',
      ConsumerRemaining: 'Null',
      NoProviders: 'Null',
      TooManyConsumers: 'Null',
      Token: 'SpRuntimeTokenError',
      Arithmetic: 'SpRuntimeArithmeticError',
      Transactional: 'SpRuntimeTransactionalError',
      Exhausted: 'Null',
      Corruption: 'Null',
      Unavailable: 'Null'
    }
  },
  /**
   * Lookup25: sp_runtime::ModuleError
   **/
  SpRuntimeModuleError: {
    index: 'u8',
    error: '[u8;4]'
  },
  /**
   * Lookup26: sp_runtime::TokenError
   **/
  SpRuntimeTokenError: {
    _enum: ['NoFunds', 'WouldDie', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported']
  },
  /**
   * Lookup27: sp_runtime::ArithmeticError
   **/
  SpRuntimeArithmeticError: {
    _enum: ['Underflow', 'Overflow', 'DivisionByZero']
  },
  /**
   * Lookup28: sp_runtime::TransactionalError
   **/
  SpRuntimeTransactionalError: {
    _enum: ['LimitReached', 'NoLayer']
  },
  /**
   * Lookup29: cumulus_pallet_parachain_system::pallet::Event<T>
   **/
  CumulusPalletParachainSystemEvent: {
    _enum: {
      ValidationFunctionStored: 'Null',
      ValidationFunctionApplied: {
        relayChainBlockNum: 'u32',
      },
      ValidationFunctionDiscarded: 'Null',
      UpgradeAuthorized: {
        codeHash: 'H256',
      },
      DownwardMessagesReceived: {
        count: 'u32',
      },
      DownwardMessagesProcessed: {
        weightUsed: 'SpWeightsWeightV2Weight',
        dmqHead: 'H256'
      }
    }
  },
  /**
   * Lookup30: pallet_balances::pallet::Event<T, I>
   **/
  PalletBalancesEvent: {
    _enum: {
      Endowed: {
        account: 'AccountId32',
        freeBalance: 'u128',
      },
      DustLost: {
        account: 'AccountId32',
        amount: 'u128',
      },
      Transfer: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      BalanceSet: {
        who: 'AccountId32',
        free: 'u128',
        reserved: 'u128',
      },
      Reserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unreserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      ReserveRepatriated: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
        destinationStatus: 'FrameSupportTokensMiscBalanceStatus',
      },
      Deposit: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Withdraw: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        who: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup31: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved']
  },
  /**
   * Lookup32: pallet_transaction_payment::pallet::Event<T>
   **/
  PalletTransactionPaymentEvent: {
    _enum: {
      TransactionFeePaid: {
        who: 'AccountId32',
        actualFee: 'u128',
        tip: 'u128'
      }
    }
  },
  /**
   * Lookup33: pallet_treasury::pallet::Event<T, I>
   **/
  PalletTreasuryEvent: {
    _enum: {
      Proposed: {
        proposalIndex: 'u32',
      },
      Spending: {
        budgetRemaining: 'u128',
      },
      Awarded: {
        proposalIndex: 'u32',
        award: 'u128',
        account: 'AccountId32',
      },
      Rejected: {
        proposalIndex: 'u32',
        slashed: 'u128',
      },
      Burnt: {
        burntFunds: 'u128',
      },
      Rollover: {
        rolloverBalance: 'u128',
      },
      Deposit: {
        value: 'u128',
      },
      SpendApproved: {
        proposalIndex: 'u32',
        amount: 'u128',
        beneficiary: 'AccountId32'
      }
    }
  },
  /**
   * Lookup34: pallet_sudo::pallet::Event<T>
   **/
  PalletSudoEvent: {
    _enum: {
      Sudid: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>',
      },
      KeyChanged: {
        oldSudoer: 'Option<AccountId32>',
      },
      SudoAsDone: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup38: orml_vesting::module::Event<T>
   **/
  OrmlVestingModuleEvent: {
    _enum: {
      VestingScheduleAdded: {
        from: 'AccountId32',
        to: 'AccountId32',
        vestingSchedule: 'OrmlVestingVestingSchedule',
      },
      Claimed: {
        who: 'AccountId32',
        amount: 'u128',
      },
      VestingSchedulesUpdated: {
        who: 'AccountId32'
      }
    }
  },
  /**
   * Lookup39: orml_vesting::VestingSchedule<BlockNumber, Balance>
   **/
  OrmlVestingVestingSchedule: {
    start: 'u32',
    period: 'u32',
    periodCount: 'u32',
    perPeriod: 'Compact<u128>'
  },
  /**
   * Lookup41: orml_xtokens::module::Event<T>
   **/
  OrmlXtokensModuleEvent: {
    _enum: {
      TransferredMultiAssets: {
        sender: 'AccountId32',
        assets: 'XcmV1MultiassetMultiAssets',
        fee: 'XcmV1MultiAsset',
        dest: 'XcmV1MultiLocation'
      }
    }
  },
  /**
   * Lookup42: xcm::v1::multiasset::MultiAssets
   **/
  XcmV1MultiassetMultiAssets: 'Vec<XcmV1MultiAsset>',
  /**
   * Lookup44: xcm::v1::multiasset::MultiAsset
   **/
  XcmV1MultiAsset: {
    id: 'XcmV1MultiassetAssetId',
    fun: 'XcmV1MultiassetFungibility'
  },
  /**
   * Lookup45: xcm::v1::multiasset::AssetId
   **/
  XcmV1MultiassetAssetId: {
    _enum: {
      Concrete: 'XcmV1MultiLocation',
      Abstract: 'Bytes'
    }
  },
  /**
   * Lookup46: xcm::v1::multilocation::MultiLocation
   **/
  XcmV1MultiLocation: {
    parents: 'u8',
    interior: 'XcmV1MultilocationJunctions'
  },
  /**
   * Lookup47: xcm::v1::multilocation::Junctions
   **/
  XcmV1MultilocationJunctions: {
    _enum: {
      Here: 'Null',
      X1: 'XcmV1Junction',
      X2: '(XcmV1Junction,XcmV1Junction)',
      X3: '(XcmV1Junction,XcmV1Junction,XcmV1Junction)',
      X4: '(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)',
      X5: '(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)',
      X6: '(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)',
      X7: '(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)',
      X8: '(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)'
    }
  },
  /**
   * Lookup48: xcm::v1::junction::Junction
   **/
  XcmV1Junction: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'XcmV0JunctionNetworkId',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'XcmV0JunctionNetworkId',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'XcmV0JunctionNetworkId',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: 'Bytes',
      OnlyChild: 'Null',
      Plurality: {
        id: 'XcmV0JunctionBodyId',
        part: 'XcmV0JunctionBodyPart'
      }
    }
  },
  /**
   * Lookup50: xcm::v0::junction::NetworkId
   **/
  XcmV0JunctionNetworkId: {
    _enum: {
      Any: 'Null',
      Named: 'Bytes',
      Polkadot: 'Null',
      Kusama: 'Null'
    }
  },
  /**
   * Lookup53: xcm::v0::junction::BodyId
   **/
  XcmV0JunctionBodyId: {
    _enum: {
      Unit: 'Null',
      Named: 'Bytes',
      Index: 'Compact<u32>',
      Executive: 'Null',
      Technical: 'Null',
      Legislative: 'Null',
      Judicial: 'Null'
    }
  },
  /**
   * Lookup54: xcm::v0::junction::BodyPart
   **/
  XcmV0JunctionBodyPart: {
    _enum: {
      Voice: 'Null',
      Members: {
        count: 'Compact<u32>',
      },
      Fraction: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      AtLeastProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      MoreThanProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup55: xcm::v1::multiasset::Fungibility
   **/
  XcmV1MultiassetFungibility: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'XcmV1MultiassetAssetInstance'
    }
  },
  /**
   * Lookup56: xcm::v1::multiasset::AssetInstance
   **/
  XcmV1MultiassetAssetInstance: {
    _enum: {
      Undefined: 'Null',
      Index: 'Compact<u128>',
      Array4: '[u8;4]',
      Array8: '[u8;8]',
      Array16: '[u8;16]',
      Array32: '[u8;32]',
      Blob: 'Bytes'
    }
  },
  /**
   * Lookup59: orml_tokens::module::Event<T>
   **/
  OrmlTokensModuleEvent: {
    _enum: {
      Endowed: {
        currencyId: 'PalletForeignAssetsAssetIds',
        who: 'AccountId32',
        amount: 'u128',
      },
      DustLost: {
        currencyId: 'PalletForeignAssetsAssetIds',
        who: 'AccountId32',
        amount: 'u128',
      },
      Transfer: {
        currencyId: 'PalletForeignAssetsAssetIds',
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      Reserved: {
        currencyId: 'PalletForeignAssetsAssetIds',
        who: 'AccountId32',
        amount: 'u128',
      },
      Unreserved: {
        currencyId: 'PalletForeignAssetsAssetIds',
        who: 'AccountId32',
        amount: 'u128',
      },
      ReserveRepatriated: {
        currencyId: 'PalletForeignAssetsAssetIds',
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
        status: 'FrameSupportTokensMiscBalanceStatus',
      },
      BalanceSet: {
        currencyId: 'PalletForeignAssetsAssetIds',
        who: 'AccountId32',
        free: 'u128',
        reserved: 'u128',
      },
      TotalIssuanceSet: {
        currencyId: 'PalletForeignAssetsAssetIds',
        amount: 'u128',
      },
      Withdrawn: {
        currencyId: 'PalletForeignAssetsAssetIds',
        who: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        currencyId: 'PalletForeignAssetsAssetIds',
        who: 'AccountId32',
        freeAmount: 'u128',
        reservedAmount: 'u128',
      },
      Deposited: {
        currencyId: 'PalletForeignAssetsAssetIds',
        who: 'AccountId32',
        amount: 'u128',
      },
      LockSet: {
        lockId: '[u8;8]',
        currencyId: 'PalletForeignAssetsAssetIds',
        who: 'AccountId32',
        amount: 'u128',
      },
      LockRemoved: {
        lockId: '[u8;8]',
        currencyId: 'PalletForeignAssetsAssetIds',
        who: 'AccountId32'
      }
    }
  },
  /**
   * Lookup60: pallet_foreign_assets::AssetIds
   **/
  PalletForeignAssetsAssetIds: {
    _enum: {
      ForeignAssetId: 'u32',
      NativeAssetId: 'PalletForeignAssetsNativeCurrency'
    }
  },
  /**
   * Lookup61: pallet_foreign_assets::NativeCurrency
   **/
  PalletForeignAssetsNativeCurrency: {
    _enum: ['Here', 'Parent']
  },
  /**
   * Lookup62: cumulus_pallet_xcmp_queue::pallet::Event<T>
   **/
  CumulusPalletXcmpQueueEvent: {
    _enum: {
      Success: {
        messageHash: 'Option<H256>',
        weight: 'SpWeightsWeightV2Weight',
      },
      Fail: {
        messageHash: 'Option<H256>',
        error: 'XcmV2TraitsError',
        weight: 'SpWeightsWeightV2Weight',
      },
      BadVersion: {
        messageHash: 'Option<H256>',
      },
      BadFormat: {
        messageHash: 'Option<H256>',
      },
      UpwardMessageSent: {
        messageHash: 'Option<H256>',
      },
      XcmpMessageSent: {
        messageHash: 'Option<H256>',
      },
      OverweightEnqueued: {
        sender: 'u32',
        sentAt: 'u32',
        index: 'u64',
        required: 'SpWeightsWeightV2Weight',
      },
      OverweightServiced: {
        index: 'u64',
        used: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup64: xcm::v2::traits::Error
   **/
  XcmV2TraitsError: {
    _enum: {
      Overflow: 'Null',
      Unimplemented: 'Null',
      UntrustedReserveLocation: 'Null',
      UntrustedTeleportLocation: 'Null',
      MultiLocationFull: 'Null',
      MultiLocationNotInvertible: 'Null',
      BadOrigin: 'Null',
      InvalidLocation: 'Null',
      AssetNotFound: 'Null',
      FailedToTransactAsset: 'Null',
      NotWithdrawable: 'Null',
      LocationCannotHold: 'Null',
      ExceedsMaxMessageSize: 'Null',
      DestinationUnsupported: 'Null',
      Transport: 'Null',
      Unroutable: 'Null',
      UnknownClaim: 'Null',
      FailedToDecode: 'Null',
      MaxWeightInvalid: 'Null',
      NotHoldingFees: 'Null',
      TooExpensive: 'Null',
      Trap: 'u64',
      UnhandledXcmVersion: 'Null',
      WeightLimitReached: 'u64',
      Barrier: 'Null',
      WeightNotComputable: 'Null'
    }
  },
  /**
   * Lookup66: pallet_xcm::pallet::Event<T>
   **/
  PalletXcmEvent: {
    _enum: {
      Attempted: 'XcmV2TraitsOutcome',
      Sent: '(XcmV1MultiLocation,XcmV1MultiLocation,XcmV2Xcm)',
      UnexpectedResponse: '(XcmV1MultiLocation,u64)',
      ResponseReady: '(u64,XcmV2Response)',
      Notified: '(u64,u8,u8)',
      NotifyOverweight: '(u64,u8,u8,SpWeightsWeightV2Weight,SpWeightsWeightV2Weight)',
      NotifyDispatchError: '(u64,u8,u8)',
      NotifyDecodeFailed: '(u64,u8,u8)',
      InvalidResponder: '(XcmV1MultiLocation,u64,Option<XcmV1MultiLocation>)',
      InvalidResponderVersion: '(XcmV1MultiLocation,u64)',
      ResponseTaken: 'u64',
      AssetsTrapped: '(H256,XcmV1MultiLocation,XcmVersionedMultiAssets)',
      VersionChangeNotified: '(XcmV1MultiLocation,u32)',
      SupportedVersionChanged: '(XcmV1MultiLocation,u32)',
      NotifyTargetSendFail: '(XcmV1MultiLocation,u64,XcmV2TraitsError)',
      NotifyTargetMigrationFail: '(XcmVersionedMultiLocation,u64)',
      AssetsClaimed: '(H256,XcmV1MultiLocation,XcmVersionedMultiAssets)'
    }
  },
  /**
   * Lookup67: xcm::v2::traits::Outcome
   **/
  XcmV2TraitsOutcome: {
    _enum: {
      Complete: 'u64',
      Incomplete: '(u64,XcmV2TraitsError)',
      Error: 'XcmV2TraitsError'
    }
  },
  /**
   * Lookup68: xcm::v2::Xcm<RuntimeCall>
   **/
  XcmV2Xcm: 'Vec<XcmV2Instruction>',
  /**
   * Lookup70: xcm::v2::Instruction<RuntimeCall>
   **/
  XcmV2Instruction: {
    _enum: {
      WithdrawAsset: 'XcmV1MultiassetMultiAssets',
      ReserveAssetDeposited: 'XcmV1MultiassetMultiAssets',
      ReceiveTeleportedAsset: 'XcmV1MultiassetMultiAssets',
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'XcmV2Response',
        maxWeight: 'Compact<u64>',
      },
      TransferAsset: {
        assets: 'XcmV1MultiassetMultiAssets',
        beneficiary: 'XcmV1MultiLocation',
      },
      TransferReserveAsset: {
        assets: 'XcmV1MultiassetMultiAssets',
        dest: 'XcmV1MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      Transact: {
        originType: 'XcmV0OriginKind',
        requireWeightAtMost: 'Compact<u64>',
        call: 'XcmDoubleEncoded',
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>',
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>',
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>',
      },
      ClearOrigin: 'Null',
      DescendOrigin: 'XcmV1MultilocationJunctions',
      ReportError: {
        queryId: 'Compact<u64>',
        dest: 'XcmV1MultiLocation',
        maxResponseWeight: 'Compact<u64>',
      },
      DepositAsset: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        maxAssets: 'Compact<u32>',
        beneficiary: 'XcmV1MultiLocation',
      },
      DepositReserveAsset: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        maxAssets: 'Compact<u32>',
        dest: 'XcmV1MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      ExchangeAsset: {
        give: 'XcmV1MultiassetMultiAssetFilter',
        receive: 'XcmV1MultiassetMultiAssets',
      },
      InitiateReserveWithdraw: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        reserve: 'XcmV1MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      InitiateTeleport: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        dest: 'XcmV1MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      QueryHolding: {
        queryId: 'Compact<u64>',
        dest: 'XcmV1MultiLocation',
        assets: 'XcmV1MultiassetMultiAssetFilter',
        maxResponseWeight: 'Compact<u64>',
      },
      BuyExecution: {
        fees: 'XcmV1MultiAsset',
        weightLimit: 'XcmV2WeightLimit',
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'XcmV2Xcm',
      SetAppendix: 'XcmV2Xcm',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'XcmV1MultiassetMultiAssets',
        ticket: 'XcmV1MultiLocation',
      },
      Trap: 'Compact<u64>',
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'Compact<u64>',
      },
      UnsubscribeVersion: 'Null'
    }
  },
  /**
   * Lookup71: xcm::v2::Response
   **/
  XcmV2Response: {
    _enum: {
      Null: 'Null',
      Assets: 'XcmV1MultiassetMultiAssets',
      ExecutionResult: 'Option<(u32,XcmV2TraitsError)>',
      Version: 'u32'
    }
  },
  /**
   * Lookup74: xcm::v0::OriginKind
   **/
  XcmV0OriginKind: {
    _enum: ['Native', 'SovereignAccount', 'Superuser', 'Xcm']
  },
  /**
   * Lookup75: xcm::double_encoded::DoubleEncoded<T>
   **/
  XcmDoubleEncoded: {
    encoded: 'Bytes'
  },
  /**
   * Lookup76: xcm::v1::multiasset::MultiAssetFilter
   **/
  XcmV1MultiassetMultiAssetFilter: {
    _enum: {
      Definite: 'XcmV1MultiassetMultiAssets',
      Wild: 'XcmV1MultiassetWildMultiAsset'
    }
  },
  /**
   * Lookup77: xcm::v1::multiasset::WildMultiAsset
   **/
  XcmV1MultiassetWildMultiAsset: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'XcmV1MultiassetAssetId',
        fun: 'XcmV1MultiassetWildFungibility'
      }
    }
  },
  /**
   * Lookup78: xcm::v1::multiasset::WildFungibility
   **/
  XcmV1MultiassetWildFungibility: {
    _enum: ['Fungible', 'NonFungible']
  },
  /**
   * Lookup79: xcm::v2::WeightLimit
   **/
  XcmV2WeightLimit: {
    _enum: {
      Unlimited: 'Null',
      Limited: 'Compact<u64>'
    }
  },
  /**
   * Lookup81: xcm::VersionedMultiAssets
   **/
  XcmVersionedMultiAssets: {
    _enum: {
      V0: 'Vec<XcmV0MultiAsset>',
      V1: 'XcmV1MultiassetMultiAssets'
    }
  },
  /**
   * Lookup83: xcm::v0::multi_asset::MultiAsset
   **/
  XcmV0MultiAsset: {
    _enum: {
      None: 'Null',
      All: 'Null',
      AllFungible: 'Null',
      AllNonFungible: 'Null',
      AllAbstractFungible: {
        id: 'Bytes',
      },
      AllAbstractNonFungible: {
        class: 'Bytes',
      },
      AllConcreteFungible: {
        id: 'XcmV0MultiLocation',
      },
      AllConcreteNonFungible: {
        class: 'XcmV0MultiLocation',
      },
      AbstractFungible: {
        id: 'Bytes',
        amount: 'Compact<u128>',
      },
      AbstractNonFungible: {
        class: 'Bytes',
        instance: 'XcmV1MultiassetAssetInstance',
      },
      ConcreteFungible: {
        id: 'XcmV0MultiLocation',
        amount: 'Compact<u128>',
      },
      ConcreteNonFungible: {
        class: 'XcmV0MultiLocation',
        instance: 'XcmV1MultiassetAssetInstance'
      }
    }
  },
  /**
   * Lookup84: xcm::v0::multi_location::MultiLocation
   **/
  XcmV0MultiLocation: {
    _enum: {
      Null: 'Null',
      X1: 'XcmV0Junction',
      X2: '(XcmV0Junction,XcmV0Junction)',
      X3: '(XcmV0Junction,XcmV0Junction,XcmV0Junction)',
      X4: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)',
      X5: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)',
      X6: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)',
      X7: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)',
      X8: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)'
    }
  },
  /**
   * Lookup85: xcm::v0::junction::Junction
   **/
  XcmV0Junction: {
    _enum: {
      Parent: 'Null',
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'XcmV0JunctionNetworkId',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'XcmV0JunctionNetworkId',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'XcmV0JunctionNetworkId',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: 'Bytes',
      OnlyChild: 'Null',
      Plurality: {
        id: 'XcmV0JunctionBodyId',
        part: 'XcmV0JunctionBodyPart'
      }
    }
  },
  /**
   * Lookup86: xcm::VersionedMultiLocation
   **/
  XcmVersionedMultiLocation: {
    _enum: {
      V0: 'XcmV0MultiLocation',
      V1: 'XcmV1MultiLocation'
    }
  },
  /**
   * Lookup87: cumulus_pallet_xcm::pallet::Event<T>
   **/
  CumulusPalletXcmEvent: {
    _enum: {
      InvalidFormat: '[u8;8]',
      UnsupportedVersion: '[u8;8]',
      ExecutedDownward: '([u8;8],XcmV2TraitsOutcome)'
    }
  },
  /**
   * Lookup88: cumulus_pallet_dmp_queue::pallet::Event<T>
   **/
  CumulusPalletDmpQueueEvent: {
    _enum: {
      InvalidFormat: {
        messageId: '[u8;32]',
      },
      UnsupportedVersion: {
        messageId: '[u8;32]',
      },
      ExecutedDownward: {
        messageId: '[u8;32]',
        outcome: 'XcmV2TraitsOutcome',
      },
      WeightExhausted: {
        messageId: '[u8;32]',
        remainingWeight: 'SpWeightsWeightV2Weight',
        requiredWeight: 'SpWeightsWeightV2Weight',
      },
      OverweightEnqueued: {
        messageId: '[u8;32]',
        overweightIndex: 'u64',
        requiredWeight: 'SpWeightsWeightV2Weight',
      },
      OverweightServiced: {
        overweightIndex: 'u64',
        weightUsed: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup89: pallet_common::pallet::Event<T>
   **/
  PalletCommonEvent: {
    _enum: {
      CollectionCreated: '(u32,u8,AccountId32)',
      CollectionDestroyed: 'u32',
      ItemCreated: '(u32,u32,PalletEvmAccountBasicCrossAccountIdRepr,u128)',
      ItemDestroyed: '(u32,u32,PalletEvmAccountBasicCrossAccountIdRepr,u128)',
      Transfer: '(u32,u32,PalletEvmAccountBasicCrossAccountIdRepr,PalletEvmAccountBasicCrossAccountIdRepr,u128)',
      Approved: '(u32,u32,PalletEvmAccountBasicCrossAccountIdRepr,PalletEvmAccountBasicCrossAccountIdRepr,u128)',
      ApprovedForAll: '(u32,PalletEvmAccountBasicCrossAccountIdRepr,PalletEvmAccountBasicCrossAccountIdRepr,bool)',
      CollectionPropertySet: '(u32,Bytes)',
      CollectionPropertyDeleted: '(u32,Bytes)',
      TokenPropertySet: '(u32,u32,Bytes)',
      TokenPropertyDeleted: '(u32,u32,Bytes)',
      PropertyPermissionSet: '(u32,Bytes)',
      AllowListAddressAdded: '(u32,PalletEvmAccountBasicCrossAccountIdRepr)',
      AllowListAddressRemoved: '(u32,PalletEvmAccountBasicCrossAccountIdRepr)',
      CollectionAdminAdded: '(u32,PalletEvmAccountBasicCrossAccountIdRepr)',
      CollectionAdminRemoved: '(u32,PalletEvmAccountBasicCrossAccountIdRepr)',
      CollectionLimitSet: 'u32',
      CollectionOwnerChanged: '(u32,AccountId32)',
      CollectionPermissionSet: 'u32',
      CollectionSponsorSet: '(u32,AccountId32)',
      SponsorshipConfirmed: '(u32,AccountId32)',
      CollectionSponsorRemoved: 'u32'
    }
  },
  /**
   * Lookup92: pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>
   **/
  PalletEvmAccountBasicCrossAccountIdRepr: {
    _enum: {
      Substrate: 'AccountId32',
      Ethereum: 'H160'
    }
  },
  /**
   * Lookup96: pallet_structure::pallet::Event<T>
   **/
  PalletStructureEvent: {
    _enum: {
      Executed: 'Result<Null, SpRuntimeDispatchError>'
    }
  },
  /**
   * Lookup97: pallet_rmrk_core::pallet::Event<T>
   **/
  PalletRmrkCoreEvent: {
    _enum: {
      CollectionCreated: {
        issuer: 'AccountId32',
        collectionId: 'u32',
      },
      CollectionDestroyed: {
        issuer: 'AccountId32',
        collectionId: 'u32',
      },
      IssuerChanged: {
        oldIssuer: 'AccountId32',
        newIssuer: 'AccountId32',
        collectionId: 'u32',
      },
      CollectionLocked: {
        issuer: 'AccountId32',
        collectionId: 'u32',
      },
      NftMinted: {
        owner: 'AccountId32',
        collectionId: 'u32',
        nftId: 'u32',
      },
      NFTBurned: {
        owner: 'AccountId32',
        nftId: 'u32',
      },
      NFTSent: {
        sender: 'AccountId32',
        recipient: 'RmrkTraitsNftAccountIdOrCollectionNftTuple',
        collectionId: 'u32',
        nftId: 'u32',
        approvalRequired: 'bool',
      },
      NFTAccepted: {
        sender: 'AccountId32',
        recipient: 'RmrkTraitsNftAccountIdOrCollectionNftTuple',
        collectionId: 'u32',
        nftId: 'u32',
      },
      NFTRejected: {
        sender: 'AccountId32',
        collectionId: 'u32',
        nftId: 'u32',
      },
      PropertySet: {
        collectionId: 'u32',
        maybeNftId: 'Option<u32>',
        key: 'Bytes',
        value: 'Bytes',
      },
      ResourceAdded: {
        nftId: 'u32',
        resourceId: 'u32',
      },
      ResourceRemoval: {
        nftId: 'u32',
        resourceId: 'u32',
      },
      ResourceAccepted: {
        nftId: 'u32',
        resourceId: 'u32',
      },
      ResourceRemovalAccepted: {
        nftId: 'u32',
        resourceId: 'u32',
      },
      PrioritySet: {
        collectionId: 'u32',
        nftId: 'u32'
      }
    }
  },
  /**
   * Lookup98: rmrk_traits::nft::AccountIdOrCollectionNftTuple<sp_core::crypto::AccountId32>
   **/
  RmrkTraitsNftAccountIdOrCollectionNftTuple: {
    _enum: {
      AccountId: 'AccountId32',
      CollectionAndNftTuple: '(u32,u32)'
    }
  },
  /**
   * Lookup102: pallet_rmrk_equip::pallet::Event<T>
   **/
  PalletRmrkEquipEvent: {
    _enum: {
      BaseCreated: {
        issuer: 'AccountId32',
        baseId: 'u32',
      },
      EquippablesUpdated: {
        baseId: 'u32',
        slotId: 'u32'
      }
    }
  },
  /**
   * Lookup103: pallet_app_promotion::pallet::Event<T>
   **/
  PalletAppPromotionEvent: {
    _enum: {
      StakingRecalculation: '(AccountId32,u128,u128)',
      Stake: '(AccountId32,u128)',
      Unstake: '(AccountId32,u128)',
      SetAdmin: 'AccountId32'
    }
  },
  /**
   * Lookup104: pallet_foreign_assets::module::Event<T>
   **/
  PalletForeignAssetsModuleEvent: {
    _enum: {
      ForeignAssetRegistered: {
        assetId: 'u32',
        assetAddress: 'XcmV1MultiLocation',
        metadata: 'PalletForeignAssetsModuleAssetMetadata',
      },
      ForeignAssetUpdated: {
        assetId: 'u32',
        assetAddress: 'XcmV1MultiLocation',
        metadata: 'PalletForeignAssetsModuleAssetMetadata',
      },
      AssetRegistered: {
        assetId: 'PalletForeignAssetsAssetIds',
        metadata: 'PalletForeignAssetsModuleAssetMetadata',
      },
      AssetUpdated: {
        assetId: 'PalletForeignAssetsAssetIds',
        metadata: 'PalletForeignAssetsModuleAssetMetadata'
      }
    }
  },
  /**
   * Lookup105: pallet_foreign_assets::module::AssetMetadata<Balance>
   **/
  PalletForeignAssetsModuleAssetMetadata: {
    name: 'Bytes',
    symbol: 'Bytes',
    decimals: 'u8',
    minimalBalance: 'u128'
  },
  /**
   * Lookup106: pallet_evm::pallet::Event<T>
   **/
  PalletEvmEvent: {
    _enum: {
      Log: {
        log: 'EthereumLog',
      },
      Created: {
        address: 'H160',
      },
      CreatedFailed: {
        address: 'H160',
      },
      Executed: {
        address: 'H160',
      },
      ExecutedFailed: {
        address: 'H160'
      }
    }
  },
  /**
   * Lookup107: ethereum::log::Log
   **/
  EthereumLog: {
    address: 'H160',
    topics: 'Vec<H256>',
    data: 'Bytes'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup109: pallet_ethereum::pallet::Event
=======
<<<<<<< HEAD
   * Lookup113: pallet_ethereum::pallet::Event
=======
   * Lookup115: pallet_ethereum::pallet::Event
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup113: pallet_ethereum::pallet::Event
>>>>>>> fix: regenerate types after rebase
   **/
  PalletEthereumEvent: {
    _enum: {
      Executed: {
        from: 'H160',
        to: 'H160',
        transactionHash: 'H256',
        exitReason: 'EvmCoreErrorExitReason'
      }
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup110: evm_core::error::ExitReason
=======
<<<<<<< HEAD
   * Lookup114: evm_core::error::ExitReason
=======
   * Lookup116: evm_core::error::ExitReason
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup114: evm_core::error::ExitReason
>>>>>>> fix: regenerate types after rebase
   **/
  EvmCoreErrorExitReason: {
    _enum: {
      Succeed: 'EvmCoreErrorExitSucceed',
      Error: 'EvmCoreErrorExitError',
      Revert: 'EvmCoreErrorExitRevert',
      Fatal: 'EvmCoreErrorExitFatal'
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup111: evm_core::error::ExitSucceed
=======
<<<<<<< HEAD
   * Lookup115: evm_core::error::ExitSucceed
=======
   * Lookup117: evm_core::error::ExitSucceed
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup115: evm_core::error::ExitSucceed
>>>>>>> fix: regenerate types after rebase
   **/
  EvmCoreErrorExitSucceed: {
    _enum: ['Stopped', 'Returned', 'Suicided']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup112: evm_core::error::ExitError
=======
<<<<<<< HEAD
   * Lookup116: evm_core::error::ExitError
=======
   * Lookup118: evm_core::error::ExitError
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup116: evm_core::error::ExitError
>>>>>>> fix: regenerate types after rebase
   **/
  EvmCoreErrorExitError: {
    _enum: {
      StackUnderflow: 'Null',
      StackOverflow: 'Null',
      InvalidJump: 'Null',
      InvalidRange: 'Null',
      DesignatedInvalid: 'Null',
      CallTooDeep: 'Null',
      CreateCollision: 'Null',
      CreateContractLimit: 'Null',
      OutOfOffset: 'Null',
      OutOfGas: 'Null',
      OutOfFund: 'Null',
      PCUnderflow: 'Null',
      CreateEmpty: 'Null',
      Other: 'Text',
      InvalidCode: 'Null'
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup115: evm_core::error::ExitRevert
=======
<<<<<<< HEAD
   * Lookup119: evm_core::error::ExitRevert
=======
   * Lookup121: evm_core::error::ExitRevert
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup119: evm_core::error::ExitRevert
>>>>>>> fix: regenerate types after rebase
   **/
  EvmCoreErrorExitRevert: {
    _enum: ['Reverted']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup116: evm_core::error::ExitFatal
=======
<<<<<<< HEAD
   * Lookup120: evm_core::error::ExitFatal
=======
   * Lookup122: evm_core::error::ExitFatal
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup120: evm_core::error::ExitFatal
>>>>>>> fix: regenerate types after rebase
   **/
  EvmCoreErrorExitFatal: {
    _enum: {
      NotSupported: 'Null',
      UnhandledInterrupt: 'Null',
      CallErrorAsFatal: 'EvmCoreErrorExitError',
      Other: 'Text'
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup117: pallet_evm_contract_helpers::pallet::Event<T>
=======
<<<<<<< HEAD
   * Lookup121: pallet_evm_contract_helpers::pallet::Event<T>
=======
   * Lookup123: pallet_evm_contract_helpers::pallet::Event<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup121: pallet_evm_contract_helpers::pallet::Event<T>
>>>>>>> fix: regenerate types after rebase
   **/
  PalletEvmContractHelpersEvent: {
    _enum: {
      ContractSponsorSet: '(H160,AccountId32)',
      ContractSponsorshipConfirmed: '(H160,AccountId32)',
      ContractSponsorRemoved: 'H160'
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup118: pallet_evm_migration::pallet::Event<T>
=======
<<<<<<< HEAD
=======
>>>>>>> fix: regenerate types after rebase
   * Lookup122: pallet_evm_migration::pallet::Event<T>
>>>>>>> chore:  regenerate types
   **/
  PalletEvmMigrationEvent: {
    _enum: ['TestEvent']
  },
  /**
<<<<<<< HEAD
   * Lookup119: pallet_maintenance::pallet::Event<T>
=======
   * Lookup123: pallet_maintenance::pallet::Event<T>
<<<<<<< HEAD
=======
   * Lookup124: pallet_maintenance::pallet::Event<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
   **/
  PalletMaintenanceEvent: {
    _enum: ['MaintenanceEnabled', 'MaintenanceDisabled']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup120: pallet_test_utils::pallet::Event<T>
=======
<<<<<<< HEAD
   * Lookup124: pallet_test_utils::pallet::Event<T>
=======
   * Lookup125: pallet_test_utils::pallet::Event<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup124: pallet_test_utils::pallet::Event<T>
>>>>>>> fix: regenerate types after rebase
   **/
  PalletTestUtilsEvent: {
    _enum: ['ValueIsSet', 'ShouldRollback', 'BatchCompleted']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup121: frame_system::Phase
=======
<<<<<<< HEAD
   * Lookup125: frame_system::Phase
=======
   * Lookup126: frame_system::Phase
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup125: frame_system::Phase
>>>>>>> fix: regenerate types after rebase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null'
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup124: frame_system::LastRuntimeUpgradeInfo
=======
<<<<<<< HEAD
   * Lookup127: frame_system::LastRuntimeUpgradeInfo
=======
   * Lookup128: frame_system::LastRuntimeUpgradeInfo
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup127: frame_system::LastRuntimeUpgradeInfo
>>>>>>> fix: regenerate types after rebase
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup125: frame_system::pallet::Call<T>
=======
<<<<<<< HEAD
   * Lookup128: frame_system::pallet::Call<T>
=======
   * Lookup129: frame_system::pallet::Call<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup128: frame_system::pallet::Call<T>
>>>>>>> fix: regenerate types after rebase
   **/
  FrameSystemCall: {
    _enum: {
      remark: {
        remark: 'Bytes',
      },
      set_heap_pages: {
        pages: 'u64',
      },
      set_code: {
        code: 'Bytes',
      },
      set_code_without_checks: {
        code: 'Bytes',
      },
      set_storage: {
        items: 'Vec<(Bytes,Bytes)>',
      },
      kill_storage: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Vec<Bytes>',
      },
      kill_prefix: {
        prefix: 'Bytes',
        subkeys: 'u32',
      },
      remark_with_event: {
        remark: 'Bytes'
      }
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup129: frame_system::limits::BlockWeights
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup130: frame_system::limits::BlockWeights
=======
<<<<<<< HEAD
   * Lookup133: frame_system::limits::BlockWeights
=======
   * Lookup134: frame_system::limits::BlockWeights
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup133: frame_system::limits::BlockWeights
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'SpWeightsWeightV2Weight',
    maxBlock: 'SpWeightsWeightV2Weight',
    perClass: 'FrameSupportDispatchPerDispatchClassWeightsPerClass'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup130: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup131: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
=======
<<<<<<< HEAD
   * Lookup134: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
=======
   * Lookup135: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup134: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  FrameSupportDispatchPerDispatchClassWeightsPerClass: {
    normal: 'FrameSystemLimitsWeightsPerClass',
    operational: 'FrameSystemLimitsWeightsPerClass',
    mandatory: 'FrameSystemLimitsWeightsPerClass'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup131: frame_system::limits::WeightsPerClass
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup132: frame_system::limits::WeightsPerClass
=======
<<<<<<< HEAD
   * Lookup135: frame_system::limits::WeightsPerClass
=======
   * Lookup136: frame_system::limits::WeightsPerClass
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup135: frame_system::limits::WeightsPerClass
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'SpWeightsWeightV2Weight',
    maxExtrinsic: 'Option<SpWeightsWeightV2Weight>',
    maxTotal: 'Option<SpWeightsWeightV2Weight>',
    reserved: 'Option<SpWeightsWeightV2Weight>'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup133: frame_system::limits::BlockLength
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup134: frame_system::limits::BlockLength
=======
<<<<<<< HEAD
   * Lookup137: frame_system::limits::BlockLength
=======
   * Lookup138: frame_system::limits::BlockLength
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup137: frame_system::limits::BlockLength
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  FrameSystemLimitsBlockLength: {
    max: 'FrameSupportDispatchPerDispatchClassU32'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup134: frame_support::dispatch::PerDispatchClass<T>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup135: frame_support::dispatch::PerDispatchClass<T>
=======
<<<<<<< HEAD
   * Lookup138: frame_support::dispatch::PerDispatchClass<T>
=======
   * Lookup139: frame_support::dispatch::PerDispatchClass<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup138: frame_support::dispatch::PerDispatchClass<T>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  FrameSupportDispatchPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup135: sp_weights::RuntimeDbWeight
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup136: sp_weights::RuntimeDbWeight
=======
<<<<<<< HEAD
   * Lookup139: sp_weights::RuntimeDbWeight
=======
   * Lookup140: sp_weights::RuntimeDbWeight
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup139: sp_weights::RuntimeDbWeight
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  SpWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup136: sp_version::RuntimeVersion
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup137: sp_version::RuntimeVersion
=======
<<<<<<< HEAD
   * Lookup140: sp_version::RuntimeVersion
=======
   * Lookup141: sp_version::RuntimeVersion
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup140: sp_version::RuntimeVersion
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  SpVersionRuntimeVersion: {
    specName: 'Text',
    implName: 'Text',
    authoringVersion: 'u32',
    specVersion: 'u32',
    implVersion: 'u32',
    apis: 'Vec<([u8;8],u32)>',
    transactionVersion: 'u32',
    stateVersion: 'u8'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup141: frame_system::pallet::Error<T>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup142: frame_system::pallet::Error<T>
=======
<<<<<<< HEAD
   * Lookup145: frame_system::pallet::Error<T>
=======
   * Lookup146: frame_system::pallet::Error<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup145: frame_system::pallet::Error<T>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  FrameSystemError: {
    _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup142: polkadot_primitives::v2::PersistedValidationData<primitive_types::H256, N>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup143: polkadot_primitives::v2::PersistedValidationData<primitive_types::H256, N>
=======
<<<<<<< HEAD
   * Lookup146: polkadot_primitives::v2::PersistedValidationData<primitive_types::H256, N>
=======
   * Lookup147: polkadot_primitives::v2::PersistedValidationData<primitive_types::H256, N>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup146: polkadot_primitives::v2::PersistedValidationData<primitive_types::H256, N>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PolkadotPrimitivesV2PersistedValidationData: {
    parentHead: 'Bytes',
    relayParentNumber: 'u32',
    relayParentStorageRoot: 'H256',
    maxPovSize: 'u32'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup145: polkadot_primitives::v2::UpgradeRestriction
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup146: polkadot_primitives::v2::UpgradeRestriction
=======
<<<<<<< HEAD
   * Lookup149: polkadot_primitives::v2::UpgradeRestriction
=======
   * Lookup150: polkadot_primitives::v2::UpgradeRestriction
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup149: polkadot_primitives::v2::UpgradeRestriction
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PolkadotPrimitivesV2UpgradeRestriction: {
    _enum: ['Present']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup146: sp_trie::storage_proof::StorageProof
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup147: sp_trie::storage_proof::StorageProof
=======
<<<<<<< HEAD
   * Lookup150: sp_trie::storage_proof::StorageProof
=======
   * Lookup151: sp_trie::storage_proof::StorageProof
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup150: sp_trie::storage_proof::StorageProof
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  SpTrieStorageProof: {
    trieNodes: 'BTreeSet<Bytes>'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup148: cumulus_pallet_parachain_system::relay_state_snapshot::MessagingStateSnapshot
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup149: cumulus_pallet_parachain_system::relay_state_snapshot::MessagingStateSnapshot
=======
<<<<<<< HEAD
   * Lookup152: cumulus_pallet_parachain_system::relay_state_snapshot::MessagingStateSnapshot
=======
   * Lookup153: cumulus_pallet_parachain_system::relay_state_snapshot::MessagingStateSnapshot
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup152: cumulus_pallet_parachain_system::relay_state_snapshot::MessagingStateSnapshot
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: {
    dmqMqcHead: 'H256',
    relayDispatchQueueSize: '(u32,u32)',
    ingressChannels: 'Vec<(u32,PolkadotPrimitivesV2AbridgedHrmpChannel)>',
    egressChannels: 'Vec<(u32,PolkadotPrimitivesV2AbridgedHrmpChannel)>'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup151: polkadot_primitives::v2::AbridgedHrmpChannel
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup152: polkadot_primitives::v2::AbridgedHrmpChannel
=======
<<<<<<< HEAD
   * Lookup155: polkadot_primitives::v2::AbridgedHrmpChannel
=======
   * Lookup156: polkadot_primitives::v2::AbridgedHrmpChannel
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup155: polkadot_primitives::v2::AbridgedHrmpChannel
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PolkadotPrimitivesV2AbridgedHrmpChannel: {
    maxCapacity: 'u32',
    maxTotalSize: 'u32',
    maxMessageSize: 'u32',
    msgCount: 'u32',
    totalSize: 'u32',
    mqcHead: 'Option<H256>'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup152: polkadot_primitives::v2::AbridgedHostConfiguration
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup153: polkadot_primitives::v2::AbridgedHostConfiguration
=======
<<<<<<< HEAD
   * Lookup156: polkadot_primitives::v2::AbridgedHostConfiguration
=======
   * Lookup157: polkadot_primitives::v2::AbridgedHostConfiguration
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup156: polkadot_primitives::v2::AbridgedHostConfiguration
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PolkadotPrimitivesV2AbridgedHostConfiguration: {
    maxCodeSize: 'u32',
    maxHeadDataSize: 'u32',
    maxUpwardQueueCount: 'u32',
    maxUpwardQueueSize: 'u32',
    maxUpwardMessageSize: 'u32',
    maxUpwardMessageNumPerCandidate: 'u32',
    hrmpMaxMessageNumPerCandidate: 'u32',
    validationUpgradeCooldown: 'u32',
    validationUpgradeDelay: 'u32'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup158: polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain::primitives::Id>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup159: polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain::primitives::Id>
=======
<<<<<<< HEAD
   * Lookup162: polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain::primitives::Id>
=======
   * Lookup163: polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain::primitives::Id>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup162: polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain::primitives::Id>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PolkadotCorePrimitivesOutboundHrmpMessage: {
    recipient: 'u32',
    data: 'Bytes'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup159: cumulus_pallet_parachain_system::pallet::Call<T>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup160: cumulus_pallet_parachain_system::pallet::Call<T>
=======
<<<<<<< HEAD
   * Lookup163: cumulus_pallet_parachain_system::pallet::Call<T>
=======
   * Lookup164: cumulus_pallet_parachain_system::pallet::Call<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup163: cumulus_pallet_parachain_system::pallet::Call<T>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  CumulusPalletParachainSystemCall: {
    _enum: {
      set_validation_data: {
        data: 'CumulusPrimitivesParachainInherentParachainInherentData',
      },
      sudo_send_upward_message: {
        message: 'Bytes',
      },
      authorize_upgrade: {
        codeHash: 'H256',
      },
      enact_authorized_upgrade: {
        code: 'Bytes'
      }
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup160: cumulus_primitives_parachain_inherent::ParachainInherentData
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup161: cumulus_primitives_parachain_inherent::ParachainInherentData
=======
<<<<<<< HEAD
   * Lookup164: cumulus_primitives_parachain_inherent::ParachainInherentData
=======
   * Lookup165: cumulus_primitives_parachain_inherent::ParachainInherentData
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup164: cumulus_primitives_parachain_inherent::ParachainInherentData
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  CumulusPrimitivesParachainInherentParachainInherentData: {
    validationData: 'PolkadotPrimitivesV2PersistedValidationData',
    relayChainState: 'SpTrieStorageProof',
    downwardMessages: 'Vec<PolkadotCorePrimitivesInboundDownwardMessage>',
    horizontalMessages: 'BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup162: polkadot_core_primitives::InboundDownwardMessage<BlockNumber>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup163: polkadot_core_primitives::InboundDownwardMessage<BlockNumber>
=======
<<<<<<< HEAD
   * Lookup166: polkadot_core_primitives::InboundDownwardMessage<BlockNumber>
=======
   * Lookup167: polkadot_core_primitives::InboundDownwardMessage<BlockNumber>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup166: polkadot_core_primitives::InboundDownwardMessage<BlockNumber>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PolkadotCorePrimitivesInboundDownwardMessage: {
    sentAt: 'u32',
    msg: 'Bytes'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup165: polkadot_core_primitives::InboundHrmpMessage<BlockNumber>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup166: polkadot_core_primitives::InboundHrmpMessage<BlockNumber>
=======
<<<<<<< HEAD
   * Lookup169: polkadot_core_primitives::InboundHrmpMessage<BlockNumber>
=======
   * Lookup170: polkadot_core_primitives::InboundHrmpMessage<BlockNumber>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup169: polkadot_core_primitives::InboundHrmpMessage<BlockNumber>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PolkadotCorePrimitivesInboundHrmpMessage: {
    sentAt: 'u32',
    data: 'Bytes'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup168: cumulus_pallet_parachain_system::pallet::Error<T>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup169: cumulus_pallet_parachain_system::pallet::Error<T>
=======
<<<<<<< HEAD
   * Lookup172: cumulus_pallet_parachain_system::pallet::Error<T>
=======
   * Lookup173: cumulus_pallet_parachain_system::pallet::Error<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup172: cumulus_pallet_parachain_system::pallet::Error<T>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  CumulusPalletParachainSystemError: {
    _enum: ['OverlappingUpgrades', 'ProhibitedByPolkadot', 'TooBig', 'ValidationDataNotAvailable', 'HostConfigurationNotAvailable', 'NotScheduled', 'NothingAuthorized', 'Unauthorized']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup170: pallet_balances::BalanceLock<Balance>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup171: pallet_balances::BalanceLock<Balance>
=======
<<<<<<< HEAD
   * Lookup174: pallet_balances::BalanceLock<Balance>
=======
   * Lookup175: pallet_balances::BalanceLock<Balance>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup174: pallet_balances::BalanceLock<Balance>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PalletBalancesBalanceLock: {
    id: '[u8;8]',
    amount: 'u128',
    reasons: 'PalletBalancesReasons'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup171: pallet_balances::Reasons
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup172: pallet_balances::Reasons
=======
<<<<<<< HEAD
   * Lookup175: pallet_balances::Reasons
=======
   * Lookup176: pallet_balances::Reasons
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup175: pallet_balances::Reasons
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PalletBalancesReasons: {
    _enum: ['Fee', 'Misc', 'All']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup174: pallet_balances::ReserveData<ReserveIdentifier, Balance>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup175: pallet_balances::ReserveData<ReserveIdentifier, Balance>
=======
<<<<<<< HEAD
   * Lookup178: pallet_balances::ReserveData<ReserveIdentifier, Balance>
=======
   * Lookup179: pallet_balances::ReserveData<ReserveIdentifier, Balance>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup178: pallet_balances::ReserveData<ReserveIdentifier, Balance>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PalletBalancesReserveData: {
    id: '[u8;16]',
    amount: 'u128'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup176: pallet_balances::pallet::Call<T, I>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup177: pallet_balances::Releases
=======
<<<<<<< HEAD
   * Lookup180: pallet_balances::Releases
=======
   * Lookup181: pallet_balances::Releases
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup180: pallet_balances::Releases
>>>>>>> fix: regenerate types after rebase
   **/
  PalletBalancesReleases: {
    _enum: ['V1_0_0', 'V2_0_0']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup178: pallet_balances::pallet::Call<T, I>
=======
<<<<<<< HEAD
   * Lookup181: pallet_balances::pallet::Call<T, I>
=======
   * Lookup182: pallet_balances::pallet::Call<T, I>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup181: pallet_balances::pallet::Call<T, I>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PalletBalancesCall: {
    _enum: {
      transfer: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      set_balance: {
        who: 'MultiAddress',
        newFree: 'Compact<u128>',
        newReserved: 'Compact<u128>',
      },
      force_transfer: {
        source: 'MultiAddress',
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_keep_alive: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_all: {
        dest: 'MultiAddress',
        keepAlive: 'bool',
      },
      force_unreserve: {
        who: 'MultiAddress',
        amount: 'u128'
      }
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup179: pallet_balances::pallet::Error<T, I>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup181: pallet_balances::pallet::Error<T, I>
=======
<<<<<<< HEAD
   * Lookup184: pallet_balances::pallet::Error<T, I>
=======
   * Lookup185: pallet_balances::pallet::Error<T, I>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup184: pallet_balances::pallet::Error<T, I>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PalletBalancesError: {
    _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'KeepAlive', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup181: pallet_timestamp::pallet::Call<T>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup183: pallet_timestamp::pallet::Call<T>
=======
<<<<<<< HEAD
   * Lookup186: pallet_timestamp::pallet::Call<T>
=======
   * Lookup187: pallet_timestamp::pallet::Call<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup186: pallet_timestamp::pallet::Call<T>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>'
      }
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup183: pallet_transaction_payment::Releases
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup185: pallet_transaction_payment::Releases
=======
<<<<<<< HEAD
   * Lookup188: pallet_transaction_payment::Releases
=======
   * Lookup189: pallet_transaction_payment::Releases
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup188: pallet_transaction_payment::Releases
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PalletTransactionPaymentReleases: {
    _enum: ['V1Ancient', 'V2']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup184: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup186: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
=======
<<<<<<< HEAD
   * Lookup189: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
=======
   * Lookup190: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup189: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PalletTreasuryProposal: {
    proposer: 'AccountId32',
    value: 'u128',
    beneficiary: 'AccountId32',
    bond: 'u128'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup187: pallet_treasury::pallet::Call<T, I>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup189: pallet_treasury::pallet::Call<T, I>
=======
<<<<<<< HEAD
   * Lookup192: pallet_treasury::pallet::Call<T, I>
=======
   * Lookup193: pallet_treasury::pallet::Call<T, I>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup192: pallet_treasury::pallet::Call<T, I>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PalletTreasuryCall: {
    _enum: {
      propose_spend: {
        value: 'Compact<u128>',
        beneficiary: 'MultiAddress',
      },
      reject_proposal: {
        proposalId: 'Compact<u32>',
      },
      approve_proposal: {
        proposalId: 'Compact<u32>',
      },
      spend: {
        amount: 'Compact<u128>',
        beneficiary: 'MultiAddress',
      },
      remove_approval: {
        proposalId: 'Compact<u32>'
      }
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup190: frame_support::PalletId
   **/
  FrameSupportPalletId: '[u8;8]',
  /**
   * Lookup191: pallet_treasury::pallet::Error<T, I>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup192: frame_support::PalletId
   **/
  FrameSupportPalletId: '[u8;8]',
  /**
   * Lookup193: pallet_treasury::pallet::Error<T, I>
=======
<<<<<<< HEAD
=======
>>>>>>> fix: regenerate types after rebase
   * Lookup195: frame_support::PalletId
   **/
  FrameSupportPalletId: '[u8;8]',
  /**
   * Lookup196: pallet_treasury::pallet::Error<T, I>
<<<<<<< HEAD
=======
   * Lookup196: frame_support::PalletId
   **/
  FrameSupportPalletId: '[u8;8]',
  /**
   * Lookup197: pallet_treasury::pallet::Error<T, I>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PalletTreasuryError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'TooManyApprovals', 'InsufficientPermission', 'ProposalNotApproved']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup192: pallet_sudo::pallet::Call<T>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup194: pallet_sudo::pallet::Call<T>
=======
<<<<<<< HEAD
   * Lookup197: pallet_sudo::pallet::Call<T>
=======
   * Lookup198: pallet_sudo::pallet::Call<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup197: pallet_sudo::pallet::Call<T>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PalletSudoCall: {
    _enum: {
      sudo: {
        call: 'Call',
      },
      sudo_unchecked_weight: {
        call: 'Call',
        weight: 'SpWeightsWeightV2Weight',
      },
      set_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
      },
      sudo_as: {
        who: 'MultiAddress',
        call: 'Call'
      }
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup194: orml_vesting::module::Call<T>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup196: orml_vesting::module::Call<T>
=======
<<<<<<< HEAD
   * Lookup199: orml_vesting::module::Call<T>
=======
   * Lookup200: orml_vesting::module::Call<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup199: orml_vesting::module::Call<T>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  OrmlVestingModuleCall: {
    _enum: {
      claim: 'Null',
      vested_transfer: {
        dest: 'MultiAddress',
        schedule: 'OrmlVestingVestingSchedule',
      },
      update_vesting_schedules: {
        who: 'MultiAddress',
        vestingSchedules: 'Vec<OrmlVestingVestingSchedule>',
      },
      claim_for: {
        dest: 'MultiAddress'
      }
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup196: orml_xtokens::module::Call<T>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup198: orml_xtokens::module::Call<T>
=======
<<<<<<< HEAD
   * Lookup201: orml_xtokens::module::Call<T>
=======
   * Lookup202: orml_xtokens::module::Call<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup201: orml_xtokens::module::Call<T>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  OrmlXtokensModuleCall: {
    _enum: {
      transfer: {
        currencyId: 'PalletForeignAssetsAssetIds',
        amount: 'u128',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV2WeightLimit',
      },
      transfer_multiasset: {
        asset: 'XcmVersionedMultiAsset',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV2WeightLimit',
      },
      transfer_with_fee: {
        currencyId: 'PalletForeignAssetsAssetIds',
        amount: 'u128',
        fee: 'u128',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV2WeightLimit',
      },
      transfer_multiasset_with_fee: {
        asset: 'XcmVersionedMultiAsset',
        fee: 'XcmVersionedMultiAsset',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV2WeightLimit',
      },
      transfer_multicurrencies: {
        currencies: 'Vec<(PalletForeignAssetsAssetIds,u128)>',
        feeItem: 'u32',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV2WeightLimit',
      },
      transfer_multiassets: {
        assets: 'XcmVersionedMultiAssets',
        feeItem: 'u32',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV2WeightLimit'
      }
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup197: xcm::VersionedMultiAsset
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup199: xcm::VersionedMultiAsset
=======
<<<<<<< HEAD
   * Lookup202: xcm::VersionedMultiAsset
=======
   * Lookup203: xcm::VersionedMultiAsset
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup202: xcm::VersionedMultiAsset
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  XcmVersionedMultiAsset: {
    _enum: {
      V0: 'XcmV0MultiAsset',
      V1: 'XcmV1MultiAsset'
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup200: orml_tokens::module::Call<T>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup202: orml_tokens::module::Call<T>
=======
<<<<<<< HEAD
   * Lookup205: orml_tokens::module::Call<T>
=======
   * Lookup206: orml_tokens::module::Call<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup205: orml_tokens::module::Call<T>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  OrmlTokensModuleCall: {
    _enum: {
      transfer: {
        dest: 'MultiAddress',
        currencyId: 'PalletForeignAssetsAssetIds',
        amount: 'Compact<u128>',
      },
      transfer_all: {
        dest: 'MultiAddress',
        currencyId: 'PalletForeignAssetsAssetIds',
        keepAlive: 'bool',
      },
      transfer_keep_alive: {
        dest: 'MultiAddress',
        currencyId: 'PalletForeignAssetsAssetIds',
        amount: 'Compact<u128>',
      },
      force_transfer: {
        source: 'MultiAddress',
        dest: 'MultiAddress',
        currencyId: 'PalletForeignAssetsAssetIds',
        amount: 'Compact<u128>',
      },
      set_balance: {
        who: 'MultiAddress',
        currencyId: 'PalletForeignAssetsAssetIds',
        newFree: 'Compact<u128>',
        newReserved: 'Compact<u128>'
      }
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup201: cumulus_pallet_xcmp_queue::pallet::Call<T>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup203: cumulus_pallet_xcmp_queue::pallet::Call<T>
=======
<<<<<<< HEAD
   * Lookup206: cumulus_pallet_xcmp_queue::pallet::Call<T>
=======
   * Lookup207: cumulus_pallet_xcmp_queue::pallet::Call<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup206: cumulus_pallet_xcmp_queue::pallet::Call<T>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  CumulusPalletXcmpQueueCall: {
    _enum: {
      service_overweight: {
        index: 'u64',
        weightLimit: 'u64',
      },
      suspend_xcm_execution: 'Null',
      resume_xcm_execution: 'Null',
      update_suspend_threshold: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      update_drop_threshold: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      update_resume_threshold: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      update_threshold_weight: {
        _alias: {
          new_: 'new',
        },
        new_: 'u64',
      },
      update_weight_restrict_decay: {
        _alias: {
          new_: 'new',
        },
        new_: 'u64',
      },
      update_xcmp_max_individual_weight: {
        _alias: {
          new_: 'new',
        },
        new_: 'u64'
      }
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup202: pallet_xcm::pallet::Call<T>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup204: pallet_xcm::pallet::Call<T>
=======
<<<<<<< HEAD
   * Lookup207: pallet_xcm::pallet::Call<T>
=======
   * Lookup208: pallet_xcm::pallet::Call<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup207: pallet_xcm::pallet::Call<T>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PalletXcmCall: {
    _enum: {
      send: {
        dest: 'XcmVersionedMultiLocation',
        message: 'XcmVersionedXcm',
      },
      teleport_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
      },
      reserve_transfer_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
      },
      execute: {
        message: 'XcmVersionedXcm',
        maxWeight: 'u64',
      },
      force_xcm_version: {
        location: 'XcmV1MultiLocation',
        xcmVersion: 'u32',
      },
      force_default_xcm_version: {
        maybeXcmVersion: 'Option<u32>',
      },
      force_subscribe_version_notify: {
        location: 'XcmVersionedMultiLocation',
      },
      force_unsubscribe_version_notify: {
        location: 'XcmVersionedMultiLocation',
      },
      limited_reserve_transfer_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
        weightLimit: 'XcmV2WeightLimit',
      },
      limited_teleport_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
        weightLimit: 'XcmV2WeightLimit'
      }
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup203: xcm::VersionedXcm<RuntimeCall>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup205: xcm::VersionedXcm<RuntimeCall>
=======
<<<<<<< HEAD
   * Lookup208: xcm::VersionedXcm<RuntimeCall>
=======
   * Lookup209: xcm::VersionedXcm<RuntimeCall>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup208: xcm::VersionedXcm<RuntimeCall>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  XcmVersionedXcm: {
    _enum: {
      V0: 'XcmV0Xcm',
      V1: 'XcmV1Xcm',
      V2: 'XcmV2Xcm'
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup204: xcm::v0::Xcm<RuntimeCall>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup206: xcm::v0::Xcm<RuntimeCall>
=======
<<<<<<< HEAD
   * Lookup209: xcm::v0::Xcm<RuntimeCall>
=======
   * Lookup210: xcm::v0::Xcm<RuntimeCall>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup209: xcm::v0::Xcm<RuntimeCall>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  XcmV0Xcm: {
    _enum: {
      WithdrawAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        effects: 'Vec<XcmV0Order>',
      },
      ReserveAssetDeposit: {
        assets: 'Vec<XcmV0MultiAsset>',
        effects: 'Vec<XcmV0Order>',
      },
      TeleportAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        effects: 'Vec<XcmV0Order>',
      },
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'XcmV0Response',
      },
      TransferAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        dest: 'XcmV0MultiLocation',
      },
      TransferReserveAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        dest: 'XcmV0MultiLocation',
        effects: 'Vec<XcmV0Order>',
      },
      Transact: {
        originType: 'XcmV0OriginKind',
        requireWeightAtMost: 'u64',
        call: 'XcmDoubleEncoded',
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>',
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>',
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>',
      },
      RelayedFrom: {
        who: 'XcmV0MultiLocation',
        message: 'XcmV0Xcm'
      }
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup206: xcm::v0::order::Order<RuntimeCall>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup208: xcm::v0::order::Order<RuntimeCall>
=======
<<<<<<< HEAD
   * Lookup211: xcm::v0::order::Order<RuntimeCall>
=======
   * Lookup212: xcm::v0::order::Order<RuntimeCall>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup211: xcm::v0::order::Order<RuntimeCall>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  XcmV0Order: {
    _enum: {
      Null: 'Null',
      DepositAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        dest: 'XcmV0MultiLocation',
      },
      DepositReserveAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        dest: 'XcmV0MultiLocation',
        effects: 'Vec<XcmV0Order>',
      },
      ExchangeAsset: {
        give: 'Vec<XcmV0MultiAsset>',
        receive: 'Vec<XcmV0MultiAsset>',
      },
      InitiateReserveWithdraw: {
        assets: 'Vec<XcmV0MultiAsset>',
        reserve: 'XcmV0MultiLocation',
        effects: 'Vec<XcmV0Order>',
      },
      InitiateTeleport: {
        assets: 'Vec<XcmV0MultiAsset>',
        dest: 'XcmV0MultiLocation',
        effects: 'Vec<XcmV0Order>',
      },
      QueryHolding: {
        queryId: 'Compact<u64>',
        dest: 'XcmV0MultiLocation',
        assets: 'Vec<XcmV0MultiAsset>',
      },
      BuyExecution: {
        fees: 'XcmV0MultiAsset',
        weight: 'u64',
        debt: 'u64',
        haltOnError: 'bool',
        xcm: 'Vec<XcmV0Xcm>'
      }
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup208: xcm::v0::Response
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup210: xcm::v0::Response
=======
<<<<<<< HEAD
   * Lookup213: xcm::v0::Response
=======
   * Lookup214: xcm::v0::Response
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup213: xcm::v0::Response
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  XcmV0Response: {
    _enum: {
      Assets: 'Vec<XcmV0MultiAsset>'
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup209: xcm::v1::Xcm<RuntimeCall>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup211: xcm::v1::Xcm<RuntimeCall>
=======
<<<<<<< HEAD
   * Lookup214: xcm::v1::Xcm<RuntimeCall>
=======
   * Lookup215: xcm::v1::Xcm<RuntimeCall>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup214: xcm::v1::Xcm<RuntimeCall>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  XcmV1Xcm: {
    _enum: {
      WithdrawAsset: {
        assets: 'XcmV1MultiassetMultiAssets',
        effects: 'Vec<XcmV1Order>',
      },
      ReserveAssetDeposited: {
        assets: 'XcmV1MultiassetMultiAssets',
        effects: 'Vec<XcmV1Order>',
      },
      ReceiveTeleportedAsset: {
        assets: 'XcmV1MultiassetMultiAssets',
        effects: 'Vec<XcmV1Order>',
      },
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'XcmV1Response',
      },
      TransferAsset: {
        assets: 'XcmV1MultiassetMultiAssets',
        beneficiary: 'XcmV1MultiLocation',
      },
      TransferReserveAsset: {
        assets: 'XcmV1MultiassetMultiAssets',
        dest: 'XcmV1MultiLocation',
        effects: 'Vec<XcmV1Order>',
      },
      Transact: {
        originType: 'XcmV0OriginKind',
        requireWeightAtMost: 'u64',
        call: 'XcmDoubleEncoded',
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>',
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>',
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>',
      },
      RelayedFrom: {
        who: 'XcmV1MultilocationJunctions',
        message: 'XcmV1Xcm',
      },
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'Compact<u64>',
      },
      UnsubscribeVersion: 'Null'
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup211: xcm::v1::order::Order<RuntimeCall>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup213: xcm::v1::order::Order<RuntimeCall>
=======
<<<<<<< HEAD
   * Lookup216: xcm::v1::order::Order<RuntimeCall>
=======
   * Lookup217: xcm::v1::order::Order<RuntimeCall>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup216: xcm::v1::order::Order<RuntimeCall>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  XcmV1Order: {
    _enum: {
      Noop: 'Null',
      DepositAsset: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        maxAssets: 'u32',
        beneficiary: 'XcmV1MultiLocation',
      },
      DepositReserveAsset: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        maxAssets: 'u32',
        dest: 'XcmV1MultiLocation',
        effects: 'Vec<XcmV1Order>',
      },
      ExchangeAsset: {
        give: 'XcmV1MultiassetMultiAssetFilter',
        receive: 'XcmV1MultiassetMultiAssets',
      },
      InitiateReserveWithdraw: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        reserve: 'XcmV1MultiLocation',
        effects: 'Vec<XcmV1Order>',
      },
      InitiateTeleport: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        dest: 'XcmV1MultiLocation',
        effects: 'Vec<XcmV1Order>',
      },
      QueryHolding: {
        queryId: 'Compact<u64>',
        dest: 'XcmV1MultiLocation',
        assets: 'XcmV1MultiassetMultiAssetFilter',
      },
      BuyExecution: {
        fees: 'XcmV1MultiAsset',
        weight: 'u64',
        debt: 'u64',
        haltOnError: 'bool',
        instructions: 'Vec<XcmV1Xcm>'
      }
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup213: xcm::v1::Response
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup215: xcm::v1::Response
=======
<<<<<<< HEAD
   * Lookup218: xcm::v1::Response
=======
   * Lookup219: xcm::v1::Response
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup218: xcm::v1::Response
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  XcmV1Response: {
    _enum: {
      Assets: 'XcmV1MultiassetMultiAssets',
      Version: 'u32'
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup227: cumulus_pallet_xcm::pallet::Call<T>
   **/
  CumulusPalletXcmCall: 'Null',
  /**
   * Lookup228: cumulus_pallet_dmp_queue::pallet::Call<T>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup229: cumulus_pallet_xcm::pallet::Call<T>
   **/
  CumulusPalletXcmCall: 'Null',
  /**
   * Lookup230: cumulus_pallet_dmp_queue::pallet::Call<T>
=======
<<<<<<< HEAD
=======
>>>>>>> fix: regenerate types after rebase
   * Lookup232: cumulus_pallet_xcm::pallet::Call<T>
   **/
  CumulusPalletXcmCall: 'Null',
  /**
   * Lookup233: cumulus_pallet_dmp_queue::pallet::Call<T>
<<<<<<< HEAD
=======
   * Lookup233: cumulus_pallet_xcm::pallet::Call<T>
   **/
  CumulusPalletXcmCall: 'Null',
  /**
   * Lookup234: cumulus_pallet_dmp_queue::pallet::Call<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  CumulusPalletDmpQueueCall: {
    _enum: {
      service_overweight: {
        index: 'u64',
        weightLimit: 'u64'
      }
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup229: pallet_inflation::pallet::Call<T>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup231: pallet_inflation::pallet::Call<T>
=======
<<<<<<< HEAD
   * Lookup234: pallet_inflation::pallet::Call<T>
=======
   * Lookup235: pallet_inflation::pallet::Call<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup234: pallet_inflation::pallet::Call<T>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PalletInflationCall: {
    _enum: {
      start_inflation: {
        inflationStartRelayBlock: 'u32'
      }
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup230: pallet_unique::Call<T>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup232: pallet_unique::Call<T>
=======
<<<<<<< HEAD
   * Lookup235: pallet_unique::Call<T>
=======
   * Lookup236: pallet_unique::Call<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup235: pallet_unique::Call<T>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PalletUniqueCall: {
    _enum: {
      create_collection: {
        collectionName: 'Vec<u16>',
        collectionDescription: 'Vec<u16>',
        tokenPrefix: 'Bytes',
        mode: 'UpDataStructsCollectionMode',
      },
      create_collection_ex: {
        data: 'UpDataStructsCreateCollectionData',
      },
      destroy_collection: {
        collectionId: 'u32',
      },
      add_to_allow_list: {
        collectionId: 'u32',
        address: 'PalletEvmAccountBasicCrossAccountIdRepr',
      },
      remove_from_allow_list: {
        collectionId: 'u32',
        address: 'PalletEvmAccountBasicCrossAccountIdRepr',
      },
      change_collection_owner: {
        collectionId: 'u32',
        newOwner: 'AccountId32',
      },
      add_collection_admin: {
        collectionId: 'u32',
        newAdminId: 'PalletEvmAccountBasicCrossAccountIdRepr',
      },
      remove_collection_admin: {
        collectionId: 'u32',
        accountId: 'PalletEvmAccountBasicCrossAccountIdRepr',
      },
      set_collection_sponsor: {
        collectionId: 'u32',
        newSponsor: 'AccountId32',
      },
      confirm_sponsorship: {
        collectionId: 'u32',
      },
      remove_collection_sponsor: {
        collectionId: 'u32',
      },
      create_item: {
        collectionId: 'u32',
        owner: 'PalletEvmAccountBasicCrossAccountIdRepr',
        data: 'UpDataStructsCreateItemData',
      },
      create_multiple_items: {
        collectionId: 'u32',
        owner: 'PalletEvmAccountBasicCrossAccountIdRepr',
        itemsData: 'Vec<UpDataStructsCreateItemData>',
      },
      set_collection_properties: {
        collectionId: 'u32',
        properties: 'Vec<UpDataStructsProperty>',
      },
      delete_collection_properties: {
        collectionId: 'u32',
        propertyKeys: 'Vec<Bytes>',
      },
      set_token_properties: {
        collectionId: 'u32',
        tokenId: 'u32',
        properties: 'Vec<UpDataStructsProperty>',
      },
      delete_token_properties: {
        collectionId: 'u32',
        tokenId: 'u32',
        propertyKeys: 'Vec<Bytes>',
      },
      set_token_property_permissions: {
        collectionId: 'u32',
        propertyPermissions: 'Vec<UpDataStructsPropertyKeyPermission>',
      },
      create_multiple_items_ex: {
        collectionId: 'u32',
        data: 'UpDataStructsCreateItemExData',
      },
      set_transfers_enabled_flag: {
        collectionId: 'u32',
        value: 'bool',
      },
      burn_item: {
        collectionId: 'u32',
        itemId: 'u32',
        value: 'u128',
      },
      burn_from: {
        collectionId: 'u32',
        from: 'PalletEvmAccountBasicCrossAccountIdRepr',
        itemId: 'u32',
        value: 'u128',
      },
      transfer: {
        recipient: 'PalletEvmAccountBasicCrossAccountIdRepr',
        collectionId: 'u32',
        itemId: 'u32',
        value: 'u128',
      },
      approve: {
        spender: 'PalletEvmAccountBasicCrossAccountIdRepr',
        collectionId: 'u32',
        itemId: 'u32',
        amount: 'u128',
      },
      transfer_from: {
        from: 'PalletEvmAccountBasicCrossAccountIdRepr',
        recipient: 'PalletEvmAccountBasicCrossAccountIdRepr',
        collectionId: 'u32',
        itemId: 'u32',
        value: 'u128',
      },
      set_collection_limits: {
        collectionId: 'u32',
        newLimit: 'UpDataStructsCollectionLimits',
      },
      set_collection_permissions: {
        collectionId: 'u32',
        newPermission: 'UpDataStructsCollectionPermissions',
      },
      repartition: {
        collectionId: 'u32',
        tokenId: 'u32',
        amount: 'u128',
      },
      set_allowance_for_all: {
        collectionId: 'u32',
        operator: 'PalletEvmAccountBasicCrossAccountIdRepr',
        approve: 'bool',
      },
      force_repair_collection: {
        collectionId: 'u32',
      },
      force_repair_item: {
        collectionId: 'u32',
        itemId: 'u32'
      }
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup235: up_data_structs::CollectionMode
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup237: up_data_structs::CollectionMode
=======
<<<<<<< HEAD
   * Lookup240: up_data_structs::CollectionMode
=======
   * Lookup241: up_data_structs::CollectionMode
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup240: up_data_structs::CollectionMode
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  UpDataStructsCollectionMode: {
    _enum: {
      NFT: 'Null',
      Fungible: 'u8',
      ReFungible: 'Null'
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup236: up_data_structs::CreateCollectionData<sp_core::crypto::AccountId32>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup238: up_data_structs::CreateCollectionData<sp_core::crypto::AccountId32>
=======
<<<<<<< HEAD
   * Lookup241: up_data_structs::CreateCollectionData<sp_core::crypto::AccountId32>
=======
   * Lookup242: up_data_structs::CreateCollectionData<sp_core::crypto::AccountId32>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup241: up_data_structs::CreateCollectionData<sp_core::crypto::AccountId32>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  UpDataStructsCreateCollectionData: {
    mode: 'UpDataStructsCollectionMode',
    access: 'Option<UpDataStructsAccessMode>',
    name: 'Vec<u16>',
    description: 'Vec<u16>',
    tokenPrefix: 'Bytes',
    pendingSponsor: 'Option<AccountId32>',
    limits: 'Option<UpDataStructsCollectionLimits>',
    permissions: 'Option<UpDataStructsCollectionPermissions>',
    tokenPropertyPermissions: 'Vec<UpDataStructsPropertyKeyPermission>',
    properties: 'Vec<UpDataStructsProperty>'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup238: up_data_structs::AccessMode
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup240: up_data_structs::AccessMode
=======
<<<<<<< HEAD
   * Lookup243: up_data_structs::AccessMode
=======
   * Lookup244: up_data_structs::AccessMode
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup243: up_data_structs::AccessMode
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  UpDataStructsAccessMode: {
    _enum: ['Normal', 'AllowList']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup240: up_data_structs::CollectionLimits
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup242: up_data_structs::CollectionLimits
=======
<<<<<<< HEAD
   * Lookup245: up_data_structs::CollectionLimits
=======
   * Lookup246: up_data_structs::CollectionLimits
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup245: up_data_structs::CollectionLimits
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  UpDataStructsCollectionLimits: {
    accountTokenOwnershipLimit: 'Option<u32>',
    sponsoredDataSize: 'Option<u32>',
    sponsoredDataRateLimit: 'Option<UpDataStructsSponsoringRateLimit>',
    tokenLimit: 'Option<u32>',
    sponsorTransferTimeout: 'Option<u32>',
    sponsorApproveTimeout: 'Option<u32>',
    ownerCanTransfer: 'Option<bool>',
    ownerCanDestroy: 'Option<bool>',
    transfersEnabled: 'Option<bool>'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup242: up_data_structs::SponsoringRateLimit
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup244: up_data_structs::SponsoringRateLimit
=======
<<<<<<< HEAD
   * Lookup247: up_data_structs::SponsoringRateLimit
=======
   * Lookup248: up_data_structs::SponsoringRateLimit
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup247: up_data_structs::SponsoringRateLimit
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  UpDataStructsSponsoringRateLimit: {
    _enum: {
      SponsoringDisabled: 'Null',
      Blocks: 'u32'
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup245: up_data_structs::CollectionPermissions
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup247: up_data_structs::CollectionPermissions
=======
<<<<<<< HEAD
   * Lookup250: up_data_structs::CollectionPermissions
=======
   * Lookup251: up_data_structs::CollectionPermissions
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup250: up_data_structs::CollectionPermissions
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  UpDataStructsCollectionPermissions: {
    access: 'Option<UpDataStructsAccessMode>',
    mintMode: 'Option<bool>',
    nesting: 'Option<UpDataStructsNestingPermissions>'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup247: up_data_structs::NestingPermissions
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup249: up_data_structs::NestingPermissions
=======
<<<<<<< HEAD
   * Lookup252: up_data_structs::NestingPermissions
=======
   * Lookup253: up_data_structs::NestingPermissions
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup252: up_data_structs::NestingPermissions
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  UpDataStructsNestingPermissions: {
    tokenOwner: 'bool',
    collectionAdmin: 'bool',
    restricted: 'Option<UpDataStructsOwnerRestrictedSet>'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup249: up_data_structs::OwnerRestrictedSet
   **/
  UpDataStructsOwnerRestrictedSet: 'BTreeSet<u32>',
  /**
   * Lookup254: up_data_structs::PropertyKeyPermission
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup251: up_data_structs::OwnerRestrictedSet
   **/
  UpDataStructsOwnerRestrictedSet: 'BTreeSet<u32>',
  /**
   * Lookup256: up_data_structs::PropertyKeyPermission
=======
<<<<<<< HEAD
=======
>>>>>>> fix: regenerate types after rebase
   * Lookup254: up_data_structs::OwnerRestrictedSet
   **/
  UpDataStructsOwnerRestrictedSet: 'BTreeSet<u32>',
  /**
   * Lookup259: up_data_structs::PropertyKeyPermission
<<<<<<< HEAD
=======
   * Lookup255: up_data_structs::OwnerRestrictedSet
   **/
  UpDataStructsOwnerRestrictedSet: 'BTreeSet<u32>',
  /**
   * Lookup260: up_data_structs::PropertyKeyPermission
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  UpDataStructsPropertyKeyPermission: {
    key: 'Bytes',
    permission: 'UpDataStructsPropertyPermission'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup255: up_data_structs::PropertyPermission
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup257: up_data_structs::PropertyPermission
=======
<<<<<<< HEAD
   * Lookup260: up_data_structs::PropertyPermission
=======
   * Lookup261: up_data_structs::PropertyPermission
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup260: up_data_structs::PropertyPermission
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  UpDataStructsPropertyPermission: {
    mutable: 'bool',
    collectionAdmin: 'bool',
    tokenOwner: 'bool'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup258: up_data_structs::Property
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup260: up_data_structs::Property
=======
<<<<<<< HEAD
   * Lookup263: up_data_structs::Property
=======
   * Lookup264: up_data_structs::Property
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup263: up_data_structs::Property
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  UpDataStructsProperty: {
    key: 'Bytes',
    value: 'Bytes'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup261: up_data_structs::CreateItemData
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup263: up_data_structs::CreateItemData
=======
<<<<<<< HEAD
   * Lookup266: up_data_structs::CreateItemData
=======
   * Lookup267: up_data_structs::CreateItemData
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup266: up_data_structs::CreateItemData
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  UpDataStructsCreateItemData: {
    _enum: {
      NFT: 'UpDataStructsCreateNftData',
      Fungible: 'UpDataStructsCreateFungibleData',
      ReFungible: 'UpDataStructsCreateReFungibleData'
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup262: up_data_structs::CreateNftData
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup264: up_data_structs::CreateNftData
=======
<<<<<<< HEAD
   * Lookup267: up_data_structs::CreateNftData
=======
   * Lookup268: up_data_structs::CreateNftData
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup267: up_data_structs::CreateNftData
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  UpDataStructsCreateNftData: {
    properties: 'Vec<UpDataStructsProperty>'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup263: up_data_structs::CreateFungibleData
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup265: up_data_structs::CreateFungibleData
=======
<<<<<<< HEAD
   * Lookup268: up_data_structs::CreateFungibleData
=======
   * Lookup269: up_data_structs::CreateFungibleData
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup268: up_data_structs::CreateFungibleData
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  UpDataStructsCreateFungibleData: {
    value: 'u128'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup264: up_data_structs::CreateReFungibleData
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup266: up_data_structs::CreateReFungibleData
=======
<<<<<<< HEAD
   * Lookup269: up_data_structs::CreateReFungibleData
=======
   * Lookup270: up_data_structs::CreateReFungibleData
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup269: up_data_structs::CreateReFungibleData
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  UpDataStructsCreateReFungibleData: {
    pieces: 'u128',
    properties: 'Vec<UpDataStructsProperty>'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup267: up_data_structs::CreateItemExData<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup269: up_data_structs::CreateItemExData<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
=======
<<<<<<< HEAD
   * Lookup272: up_data_structs::CreateItemExData<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
=======
   * Lookup273: up_data_structs::CreateItemExData<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup272: up_data_structs::CreateItemExData<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  UpDataStructsCreateItemExData: {
    _enum: {
      NFT: 'Vec<UpDataStructsCreateNftExData>',
      Fungible: 'BTreeMap<PalletEvmAccountBasicCrossAccountIdRepr, u128>',
      RefungibleMultipleItems: 'Vec<UpDataStructsCreateRefungibleExSingleOwner>',
      RefungibleMultipleOwners: 'UpDataStructsCreateRefungibleExMultipleOwners'
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup269: up_data_structs::CreateNftExData<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup271: up_data_structs::CreateNftExData<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
=======
<<<<<<< HEAD
   * Lookup274: up_data_structs::CreateNftExData<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
=======
   * Lookup275: up_data_structs::CreateNftExData<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup274: up_data_structs::CreateNftExData<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  UpDataStructsCreateNftExData: {
    properties: 'Vec<UpDataStructsProperty>',
    owner: 'PalletEvmAccountBasicCrossAccountIdRepr'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup276: up_data_structs::CreateRefungibleExSingleOwner<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup278: up_data_structs::CreateRefungibleExSingleOwner<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
=======
<<<<<<< HEAD
   * Lookup281: up_data_structs::CreateRefungibleExSingleOwner<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
=======
   * Lookup282: up_data_structs::CreateRefungibleExSingleOwner<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup281: up_data_structs::CreateRefungibleExSingleOwner<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  UpDataStructsCreateRefungibleExSingleOwner: {
    user: 'PalletEvmAccountBasicCrossAccountIdRepr',
    pieces: 'u128',
    properties: 'Vec<UpDataStructsProperty>'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup278: up_data_structs::CreateRefungibleExMultipleOwners<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup280: up_data_structs::CreateRefungibleExMultipleOwners<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
=======
<<<<<<< HEAD
   * Lookup283: up_data_structs::CreateRefungibleExMultipleOwners<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
=======
   * Lookup284: up_data_structs::CreateRefungibleExMultipleOwners<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup283: up_data_structs::CreateRefungibleExMultipleOwners<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  UpDataStructsCreateRefungibleExMultipleOwners: {
    users: 'BTreeMap<PalletEvmAccountBasicCrossAccountIdRepr, u128>',
    properties: 'Vec<UpDataStructsProperty>'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup279: pallet_configuration::pallet::Call<T>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup281: pallet_configuration::pallet::Call<T>
=======
<<<<<<< HEAD
   * Lookup284: pallet_unique_scheduler_v2::pallet::Call<T>
=======
   * Lookup285: pallet_unique_scheduler_v2::pallet::Call<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup284: pallet_unique_scheduler_v2::pallet::Call<T>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PalletConfigurationCall: {
    _enum: {
      set_weight_to_fee_coefficient_override: {
        coeff: 'Option<u64>',
      },
      set_min_gas_price_override: {
        coeff: 'Option<u64>',
      },
      set_xcm_allowed_locations: {
        locations: 'Option<Vec<XcmV1MultiLocation>>',
      },
      set_app_promotion_configuration_override: {
        configuration: 'PalletConfigurationAppPromotionConfiguration'
      }
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup284: pallet_configuration::AppPromotionConfiguration<BlockNumber>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup286: pallet_configuration::AppPromotionConfiguration<BlockNumber>
=======
<<<<<<< HEAD
   * Lookup287: pallet_configuration::pallet::Call<T>
=======
   * Lookup288: pallet_configuration::pallet::Call<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup287: pallet_configuration::pallet::Call<T>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PalletConfigurationAppPromotionConfiguration: {
    recalculationInterval: 'Option<u32>',
    pendingInterval: 'Option<u32>',
    intervalIncome: 'Option<Perbill>',
    maxStakersPerCalculation: 'Option<u8>'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup288: pallet_template_transaction_payment::Call<T>
=======
<<<<<<< HEAD
=======
>>>>>>> fix: regenerate types after rebase
   * Lookup289: pallet_template_transaction_payment::Call<T>
>>>>>>> chore:  regenerate types
   **/
  PalletTemplateTransactionPaymentCall: 'Null',
  /**
   * Lookup289: pallet_structure::pallet::Call<T>
   **/
  PalletStructureCall: 'Null',
  /**
<<<<<<< HEAD
   * Lookup290: pallet_rmrk_core::pallet::Call<T>
=======
   * Lookup291: pallet_rmrk_core::pallet::Call<T>
<<<<<<< HEAD
=======
   * Lookup290: pallet_template_transaction_payment::Call<T>
   **/
  PalletTemplateTransactionPaymentCall: 'Null',
  /**
   * Lookup291: pallet_structure::pallet::Call<T>
   **/
  PalletStructureCall: 'Null',
  /**
   * Lookup292: pallet_rmrk_core::pallet::Call<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
   **/
  PalletRmrkCoreCall: {
    _enum: {
      create_collection: {
        metadata: 'Bytes',
        max: 'Option<u32>',
        symbol: 'Bytes',
      },
      destroy_collection: {
        collectionId: 'u32',
      },
      change_collection_issuer: {
        collectionId: 'u32',
        newIssuer: 'MultiAddress',
      },
      lock_collection: {
        collectionId: 'u32',
      },
      mint_nft: {
        owner: 'Option<AccountId32>',
        collectionId: 'u32',
        recipient: 'Option<AccountId32>',
        royaltyAmount: 'Option<Permill>',
        metadata: 'Bytes',
        transferable: 'bool',
        resources: 'Option<Vec<RmrkTraitsResourceResourceTypes>>',
      },
      burn_nft: {
        collectionId: 'u32',
        nftId: 'u32',
        maxBurns: 'u32',
      },
      send: {
        rmrkCollectionId: 'u32',
        rmrkNftId: 'u32',
        newOwner: 'RmrkTraitsNftAccountIdOrCollectionNftTuple',
      },
      accept_nft: {
        rmrkCollectionId: 'u32',
        rmrkNftId: 'u32',
        newOwner: 'RmrkTraitsNftAccountIdOrCollectionNftTuple',
      },
      reject_nft: {
        rmrkCollectionId: 'u32',
        rmrkNftId: 'u32',
      },
      accept_resource: {
        rmrkCollectionId: 'u32',
        rmrkNftId: 'u32',
        resourceId: 'u32',
      },
      accept_resource_removal: {
        rmrkCollectionId: 'u32',
        rmrkNftId: 'u32',
        resourceId: 'u32',
      },
      set_property: {
        rmrkCollectionId: 'Compact<u32>',
        maybeNftId: 'Option<u32>',
        key: 'Bytes',
        value: 'Bytes',
      },
      set_priority: {
        rmrkCollectionId: 'u32',
        rmrkNftId: 'u32',
        priorities: 'Vec<u32>',
      },
      add_basic_resource: {
        rmrkCollectionId: 'u32',
        nftId: 'u32',
        resource: 'RmrkTraitsResourceBasicResource',
      },
      add_composable_resource: {
        rmrkCollectionId: 'u32',
        nftId: 'u32',
        resource: 'RmrkTraitsResourceComposableResource',
      },
      add_slot_resource: {
        rmrkCollectionId: 'u32',
        nftId: 'u32',
        resource: 'RmrkTraitsResourceSlotResource',
      },
      remove_resource: {
        rmrkCollectionId: 'u32',
        nftId: 'u32',
        resourceId: 'u32'
      }
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup296: rmrk_traits::resource::ResourceTypes<sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
=======
<<<<<<< HEAD
   * Lookup297: rmrk_traits::resource::ResourceTypes<sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
=======
   * Lookup298: rmrk_traits::resource::ResourceTypes<sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup297: rmrk_traits::resource::ResourceTypes<sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
>>>>>>> fix: regenerate types after rebase
   **/
  RmrkTraitsResourceResourceTypes: {
    _enum: {
      Basic: 'RmrkTraitsResourceBasicResource',
      Composable: 'RmrkTraitsResourceComposableResource',
      Slot: 'RmrkTraitsResourceSlotResource'
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup298: rmrk_traits::resource::BasicResource<sp_core::bounded::bounded_vec::BoundedVec<T, S>>
=======
<<<<<<< HEAD
   * Lookup299: rmrk_traits::resource::BasicResource<sp_core::bounded::bounded_vec::BoundedVec<T, S>>
=======
   * Lookup300: rmrk_traits::resource::BasicResource<sp_core::bounded::bounded_vec::BoundedVec<T, S>>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup299: rmrk_traits::resource::BasicResource<sp_core::bounded::bounded_vec::BoundedVec<T, S>>
>>>>>>> fix: regenerate types after rebase
   **/
  RmrkTraitsResourceBasicResource: {
    src: 'Option<Bytes>',
    metadata: 'Option<Bytes>',
    license: 'Option<Bytes>',
    thumb: 'Option<Bytes>'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup300: rmrk_traits::resource::ComposableResource<sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
=======
<<<<<<< HEAD
   * Lookup301: rmrk_traits::resource::ComposableResource<sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
=======
   * Lookup302: rmrk_traits::resource::ComposableResource<sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup301: rmrk_traits::resource::ComposableResource<sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
>>>>>>> fix: regenerate types after rebase
   **/
  RmrkTraitsResourceComposableResource: {
    parts: 'Vec<u32>',
    base: 'u32',
    src: 'Option<Bytes>',
    metadata: 'Option<Bytes>',
    license: 'Option<Bytes>',
    thumb: 'Option<Bytes>'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup301: rmrk_traits::resource::SlotResource<sp_core::bounded::bounded_vec::BoundedVec<T, S>>
=======
<<<<<<< HEAD
   * Lookup302: rmrk_traits::resource::SlotResource<sp_core::bounded::bounded_vec::BoundedVec<T, S>>
=======
   * Lookup303: rmrk_traits::resource::SlotResource<sp_core::bounded::bounded_vec::BoundedVec<T, S>>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup302: rmrk_traits::resource::SlotResource<sp_core::bounded::bounded_vec::BoundedVec<T, S>>
>>>>>>> fix: regenerate types after rebase
   **/
  RmrkTraitsResourceSlotResource: {
    base: 'u32',
    src: 'Option<Bytes>',
    metadata: 'Option<Bytes>',
    slot: 'u32',
    license: 'Option<Bytes>',
    thumb: 'Option<Bytes>'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup304: pallet_rmrk_equip::pallet::Call<T>
=======
<<<<<<< HEAD
   * Lookup305: pallet_rmrk_equip::pallet::Call<T>
=======
   * Lookup306: pallet_rmrk_equip::pallet::Call<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup305: pallet_rmrk_equip::pallet::Call<T>
>>>>>>> fix: regenerate types after rebase
   **/
  PalletRmrkEquipCall: {
    _enum: {
      create_base: {
        baseType: 'Bytes',
        symbol: 'Bytes',
        parts: 'Vec<RmrkTraitsPartPartType>',
      },
      theme_add: {
        baseId: 'u32',
        theme: 'RmrkTraitsTheme',
      },
      equippable: {
        baseId: 'u32',
        slotId: 'u32',
        equippables: 'RmrkTraitsPartEquippableList'
      }
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup307: rmrk_traits::part::PartType<sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
=======
<<<<<<< HEAD
   * Lookup308: rmrk_traits::part::PartType<sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
=======
   * Lookup309: rmrk_traits::part::PartType<sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup308: rmrk_traits::part::PartType<sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
>>>>>>> fix: regenerate types after rebase
   **/
  RmrkTraitsPartPartType: {
    _enum: {
      FixedPart: 'RmrkTraitsPartFixedPart',
      SlotPart: 'RmrkTraitsPartSlotPart'
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup309: rmrk_traits::part::FixedPart<sp_core::bounded::bounded_vec::BoundedVec<T, S>>
=======
<<<<<<< HEAD
   * Lookup310: rmrk_traits::part::FixedPart<sp_core::bounded::bounded_vec::BoundedVec<T, S>>
=======
   * Lookup311: rmrk_traits::part::FixedPart<sp_core::bounded::bounded_vec::BoundedVec<T, S>>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup310: rmrk_traits::part::FixedPart<sp_core::bounded::bounded_vec::BoundedVec<T, S>>
>>>>>>> fix: regenerate types after rebase
   **/
  RmrkTraitsPartFixedPart: {
    id: 'u32',
    z: 'u32',
    src: 'Bytes'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup310: rmrk_traits::part::SlotPart<sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
=======
<<<<<<< HEAD
   * Lookup311: rmrk_traits::part::SlotPart<sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
=======
   * Lookup312: rmrk_traits::part::SlotPart<sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup311: rmrk_traits::part::SlotPart<sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
>>>>>>> fix: regenerate types after rebase
   **/
  RmrkTraitsPartSlotPart: {
    id: 'u32',
    equippable: 'RmrkTraitsPartEquippableList',
    src: 'Bytes',
    z: 'u32'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup311: rmrk_traits::part::EquippableList<sp_core::bounded::bounded_vec::BoundedVec<T, S>>
=======
<<<<<<< HEAD
   * Lookup312: rmrk_traits::part::EquippableList<sp_core::bounded::bounded_vec::BoundedVec<T, S>>
=======
   * Lookup313: rmrk_traits::part::EquippableList<sp_core::bounded::bounded_vec::BoundedVec<T, S>>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup312: rmrk_traits::part::EquippableList<sp_core::bounded::bounded_vec::BoundedVec<T, S>>
>>>>>>> fix: regenerate types after rebase
   **/
  RmrkTraitsPartEquippableList: {
    _enum: {
      All: 'Null',
      Empty: 'Null',
      Custom: 'Vec<u32>'
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup313: rmrk_traits::theme::Theme<sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::bounded::bounded_vec::BoundedVec<rmrk_traits::theme::ThemeProperty<sp_core::bounded::bounded_vec::BoundedVec<T, S>>, S>>
=======
<<<<<<< HEAD
   * Lookup314: rmrk_traits::theme::Theme<sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::bounded::bounded_vec::BoundedVec<rmrk_traits::theme::ThemeProperty<sp_core::bounded::bounded_vec::BoundedVec<T, S>>, S>>
=======
   * Lookup315: rmrk_traits::theme::Theme<sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::bounded::bounded_vec::BoundedVec<rmrk_traits::theme::ThemeProperty<sp_core::bounded::bounded_vec::BoundedVec<T, S>>, S>>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup314: rmrk_traits::theme::Theme<sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::bounded::bounded_vec::BoundedVec<rmrk_traits::theme::ThemeProperty<sp_core::bounded::bounded_vec::BoundedVec<T, S>>, S>>
>>>>>>> fix: regenerate types after rebase
   **/
  RmrkTraitsTheme: {
    name: 'Bytes',
    properties: 'Vec<RmrkTraitsThemeThemeProperty>',
    inherit: 'bool'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup315: rmrk_traits::theme::ThemeProperty<sp_core::bounded::bounded_vec::BoundedVec<T, S>>
=======
<<<<<<< HEAD
   * Lookup316: rmrk_traits::theme::ThemeProperty<sp_core::bounded::bounded_vec::BoundedVec<T, S>>
=======
   * Lookup317: rmrk_traits::theme::ThemeProperty<sp_core::bounded::bounded_vec::BoundedVec<T, S>>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup316: rmrk_traits::theme::ThemeProperty<sp_core::bounded::bounded_vec::BoundedVec<T, S>>
>>>>>>> fix: regenerate types after rebase
   **/
  RmrkTraitsThemeThemeProperty: {
    key: 'Bytes',
    value: 'Bytes'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup317: pallet_app_promotion::pallet::Call<T>
=======
<<<<<<< HEAD
   * Lookup318: pallet_app_promotion::pallet::Call<T>
=======
   * Lookup319: pallet_app_promotion::pallet::Call<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup318: pallet_app_promotion::pallet::Call<T>
>>>>>>> fix: regenerate types after rebase
   **/
  PalletAppPromotionCall: {
    _enum: {
      set_admin_address: {
        admin: 'PalletEvmAccountBasicCrossAccountIdRepr',
      },
      stake: {
        amount: 'u128',
      },
      unstake: 'Null',
      sponsor_collection: {
        collectionId: 'u32',
      },
      stop_sponsoring_collection: {
        collectionId: 'u32',
      },
      sponsor_contract: {
        contractId: 'H160',
      },
      stop_sponsoring_contract: {
        contractId: 'H160',
      },
      payout_stakers: {
        stakersNumber: 'Option<u8>'
      }
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup318: pallet_foreign_assets::module::Call<T>
=======
<<<<<<< HEAD
   * Lookup319: pallet_foreign_assets::module::Call<T>
=======
   * Lookup320: pallet_foreign_assets::module::Call<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup319: pallet_foreign_assets::module::Call<T>
>>>>>>> fix: regenerate types after rebase
   **/
  PalletForeignAssetsModuleCall: {
    _enum: {
      register_foreign_asset: {
        owner: 'AccountId32',
        location: 'XcmVersionedMultiLocation',
        metadata: 'PalletForeignAssetsModuleAssetMetadata',
      },
      update_foreign_asset: {
        foreignAssetId: 'u32',
        location: 'XcmVersionedMultiLocation',
        metadata: 'PalletForeignAssetsModuleAssetMetadata'
      }
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup319: pallet_evm::pallet::Call<T>
=======
<<<<<<< HEAD
   * Lookup320: pallet_evm::pallet::Call<T>
=======
   * Lookup321: pallet_evm::pallet::Call<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup320: pallet_evm::pallet::Call<T>
>>>>>>> fix: regenerate types after rebase
   **/
  PalletEvmCall: {
    _enum: {
      withdraw: {
        address: 'H160',
        value: 'u128',
      },
      call: {
        source: 'H160',
        target: 'H160',
        input: 'Bytes',
        value: 'U256',
        gasLimit: 'u64',
        maxFeePerGas: 'U256',
        maxPriorityFeePerGas: 'Option<U256>',
        nonce: 'Option<U256>',
        accessList: 'Vec<(H160,Vec<H256>)>',
      },
      create: {
        source: 'H160',
        init: 'Bytes',
        value: 'U256',
        gasLimit: 'u64',
        maxFeePerGas: 'U256',
        maxPriorityFeePerGas: 'Option<U256>',
        nonce: 'Option<U256>',
        accessList: 'Vec<(H160,Vec<H256>)>',
      },
      create2: {
        source: 'H160',
        init: 'Bytes',
        salt: 'H256',
        value: 'U256',
        gasLimit: 'u64',
        maxFeePerGas: 'U256',
        maxPriorityFeePerGas: 'Option<U256>',
        nonce: 'Option<U256>',
        accessList: 'Vec<(H160,Vec<H256>)>'
      }
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup325: pallet_ethereum::pallet::Call<T>
=======
<<<<<<< HEAD
   * Lookup326: pallet_ethereum::pallet::Call<T>
=======
   * Lookup325: pallet_ethereum::pallet::Call<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup326: pallet_ethereum::pallet::Call<T>
>>>>>>> fix: regenerate types after rebase
   **/
  PalletEthereumCall: {
    _enum: {
      transact: {
        transaction: 'EthereumTransactionTransactionV2'
      }
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup326: ethereum::transaction::TransactionV2
=======
<<<<<<< HEAD
   * Lookup327: ethereum::transaction::TransactionV2
=======
   * Lookup326: ethereum::transaction::TransactionV2
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup327: ethereum::transaction::TransactionV2
>>>>>>> fix: regenerate types after rebase
   **/
  EthereumTransactionTransactionV2: {
    _enum: {
      Legacy: 'EthereumTransactionLegacyTransaction',
      EIP2930: 'EthereumTransactionEip2930Transaction',
      EIP1559: 'EthereumTransactionEip1559Transaction'
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup327: ethereum::transaction::LegacyTransaction
=======
<<<<<<< HEAD
   * Lookup328: ethereum::transaction::LegacyTransaction
=======
   * Lookup327: ethereum::transaction::LegacyTransaction
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup328: ethereum::transaction::LegacyTransaction
>>>>>>> fix: regenerate types after rebase
   **/
  EthereumTransactionLegacyTransaction: {
    nonce: 'U256',
    gasPrice: 'U256',
    gasLimit: 'U256',
    action: 'EthereumTransactionTransactionAction',
    value: 'U256',
    input: 'Bytes',
    signature: 'EthereumTransactionTransactionSignature'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup328: ethereum::transaction::TransactionAction
=======
<<<<<<< HEAD
   * Lookup329: ethereum::transaction::TransactionAction
=======
   * Lookup328: ethereum::transaction::TransactionAction
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup329: ethereum::transaction::TransactionAction
>>>>>>> fix: regenerate types after rebase
   **/
  EthereumTransactionTransactionAction: {
    _enum: {
      Call: 'H160',
      Create: 'Null'
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup329: ethereum::transaction::TransactionSignature
=======
<<<<<<< HEAD
   * Lookup330: ethereum::transaction::TransactionSignature
=======
   * Lookup329: ethereum::transaction::TransactionSignature
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup330: ethereum::transaction::TransactionSignature
>>>>>>> fix: regenerate types after rebase
   **/
  EthereumTransactionTransactionSignature: {
    v: 'u64',
    r: 'H256',
    s: 'H256'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup331: ethereum::transaction::EIP2930Transaction
=======
<<<<<<< HEAD
   * Lookup332: ethereum::transaction::EIP2930Transaction
=======
   * Lookup331: ethereum::transaction::EIP2930Transaction
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup332: ethereum::transaction::EIP2930Transaction
>>>>>>> fix: regenerate types after rebase
   **/
  EthereumTransactionEip2930Transaction: {
    chainId: 'u64',
    nonce: 'U256',
    gasPrice: 'U256',
    gasLimit: 'U256',
    action: 'EthereumTransactionTransactionAction',
    value: 'U256',
    input: 'Bytes',
    accessList: 'Vec<EthereumTransactionAccessListItem>',
    oddYParity: 'bool',
    r: 'H256',
    s: 'H256'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup333: ethereum::transaction::AccessListItem
=======
<<<<<<< HEAD
   * Lookup334: ethereum::transaction::AccessListItem
=======
   * Lookup333: ethereum::transaction::AccessListItem
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup334: ethereum::transaction::AccessListItem
>>>>>>> fix: regenerate types after rebase
   **/
  EthereumTransactionAccessListItem: {
    address: 'H160',
    storageKeys: 'Vec<H256>'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup334: ethereum::transaction::EIP1559Transaction
=======
<<<<<<< HEAD
   * Lookup335: ethereum::transaction::EIP1559Transaction
=======
   * Lookup334: ethereum::transaction::EIP1559Transaction
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup335: ethereum::transaction::EIP1559Transaction
>>>>>>> fix: regenerate types after rebase
   **/
  EthereumTransactionEip1559Transaction: {
    chainId: 'u64',
    nonce: 'U256',
    maxPriorityFeePerGas: 'U256',
    maxFeePerGas: 'U256',
    gasLimit: 'U256',
    action: 'EthereumTransactionTransactionAction',
    value: 'U256',
    input: 'Bytes',
    accessList: 'Vec<EthereumTransactionAccessListItem>',
    oddYParity: 'bool',
    r: 'H256',
    s: 'H256'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup335: pallet_evm_migration::pallet::Call<T>
=======
<<<<<<< HEAD
   * Lookup336: pallet_evm_migration::pallet::Call<T>
=======
   * Lookup335: pallet_evm_migration::pallet::Call<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup336: pallet_evm_migration::pallet::Call<T>
>>>>>>> fix: regenerate types after rebase
   **/
  PalletEvmMigrationCall: {
    _enum: {
      begin: {
        address: 'H160',
      },
      set_data: {
        address: 'H160',
        data: 'Vec<(H256,H256)>',
      },
      finish: {
        address: 'H160',
        code: 'Bytes',
      },
      insert_eth_logs: {
        logs: 'Vec<EthereumLog>',
      },
      insert_events: {
        events: 'Vec<Bytes>'
      }
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup339: pallet_maintenance::pallet::Call<T>
=======
   * Lookup338: pallet_maintenance::pallet::Call<T>
>>>>>>> chore:  regenerate types
=======
   * Lookup340: pallet_maintenance::pallet::Call<T>
>>>>>>> fix: regenerate types after rebase
   **/
  PalletMaintenanceCall: {
    _enum: ['enable', 'disable']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup340: pallet_test_utils::pallet::Call<T>
=======
   * Lookup339: pallet_test_utils::pallet::Call<T>
>>>>>>> chore:  regenerate types
=======
   * Lookup341: pallet_test_utils::pallet::Call<T>
>>>>>>> fix: regenerate types after rebase
   **/
  PalletTestUtilsCall: {
    _enum: {
      enable: 'Null',
      set_test_value: {
        value: 'u32',
      },
      set_test_value_and_rollback: {
        value: 'u32',
      },
      inc_test_value: 'Null',
      just_take_fee: 'Null',
      batch_all: {
        calls: 'Vec<Call>'
      }
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup342: pallet_sudo::pallet::Error<T>
=======
<<<<<<< HEAD
   * Lookup343: pallet_sudo::pallet::Error<T>
=======
   * Lookup341: pallet_sudo::pallet::Error<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup343: pallet_sudo::pallet::Error<T>
>>>>>>> fix: regenerate types after rebase
   **/
  PalletSudoError: {
    _enum: ['RequireSudo']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup344: orml_vesting::module::Error<T>
=======
<<<<<<< HEAD
   * Lookup345: orml_vesting::module::Error<T>
=======
   * Lookup343: orml_vesting::module::Error<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup345: orml_vesting::module::Error<T>
>>>>>>> fix: regenerate types after rebase
   **/
  OrmlVestingModuleError: {
    _enum: ['ZeroVestingPeriod', 'ZeroVestingPeriodCount', 'InsufficientBalanceToLock', 'TooManyVestingSchedules', 'AmountLow', 'MaxVestingSchedulesExceeded']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup345: orml_xtokens::module::Error<T>
=======
<<<<<<< HEAD
   * Lookup346: orml_xtokens::module::Error<T>
=======
   * Lookup344: orml_xtokens::module::Error<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup346: orml_xtokens::module::Error<T>
>>>>>>> fix: regenerate types after rebase
   **/
  OrmlXtokensModuleError: {
    _enum: ['AssetHasNoReserve', 'NotCrossChainTransfer', 'InvalidDest', 'NotCrossChainTransferableCurrency', 'UnweighableMessage', 'XcmExecutionFailed', 'CannotReanchor', 'InvalidAncestry', 'InvalidAsset', 'DestinationNotInvertible', 'BadVersion', 'DistinctReserveForAssetAndFee', 'ZeroFee', 'ZeroAmount', 'TooManyAssetsBeingSent', 'AssetIndexNonExistent', 'FeeNotEnough', 'NotSupportedMultiLocation', 'MinXcmFeeNotDefined']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup348: orml_tokens::BalanceLock<Balance>
=======
<<<<<<< HEAD
   * Lookup349: orml_tokens::BalanceLock<Balance>
=======
   * Lookup347: orml_tokens::BalanceLock<Balance>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup349: orml_tokens::BalanceLock<Balance>
>>>>>>> fix: regenerate types after rebase
   **/
  OrmlTokensBalanceLock: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup350: orml_tokens::AccountData<Balance>
=======
<<<<<<< HEAD
   * Lookup351: orml_tokens::AccountData<Balance>
=======
   * Lookup349: orml_tokens::AccountData<Balance>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup351: orml_tokens::AccountData<Balance>
>>>>>>> fix: regenerate types after rebase
   **/
  OrmlTokensAccountData: {
    free: 'u128',
    reserved: 'u128',
    frozen: 'u128'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup352: orml_tokens::ReserveData<ReserveIdentifier, Balance>
=======
<<<<<<< HEAD
   * Lookup353: orml_tokens::ReserveData<ReserveIdentifier, Balance>
=======
   * Lookup351: orml_tokens::ReserveData<ReserveIdentifier, Balance>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup353: orml_tokens::ReserveData<ReserveIdentifier, Balance>
>>>>>>> fix: regenerate types after rebase
   **/
  OrmlTokensReserveData: {
    id: 'Null',
    amount: 'u128'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup354: orml_tokens::module::Error<T>
=======
<<<<<<< HEAD
   * Lookup355: orml_tokens::module::Error<T>
=======
   * Lookup353: orml_tokens::module::Error<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup355: orml_tokens::module::Error<T>
>>>>>>> fix: regenerate types after rebase
   **/
  OrmlTokensModuleError: {
    _enum: ['BalanceTooLow', 'AmountIntoBalanceFailed', 'LiquidityRestrictions', 'MaxLocksExceeded', 'KeepAlive', 'ExistentialDeposit', 'DeadAccount', 'TooManyReserves']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup356: cumulus_pallet_xcmp_queue::InboundChannelDetails
=======
<<<<<<< HEAD
   * Lookup357: cumulus_pallet_xcmp_queue::InboundChannelDetails
=======
   * Lookup355: cumulus_pallet_xcmp_queue::InboundChannelDetails
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup357: cumulus_pallet_xcmp_queue::InboundChannelDetails
>>>>>>> fix: regenerate types after rebase
   **/
  CumulusPalletXcmpQueueInboundChannelDetails: {
    sender: 'u32',
    state: 'CumulusPalletXcmpQueueInboundState',
    messageMetadata: 'Vec<(u32,PolkadotParachainPrimitivesXcmpMessageFormat)>'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup357: cumulus_pallet_xcmp_queue::InboundState
=======
<<<<<<< HEAD
   * Lookup358: cumulus_pallet_xcmp_queue::InboundState
=======
   * Lookup356: cumulus_pallet_xcmp_queue::InboundState
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup358: cumulus_pallet_xcmp_queue::InboundState
>>>>>>> fix: regenerate types after rebase
   **/
  CumulusPalletXcmpQueueInboundState: {
    _enum: ['Ok', 'Suspended']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup360: polkadot_parachain::primitives::XcmpMessageFormat
=======
<<<<<<< HEAD
   * Lookup361: polkadot_parachain::primitives::XcmpMessageFormat
=======
   * Lookup359: polkadot_parachain::primitives::XcmpMessageFormat
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup361: polkadot_parachain::primitives::XcmpMessageFormat
>>>>>>> fix: regenerate types after rebase
   **/
  PolkadotParachainPrimitivesXcmpMessageFormat: {
    _enum: ['ConcatenatedVersionedXcm', 'ConcatenatedEncodedBlob', 'Signals']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup363: cumulus_pallet_xcmp_queue::OutboundChannelDetails
=======
<<<<<<< HEAD
   * Lookup364: cumulus_pallet_xcmp_queue::OutboundChannelDetails
=======
   * Lookup362: cumulus_pallet_xcmp_queue::OutboundChannelDetails
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup364: cumulus_pallet_xcmp_queue::OutboundChannelDetails
>>>>>>> fix: regenerate types after rebase
   **/
  CumulusPalletXcmpQueueOutboundChannelDetails: {
    recipient: 'u32',
    state: 'CumulusPalletXcmpQueueOutboundState',
    signalsExist: 'bool',
    firstIndex: 'u16',
    lastIndex: 'u16'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup364: cumulus_pallet_xcmp_queue::OutboundState
=======
<<<<<<< HEAD
   * Lookup365: cumulus_pallet_xcmp_queue::OutboundState
=======
   * Lookup363: cumulus_pallet_xcmp_queue::OutboundState
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup365: cumulus_pallet_xcmp_queue::OutboundState
>>>>>>> fix: regenerate types after rebase
   **/
  CumulusPalletXcmpQueueOutboundState: {
    _enum: ['Ok', 'Suspended']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup366: cumulus_pallet_xcmp_queue::QueueConfigData
=======
<<<<<<< HEAD
   * Lookup367: cumulus_pallet_xcmp_queue::QueueConfigData
=======
   * Lookup365: cumulus_pallet_xcmp_queue::QueueConfigData
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup367: cumulus_pallet_xcmp_queue::QueueConfigData
>>>>>>> fix: regenerate types after rebase
   **/
  CumulusPalletXcmpQueueQueueConfigData: {
    suspendThreshold: 'u32',
    dropThreshold: 'u32',
    resumeThreshold: 'u32',
    thresholdWeight: 'SpWeightsWeightV2Weight',
    weightRestrictDecay: 'SpWeightsWeightV2Weight',
    xcmpMaxIndividualWeight: 'SpWeightsWeightV2Weight'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup368: cumulus_pallet_xcmp_queue::pallet::Error<T>
=======
<<<<<<< HEAD
   * Lookup369: cumulus_pallet_xcmp_queue::pallet::Error<T>
=======
   * Lookup367: cumulus_pallet_xcmp_queue::pallet::Error<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup369: cumulus_pallet_xcmp_queue::pallet::Error<T>
>>>>>>> fix: regenerate types after rebase
   **/
  CumulusPalletXcmpQueueError: {
    _enum: ['FailedToSend', 'BadXcmOrigin', 'BadXcm', 'BadOverweightIndex', 'WeightOverLimit']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup369: pallet_xcm::pallet::Error<T>
=======
<<<<<<< HEAD
   * Lookup370: pallet_xcm::pallet::Error<T>
=======
   * Lookup368: pallet_xcm::pallet::Error<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup370: pallet_xcm::pallet::Error<T>
>>>>>>> fix: regenerate types after rebase
   **/
  PalletXcmError: {
    _enum: ['Unreachable', 'SendFailure', 'Filtered', 'UnweighableMessage', 'DestinationNotInvertible', 'Empty', 'CannotReanchor', 'TooManyAssets', 'InvalidOrigin', 'BadVersion', 'BadLocation', 'NoSubscription', 'AlreadySubscribed']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup370: cumulus_pallet_xcm::pallet::Error<T>
   **/
  CumulusPalletXcmError: 'Null',
  /**
   * Lookup371: cumulus_pallet_dmp_queue::ConfigData
=======
<<<<<<< HEAD
=======
>>>>>>> fix: regenerate types after rebase
   * Lookup371: cumulus_pallet_xcm::pallet::Error<T>
   **/
  CumulusPalletXcmError: 'Null',
  /**
   * Lookup372: cumulus_pallet_dmp_queue::ConfigData
<<<<<<< HEAD
=======
   * Lookup369: cumulus_pallet_xcm::pallet::Error<T>
   **/
  CumulusPalletXcmError: 'Null',
  /**
   * Lookup370: cumulus_pallet_dmp_queue::ConfigData
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
   **/
  CumulusPalletDmpQueueConfigData: {
    maxIndividual: 'SpWeightsWeightV2Weight'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup372: cumulus_pallet_dmp_queue::PageIndexData
=======
<<<<<<< HEAD
   * Lookup373: cumulus_pallet_dmp_queue::PageIndexData
=======
   * Lookup371: cumulus_pallet_dmp_queue::PageIndexData
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup373: cumulus_pallet_dmp_queue::PageIndexData
>>>>>>> fix: regenerate types after rebase
   **/
  CumulusPalletDmpQueuePageIndexData: {
    beginUsed: 'u32',
    endUsed: 'u32',
    overweightCount: 'u64'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup375: cumulus_pallet_dmp_queue::pallet::Error<T>
=======
<<<<<<< HEAD
   * Lookup376: cumulus_pallet_dmp_queue::pallet::Error<T>
=======
   * Lookup374: cumulus_pallet_dmp_queue::pallet::Error<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup376: cumulus_pallet_dmp_queue::pallet::Error<T>
>>>>>>> fix: regenerate types after rebase
   **/
  CumulusPalletDmpQueueError: {
    _enum: ['Unknown', 'OverLimit']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup379: pallet_unique::Error<T>
=======
<<<<<<< HEAD
   * Lookup380: pallet_unique::Error<T>
=======
   * Lookup378: pallet_unique::Error<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
=======
   * Lookup380: pallet_unique::Error<T>
>>>>>>> fix: regenerate types after rebase
   **/
  PalletUniqueError: {
    _enum: ['CollectionDecimalPointLimitExceeded', 'EmptyArgument', 'RepartitionCalledOnNonRefungibleCollection']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup380: pallet_configuration::pallet::Error<T>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup381: pallet_configuration::pallet::Error<T>
=======
<<<<<<< HEAD
=======
>>>>>>> fix: regenerate types after rebase
   * Lookup381: pallet_unique_scheduler_v2::BlockAgenda<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
   **/
  PalletConfigurationError: {
    _enum: ['InconsistentConfiguration']
  },
  /**
<<<<<<< HEAD
   * Lookup381: up_data_structs::Collection<sp_core::crypto::AccountId32>
=======
<<<<<<< HEAD
   * Lookup382: up_data_structs::Collection<sp_core::crypto::AccountId32>
=======
   * Lookup384: pallet_unique_scheduler_v2::Scheduled<Name, pallet_unique_scheduler_v2::ScheduledCall<T>, BlockNumber, opal_runtime::OriginCaller, sp_core::crypto::AccountId32>
   **/
  PalletUniqueSchedulerV2Scheduled: {
    maybeId: 'Option<[u8;32]>',
    priority: 'u8',
    call: 'PalletUniqueSchedulerV2ScheduledCall',
    maybePeriodic: 'Option<(u32,u32)>',
    origin: 'OpalRuntimeOriginCaller'
  },
  /**
   * Lookup385: pallet_unique_scheduler_v2::ScheduledCall<T>
   **/
  PalletUniqueSchedulerV2ScheduledCall: {
    _enum: {
      Inline: 'Bytes',
      PreimageLookup: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        unboundedLen: 'u32'
      }
    }
  },
  /**
   * Lookup387: opal_runtime::OriginCaller
   **/
  OpalRuntimeOriginCaller: {
    _enum: {
      system: 'FrameSupportDispatchRawOrigin',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Void: 'SpCoreVoid',
      __Unused5: 'Null',
      __Unused6: 'Null',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      __Unused10: 'Null',
      __Unused11: 'Null',
      __Unused12: 'Null',
      __Unused13: 'Null',
      __Unused14: 'Null',
      __Unused15: 'Null',
      __Unused16: 'Null',
      __Unused17: 'Null',
      __Unused18: 'Null',
      __Unused19: 'Null',
      __Unused20: 'Null',
      __Unused21: 'Null',
      __Unused22: 'Null',
      __Unused23: 'Null',
      __Unused24: 'Null',
      __Unused25: 'Null',
      __Unused26: 'Null',
      __Unused27: 'Null',
      __Unused28: 'Null',
      __Unused29: 'Null',
      __Unused30: 'Null',
      __Unused31: 'Null',
      __Unused32: 'Null',
      __Unused33: 'Null',
      __Unused34: 'Null',
      __Unused35: 'Null',
      __Unused36: 'Null',
      __Unused37: 'Null',
      __Unused38: 'Null',
      __Unused39: 'Null',
      __Unused40: 'Null',
      __Unused41: 'Null',
      __Unused42: 'Null',
      __Unused43: 'Null',
      __Unused44: 'Null',
      __Unused45: 'Null',
      __Unused46: 'Null',
      __Unused47: 'Null',
      __Unused48: 'Null',
      __Unused49: 'Null',
      __Unused50: 'Null',
      PolkadotXcm: 'PalletXcmOrigin',
      CumulusXcm: 'CumulusPalletXcmOrigin',
      __Unused53: 'Null',
      __Unused54: 'Null',
      __Unused55: 'Null',
      __Unused56: 'Null',
      __Unused57: 'Null',
      __Unused58: 'Null',
      __Unused59: 'Null',
      __Unused60: 'Null',
      __Unused61: 'Null',
      __Unused62: 'Null',
      __Unused63: 'Null',
      __Unused64: 'Null',
      __Unused65: 'Null',
      __Unused66: 'Null',
      __Unused67: 'Null',
      __Unused68: 'Null',
      __Unused69: 'Null',
      __Unused70: 'Null',
      __Unused71: 'Null',
      __Unused72: 'Null',
      __Unused73: 'Null',
      __Unused74: 'Null',
      __Unused75: 'Null',
      __Unused76: 'Null',
      __Unused77: 'Null',
      __Unused78: 'Null',
      __Unused79: 'Null',
      __Unused80: 'Null',
      __Unused81: 'Null',
      __Unused82: 'Null',
      __Unused83: 'Null',
      __Unused84: 'Null',
      __Unused85: 'Null',
      __Unused86: 'Null',
      __Unused87: 'Null',
      __Unused88: 'Null',
      __Unused89: 'Null',
      __Unused90: 'Null',
      __Unused91: 'Null',
      __Unused92: 'Null',
      __Unused93: 'Null',
      __Unused94: 'Null',
      __Unused95: 'Null',
      __Unused96: 'Null',
      __Unused97: 'Null',
      __Unused98: 'Null',
      __Unused99: 'Null',
      __Unused100: 'Null',
      Ethereum: 'PalletEthereumRawOrigin'
    }
  },
  /**
   * Lookup388: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
   **/
  FrameSupportDispatchRawOrigin: {
    _enum: {
      Root: 'Null',
      Signed: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup389: pallet_xcm::pallet::Origin
   **/
  PalletXcmOrigin: {
    _enum: {
      Xcm: 'XcmV1MultiLocation',
      Response: 'XcmV1MultiLocation'
    }
  },
  /**
   * Lookup390: cumulus_pallet_xcm::pallet::Origin
   **/
  CumulusPalletXcmOrigin: {
    _enum: {
      Relay: 'Null',
      SiblingParachain: 'u32'
    }
  },
  /**
   * Lookup391: pallet_ethereum::RawOrigin
   **/
  PalletEthereumRawOrigin: {
    _enum: {
      EthereumTransaction: 'H160'
    }
  },
  /**
   * Lookup392: sp_core::Void
   **/
  SpCoreVoid: 'Null',
  /**
   * Lookup394: pallet_unique_scheduler_v2::pallet::Error<T>
   **/
  PalletUniqueSchedulerV2Error: {
    _enum: ['FailedToSchedule', 'AgendaIsExhausted', 'ScheduledCallCorrupted', 'PreimageNotFound', 'TooBigScheduledCall', 'NotFound', 'TargetBlockNumberInPast', 'Named']
  },
  /**
   * Lookup395: up_data_structs::Collection<sp_core::crypto::AccountId32>
<<<<<<< HEAD
=======
   * Lookup393: up_data_structs::Collection<sp_core::crypto::AccountId32>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  UpDataStructsCollection: {
    owner: 'AccountId32',
    mode: 'UpDataStructsCollectionMode',
    name: 'Vec<u16>',
    description: 'Vec<u16>',
    tokenPrefix: 'Bytes',
    sponsorship: 'UpDataStructsSponsorshipStateAccountId32',
    limits: 'UpDataStructsCollectionLimits',
    permissions: 'UpDataStructsCollectionPermissions',
    flags: '[u8;1]'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup382: up_data_structs::SponsorshipState<sp_core::crypto::AccountId32>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup383: up_data_structs::SponsorshipState<sp_core::crypto::AccountId32>
=======
<<<<<<< HEAD
   * Lookup396: up_data_structs::SponsorshipState<sp_core::crypto::AccountId32>
=======
   * Lookup394: up_data_structs::SponsorshipState<sp_core::crypto::AccountId32>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup396: up_data_structs::SponsorshipState<sp_core::crypto::AccountId32>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  UpDataStructsSponsorshipStateAccountId32: {
    _enum: {
      Disabled: 'Null',
      Unconfirmed: 'AccountId32',
      Confirmed: 'AccountId32'
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup384: up_data_structs::Properties
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup385: up_data_structs::Properties
=======
<<<<<<< HEAD
   * Lookup398: up_data_structs::Properties
=======
   * Lookup396: up_data_structs::Properties
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup398: up_data_structs::Properties
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  UpDataStructsProperties: {
    map: 'UpDataStructsPropertiesMapBoundedVec',
    consumedSpace: 'u32',
    spaceLimit: 'u32'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup385: up_data_structs::PropertiesMap<sp_core::bounded::bounded_vec::BoundedVec<T, S>>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup386: up_data_structs::PropertiesMap<sp_core::bounded::bounded_vec::BoundedVec<T, S>>
=======
<<<<<<< HEAD
=======
>>>>>>> fix: regenerate types after rebase
   * Lookup399: up_data_structs::PropertiesMap<sp_core::bounded::bounded_vec::BoundedVec<T, S>>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
   **/
  UpDataStructsPropertiesMapBoundedVec: 'BTreeMap<Bytes, Bytes>',
  /**
   * Lookup390: up_data_structs::PropertiesMap<up_data_structs::PropertyPermission>
   **/
  UpDataStructsPropertiesMapPropertyPermission: 'BTreeMap<Bytes, UpDataStructsPropertyPermission>',
  /**
<<<<<<< HEAD
   * Lookup397: up_data_structs::CollectionStats
=======
<<<<<<< HEAD
   * Lookup398: up_data_structs::CollectionStats
=======
   * Lookup411: up_data_structs::CollectionStats
<<<<<<< HEAD
=======
   * Lookup397: up_data_structs::PropertiesMap<sp_core::bounded::bounded_vec::BoundedVec<T, S>>
   **/
  UpDataStructsPropertiesMapBoundedVec: 'BTreeMap<Bytes, Bytes>',
  /**
   * Lookup402: up_data_structs::PropertiesMap<up_data_structs::PropertyPermission>
   **/
  UpDataStructsPropertiesMapPropertyPermission: 'BTreeMap<Bytes, UpDataStructsPropertyPermission>',
  /**
   * Lookup409: up_data_structs::CollectionStats
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  UpDataStructsCollectionStats: {
    created: 'u32',
    destroyed: 'u32',
    alive: 'u32'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup398: up_data_structs::TokenChild
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup399: up_data_structs::TokenChild
=======
<<<<<<< HEAD
   * Lookup412: up_data_structs::TokenChild
=======
   * Lookup410: up_data_structs::TokenChild
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup412: up_data_structs::TokenChild
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  UpDataStructsTokenChild: {
    token: 'u32',
    collection: 'u32'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup399: PhantomType::up_data_structs<T>
   **/
  PhantomTypeUpDataStructs: '[(UpDataStructsTokenData,UpDataStructsRpcCollection,RmrkTraitsCollectionCollectionInfo,RmrkTraitsNftNftInfo,RmrkTraitsResourceResourceInfo,RmrkTraitsPropertyPropertyInfo,RmrkTraitsBaseBaseInfo,RmrkTraitsPartPartType,RmrkTraitsTheme,RmrkTraitsNftNftChild,UpPovEstimateRpcPovInfo);0]',
  /**
   * Lookup401: up_data_structs::TokenData<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup400: PhantomType::up_data_structs<T>
   **/
  PhantomTypeUpDataStructs: '[(UpDataStructsTokenData,UpDataStructsRpcCollection,RmrkTraitsCollectionCollectionInfo,RmrkTraitsNftNftInfo,RmrkTraitsResourceResourceInfo,RmrkTraitsPropertyPropertyInfo,RmrkTraitsBaseBaseInfo,RmrkTraitsPartPartType,RmrkTraitsTheme,RmrkTraitsNftNftChild,UpPovEstimateRpcPovInfo);0]',
  /**
   * Lookup402: up_data_structs::TokenData<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
=======
<<<<<<< HEAD
=======
>>>>>>> fix: regenerate types after rebase
   * Lookup413: PhantomType::up_data_structs<T>
   **/
  PhantomTypeUpDataStructs: '[(UpDataStructsTokenData,UpDataStructsRpcCollection,RmrkTraitsCollectionCollectionInfo,RmrkTraitsNftNftInfo,RmrkTraitsResourceResourceInfo,RmrkTraitsPropertyPropertyInfo,RmrkTraitsBaseBaseInfo,RmrkTraitsPartPartType,RmrkTraitsTheme,RmrkTraitsNftNftChild,UpPovEstimateRpcPovInfo);0]',
  /**
   * Lookup415: up_data_structs::TokenData<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
<<<<<<< HEAD
=======
   * Lookup411: PhantomType::up_data_structs<T>
   **/
  PhantomTypeUpDataStructs: '[(UpDataStructsTokenData,UpDataStructsRpcCollection,RmrkTraitsCollectionCollectionInfo,RmrkTraitsNftNftInfo,RmrkTraitsResourceResourceInfo,RmrkTraitsPropertyPropertyInfo,RmrkTraitsBaseBaseInfo,RmrkTraitsPartPartType,RmrkTraitsTheme,RmrkTraitsNftNftChild,UpPovEstimateRpcPovInfo);0]',
  /**
   * Lookup413: up_data_structs::TokenData<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  UpDataStructsTokenData: {
    properties: 'Vec<UpDataStructsProperty>',
    owner: 'Option<PalletEvmAccountBasicCrossAccountIdRepr>',
    pieces: 'u128'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup403: up_data_structs::RpcCollection<sp_core::crypto::AccountId32>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup404: up_data_structs::RpcCollection<sp_core::crypto::AccountId32>
=======
<<<<<<< HEAD
   * Lookup417: up_data_structs::RpcCollection<sp_core::crypto::AccountId32>
=======
   * Lookup415: up_data_structs::RpcCollection<sp_core::crypto::AccountId32>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup417: up_data_structs::RpcCollection<sp_core::crypto::AccountId32>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  UpDataStructsRpcCollection: {
    owner: 'AccountId32',
    mode: 'UpDataStructsCollectionMode',
    name: 'Vec<u16>',
    description: 'Vec<u16>',
    tokenPrefix: 'Bytes',
    sponsorship: 'UpDataStructsSponsorshipStateAccountId32',
    limits: 'UpDataStructsCollectionLimits',
    permissions: 'UpDataStructsCollectionPermissions',
    tokenPropertyPermissions: 'Vec<UpDataStructsPropertyKeyPermission>',
    properties: 'Vec<UpDataStructsProperty>',
    readOnly: 'bool',
    flags: 'UpDataStructsRpcCollectionFlags'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup404: up_data_structs::RpcCollectionFlags
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup405: up_data_structs::RpcCollectionFlags
=======
<<<<<<< HEAD
   * Lookup418: up_data_structs::RpcCollectionFlags
=======
   * Lookup416: up_data_structs::RpcCollectionFlags
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup418: up_data_structs::RpcCollectionFlags
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  UpDataStructsRpcCollectionFlags: {
    foreign: 'bool',
    erc721metadata: 'bool'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup405: rmrk_traits::collection::CollectionInfo<sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::crypto::AccountId32>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup406: rmrk_traits::collection::CollectionInfo<sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::crypto::AccountId32>
=======
<<<<<<< HEAD
   * Lookup419: rmrk_traits::collection::CollectionInfo<sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::crypto::AccountId32>
=======
   * Lookup417: rmrk_traits::collection::CollectionInfo<sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::crypto::AccountId32>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup419: rmrk_traits::collection::CollectionInfo<sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::crypto::AccountId32>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  RmrkTraitsCollectionCollectionInfo: {
    issuer: 'AccountId32',
    metadata: 'Bytes',
    max: 'Option<u32>',
    symbol: 'Bytes',
    nftsCount: 'u32'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup406: rmrk_traits::nft::NftInfo<sp_core::crypto::AccountId32, sp_arithmetic::per_things::Permill, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup407: rmrk_traits::nft::NftInfo<sp_core::crypto::AccountId32, sp_arithmetic::per_things::Permill, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
=======
<<<<<<< HEAD
   * Lookup420: rmrk_traits::nft::NftInfo<sp_core::crypto::AccountId32, sp_arithmetic::per_things::Permill, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
=======
   * Lookup418: rmrk_traits::nft::NftInfo<sp_core::crypto::AccountId32, sp_arithmetic::per_things::Permill, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup420: rmrk_traits::nft::NftInfo<sp_core::crypto::AccountId32, sp_arithmetic::per_things::Permill, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  RmrkTraitsNftNftInfo: {
    owner: 'RmrkTraitsNftAccountIdOrCollectionNftTuple',
    royalty: 'Option<RmrkTraitsNftRoyaltyInfo>',
    metadata: 'Bytes',
    equipped: 'bool',
    pending: 'bool'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup408: rmrk_traits::nft::RoyaltyInfo<sp_core::crypto::AccountId32, sp_arithmetic::per_things::Permill>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup409: rmrk_traits::nft::RoyaltyInfo<sp_core::crypto::AccountId32, sp_arithmetic::per_things::Permill>
=======
<<<<<<< HEAD
   * Lookup422: rmrk_traits::nft::RoyaltyInfo<sp_core::crypto::AccountId32, sp_arithmetic::per_things::Permill>
=======
   * Lookup420: rmrk_traits::nft::RoyaltyInfo<sp_core::crypto::AccountId32, sp_arithmetic::per_things::Permill>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup422: rmrk_traits::nft::RoyaltyInfo<sp_core::crypto::AccountId32, sp_arithmetic::per_things::Permill>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  RmrkTraitsNftRoyaltyInfo: {
    recipient: 'AccountId32',
    amount: 'Permill'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup409: rmrk_traits::resource::ResourceInfo<sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup410: rmrk_traits::resource::ResourceInfo<sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
=======
<<<<<<< HEAD
   * Lookup423: rmrk_traits::resource::ResourceInfo<sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
=======
   * Lookup421: rmrk_traits::resource::ResourceInfo<sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup423: rmrk_traits::resource::ResourceInfo<sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  RmrkTraitsResourceResourceInfo: {
    id: 'u32',
    resource: 'RmrkTraitsResourceResourceTypes',
    pending: 'bool',
    pendingRemoval: 'bool'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup410: rmrk_traits::property::PropertyInfo<sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup411: rmrk_traits::property::PropertyInfo<sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
=======
<<<<<<< HEAD
   * Lookup424: rmrk_traits::property::PropertyInfo<sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
=======
   * Lookup422: rmrk_traits::property::PropertyInfo<sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup424: rmrk_traits::property::PropertyInfo<sp_core::bounded::bounded_vec::BoundedVec<T, S>, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  RmrkTraitsPropertyPropertyInfo: {
    key: 'Bytes',
    value: 'Bytes'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup411: rmrk_traits::base::BaseInfo<sp_core::crypto::AccountId32, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup412: rmrk_traits::base::BaseInfo<sp_core::crypto::AccountId32, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
=======
<<<<<<< HEAD
   * Lookup425: rmrk_traits::base::BaseInfo<sp_core::crypto::AccountId32, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
=======
   * Lookup423: rmrk_traits::base::BaseInfo<sp_core::crypto::AccountId32, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup425: rmrk_traits::base::BaseInfo<sp_core::crypto::AccountId32, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  RmrkTraitsBaseBaseInfo: {
    issuer: 'AccountId32',
    baseType: 'Bytes',
    symbol: 'Bytes'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup412: rmrk_traits::nft::NftChild
=======
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup413: rmrk_traits::nft::NftChild
=======
<<<<<<< HEAD
   * Lookup426: rmrk_traits::nft::NftChild
=======
   * Lookup424: rmrk_traits::nft::NftChild
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup426: rmrk_traits::nft::NftChild
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  RmrkTraitsNftNftChild: {
    collectionId: 'u32',
    nftId: 'u32'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup414: pallet_common::pallet::Error<T>
=======
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup415: pallet_common::pallet::Error<T>
=======
=======
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
   * Lookup428: pallet_common::pallet::Error<T>
=======
   * Lookup422: up_pov_estimate_rpc::PovInfo
=======
   * Lookup425: up_pov_estimate_rpc::PovInfo
>>>>>>> chore:  regenerate types
=======
   * Lookup427: up_pov_estimate_rpc::PovInfo
>>>>>>> fix: regenerate types after rebase
   **/
  UpPovEstimateRpcPovInfo: {
    proofSize: 'u64',
    compactProofSize: 'u64',
    compressedProofSize: 'u64',
    results: 'Vec<Result<Result<Null, SpRuntimeDispatchError>, SpRuntimeTransactionValidityTransactionValidityError>>',
    keyValues: 'Vec<UpPovEstimateRpcTrieKeyValue>'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup424: pallet_common::pallet::Error<T>
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
=======
=======
=======
   * Lookup424: sp_runtime::transaction_validity::TransactionValidityError
=======
   * Lookup428: sp_runtime::transaction_validity::TransactionValidityError
>>>>>>> chore:  regenerate types
=======
   * Lookup430: sp_runtime::transaction_validity::TransactionValidityError
>>>>>>> fix: regenerate types after rebase
   **/
  SpRuntimeTransactionValidityTransactionValidityError: {
    _enum: {
      Invalid: 'SpRuntimeTransactionValidityInvalidTransaction',
      Unknown: 'SpRuntimeTransactionValidityUnknownTransaction'
    }
  },
  /**
   * Lookup431: sp_runtime::transaction_validity::InvalidTransaction
   **/
  SpRuntimeTransactionValidityInvalidTransaction: {
    _enum: {
      Call: 'Null',
      Payment: 'Null',
      Future: 'Null',
      Stale: 'Null',
      BadProof: 'Null',
      AncientBirthBlock: 'Null',
      ExhaustsResources: 'Null',
      Custom: 'u8',
      BadMandatory: 'Null',
      MandatoryDispatch: 'Null',
      BadSigner: 'Null'
    }
  },
  /**
   * Lookup432: sp_runtime::transaction_validity::UnknownTransaction
   **/
  SpRuntimeTransactionValidityUnknownTransaction: {
    _enum: {
      CannotLookup: 'Null',
      NoUnsignedValidator: 'Null',
      Custom: 'u8'
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup428: pallet_common::pallet::Error<T>
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
=======
=======
=======
   * Lookup432: up_pov_estimate_rpc::TrieKeyValue
=======
   * Lookup434: up_pov_estimate_rpc::TrieKeyValue
>>>>>>> fix: regenerate types after rebase
   **/
  UpPovEstimateRpcTrieKeyValue: {
    key: 'Bytes',
    value: 'Bytes'
  },
  /**
<<<<<<< HEAD
   * Lookup434: pallet_common::pallet::Error<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup436: pallet_common::pallet::Error<T>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PalletCommonError: {
    _enum: ['CollectionNotFound', 'MustBeTokenOwner', 'NoPermission', 'CantDestroyNotEmptyCollection', 'PublicMintingNotAllowed', 'AddressNotInAllowlist', 'CollectionNameLimitExceeded', 'CollectionDescriptionLimitExceeded', 'CollectionTokenPrefixLimitExceeded', 'TotalCollectionsLimitExceeded', 'CollectionAdminCountExceeded', 'CollectionLimitBoundsExceeded', 'OwnerPermissionsCantBeReverted', 'TransferNotAllowed', 'AccountTokenLimitExceeded', 'CollectionTokenLimitExceeded', 'MetadataFlagFrozen', 'TokenNotFound', 'TokenValueTooLow', 'ApprovedValueTooLow', 'CantApproveMoreThanOwned', 'AddressIsZero', 'UnsupportedOperation', 'NotSufficientFounds', 'UserIsNotAllowedToNest', 'SourceCollectionIsNotAllowedToNest', 'CollectionFieldSizeExceeded', 'NoSpaceForProperty', 'PropertyLimitReached', 'PropertyKeyIsTooLong', 'InvalidCharacterInPropertyKey', 'EmptyPropertyKey', 'CollectionIsExternal', 'CollectionIsInternal', 'ConfirmSponsorshipFail', 'UserIsNotCollectionAdmin']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup416: pallet_fungible::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup417: pallet_fungible::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
   * Lookup430: pallet_fungible::pallet::Error<T>
=======
   * Lookup426: pallet_fungible::pallet::Error<T>
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
=======
=======
=======
   * Lookup430: pallet_fungible::pallet::Error<T>
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
=======
=======
=======
   * Lookup436: pallet_fungible::pallet::Error<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup438: pallet_fungible::pallet::Error<T>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PalletFungibleError: {
    _enum: ['NotFungibleDataUsedToMintFungibleCollectionToken', 'FungibleItemsHaveNoId', 'FungibleItemsDontHaveData', 'FungibleDisallowsNesting', 'SettingPropertiesNotAllowed', 'SettingAllowanceForAllNotAllowed', 'FungibleTokensAreAlwaysValid']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup420: pallet_refungible::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup417: pallet_refungible::ItemData
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup418: pallet_refungible::ItemData
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
   * Lookup431: pallet_refungible::ItemData
=======
   * Lookup427: pallet_refungible::ItemData
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
=======
=======
=======
   * Lookup431: pallet_refungible::ItemData
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
=======
=======
=======
   * Lookup437: pallet_refungible::ItemData
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
   * Lookup439: pallet_refungible::ItemData
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PalletRefungibleItemData: {
    constData: 'Bytes'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup422: pallet_refungible::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup423: pallet_refungible::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
   * Lookup436: pallet_refungible::pallet::Error<T>
=======
   * Lookup432: pallet_refungible::pallet::Error<T>
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
=======
=======
=======
=======
   * Lookup436: pallet_refungible::pallet::Error<T>
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
=======
=======
=======
=======
   * Lookup442: pallet_refungible::pallet::Error<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
=======
   * Lookup444: pallet_refungible::pallet::Error<T>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PalletRefungibleError: {
    _enum: ['NotRefungibleDataUsedToMintFungibleCollectionToken', 'WrongRefungiblePieces', 'RepartitionWhileNotOwningAllPieces', 'RefungibleDisallowsNesting', 'SettingPropertiesNotAllowed']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup421: pallet_nonfungible::ItemData<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup423: pallet_nonfungible::ItemData<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup424: pallet_nonfungible::ItemData<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
   * Lookup437: pallet_nonfungible::ItemData<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
=======
   * Lookup433: pallet_nonfungible::ItemData<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
=======
=======
=======
=======
   * Lookup437: pallet_nonfungible::ItemData<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
=======
=======
=======
=======
   * Lookup443: pallet_nonfungible::ItemData<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
=======
   * Lookup445: pallet_nonfungible::ItemData<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PalletNonfungibleItemData: {
    owner: 'PalletEvmAccountBasicCrossAccountIdRepr'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup423: up_data_structs::PropertyScope
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup425: up_data_structs::PropertyScope
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup426: up_data_structs::PropertyScope
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
   * Lookup439: up_data_structs::PropertyScope
=======
   * Lookup435: up_data_structs::PropertyScope
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
=======
=======
=======
=======
   * Lookup439: up_data_structs::PropertyScope
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
=======
=======
=======
=======
   * Lookup445: up_data_structs::PropertyScope
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
=======
   * Lookup447: up_data_structs::PropertyScope
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  UpDataStructsPropertyScope: {
    _enum: ['None', 'Rmrk']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup426: pallet_nonfungible::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup427: pallet_nonfungible::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup428: pallet_nonfungible::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
   * Lookup441: pallet_nonfungible::pallet::Error<T>
=======
   * Lookup437: pallet_nonfungible::pallet::Error<T>
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
=======
=======
=======
=======
   * Lookup441: pallet_nonfungible::pallet::Error<T>
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
=======
=======
=======
=======
   * Lookup447: pallet_nonfungible::pallet::Error<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
=======
   * Lookup449: pallet_nonfungible::pallet::Error<T>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PalletNonfungibleError: {
    _enum: ['NotNonfungibleDataUsedToMintFungibleCollectionToken', 'NonfungibleItemsHaveNoAmount', 'CantBurnNftWithChildren']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup427: pallet_structure::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup428: pallet_structure::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup429: pallet_structure::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
   * Lookup442: pallet_structure::pallet::Error<T>
=======
   * Lookup438: pallet_structure::pallet::Error<T>
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
=======
=======
=======
=======
   * Lookup442: pallet_structure::pallet::Error<T>
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
=======
=======
=======
=======
   * Lookup448: pallet_structure::pallet::Error<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
=======
   * Lookup450: pallet_structure::pallet::Error<T>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PalletStructureError: {
    _enum: ['OuroborosDetected', 'DepthLimit', 'BreadthLimit', 'TokenNotFound']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup428: pallet_rmrk_core::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup429: pallet_rmrk_core::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup430: pallet_rmrk_core::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
   * Lookup443: pallet_rmrk_core::pallet::Error<T>
=======
   * Lookup439: pallet_rmrk_core::pallet::Error<T>
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
=======
=======
=======
=======
   * Lookup443: pallet_rmrk_core::pallet::Error<T>
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
=======
=======
=======
=======
   * Lookup449: pallet_rmrk_core::pallet::Error<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
=======
   * Lookup451: pallet_rmrk_core::pallet::Error<T>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PalletRmrkCoreError: {
    _enum: ['CorruptedCollectionType', 'RmrkPropertyKeyIsTooLong', 'RmrkPropertyValueIsTooLong', 'RmrkPropertyIsNotFound', 'UnableToDecodeRmrkData', 'CollectionNotEmpty', 'NoAvailableCollectionId', 'NoAvailableNftId', 'CollectionUnknown', 'NoPermission', 'NonTransferable', 'CollectionFullOrLocked', 'ResourceDoesntExist', 'CannotSendToDescendentOrSelf', 'CannotAcceptNonOwnedNft', 'CannotRejectNonOwnedNft', 'CannotRejectNonPendingNft', 'ResourceNotPending', 'NoAvailableResourceId']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup430: pallet_rmrk_equip::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup431: pallet_rmrk_equip::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup432: pallet_rmrk_equip::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
   * Lookup445: pallet_rmrk_equip::pallet::Error<T>
=======
   * Lookup441: pallet_rmrk_equip::pallet::Error<T>
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
=======
=======
=======
=======
   * Lookup445: pallet_rmrk_equip::pallet::Error<T>
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
=======
=======
=======
=======
   * Lookup451: pallet_rmrk_equip::pallet::Error<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
=======
   * Lookup453: pallet_rmrk_equip::pallet::Error<T>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PalletRmrkEquipError: {
    _enum: ['PermissionError', 'NoAvailableBaseId', 'NoAvailablePartId', 'BaseDoesntExist', 'NeedsDefaultThemeFirst', 'PartDoesntExist', 'NoEquippableOnFixedPart']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup436: pallet_app_promotion::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup437: pallet_app_promotion::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup438: pallet_app_promotion::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
   * Lookup451: pallet_app_promotion::pallet::Error<T>
=======
   * Lookup447: pallet_app_promotion::pallet::Error<T>
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
=======
=======
=======
=======
   * Lookup451: pallet_app_promotion::pallet::Error<T>
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
=======
=======
=======
=======
   * Lookup457: pallet_app_promotion::pallet::Error<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
=======
   * Lookup459: pallet_app_promotion::pallet::Error<T>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PalletAppPromotionError: {
    _enum: ['AdminNotSet', 'NoPermission', 'NotSufficientFunds', 'PendingForBlockOverflow', 'SponsorNotSet', 'IncorrectLockedBalanceOperation']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup437: pallet_foreign_assets::module::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup438: pallet_foreign_assets::module::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup439: pallet_foreign_assets::module::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
   * Lookup452: pallet_foreign_assets::module::Error<T>
=======
   * Lookup448: pallet_foreign_assets::module::Error<T>
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
=======
=======
=======
=======
   * Lookup452: pallet_foreign_assets::module::Error<T>
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
=======
=======
=======
=======
   * Lookup458: pallet_foreign_assets::module::Error<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
=======
   * Lookup460: pallet_foreign_assets::module::Error<T>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PalletForeignAssetsModuleError: {
    _enum: ['BadLocation', 'MultiLocationExisted', 'AssetIdNotExists', 'AssetIdExisted']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup439: pallet_evm::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup440: pallet_evm::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup441: pallet_evm::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
   * Lookup454: pallet_evm::pallet::Error<T>
=======
   * Lookup451: pallet_evm::pallet::Error<T>
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
=======
=======
=======
=======
   * Lookup455: pallet_evm::pallet::Error<T>
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
=======
=======
=======
=======
   * Lookup461: pallet_evm::pallet::Error<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
=======
   * Lookup462: pallet_evm::pallet::Error<T>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PalletEvmError: {
    _enum: ['BalanceLow', 'FeeOverflow', 'PaymentOverflow', 'WithdrawFailed', 'GasPriceTooLow', 'InvalidNonce', 'GasLimitTooLow', 'GasLimitTooHigh', 'Undefined', 'Reentrancy', 'TransactionMustComeFromEOA']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup442: fp_rpc::TransactionStatus
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup443: fp_rpc::TransactionStatus
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup444: fp_rpc::TransactionStatus
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
   * Lookup457: fp_rpc::TransactionStatus
=======
   * Lookup454: fp_rpc::TransactionStatus
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
=======
=======
=======
=======
   * Lookup458: fp_rpc::TransactionStatus
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
=======
=======
=======
=======
   * Lookup464: fp_rpc::TransactionStatus
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
=======
   * Lookup465: fp_rpc::TransactionStatus
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  FpRpcTransactionStatus: {
    transactionHash: 'H256',
    transactionIndex: 'u32',
    from: 'H160',
    to: 'Option<H160>',
    contractAddress: 'Option<H160>',
    logs: 'Vec<EthereumLog>',
    logsBloom: 'EthbloomBloom'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup444: ethbloom::Bloom
   **/
  EthbloomBloom: '[u8;256]',
  /**
   * Lookup446: ethereum::receipt::ReceiptV3
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup445: ethbloom::Bloom
   **/
  EthbloomBloom: '[u8;256]',
  /**
   * Lookup447: ethereum::receipt::ReceiptV3
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup446: ethbloom::Bloom
   **/
  EthbloomBloom: '[u8;256]',
  /**
   * Lookup448: ethereum::receipt::ReceiptV3
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
   * Lookup459: ethbloom::Bloom
   **/
  EthbloomBloom: '[u8;256]',
  /**
   * Lookup461: ethereum::receipt::ReceiptV3
=======
   * Lookup456: ethbloom::Bloom
   **/
  EthbloomBloom: '[u8;256]',
  /**
   * Lookup458: ethereum::receipt::ReceiptV3
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
=======
=======
=======
=======
   * Lookup460: ethbloom::Bloom
   **/
  EthbloomBloom: '[u8;256]',
  /**
   * Lookup462: ethereum::receipt::ReceiptV3
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
=======
=======
=======
=======
   * Lookup466: ethbloom::Bloom
   **/
  EthbloomBloom: '[u8;256]',
  /**
   * Lookup468: ethereum::receipt::ReceiptV3
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
=======
   * Lookup467: ethbloom::Bloom
   **/
  EthbloomBloom: '[u8;256]',
  /**
   * Lookup469: ethereum::receipt::ReceiptV3
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  EthereumReceiptReceiptV3: {
    _enum: {
      Legacy: 'EthereumReceiptEip658ReceiptData',
      EIP2930: 'EthereumReceiptEip658ReceiptData',
      EIP1559: 'EthereumReceiptEip658ReceiptData'
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup447: ethereum::receipt::EIP658ReceiptData
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup448: ethereum::receipt::EIP658ReceiptData
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup449: ethereum::receipt::EIP658ReceiptData
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
   * Lookup462: ethereum::receipt::EIP658ReceiptData
=======
   * Lookup459: ethereum::receipt::EIP658ReceiptData
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
=======
=======
=======
=======
   * Lookup463: ethereum::receipt::EIP658ReceiptData
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
=======
=======
=======
=======
   * Lookup469: ethereum::receipt::EIP658ReceiptData
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
=======
   * Lookup470: ethereum::receipt::EIP658ReceiptData
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  EthereumReceiptEip658ReceiptData: {
    statusCode: 'u8',
    usedGas: 'U256',
    logsBloom: 'EthbloomBloom',
    logs: 'Vec<EthereumLog>'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup448: ethereum::block::Block<ethereum::transaction::TransactionV2>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup449: ethereum::block::Block<ethereum::transaction::TransactionV2>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup450: ethereum::block::Block<ethereum::transaction::TransactionV2>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
   * Lookup463: ethereum::block::Block<ethereum::transaction::TransactionV2>
=======
   * Lookup460: ethereum::block::Block<ethereum::transaction::TransactionV2>
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
=======
=======
=======
=======
   * Lookup464: ethereum::block::Block<ethereum::transaction::TransactionV2>
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
=======
=======
=======
=======
   * Lookup470: ethereum::block::Block<ethereum::transaction::TransactionV2>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
=======
   * Lookup471: ethereum::block::Block<ethereum::transaction::TransactionV2>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  EthereumBlock: {
    header: 'EthereumHeader',
    transactions: 'Vec<EthereumTransactionTransactionV2>',
    ommers: 'Vec<EthereumHeader>'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup449: ethereum::header::Header
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup450: ethereum::header::Header
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup451: ethereum::header::Header
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
   * Lookup464: ethereum::header::Header
=======
   * Lookup461: ethereum::header::Header
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
=======
=======
=======
=======
   * Lookup465: ethereum::header::Header
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
=======
=======
=======
=======
   * Lookup471: ethereum::header::Header
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
=======
   * Lookup472: ethereum::header::Header
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  EthereumHeader: {
    parentHash: 'H256',
    ommersHash: 'H256',
    beneficiary: 'H160',
    stateRoot: 'H256',
    transactionsRoot: 'H256',
    receiptsRoot: 'H256',
    logsBloom: 'EthbloomBloom',
    difficulty: 'U256',
    number: 'U256',
    gasLimit: 'U256',
    gasUsed: 'U256',
    timestamp: 'u64',
    extraData: 'Bytes',
    mixHash: 'H256',
    nonce: 'EthereumTypesHashH64'
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup450: ethereum_types::hash::H64
   **/
  EthereumTypesHashH64: '[u8;8]',
  /**
   * Lookup455: pallet_ethereum::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup451: ethereum_types::hash::H64
   **/
  EthereumTypesHashH64: '[u8;8]',
  /**
   * Lookup456: pallet_ethereum::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup452: ethereum_types::hash::H64
   **/
  EthereumTypesHashH64: '[u8;8]',
  /**
   * Lookup457: pallet_ethereum::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
   * Lookup465: ethereum_types::hash::H64
   **/
  EthereumTypesHashH64: '[u8;8]',
  /**
   * Lookup470: pallet_ethereum::pallet::Error<T>
=======
   * Lookup462: ethereum_types::hash::H64
   **/
  EthereumTypesHashH64: '[u8;8]',
  /**
   * Lookup467: pallet_ethereum::pallet::Error<T>
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
=======
=======
=======
=======
   * Lookup466: ethereum_types::hash::H64
   **/
  EthereumTypesHashH64: '[u8;8]',
  /**
   * Lookup471: pallet_ethereum::pallet::Error<T>
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
=======
=======
=======
=======
   * Lookup472: ethereum_types::hash::H64
   **/
  EthereumTypesHashH64: '[u8;8]',
  /**
   * Lookup477: pallet_ethereum::pallet::Error<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
=======
   * Lookup473: ethereum_types::hash::H64
   **/
  EthereumTypesHashH64: '[u8;8]',
  /**
   * Lookup478: pallet_ethereum::pallet::Error<T>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PalletEthereumError: {
    _enum: ['InvalidSignature', 'PreLogExists']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup456: pallet_evm_coder_substrate::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup457: pallet_evm_coder_substrate::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup458: pallet_evm_coder_substrate::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
   * Lookup471: pallet_evm_coder_substrate::pallet::Error<T>
=======
   * Lookup468: pallet_evm_coder_substrate::pallet::Error<T>
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
=======
=======
=======
=======
   * Lookup472: pallet_evm_coder_substrate::pallet::Error<T>
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
=======
=======
=======
=======
   * Lookup478: pallet_evm_coder_substrate::pallet::Error<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
=======
   * Lookup479: pallet_evm_coder_substrate::pallet::Error<T>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PalletEvmCoderSubstrateError: {
    _enum: ['OutOfGas', 'OutOfFund']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup457: up_data_structs::SponsorshipState<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup458: up_data_structs::SponsorshipState<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup459: up_data_structs::SponsorshipState<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
   * Lookup472: up_data_structs::SponsorshipState<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
=======
   * Lookup469: up_data_structs::SponsorshipState<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
=======
=======
=======
=======
   * Lookup473: up_data_structs::SponsorshipState<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
=======
=======
=======
=======
   * Lookup479: up_data_structs::SponsorshipState<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
=======
   * Lookup480: up_data_structs::SponsorshipState<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  UpDataStructsSponsorshipStateBasicCrossAccountIdRepr: {
    _enum: {
      Disabled: 'Null',
      Unconfirmed: 'PalletEvmAccountBasicCrossAccountIdRepr',
      Confirmed: 'PalletEvmAccountBasicCrossAccountIdRepr'
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup458: pallet_evm_contract_helpers::SponsoringModeT
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup459: pallet_evm_contract_helpers::SponsoringModeT
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup460: pallet_evm_contract_helpers::SponsoringModeT
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
   * Lookup473: pallet_evm_contract_helpers::SponsoringModeT
=======
   * Lookup470: pallet_evm_contract_helpers::SponsoringModeT
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
=======
=======
=======
=======
   * Lookup474: pallet_evm_contract_helpers::SponsoringModeT
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
=======
=======
=======
=======
   * Lookup480: pallet_evm_contract_helpers::SponsoringModeT
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
=======
   * Lookup481: pallet_evm_contract_helpers::SponsoringModeT
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PalletEvmContractHelpersSponsoringModeT: {
    _enum: ['Disabled', 'Allowlisted', 'Generous']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup464: pallet_evm_contract_helpers::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup465: pallet_evm_contract_helpers::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup466: pallet_evm_contract_helpers::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
   * Lookup479: pallet_evm_contract_helpers::pallet::Error<T>
=======
   * Lookup476: pallet_evm_contract_helpers::pallet::Error<T>
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
=======
=======
=======
=======
   * Lookup480: pallet_evm_contract_helpers::pallet::Error<T>
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
=======
=======
=======
=======
   * Lookup486: pallet_evm_contract_helpers::pallet::Error<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
=======
   * Lookup487: pallet_evm_contract_helpers::pallet::Error<T>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PalletEvmContractHelpersError: {
    _enum: ['NoPermission', 'NoPendingSponsor', 'TooManyMethodsHaveSponsoredLimit']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup465: pallet_evm_migration::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup466: pallet_evm_migration::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup467: pallet_evm_migration::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
   * Lookup480: pallet_evm_migration::pallet::Error<T>
=======
   * Lookup477: pallet_evm_migration::pallet::Error<T>
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
=======
=======
=======
=======
   * Lookup481: pallet_evm_migration::pallet::Error<T>
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
=======
=======
=======
=======
   * Lookup487: pallet_evm_migration::pallet::Error<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
=======
   * Lookup488: pallet_evm_migration::pallet::Error<T>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PalletEvmMigrationError: {
    _enum: ['AccountNotEmpty', 'AccountIsNotMigrating', 'BadEvent']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup466: pallet_maintenance::pallet::Error<T>
   **/
  PalletMaintenanceError: 'Null',
  /**
   * Lookup467: pallet_test_utils::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup467: pallet_maintenance::pallet::Error<T>
   **/
  PalletMaintenanceError: 'Null',
  /**
   * Lookup468: pallet_test_utils::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup468: pallet_maintenance::pallet::Error<T>
   **/
  PalletMaintenanceError: 'Null',
  /**
   * Lookup469: pallet_test_utils::pallet::Error<T>
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
   * Lookup481: pallet_maintenance::pallet::Error<T>
   **/
  PalletMaintenanceError: 'Null',
  /**
   * Lookup482: pallet_test_utils::pallet::Error<T>
=======
   * Lookup478: pallet_maintenance::pallet::Error<T>
   **/
  PalletMaintenanceError: 'Null',
  /**
   * Lookup479: pallet_test_utils::pallet::Error<T>
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
=======
=======
=======
=======
   * Lookup482: pallet_maintenance::pallet::Error<T>
   **/
  PalletMaintenanceError: 'Null',
  /**
   * Lookup483: pallet_test_utils::pallet::Error<T>
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
=======
=======
=======
=======
   * Lookup488: pallet_maintenance::pallet::Error<T>
   **/
  PalletMaintenanceError: 'Null',
  /**
   * Lookup489: pallet_test_utils::pallet::Error<T>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
=======
   * Lookup489: pallet_maintenance::pallet::Error<T>
   **/
  PalletMaintenanceError: 'Null',
  /**
   * Lookup490: pallet_test_utils::pallet::Error<T>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PalletTestUtilsError: {
    _enum: ['TestPalletDisabled', 'TriggerRollback']
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup469: sp_runtime::MultiSignature
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup470: sp_runtime::MultiSignature
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup471: sp_runtime::MultiSignature
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
   * Lookup484: sp_runtime::MultiSignature
=======
   * Lookup481: sp_runtime::MultiSignature
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
=======
=======
=======
=======
   * Lookup485: sp_runtime::MultiSignature
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
=======
=======
=======
=======
   * Lookup491: sp_runtime::MultiSignature
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
=======
   * Lookup492: sp_runtime::MultiSignature
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: 'SpCoreEd25519Signature',
      Sr25519: 'SpCoreSr25519Signature',
      Ecdsa: 'SpCoreEcdsaSignature'
    }
  },
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup470: sp_core::ed25519::Signature
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup471: sp_core::ed25519::Signature
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
=======
>>>>>>> fix: regenerate types after rebase
<<<<<<< HEAD
   * Lookup472: sp_core::ed25519::Signature
=======
=======
>>>>>>> chore: regenerate types
=======
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
   * Lookup485: sp_core::ed25519::Signature
>>>>>>> fix: update polkadot types and definitions
>>>>>>> fix: update polkadot types and definitions
>>>>>>> fix: update polkadot types and definitions
   **/
  SpCoreEd25519Signature: '[u8;64]',
  /**
   * Lookup472: sp_core::sr25519::Signature
   **/
  SpCoreSr25519Signature: '[u8;64]',
  /**
   * Lookup473: sp_core::ecdsa::Signature
   **/
  SpCoreEcdsaSignature: '[u8;65]',
  /**
   * Lookup476: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup477: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup478: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup481: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: 'Compact<u32>',
  /**
   * Lookup482: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup483: opal_runtime::runtime_common::maintenance::CheckMaintenance
   **/
  OpalRuntimeRuntimeCommonMaintenanceCheckMaintenance: 'Null',
  /**
   * Lookup484: pallet_template_transaction_payment::ChargeTransactionPayment<opal_runtime::Runtime>
   **/
  PalletTemplateTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
  /**
   * Lookup485: opal_runtime::Runtime
   **/
  OpalRuntimeRuntime: 'Null',
  /**
<<<<<<< HEAD
   * Lookup486: pallet_ethereum::FakeTransactionFinalizer<opal_runtime::Runtime>
=======
<<<<<<< HEAD
   * Lookup487: pallet_ethereum::FakeTransactionFinalizer<opal_runtime::Runtime>
=======
<<<<<<< HEAD
   * Lookup488: pallet_ethereum::FakeTransactionFinalizer<opal_runtime::Runtime>
=======
   * Lookup501: pallet_ethereum::FakeTransactionFinalizer<opal_runtime::Runtime>
=======
   * Lookup482: sp_core::ed25519::Signature
=======
   * Lookup486: sp_core::ed25519::Signature
>>>>>>> chore: regenerate types
=======
   * Lookup492: sp_core::ed25519::Signature
>>>>>>> chore:  regenerate types
=======
   * Lookup493: sp_core::ed25519::Signature
>>>>>>> fix: regenerate types after rebase
   **/
  SpCoreEd25519Signature: '[u8;64]',
  /**
   * Lookup495: sp_core::sr25519::Signature
   **/
  SpCoreSr25519Signature: '[u8;64]',
  /**
   * Lookup496: sp_core::ecdsa::Signature
   **/
  SpCoreEcdsaSignature: '[u8;65]',
  /**
   * Lookup499: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup500: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup501: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup504: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: 'Compact<u32>',
  /**
   * Lookup505: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup506: opal_runtime::runtime_common::maintenance::CheckMaintenance
   **/
  OpalRuntimeRuntimeCommonMaintenanceCheckMaintenance: 'Null',
  /**
   * Lookup507: pallet_template_transaction_payment::ChargeTransactionPayment<opal_runtime::Runtime>
   **/
  PalletTemplateTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
  /**
   * Lookup508: opal_runtime::Runtime
   **/
  OpalRuntimeRuntime: 'Null',
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Lookup498: pallet_ethereum::FakeTransactionFinalizer<opal_runtime::Runtime>
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
<<<<<<< HEAD
>>>>>>> fix: update polkadot types and definitions
=======
=======
=======
=======
   * Lookup502: pallet_ethereum::FakeTransactionFinalizer<opal_runtime::Runtime>
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
<<<<<<< HEAD
>>>>>>> chore: regenerate types
=======
=======
=======
=======
   * Lookup508: pallet_ethereum::FakeTransactionFinalizer<opal_runtime::Runtime>
>>>>>>> chore:  regenerate types
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
<<<<<<< HEAD
>>>>>>> chore:  regenerate types
=======
=======
=======
   * Lookup509: pallet_ethereum::FakeTransactionFinalizer<opal_runtime::Runtime>
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
>>>>>>> fix: regenerate types after rebase
   **/
  PalletEthereumFakeTransactionFinalizer: 'Null'
};
