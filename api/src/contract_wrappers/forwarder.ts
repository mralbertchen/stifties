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


// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class ForwarderContract extends BaseContract {
    public onERC721Received1 = {
        async callAsync(
            index_0: string,
            index_1: string,
            index_2: BigNumber,
            index_3: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as ForwarderContract;
            const functionSignature = 'onERC721Received(address,address,uint256,bytes)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [index_0,
        index_1,
        index_2,
        index_3
        ] = BaseContract._formatABIDataItemList(inputAbi, [index_0,
        index_1,
        index_2,
        index_3
        ], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.onERC721Received(
                index_0,
                index_1,
                index_2,
                index_3
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
            const outputAbi = (_.find(self.abi, {name: 'onERC721Received'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public marketSellEthForERC20 = {
        async sendTransactionAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            signatures: string[],
            feeOrders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            feeSignatures: string[],
            feeProportion: number|BigNumber,
            feeRecipient: string,
            txData: Partial<TxDataPayable> = {},
        ): Promise<string> {
            const self = this as any as ForwarderContract;
            const inputAbi = self._lookupAbi('marketSellEthForERC20(tuple[],bytes[],tuple[],bytes[],uint16,address)').inputs;
            [orders,
    signatures,
    feeOrders,
    feeSignatures,
    feeProportion,
    feeRecipient
    ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
    signatures,
    feeOrders,
    feeSignatures,
    feeProportion,
    feeRecipient
    ], BaseContract._bigNumberToString.bind(self));
            const encodedData = self._lookupEthersInterface('marketSellEthForERC20(tuple[],bytes[],tuple[],bytes[],uint16,address)').functions.marketSellEthForERC20(
                orders,
                signatures,
                feeOrders,
                feeSignatures,
                feeProportion,
                feeRecipient
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.marketSellEthForERC20.estimateGasAsync.bind(
                    self,
                    orders,
                    signatures,
                    feeOrders,
                    feeSignatures,
                    feeProportion,
                    feeRecipient
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            signatures: string[],
            feeOrders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            feeSignatures: string[],
            feeProportion: number|BigNumber,
            feeRecipient: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ForwarderContract;
            const inputAbi = self._lookupAbi('marketSellEthForERC20(tuple[],bytes[],tuple[],bytes[],uint16,address)').inputs;
            [orders,
    signatures,
    feeOrders,
    feeSignatures,
    feeProportion,
    feeRecipient
    ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
    signatures,
    feeOrders,
    feeSignatures,
    feeProportion,
    feeRecipient
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('marketSellEthForERC20(tuple[],bytes[],tuple[],bytes[],uint16,address)').functions.marketSellEthForERC20(
                orders,
                signatures,
                feeOrders,
                feeSignatures,
                feeProportion,
                feeRecipient
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
            signatures: string[],
            feeOrders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            feeSignatures: string[],
            feeProportion: number|BigNumber,
            feeRecipient: string,
        ): string {
            const self = this as any as ForwarderContract;
            const inputAbi = self._lookupAbi('marketSellEthForERC20(tuple[],bytes[],tuple[],bytes[],uint16,address)').inputs;
            [orders,
    signatures,
    feeOrders,
    feeSignatures,
    feeProportion,
    feeRecipient
    ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
    signatures,
    feeOrders,
    feeSignatures,
    feeProportion,
    feeRecipient
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('marketSellEthForERC20(tuple[],bytes[],tuple[],bytes[],uint16,address)').functions.marketSellEthForERC20(
                orders,
                signatures,
                feeOrders,
                feeSignatures,
                feeProportion,
                feeRecipient
            ).data;
            return abiEncodedTransactionData;
        },
        async callAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            signatures: string[],
            feeOrders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            feeSignatures: string[],
            feeProportion: number|BigNumber,
            feeRecipient: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<{makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber}
        > {
            const self = this as any as ForwarderContract;
            const functionSignature = 'marketSellEthForERC20(tuple[],bytes[],tuple[],bytes[],uint16,address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [orders,
        signatures,
        feeOrders,
        feeSignatures,
        feeProportion,
        feeRecipient
        ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
        signatures,
        feeOrders,
        feeSignatures,
        feeProportion,
        feeRecipient
        ], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.marketSellEthForERC20(
                orders,
                signatures,
                feeOrders,
                feeSignatures,
                feeProportion,
                feeRecipient
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
            const outputAbi = (_.find(self.abi, {name: 'marketSellEthForERC20'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public calculateMarketBuyResults = {
        async callAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            makerAssetFillAmount: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<{makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber}
        > {
            const self = this as any as ForwarderContract;
            const functionSignature = 'calculateMarketBuyResults(tuple[],uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [orders,
        makerAssetFillAmount
        ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
        makerAssetFillAmount
        ], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.calculateMarketBuyResults(
                orders,
                makerAssetFillAmount
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
            const outputAbi = (_.find(self.abi, {name: 'calculateMarketBuyResults'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public ALLOWABLE_EXCHANGE_PERCENTAGE = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<number
        > {
            const self = this as any as ForwarderContract;
            const functionSignature = 'ALLOWABLE_EXCHANGE_PERCENTAGE()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.ALLOWABLE_EXCHANGE_PERCENTAGE(
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
            const outputAbi = (_.find(self.abi, {name: 'ALLOWABLE_EXCHANGE_PERCENTAGE'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public marketBuyTokensWithEth = {
        async sendTransactionAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            signatures: string[],
            feeOrders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            feeSignatures: string[],
            makerTokenFillAmount: BigNumber,
            feeProportion: number|BigNumber,
            feeRecipient: string,
            txData: Partial<TxDataPayable> = {},
        ): Promise<string> {
            const self = this as any as ForwarderContract;
            const inputAbi = self._lookupAbi('marketBuyTokensWithEth(tuple[],bytes[],tuple[],bytes[],uint256,uint16,address)').inputs;
            [orders,
    signatures,
    feeOrders,
    feeSignatures,
    makerTokenFillAmount,
    feeProportion,
    feeRecipient
    ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
    signatures,
    feeOrders,
    feeSignatures,
    makerTokenFillAmount,
    feeProportion,
    feeRecipient
    ], BaseContract._bigNumberToString.bind(self));
            const encodedData = self._lookupEthersInterface('marketBuyTokensWithEth(tuple[],bytes[],tuple[],bytes[],uint256,uint16,address)').functions.marketBuyTokensWithEth(
                orders,
                signatures,
                feeOrders,
                feeSignatures,
                makerTokenFillAmount,
                feeProportion,
                feeRecipient
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.marketBuyTokensWithEth.estimateGasAsync.bind(
                    self,
                    orders,
                    signatures,
                    feeOrders,
                    feeSignatures,
                    makerTokenFillAmount,
                    feeProportion,
                    feeRecipient
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            signatures: string[],
            feeOrders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            feeSignatures: string[],
            makerTokenFillAmount: BigNumber,
            feeProportion: number|BigNumber,
            feeRecipient: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ForwarderContract;
            const inputAbi = self._lookupAbi('marketBuyTokensWithEth(tuple[],bytes[],tuple[],bytes[],uint256,uint16,address)').inputs;
            [orders,
    signatures,
    feeOrders,
    feeSignatures,
    makerTokenFillAmount,
    feeProportion,
    feeRecipient
    ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
    signatures,
    feeOrders,
    feeSignatures,
    makerTokenFillAmount,
    feeProportion,
    feeRecipient
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('marketBuyTokensWithEth(tuple[],bytes[],tuple[],bytes[],uint256,uint16,address)').functions.marketBuyTokensWithEth(
                orders,
                signatures,
                feeOrders,
                feeSignatures,
                makerTokenFillAmount,
                feeProportion,
                feeRecipient
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
            signatures: string[],
            feeOrders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            feeSignatures: string[],
            makerTokenFillAmount: BigNumber,
            feeProportion: number|BigNumber,
            feeRecipient: string,
        ): string {
            const self = this as any as ForwarderContract;
            const inputAbi = self._lookupAbi('marketBuyTokensWithEth(tuple[],bytes[],tuple[],bytes[],uint256,uint16,address)').inputs;
            [orders,
    signatures,
    feeOrders,
    feeSignatures,
    makerTokenFillAmount,
    feeProportion,
    feeRecipient
    ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
    signatures,
    feeOrders,
    feeSignatures,
    makerTokenFillAmount,
    feeProportion,
    feeRecipient
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('marketBuyTokensWithEth(tuple[],bytes[],tuple[],bytes[],uint256,uint16,address)').functions.marketBuyTokensWithEth(
                orders,
                signatures,
                feeOrders,
                feeSignatures,
                makerTokenFillAmount,
                feeProportion,
                feeRecipient
            ).data;
            return abiEncodedTransactionData;
        },
        async callAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            signatures: string[],
            feeOrders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            feeSignatures: string[],
            makerTokenFillAmount: BigNumber,
            feeProportion: number|BigNumber,
            feeRecipient: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<{makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber}
        > {
            const self = this as any as ForwarderContract;
            const functionSignature = 'marketBuyTokensWithEth(tuple[],bytes[],tuple[],bytes[],uint256,uint16,address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [orders,
        signatures,
        feeOrders,
        feeSignatures,
        makerTokenFillAmount,
        feeProportion,
        feeRecipient
        ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
        signatures,
        feeOrders,
        feeSignatures,
        makerTokenFillAmount,
        feeProportion,
        feeRecipient
        ], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.marketBuyTokensWithEth(
                orders,
                signatures,
                feeOrders,
                feeSignatures,
                makerTokenFillAmount,
                feeProportion,
                feeRecipient
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
            const outputAbi = (_.find(self.abi, {name: 'marketBuyTokensWithEth'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public PERCENTAGE_DENOMINATOR = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<number
        > {
            const self = this as any as ForwarderContract;
            const functionSignature = 'PERCENTAGE_DENOMINATOR()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.PERCENTAGE_DENOMINATOR(
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
            const outputAbi = (_.find(self.abi, {name: 'PERCENTAGE_DENOMINATOR'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public MAX_FEE = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<number
        > {
            const self = this as any as ForwarderContract;
            const functionSignature = 'MAX_FEE()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.MAX_FEE(
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
            const outputAbi = (_.find(self.abi, {name: 'MAX_FEE'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public calculateMarketSellResults = {
        async callAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmount: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<{makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber}
        > {
            const self = this as any as ForwarderContract;
            const functionSignature = 'calculateMarketSellResults(tuple[],uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [orders,
        takerAssetFillAmount
        ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
        takerAssetFillAmount
        ], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.calculateMarketSellResults(
                orders,
                takerAssetFillAmount
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
            const outputAbi = (_.find(self.abi, {name: 'calculateMarketSellResults'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public calculateMarketBuyZrxResults = {
        async callAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            zrxFillAmount: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<{makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber}
        > {
            const self = this as any as ForwarderContract;
            const functionSignature = 'calculateMarketBuyZrxResults(tuple[],uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [orders,
        zrxFillAmount
        ] = BaseContract._formatABIDataItemList(inputAbi, [orders,
        zrxFillAmount
        ], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.calculateMarketBuyZrxResults(
                orders,
                zrxFillAmount
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
            const outputAbi = (_.find(self.abi, {name: 'calculateMarketBuyZrxResults'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public onERC721Received2 = {
        async callAsync(
            index_0: string,
            index_1: BigNumber,
            index_2: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as ForwarderContract;
            const functionSignature = 'onERC721Received(address,uint256,bytes)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [index_0,
        index_1,
        index_2
        ] = BaseContract._formatABIDataItemList(inputAbi, [index_0,
        index_1,
        index_2
        ], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.onERC721Received(
                index_0,
                index_1,
                index_2
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
            const outputAbi = (_.find(self.abi, {name: 'onERC721Received'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public static async deployFrom0xArtifactAsync(
        artifact: ContractArtifact,
        provider: Provider,
        txDefaults: Partial<TxData>,
            _exchange: string,
            _etherToken: string,
            _zrxToken: string,
            _erc20AssetProxyId: string,
            _zrxAssetData: string,
            _wethAssetData: string,
    ): Promise<ForwarderContract> {
        if (_.isUndefined(artifact.compilerOutput)) {
            throw new Error('Compiler output not found in the artifact file');
        }
        const bytecode = artifact.compilerOutput.evm.bytecode.object;
        const abi = artifact.compilerOutput.abi;
        return ForwarderContract.deployAsync(bytecode, abi, provider, txDefaults, _exchange,
_etherToken,
_zrxToken,
_erc20AssetProxyId,
_zrxAssetData,
_wethAssetData
);
    }
    public static async deployAsync(
        bytecode: string,
        abi: ContractAbi,
        provider: Provider,
        txDefaults: Partial<TxData>,
            _exchange: string,
            _etherToken: string,
            _zrxToken: string,
            _erc20AssetProxyId: string,
            _zrxAssetData: string,
            _wethAssetData: string,
    ): Promise<ForwarderContract> {
        const constructorAbi = BaseContract._lookupConstructorAbi(abi);
        [_exchange,
_etherToken,
_zrxToken,
_erc20AssetProxyId,
_zrxAssetData,
_wethAssetData
] = BaseContract._formatABIDataItemList(
            constructorAbi.inputs,
            [_exchange,
_etherToken,
_zrxToken,
_erc20AssetProxyId,
_zrxAssetData,
_wethAssetData
],
            BaseContract._bigNumberToString,
        );
        const txData = ethers.Contract.getDeployTransaction(bytecode, abi, _exchange,
_etherToken,
_zrxToken,
_erc20AssetProxyId,
_zrxAssetData,
_wethAssetData
);
        const web3Wrapper = new Web3Wrapper(provider);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            txData,
            txDefaults,
            web3Wrapper.estimateGasAsync.bind(web3Wrapper),
        );
        const txHash = await web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        logUtils.log(`transactionHash: ${txHash}`);
        const txReceipt = await web3Wrapper.awaitTransactionMinedAsync(txHash);
        logUtils.log(`Forwarder successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new ForwarderContract(abi, txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [_exchange,
_etherToken,
_zrxToken,
_erc20AssetProxyId,
_zrxAssetData,
_wethAssetData
];
        return contractInstance;
    }
    constructor(abi: ContractAbi, address: string, provider: Provider, txDefaults?: Partial<TxData>) {
        super('Forwarder', abi, address, provider, txDefaults);
        classUtils.bindAll(this, ['_ethersInterfacesByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
    }
} // tslint:disable:max-file-line-count
