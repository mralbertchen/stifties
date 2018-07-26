// tslint:disable:no-consecutive-blank-lines ordered-imports align trailing-comma whitespace
// tslint:disable:no-unused-variable
import { BaseContract } from '@0xproject/base-contract';
import { ContractArtifact } from '@0xproject/sol-compiler';
import { BlockParam, BlockParamLiteral, CallData, ContractAbi, DataItem, DecodedLogArgs, MethodAbi, Provider, TxData, TxDataPayable } from 'ethereum-types';
import { BigNumber, classUtils, logUtils, promisify } from '@0xproject/utils';
import { Web3Wrapper } from '@0xproject/web3-wrapper';
import * as ethers from 'ethers';
import * as _ from 'lodash';
// tslint:enable:no-unused-variable

export type ExchangeContractEventArgs =
    | SignatureValidatorApprovalContractEventArgs
    | FillContractEventArgs
    | CancelContractEventArgs
    | CancelUpToContractEventArgs
    | AssetProxySetContractEventArgs;

export enum ExchangeEvents {
    SignatureValidatorApproval = 'SignatureValidatorApproval',
    Fill = 'Fill',
    Cancel = 'Cancel',
    CancelUpTo = 'CancelUpTo',
    AssetProxySet = 'AssetProxySet',
}

export interface SignatureValidatorApprovalContractEventArgs extends DecodedLogArgs {
    signerAddress: string;
    validatorAddress: string;
    approved: boolean;
}

export interface FillContractEventArgs extends DecodedLogArgs {
    makerAddress: string;
    feeRecipientAddress: string;
    takerAddress: string;
    senderAddress: string;
    makerAssetFilledAmount: BigNumber;
    takerAssetFilledAmount: BigNumber;
    makerFeePaid: BigNumber;
    takerFeePaid: BigNumber;
    orderHash: string;
    makerAssetData: string;
    takerAssetData: string;
}

export interface CancelContractEventArgs extends DecodedLogArgs {
    makerAddress: string;
    feeRecipientAddress: string;
    senderAddress: string;
    orderHash: string;
    makerAssetData: string;
    takerAssetData: string;
}

export interface CancelUpToContractEventArgs extends DecodedLogArgs {
    makerAddress: string;
    senderAddress: string;
    orderEpoch: BigNumber;
}

export interface AssetProxySetContractEventArgs extends DecodedLogArgs {
    id: string;
    newAssetProxy: string;
    oldAssetProxy: string;
}


// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class ExchangeContract extends BaseContract {
    public EIP712_DOMAIN_SEPARATOR_SCHEMA_HASH = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as ExchangeContract;
            const functionSignature = 'EIP712_DOMAIN_SEPARATOR_SCHEMA_HASH()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.EIP712_DOMAIN_SEPARATOR_SCHEMA_HASH(
            ) as ethers.CallDescription;
            const encodedData = ethersFunction.data;
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            let resultArray = ethersFunction.parse(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'EIP712_DOMAIN_SEPARATOR_SCHEMA_HASH'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public filled = {
        async callAsync(
            index_0: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as ExchangeContract;
            const functionSignature = 'filled(bytes32)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [index_0
        ] = BaseContract._formatABIDataItemList(inputAbi, [index_0
        ], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.filled(
                index_0
            ) as ethers.CallDescription;
            const encodedData = ethersFunction.data;
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            let resultArray = ethersFunction.parse(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'filled'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public batchFillOrders = {
        async sendTransactionAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmounts: BigNumber[],
            signatures: string[],
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('batchFillOrders(tuple[],uint256[],bytes[])').inputs;
            [orders,
    takerAssetFillAmounts,
    signatures
    ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
    takerAssetFillAmounts,
    signatures
    ], BaseContract._bigNumberToString.bind(self));
            const encodedData = self._lookupEthersInterface('batchFillOrders(tuple[],uint256[],bytes[])').functions.batchFillOrders(
                orders,
                takerAssetFillAmounts,
                signatures
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.batchFillOrders.estimateGasAsync.bind(
                    self,
                    orders,
                    takerAssetFillAmounts,
                    signatures
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmounts: BigNumber[],
            signatures: string[],
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('batchFillOrders(tuple[],uint256[],bytes[])').inputs;
            [orders,
    takerAssetFillAmounts,
    signatures
    ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
    takerAssetFillAmounts,
    signatures
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('batchFillOrders(tuple[],uint256[],bytes[])').functions.batchFillOrders(
                orders,
                takerAssetFillAmounts,
                signatures
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmounts: BigNumber[],
            signatures: string[],
        ): string {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('batchFillOrders(tuple[],uint256[],bytes[])').inputs;
            [orders,
    takerAssetFillAmounts,
    signatures
    ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
    takerAssetFillAmounts,
    signatures
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('batchFillOrders(tuple[],uint256[],bytes[])').functions.batchFillOrders(
                orders,
                takerAssetFillAmounts,
                signatures
            ).data;
            return abiEncodedTransactionData;
        },
        async callAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmounts: BigNumber[],
            signatures: string[],
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<{makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber}
        > {
            const self = this as any as ExchangeContract;
            const functionSignature = 'batchFillOrders(tuple[],uint256[],bytes[])';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [orders,
        takerAssetFillAmounts,
        signatures
        ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
        takerAssetFillAmounts,
        signatures
        ], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.batchFillOrders(
                orders,
                takerAssetFillAmounts,
                signatures
            ) as ethers.CallDescription;
            const encodedData = ethersFunction.data;
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            let resultArray = ethersFunction.parse(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'batchFillOrders'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public cancelled = {
        async callAsync(
            index_0: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as ExchangeContract;
            const functionSignature = 'cancelled(bytes32)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [index_0
        ] = BaseContract._formatABIDataItemList(inputAbi, [index_0
        ], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.cancelled(
                index_0
            ) as ethers.CallDescription;
            const encodedData = ethersFunction.data;
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            let resultArray = ethersFunction.parse(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'cancelled'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public preSign = {
        async sendTransactionAsync(
            hash: string,
            signerAddress: string,
            signature: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('preSign(bytes32,address,bytes)').inputs;
            [hash,
    signerAddress,
    signature
    ] = BaseContract._formatABIDataItemList(inputAbi, [hash,
    signerAddress,
    signature
    ], BaseContract._bigNumberToString.bind(self));
            const encodedData = self._lookupEthersInterface('preSign(bytes32,address,bytes)').functions.preSign(
                hash,
                signerAddress,
                signature
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.preSign.estimateGasAsync.bind(
                    self,
                    hash,
                    signerAddress,
                    signature
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            hash: string,
            signerAddress: string,
            signature: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('preSign(bytes32,address,bytes)').inputs;
            [hash,
    signerAddress,
    signature
    ] = BaseContract._formatABIDataItemList(inputAbi, [hash,
    signerAddress,
    signature
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('preSign(bytes32,address,bytes)').functions.preSign(
                hash,
                signerAddress,
                signature
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            hash: string,
            signerAddress: string,
            signature: string,
        ): string {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('preSign(bytes32,address,bytes)').inputs;
            [hash,
    signerAddress,
    signature
    ] = BaseContract._formatABIDataItemList(inputAbi, [hash,
    signerAddress,
    signature
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('preSign(bytes32,address,bytes)').functions.preSign(
                hash,
                signerAddress,
                signature
            ).data;
            return abiEncodedTransactionData;
        },
    };
    public matchOrders = {
        async sendTransactionAsync(
            leftOrder: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            rightOrder: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            leftSignature: string,
            rightSignature: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('matchOrders({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},{address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},bytes,bytes)').inputs;
            [leftOrder,
    rightOrder,
    leftSignature,
    rightSignature
    ] = BaseContract._formatABIDataItemList(inputAbi, [leftOrder,
    rightOrder,
    leftSignature,
    rightSignature
    ], BaseContract._bigNumberToString.bind(self));
            const encodedData = self._lookupEthersInterface('matchOrders({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},{address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},bytes,bytes)').functions.matchOrders(
                leftOrder,
                rightOrder,
                leftSignature,
                rightSignature
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.matchOrders.estimateGasAsync.bind(
                    self,
                    leftOrder,
                    rightOrder,
                    leftSignature,
                    rightSignature
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            leftOrder: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            rightOrder: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            leftSignature: string,
            rightSignature: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('matchOrders({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},{address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},bytes,bytes)').inputs;
            [leftOrder,
    rightOrder,
    leftSignature,
    rightSignature
    ] = BaseContract._formatABIDataItemList(inputAbi, [leftOrder,
    rightOrder,
    leftSignature,
    rightSignature
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('matchOrders({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},{address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},bytes,bytes)').functions.matchOrders(
                leftOrder,
                rightOrder,
                leftSignature,
                rightSignature
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            leftOrder: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            rightOrder: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            leftSignature: string,
            rightSignature: string,
        ): string {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('matchOrders({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},{address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},bytes,bytes)').inputs;
            [leftOrder,
    rightOrder,
    leftSignature,
    rightSignature
    ] = BaseContract._formatABIDataItemList(inputAbi, [leftOrder,
    rightOrder,
    leftSignature,
    rightSignature
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('matchOrders({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},{address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},bytes,bytes)').functions.matchOrders(
                leftOrder,
                rightOrder,
                leftSignature,
                rightSignature
            ).data;
            return abiEncodedTransactionData;
        },
        async callAsync(
            leftOrder: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            rightOrder: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            leftSignature: string,
            rightSignature: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<{left: {makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber};right: {makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber};leftMakerAssetSpreadAmount: BigNumber}
        > {
            const self = this as any as ExchangeContract;
            const functionSignature = 'matchOrders({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},{address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},bytes,bytes)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [leftOrder,
        rightOrder,
        leftSignature,
        rightSignature
        ] = BaseContract._formatABIDataItemList(inputAbi, [leftOrder,
        rightOrder,
        leftSignature,
        rightSignature
        ], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.matchOrders(
                leftOrder,
                rightOrder,
                leftSignature,
                rightSignature
            ) as ethers.CallDescription;
            const encodedData = ethersFunction.data;
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            let resultArray = ethersFunction.parse(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'matchOrders'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public fillOrderNoThrow = {
        async sendTransactionAsync(
            order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            takerAssetFillAmount: BigNumber,
            signature: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('fillOrderNoThrow({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').inputs;
            [order,
    takerAssetFillAmount,
    signature
    ] = BaseContract._formatABIDataItemList(inputAbi, [order,
    takerAssetFillAmount,
    signature
    ], BaseContract._bigNumberToString.bind(self));
            const encodedData = self._lookupEthersInterface('fillOrderNoThrow({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').functions.fillOrderNoThrow(
                order,
                takerAssetFillAmount,
                signature
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.fillOrderNoThrow.estimateGasAsync.bind(
                    self,
                    order,
                    takerAssetFillAmount,
                    signature
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            takerAssetFillAmount: BigNumber,
            signature: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('fillOrderNoThrow({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').inputs;
            [order,
    takerAssetFillAmount,
    signature
    ] = BaseContract._formatABIDataItemList(inputAbi, [order,
    takerAssetFillAmount,
    signature
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('fillOrderNoThrow({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').functions.fillOrderNoThrow(
                order,
                takerAssetFillAmount,
                signature
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            takerAssetFillAmount: BigNumber,
            signature: string,
        ): string {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('fillOrderNoThrow({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').inputs;
            [order,
    takerAssetFillAmount,
    signature
    ] = BaseContract._formatABIDataItemList(inputAbi, [order,
    takerAssetFillAmount,
    signature
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('fillOrderNoThrow({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').functions.fillOrderNoThrow(
                order,
                takerAssetFillAmount,
                signature
            ).data;
            return abiEncodedTransactionData;
        },
        async callAsync(
            order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            takerAssetFillAmount: BigNumber,
            signature: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<{makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber}
        > {
            const self = this as any as ExchangeContract;
            const functionSignature = 'fillOrderNoThrow({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [order,
        takerAssetFillAmount,
        signature
        ] = BaseContract._formatABIDataItemList(inputAbi, [order,
        takerAssetFillAmount,
        signature
        ], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.fillOrderNoThrow(
                order,
                takerAssetFillAmount,
                signature
            ) as ethers.CallDescription;
            const encodedData = ethersFunction.data;
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            let resultArray = ethersFunction.parse(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'fillOrderNoThrow'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public assetProxies = {
        async callAsync(
            index_0: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as ExchangeContract;
            const functionSignature = 'assetProxies(bytes4)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [index_0
        ] = BaseContract._formatABIDataItemList(inputAbi, [index_0
        ], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.assetProxies(
                index_0
            ) as ethers.CallDescription;
            const encodedData = ethersFunction.data;
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            let resultArray = ethersFunction.parse(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'assetProxies'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public batchCancelOrders = {
        async sendTransactionAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('batchCancelOrders(tuple[])').inputs;
            [orders
    ] = BaseContract._formatABIDataItemList(inputAbi, [orders
    ], BaseContract._bigNumberToString.bind(self));
            const encodedData = self._lookupEthersInterface('batchCancelOrders(tuple[])').functions.batchCancelOrders(
                orders
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.batchCancelOrders.estimateGasAsync.bind(
                    self,
                    orders
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('batchCancelOrders(tuple[])').inputs;
            [orders
    ] = BaseContract._formatABIDataItemList(inputAbi, [orders
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('batchCancelOrders(tuple[])').functions.batchCancelOrders(
                orders
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
        ): string {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('batchCancelOrders(tuple[])').inputs;
            [orders
    ] = BaseContract._formatABIDataItemList(inputAbi, [orders
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('batchCancelOrders(tuple[])').functions.batchCancelOrders(
                orders
            ).data;
            return abiEncodedTransactionData;
        },
    };
    public batchFillOrKillOrders = {
        async sendTransactionAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmounts: BigNumber[],
            signatures: string[],
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('batchFillOrKillOrders(tuple[],uint256[],bytes[])').inputs;
            [orders,
    takerAssetFillAmounts,
    signatures
    ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
    takerAssetFillAmounts,
    signatures
    ], BaseContract._bigNumberToString.bind(self));
            const encodedData = self._lookupEthersInterface('batchFillOrKillOrders(tuple[],uint256[],bytes[])').functions.batchFillOrKillOrders(
                orders,
                takerAssetFillAmounts,
                signatures
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.batchFillOrKillOrders.estimateGasAsync.bind(
                    self,
                    orders,
                    takerAssetFillAmounts,
                    signatures
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmounts: BigNumber[],
            signatures: string[],
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('batchFillOrKillOrders(tuple[],uint256[],bytes[])').inputs;
            [orders,
    takerAssetFillAmounts,
    signatures
    ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
    takerAssetFillAmounts,
    signatures
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('batchFillOrKillOrders(tuple[],uint256[],bytes[])').functions.batchFillOrKillOrders(
                orders,
                takerAssetFillAmounts,
                signatures
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmounts: BigNumber[],
            signatures: string[],
        ): string {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('batchFillOrKillOrders(tuple[],uint256[],bytes[])').inputs;
            [orders,
    takerAssetFillAmounts,
    signatures
    ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
    takerAssetFillAmounts,
    signatures
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('batchFillOrKillOrders(tuple[],uint256[],bytes[])').functions.batchFillOrKillOrders(
                orders,
                takerAssetFillAmounts,
                signatures
            ).data;
            return abiEncodedTransactionData;
        },
        async callAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmounts: BigNumber[],
            signatures: string[],
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<{makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber}
        > {
            const self = this as any as ExchangeContract;
            const functionSignature = 'batchFillOrKillOrders(tuple[],uint256[],bytes[])';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [orders,
        takerAssetFillAmounts,
        signatures
        ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
        takerAssetFillAmounts,
        signatures
        ], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.batchFillOrKillOrders(
                orders,
                takerAssetFillAmounts,
                signatures
            ) as ethers.CallDescription;
            const encodedData = ethersFunction.data;
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            let resultArray = ethersFunction.parse(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'batchFillOrKillOrders'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public cancelOrdersUpTo = {
        async sendTransactionAsync(
            targetOrderEpoch: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('cancelOrdersUpTo(uint256)').inputs;
            [targetOrderEpoch
    ] = BaseContract._formatABIDataItemList(inputAbi, [targetOrderEpoch
    ], BaseContract._bigNumberToString.bind(self));
            const encodedData = self._lookupEthersInterface('cancelOrdersUpTo(uint256)').functions.cancelOrdersUpTo(
                targetOrderEpoch
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.cancelOrdersUpTo.estimateGasAsync.bind(
                    self,
                    targetOrderEpoch
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            targetOrderEpoch: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('cancelOrdersUpTo(uint256)').inputs;
            [targetOrderEpoch
    ] = BaseContract._formatABIDataItemList(inputAbi, [targetOrderEpoch
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('cancelOrdersUpTo(uint256)').functions.cancelOrdersUpTo(
                targetOrderEpoch
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            targetOrderEpoch: BigNumber,
        ): string {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('cancelOrdersUpTo(uint256)').inputs;
            [targetOrderEpoch
    ] = BaseContract._formatABIDataItemList(inputAbi, [targetOrderEpoch
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('cancelOrdersUpTo(uint256)').functions.cancelOrdersUpTo(
                targetOrderEpoch
            ).data;
            return abiEncodedTransactionData;
        },
    };
    public batchFillOrdersNoThrow = {
        async sendTransactionAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmounts: BigNumber[],
            signatures: string[],
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('batchFillOrdersNoThrow(tuple[],uint256[],bytes[])').inputs;
            [orders,
    takerAssetFillAmounts,
    signatures
    ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
    takerAssetFillAmounts,
    signatures
    ], BaseContract._bigNumberToString.bind(self));
            const encodedData = self._lookupEthersInterface('batchFillOrdersNoThrow(tuple[],uint256[],bytes[])').functions.batchFillOrdersNoThrow(
                orders,
                takerAssetFillAmounts,
                signatures
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.batchFillOrdersNoThrow.estimateGasAsync.bind(
                    self,
                    orders,
                    takerAssetFillAmounts,
                    signatures
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmounts: BigNumber[],
            signatures: string[],
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('batchFillOrdersNoThrow(tuple[],uint256[],bytes[])').inputs;
            [orders,
    takerAssetFillAmounts,
    signatures
    ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
    takerAssetFillAmounts,
    signatures
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('batchFillOrdersNoThrow(tuple[],uint256[],bytes[])').functions.batchFillOrdersNoThrow(
                orders,
                takerAssetFillAmounts,
                signatures
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmounts: BigNumber[],
            signatures: string[],
        ): string {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('batchFillOrdersNoThrow(tuple[],uint256[],bytes[])').inputs;
            [orders,
    takerAssetFillAmounts,
    signatures
    ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
    takerAssetFillAmounts,
    signatures
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('batchFillOrdersNoThrow(tuple[],uint256[],bytes[])').functions.batchFillOrdersNoThrow(
                orders,
                takerAssetFillAmounts,
                signatures
            ).data;
            return abiEncodedTransactionData;
        },
        async callAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmounts: BigNumber[],
            signatures: string[],
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<{makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber}
        > {
            const self = this as any as ExchangeContract;
            const functionSignature = 'batchFillOrdersNoThrow(tuple[],uint256[],bytes[])';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [orders,
        takerAssetFillAmounts,
        signatures
        ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
        takerAssetFillAmounts,
        signatures
        ], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.batchFillOrdersNoThrow(
                orders,
                takerAssetFillAmounts,
                signatures
            ) as ethers.CallDescription;
            const encodedData = ethersFunction.data;
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            let resultArray = ethersFunction.parse(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'batchFillOrdersNoThrow'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getAssetProxy = {
        async callAsync(
            assetProxyId: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as ExchangeContract;
            const functionSignature = 'getAssetProxy(bytes4)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [assetProxyId
        ] = BaseContract._formatABIDataItemList(inputAbi, [assetProxyId
        ], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getAssetProxy(
                assetProxyId
            ) as ethers.CallDescription;
            const encodedData = ethersFunction.data;
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            let resultArray = ethersFunction.parse(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'getAssetProxy'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public transactions = {
        async callAsync(
            index_0: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as ExchangeContract;
            const functionSignature = 'transactions(bytes32)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [index_0
        ] = BaseContract._formatABIDataItemList(inputAbi, [index_0
        ], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.transactions(
                index_0
            ) as ethers.CallDescription;
            const encodedData = ethersFunction.data;
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            let resultArray = ethersFunction.parse(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'transactions'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public fillOrKillOrder = {
        async sendTransactionAsync(
            order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            takerAssetFillAmount: BigNumber,
            signature: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('fillOrKillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').inputs;
            [order,
    takerAssetFillAmount,
    signature
    ] = BaseContract._formatABIDataItemList(inputAbi, [order,
    takerAssetFillAmount,
    signature
    ], BaseContract._bigNumberToString.bind(self));
            const encodedData = self._lookupEthersInterface('fillOrKillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').functions.fillOrKillOrder(
                order,
                takerAssetFillAmount,
                signature
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.fillOrKillOrder.estimateGasAsync.bind(
                    self,
                    order,
                    takerAssetFillAmount,
                    signature
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            takerAssetFillAmount: BigNumber,
            signature: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('fillOrKillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').inputs;
            [order,
    takerAssetFillAmount,
    signature
    ] = BaseContract._formatABIDataItemList(inputAbi, [order,
    takerAssetFillAmount,
    signature
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('fillOrKillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').functions.fillOrKillOrder(
                order,
                takerAssetFillAmount,
                signature
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            takerAssetFillAmount: BigNumber,
            signature: string,
        ): string {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('fillOrKillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').inputs;
            [order,
    takerAssetFillAmount,
    signature
    ] = BaseContract._formatABIDataItemList(inputAbi, [order,
    takerAssetFillAmount,
    signature
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('fillOrKillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').functions.fillOrKillOrder(
                order,
                takerAssetFillAmount,
                signature
            ).data;
            return abiEncodedTransactionData;
        },
        async callAsync(
            order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            takerAssetFillAmount: BigNumber,
            signature: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<{makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber}
        > {
            const self = this as any as ExchangeContract;
            const functionSignature = 'fillOrKillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [order,
        takerAssetFillAmount,
        signature
        ] = BaseContract._formatABIDataItemList(inputAbi, [order,
        takerAssetFillAmount,
        signature
        ], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.fillOrKillOrder(
                order,
                takerAssetFillAmount,
                signature
            ) as ethers.CallDescription;
            const encodedData = ethersFunction.data;
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            let resultArray = ethersFunction.parse(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'fillOrKillOrder'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public setSignatureValidatorApproval = {
        async sendTransactionAsync(
            validatorAddress: string,
            approval: boolean,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('setSignatureValidatorApproval(address,bool)').inputs;
            [validatorAddress,
    approval
    ] = BaseContract._formatABIDataItemList(inputAbi, [validatorAddress,
    approval
    ], BaseContract._bigNumberToString.bind(self));
            const encodedData = self._lookupEthersInterface('setSignatureValidatorApproval(address,bool)').functions.setSignatureValidatorApproval(
                validatorAddress,
                approval
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.setSignatureValidatorApproval.estimateGasAsync.bind(
                    self,
                    validatorAddress,
                    approval
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            validatorAddress: string,
            approval: boolean,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('setSignatureValidatorApproval(address,bool)').inputs;
            [validatorAddress,
    approval
    ] = BaseContract._formatABIDataItemList(inputAbi, [validatorAddress,
    approval
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('setSignatureValidatorApproval(address,bool)').functions.setSignatureValidatorApproval(
                validatorAddress,
                approval
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            validatorAddress: string,
            approval: boolean,
        ): string {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('setSignatureValidatorApproval(address,bool)').inputs;
            [validatorAddress,
    approval
    ] = BaseContract._formatABIDataItemList(inputAbi, [validatorAddress,
    approval
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('setSignatureValidatorApproval(address,bool)').functions.setSignatureValidatorApproval(
                validatorAddress,
                approval
            ).data;
            return abiEncodedTransactionData;
        },
    };
    public allowedValidators = {
        async callAsync(
            index_0: string,
            index_1: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as ExchangeContract;
            const functionSignature = 'allowedValidators(address,address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [index_0,
        index_1
        ] = BaseContract._formatABIDataItemList(inputAbi, [index_0,
        index_1
        ], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.allowedValidators(
                index_0,
                index_1
            ) as ethers.CallDescription;
            const encodedData = ethersFunction.data;
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            let resultArray = ethersFunction.parse(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'allowedValidators'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public marketSellOrders = {
        async sendTransactionAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmount: BigNumber,
            signatures: string[],
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('marketSellOrders(tuple[],uint256,bytes[])').inputs;
            [orders,
    takerAssetFillAmount,
    signatures
    ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
    takerAssetFillAmount,
    signatures
    ], BaseContract._bigNumberToString.bind(self));
            const encodedData = self._lookupEthersInterface('marketSellOrders(tuple[],uint256,bytes[])').functions.marketSellOrders(
                orders,
                takerAssetFillAmount,
                signatures
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.marketSellOrders.estimateGasAsync.bind(
                    self,
                    orders,
                    takerAssetFillAmount,
                    signatures
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmount: BigNumber,
            signatures: string[],
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('marketSellOrders(tuple[],uint256,bytes[])').inputs;
            [orders,
    takerAssetFillAmount,
    signatures
    ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
    takerAssetFillAmount,
    signatures
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('marketSellOrders(tuple[],uint256,bytes[])').functions.marketSellOrders(
                orders,
                takerAssetFillAmount,
                signatures
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmount: BigNumber,
            signatures: string[],
        ): string {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('marketSellOrders(tuple[],uint256,bytes[])').inputs;
            [orders,
    takerAssetFillAmount,
    signatures
    ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
    takerAssetFillAmount,
    signatures
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('marketSellOrders(tuple[],uint256,bytes[])').functions.marketSellOrders(
                orders,
                takerAssetFillAmount,
                signatures
            ).data;
            return abiEncodedTransactionData;
        },
        async callAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmount: BigNumber,
            signatures: string[],
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<{makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber}
        > {
            const self = this as any as ExchangeContract;
            const functionSignature = 'marketSellOrders(tuple[],uint256,bytes[])';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [orders,
        takerAssetFillAmount,
        signatures
        ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
        takerAssetFillAmount,
        signatures
        ], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.marketSellOrders(
                orders,
                takerAssetFillAmount,
                signatures
            ) as ethers.CallDescription;
            const encodedData = ethersFunction.data;
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            let resultArray = ethersFunction.parse(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'marketSellOrders'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public preSigned = {
        async callAsync(
            index_0: string,
            index_1: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as ExchangeContract;
            const functionSignature = 'preSigned(bytes32,address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [index_0,
        index_1
        ] = BaseContract._formatABIDataItemList(inputAbi, [index_0,
        index_1
        ], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.preSigned(
                index_0,
                index_1
            ) as ethers.CallDescription;
            const encodedData = ethersFunction.data;
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            let resultArray = ethersFunction.parse(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'preSigned'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public registerAssetProxy = {
        async sendTransactionAsync(
            assetProxyId: string,
            newAssetProxy: string,
            oldAssetProxy: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('registerAssetProxy(bytes4,address,address)').inputs;
            [assetProxyId,
    newAssetProxy,
    oldAssetProxy
    ] = BaseContract._formatABIDataItemList(inputAbi, [assetProxyId,
    newAssetProxy,
    oldAssetProxy
    ], BaseContract._bigNumberToString.bind(self));
            const encodedData = self._lookupEthersInterface('registerAssetProxy(bytes4,address,address)').functions.registerAssetProxy(
                assetProxyId,
                newAssetProxy,
                oldAssetProxy
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.registerAssetProxy.estimateGasAsync.bind(
                    self,
                    assetProxyId,
                    newAssetProxy,
                    oldAssetProxy
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            assetProxyId: string,
            newAssetProxy: string,
            oldAssetProxy: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('registerAssetProxy(bytes4,address,address)').inputs;
            [assetProxyId,
    newAssetProxy,
    oldAssetProxy
    ] = BaseContract._formatABIDataItemList(inputAbi, [assetProxyId,
    newAssetProxy,
    oldAssetProxy
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('registerAssetProxy(bytes4,address,address)').functions.registerAssetProxy(
                assetProxyId,
                newAssetProxy,
                oldAssetProxy
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            assetProxyId: string,
            newAssetProxy: string,
            oldAssetProxy: string,
        ): string {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('registerAssetProxy(bytes4,address,address)').inputs;
            [assetProxyId,
    newAssetProxy,
    oldAssetProxy
    ] = BaseContract._formatABIDataItemList(inputAbi, [assetProxyId,
    newAssetProxy,
    oldAssetProxy
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('registerAssetProxy(bytes4,address,address)').functions.registerAssetProxy(
                assetProxyId,
                newAssetProxy,
                oldAssetProxy
            ).data;
            return abiEncodedTransactionData;
        },
    };
    public owner = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as ExchangeContract;
            const functionSignature = 'owner()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.owner(
            ) as ethers.CallDescription;
            const encodedData = ethersFunction.data;
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            let resultArray = ethersFunction.parse(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'owner'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public isValidSignature = {
        async callAsync(
            hash: string,
            signerAddress: string,
            signature: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as ExchangeContract;
            const functionSignature = 'isValidSignature(bytes32,address,bytes)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [hash,
        signerAddress,
        signature
        ] = BaseContract._formatABIDataItemList(inputAbi, [hash,
        signerAddress,
        signature
        ], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.isValidSignature(
                hash,
                signerAddress,
                signature
            ) as ethers.CallDescription;
            const encodedData = ethersFunction.data;
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            let resultArray = ethersFunction.parse(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'isValidSignature'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public marketBuyOrdersNoThrow = {
        async sendTransactionAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            makerAssetFillAmount: BigNumber,
            signatures: string[],
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('marketBuyOrdersNoThrow(tuple[],uint256,bytes[])').inputs;
            [orders,
    makerAssetFillAmount,
    signatures
    ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
    makerAssetFillAmount,
    signatures
    ], BaseContract._bigNumberToString.bind(self));
            const encodedData = self._lookupEthersInterface('marketBuyOrdersNoThrow(tuple[],uint256,bytes[])').functions.marketBuyOrdersNoThrow(
                orders,
                makerAssetFillAmount,
                signatures
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.marketBuyOrdersNoThrow.estimateGasAsync.bind(
                    self,
                    orders,
                    makerAssetFillAmount,
                    signatures
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            makerAssetFillAmount: BigNumber,
            signatures: string[],
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('marketBuyOrdersNoThrow(tuple[],uint256,bytes[])').inputs;
            [orders,
    makerAssetFillAmount,
    signatures
    ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
    makerAssetFillAmount,
    signatures
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('marketBuyOrdersNoThrow(tuple[],uint256,bytes[])').functions.marketBuyOrdersNoThrow(
                orders,
                makerAssetFillAmount,
                signatures
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            makerAssetFillAmount: BigNumber,
            signatures: string[],
        ): string {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('marketBuyOrdersNoThrow(tuple[],uint256,bytes[])').inputs;
            [orders,
    makerAssetFillAmount,
    signatures
    ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
    makerAssetFillAmount,
    signatures
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('marketBuyOrdersNoThrow(tuple[],uint256,bytes[])').functions.marketBuyOrdersNoThrow(
                orders,
                makerAssetFillAmount,
                signatures
            ).data;
            return abiEncodedTransactionData;
        },
        async callAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            makerAssetFillAmount: BigNumber,
            signatures: string[],
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<{makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber}
        > {
            const self = this as any as ExchangeContract;
            const functionSignature = 'marketBuyOrdersNoThrow(tuple[],uint256,bytes[])';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [orders,
        makerAssetFillAmount,
        signatures
        ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
        makerAssetFillAmount,
        signatures
        ], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.marketBuyOrdersNoThrow(
                orders,
                makerAssetFillAmount,
                signatures
            ) as ethers.CallDescription;
            const encodedData = ethersFunction.data;
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            let resultArray = ethersFunction.parse(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'marketBuyOrdersNoThrow'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public fillOrder = {
        async sendTransactionAsync(
            order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            takerAssetFillAmount: BigNumber,
            signature: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('fillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').inputs;
            [order,
    takerAssetFillAmount,
    signature
    ] = BaseContract._formatABIDataItemList(inputAbi, [order,
    takerAssetFillAmount,
    signature
    ], BaseContract._bigNumberToString.bind(self));
            const encodedData = self._lookupEthersInterface('fillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').functions.fillOrder(
                order,
                takerAssetFillAmount,
                signature
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.fillOrder.estimateGasAsync.bind(
                    self,
                    order,
                    takerAssetFillAmount,
                    signature
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            takerAssetFillAmount: BigNumber,
            signature: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('fillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').inputs;
            [order,
    takerAssetFillAmount,
    signature
    ] = BaseContract._formatABIDataItemList(inputAbi, [order,
    takerAssetFillAmount,
    signature
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('fillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').functions.fillOrder(
                order,
                takerAssetFillAmount,
                signature
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            takerAssetFillAmount: BigNumber,
            signature: string,
        ): string {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('fillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').inputs;
            [order,
    takerAssetFillAmount,
    signature
    ] = BaseContract._formatABIDataItemList(inputAbi, [order,
    takerAssetFillAmount,
    signature
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('fillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').functions.fillOrder(
                order,
                takerAssetFillAmount,
                signature
            ).data;
            return abiEncodedTransactionData;
        },
        async callAsync(
            order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            takerAssetFillAmount: BigNumber,
            signature: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<{makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber}
        > {
            const self = this as any as ExchangeContract;
            const functionSignature = 'fillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [order,
        takerAssetFillAmount,
        signature
        ] = BaseContract._formatABIDataItemList(inputAbi, [order,
        takerAssetFillAmount,
        signature
        ], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.fillOrder(
                order,
                takerAssetFillAmount,
                signature
            ) as ethers.CallDescription;
            const encodedData = ethersFunction.data;
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            let resultArray = ethersFunction.parse(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'fillOrder'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public executeTransaction = {
        async sendTransactionAsync(
            salt: BigNumber,
            signerAddress: string,
            data: string,
            signature: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('executeTransaction(uint256,address,bytes,bytes)').inputs;
            [salt,
    signerAddress,
    data,
    signature
    ] = BaseContract._formatABIDataItemList(inputAbi, [salt,
    signerAddress,
    data,
    signature
    ], BaseContract._bigNumberToString.bind(self));
            const encodedData = self._lookupEthersInterface('executeTransaction(uint256,address,bytes,bytes)').functions.executeTransaction(
                salt,
                signerAddress,
                data,
                signature
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.executeTransaction.estimateGasAsync.bind(
                    self,
                    salt,
                    signerAddress,
                    data,
                    signature
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            salt: BigNumber,
            signerAddress: string,
            data: string,
            signature: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('executeTransaction(uint256,address,bytes,bytes)').inputs;
            [salt,
    signerAddress,
    data,
    signature
    ] = BaseContract._formatABIDataItemList(inputAbi, [salt,
    signerAddress,
    data,
    signature
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('executeTransaction(uint256,address,bytes,bytes)').functions.executeTransaction(
                salt,
                signerAddress,
                data,
                signature
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            salt: BigNumber,
            signerAddress: string,
            data: string,
            signature: string,
        ): string {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('executeTransaction(uint256,address,bytes,bytes)').inputs;
            [salt,
    signerAddress,
    data,
    signature
    ] = BaseContract._formatABIDataItemList(inputAbi, [salt,
    signerAddress,
    data,
    signature
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('executeTransaction(uint256,address,bytes,bytes)').functions.executeTransaction(
                salt,
                signerAddress,
                data,
                signature
            ).data;
            return abiEncodedTransactionData;
        },
    };
    public getOrderInfo = {
        async callAsync(
            order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<{orderStatus: number;orderHash: string;orderTakerAssetFilledAmount: BigNumber}
        > {
            const self = this as any as ExchangeContract;
            const functionSignature = 'getOrderInfo({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes})';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [order
        ] = BaseContract._formatABIDataItemList(inputAbi, [order
        ], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getOrderInfo(
                order
            ) as ethers.CallDescription;
            const encodedData = ethersFunction.data;
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            let resultArray = ethersFunction.parse(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'getOrderInfo'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public cancelOrder = {
        async sendTransactionAsync(
            order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('cancelOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes})').inputs;
            [order
    ] = BaseContract._formatABIDataItemList(inputAbi, [order
    ], BaseContract._bigNumberToString.bind(self));
            const encodedData = self._lookupEthersInterface('cancelOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes})').functions.cancelOrder(
                order
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.cancelOrder.estimateGasAsync.bind(
                    self,
                    order
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('cancelOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes})').inputs;
            [order
    ] = BaseContract._formatABIDataItemList(inputAbi, [order
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('cancelOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes})').functions.cancelOrder(
                order
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
        ): string {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('cancelOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes})').inputs;
            [order
    ] = BaseContract._formatABIDataItemList(inputAbi, [order
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('cancelOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes})').functions.cancelOrder(
                order
            ).data;
            return abiEncodedTransactionData;
        },
    };
    public orderEpoch = {
        async callAsync(
            index_0: string,
            index_1: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as ExchangeContract;
            const functionSignature = 'orderEpoch(address,address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [index_0,
        index_1
        ] = BaseContract._formatABIDataItemList(inputAbi, [index_0,
        index_1
        ], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.orderEpoch(
                index_0,
                index_1
            ) as ethers.CallDescription;
            const encodedData = ethersFunction.data;
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            let resultArray = ethersFunction.parse(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'orderEpoch'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public marketSellOrdersNoThrow = {
        async sendTransactionAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmount: BigNumber,
            signatures: string[],
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('marketSellOrdersNoThrow(tuple[],uint256,bytes[])').inputs;
            [orders,
    takerAssetFillAmount,
    signatures
    ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
    takerAssetFillAmount,
    signatures
    ], BaseContract._bigNumberToString.bind(self));
            const encodedData = self._lookupEthersInterface('marketSellOrdersNoThrow(tuple[],uint256,bytes[])').functions.marketSellOrdersNoThrow(
                orders,
                takerAssetFillAmount,
                signatures
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.marketSellOrdersNoThrow.estimateGasAsync.bind(
                    self,
                    orders,
                    takerAssetFillAmount,
                    signatures
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmount: BigNumber,
            signatures: string[],
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('marketSellOrdersNoThrow(tuple[],uint256,bytes[])').inputs;
            [orders,
    takerAssetFillAmount,
    signatures
    ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
    takerAssetFillAmount,
    signatures
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('marketSellOrdersNoThrow(tuple[],uint256,bytes[])').functions.marketSellOrdersNoThrow(
                orders,
                takerAssetFillAmount,
                signatures
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmount: BigNumber,
            signatures: string[],
        ): string {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('marketSellOrdersNoThrow(tuple[],uint256,bytes[])').inputs;
            [orders,
    takerAssetFillAmount,
    signatures
    ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
    takerAssetFillAmount,
    signatures
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('marketSellOrdersNoThrow(tuple[],uint256,bytes[])').functions.marketSellOrdersNoThrow(
                orders,
                takerAssetFillAmount,
                signatures
            ).data;
            return abiEncodedTransactionData;
        },
        async callAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmount: BigNumber,
            signatures: string[],
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<{makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber}
        > {
            const self = this as any as ExchangeContract;
            const functionSignature = 'marketSellOrdersNoThrow(tuple[],uint256,bytes[])';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [orders,
        takerAssetFillAmount,
        signatures
        ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
        takerAssetFillAmount,
        signatures
        ], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.marketSellOrdersNoThrow(
                orders,
                takerAssetFillAmount,
                signatures
            ) as ethers.CallDescription;
            const encodedData = ethersFunction.data;
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            let resultArray = ethersFunction.parse(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'marketSellOrdersNoThrow'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public EIP712_DOMAIN_HASH = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as ExchangeContract;
            const functionSignature = 'EIP712_DOMAIN_HASH()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.EIP712_DOMAIN_HASH(
            ) as ethers.CallDescription;
            const encodedData = ethersFunction.data;
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            let resultArray = ethersFunction.parse(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'EIP712_DOMAIN_HASH'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public marketBuyOrders = {
        async sendTransactionAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            makerAssetFillAmount: BigNumber,
            signatures: string[],
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('marketBuyOrders(tuple[],uint256,bytes[])').inputs;
            [orders,
    makerAssetFillAmount,
    signatures
    ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
    makerAssetFillAmount,
    signatures
    ], BaseContract._bigNumberToString.bind(self));
            const encodedData = self._lookupEthersInterface('marketBuyOrders(tuple[],uint256,bytes[])').functions.marketBuyOrders(
                orders,
                makerAssetFillAmount,
                signatures
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.marketBuyOrders.estimateGasAsync.bind(
                    self,
                    orders,
                    makerAssetFillAmount,
                    signatures
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            makerAssetFillAmount: BigNumber,
            signatures: string[],
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('marketBuyOrders(tuple[],uint256,bytes[])').inputs;
            [orders,
    makerAssetFillAmount,
    signatures
    ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
    makerAssetFillAmount,
    signatures
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('marketBuyOrders(tuple[],uint256,bytes[])').functions.marketBuyOrders(
                orders,
                makerAssetFillAmount,
                signatures
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            makerAssetFillAmount: BigNumber,
            signatures: string[],
        ): string {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('marketBuyOrders(tuple[],uint256,bytes[])').inputs;
            [orders,
    makerAssetFillAmount,
    signatures
    ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
    makerAssetFillAmount,
    signatures
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('marketBuyOrders(tuple[],uint256,bytes[])').functions.marketBuyOrders(
                orders,
                makerAssetFillAmount,
                signatures
            ).data;
            return abiEncodedTransactionData;
        },
        async callAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            makerAssetFillAmount: BigNumber,
            signatures: string[],
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<{makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber}
        > {
            const self = this as any as ExchangeContract;
            const functionSignature = 'marketBuyOrders(tuple[],uint256,bytes[])';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [orders,
        makerAssetFillAmount,
        signatures
        ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
        makerAssetFillAmount,
        signatures
        ], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.marketBuyOrders(
                orders,
                makerAssetFillAmount,
                signatures
            ) as ethers.CallDescription;
            const encodedData = ethersFunction.data;
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            let resultArray = ethersFunction.parse(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'marketBuyOrders'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public currentContextAddress = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as ExchangeContract;
            const functionSignature = 'currentContextAddress()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.currentContextAddress(
            ) as ethers.CallDescription;
            const encodedData = ethersFunction.data;
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            let resultArray = ethersFunction.parse(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'currentContextAddress'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public transferOwnership = {
        async sendTransactionAsync(
            newOwner: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('transferOwnership(address)').inputs;
            [newOwner
    ] = BaseContract._formatABIDataItemList(inputAbi, [newOwner
    ], BaseContract._bigNumberToString.bind(self));
            const encodedData = self._lookupEthersInterface('transferOwnership(address)').functions.transferOwnership(
                newOwner
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.transferOwnership.estimateGasAsync.bind(
                    self,
                    newOwner
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            newOwner: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('transferOwnership(address)').inputs;
            [newOwner
    ] = BaseContract._formatABIDataItemList(inputAbi, [newOwner
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('transferOwnership(address)').functions.transferOwnership(
                newOwner
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            newOwner: string,
        ): string {
            const self = this as any as ExchangeContract;
            const inputAbi = self._lookupAbi('transferOwnership(address)').inputs;
            [newOwner
    ] = BaseContract._formatABIDataItemList(inputAbi, [newOwner
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('transferOwnership(address)').functions.transferOwnership(
                newOwner
            ).data;
            return abiEncodedTransactionData;
        },
    };
    public VERSION = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as ExchangeContract;
            const functionSignature = 'VERSION()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.VERSION(
            ) as ethers.CallDescription;
            const encodedData = ethersFunction.data;
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            let resultArray = ethersFunction.parse(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'VERSION'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public static async deployFrom0xArtifactAsync(
        artifact: ContractArtifact,
        provider: Provider,
        txDefaults: Partial<TxData>,
    ): Promise<ExchangeContract> {
        if (_.isUndefined(artifact.compilerOutput)) {
            throw new Error('Compiler output not found in the artifact file');
        }
        const bytecode = artifact.compilerOutput.evm.bytecode.object;
        const abi = artifact.compilerOutput.abi;
        return ExchangeContract.deployAsync(bytecode, abi, provider, txDefaults, );
    }
    public static async deployAsync(
        bytecode: string,
        abi: ContractAbi,
        provider: Provider,
        txDefaults: Partial<TxData>,
    ): Promise<ExchangeContract> {
        const constructorAbi = BaseContract._lookupConstructorAbi(abi);
        [] = BaseContract._formatABIDataItemList(
            constructorAbi.inputs,
            [],
            BaseContract._bigNumberToString,
        );
        const txData = ethers.Contract.getDeployTransaction(bytecode, abi, );
        const web3Wrapper = new Web3Wrapper(provider);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            txData,
            txDefaults,
            web3Wrapper.estimateGasAsync.bind(web3Wrapper),
        );
        const txHash = await web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        logUtils.log(`transactionHash: ${txHash}`);
        const txReceipt = await web3Wrapper.awaitTransactionMinedAsync(txHash);
        logUtils.log(`Exchange successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new ExchangeContract(abi, txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [];
        return contractInstance;
    }
    constructor(abi: ContractAbi, address: string, provider: Provider, txDefaults?: Partial<TxData>) {
        super('Exchange', abi, address, provider, txDefaults);
        classUtils.bindAll(this, ['_ethersInterfacesByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
    }
} // tslint:disable:max-file-line-count
