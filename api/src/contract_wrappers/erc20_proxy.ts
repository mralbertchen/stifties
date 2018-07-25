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

export type ERC20ProxyContractEventArgs =
    | AuthorizedAddressAddedContractEventArgs
    | AuthorizedAddressRemovedContractEventArgs;

export enum ERC20ProxyEvents {
    AuthorizedAddressAdded = 'AuthorizedAddressAdded',
    AuthorizedAddressRemoved = 'AuthorizedAddressRemoved',
}

export interface AuthorizedAddressAddedContractEventArgs extends DecodedLogArgs {
    target: string;
    caller: string;
}

export interface AuthorizedAddressRemovedContractEventArgs extends DecodedLogArgs {
    target: string;
    caller: string;
}


// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class ERC20ProxyContract extends BaseContract {
    public addAuthorizedAddress = {
        async sendTransactionAsync(
            target: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as ERC20ProxyContract;
            const inputAbi = self._lookupAbi('addAuthorizedAddress(address)').inputs;
            [target
    ] = BaseContract._formatABIDataItemList(inputAbi, [target
    ], BaseContract._bigNumberToString.bind(self));
            const encodedData = self._lookupEthersInterface('addAuthorizedAddress(address)').functions.addAuthorizedAddress(
                target
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.addAuthorizedAddress.estimateGasAsync.bind(
                    self,
                    target
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            target: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ERC20ProxyContract;
            const inputAbi = self._lookupAbi('addAuthorizedAddress(address)').inputs;
            [target
    ] = BaseContract._formatABIDataItemList(inputAbi, [target
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('addAuthorizedAddress(address)').functions.addAuthorizedAddress(
                target
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
            target: string,
        ): string {
            const self = this as any as ERC20ProxyContract;
            const inputAbi = self._lookupAbi('addAuthorizedAddress(address)').inputs;
            [target
    ] = BaseContract._formatABIDataItemList(inputAbi, [target
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('addAuthorizedAddress(address)').functions.addAuthorizedAddress(
                target
            ).data;
            return abiEncodedTransactionData;
        },
    };
    public authorities = {
        async callAsync(
            index_0: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as ERC20ProxyContract;
            const functionSignature = 'authorities(uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [index_0
        ] = BaseContract._formatABIDataItemList(inputAbi, [index_0
        ], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.authorities(
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
            const outputAbi = (_.find(self.abi, {name: 'authorities'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public removeAuthorizedAddress = {
        async sendTransactionAsync(
            target: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as ERC20ProxyContract;
            const inputAbi = self._lookupAbi('removeAuthorizedAddress(address)').inputs;
            [target
    ] = BaseContract._formatABIDataItemList(inputAbi, [target
    ], BaseContract._bigNumberToString.bind(self));
            const encodedData = self._lookupEthersInterface('removeAuthorizedAddress(address)').functions.removeAuthorizedAddress(
                target
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.removeAuthorizedAddress.estimateGasAsync.bind(
                    self,
                    target
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            target: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ERC20ProxyContract;
            const inputAbi = self._lookupAbi('removeAuthorizedAddress(address)').inputs;
            [target
    ] = BaseContract._formatABIDataItemList(inputAbi, [target
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('removeAuthorizedAddress(address)').functions.removeAuthorizedAddress(
                target
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
            target: string,
        ): string {
            const self = this as any as ERC20ProxyContract;
            const inputAbi = self._lookupAbi('removeAuthorizedAddress(address)').inputs;
            [target
    ] = BaseContract._formatABIDataItemList(inputAbi, [target
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('removeAuthorizedAddress(address)').functions.removeAuthorizedAddress(
                target
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
            const self = this as any as ERC20ProxyContract;
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
    public removeAuthorizedAddressAtIndex = {
        async sendTransactionAsync(
            target: string,
            index: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as ERC20ProxyContract;
            const inputAbi = self._lookupAbi('removeAuthorizedAddressAtIndex(address,uint256)').inputs;
            [target,
    index
    ] = BaseContract._formatABIDataItemList(inputAbi, [target,
    index
    ], BaseContract._bigNumberToString.bind(self));
            const encodedData = self._lookupEthersInterface('removeAuthorizedAddressAtIndex(address,uint256)').functions.removeAuthorizedAddressAtIndex(
                target,
                index
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.removeAuthorizedAddressAtIndex.estimateGasAsync.bind(
                    self,
                    target,
                    index
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            target: string,
            index: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ERC20ProxyContract;
            const inputAbi = self._lookupAbi('removeAuthorizedAddressAtIndex(address,uint256)').inputs;
            [target,
    index
    ] = BaseContract._formatABIDataItemList(inputAbi, [target,
    index
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('removeAuthorizedAddressAtIndex(address,uint256)').functions.removeAuthorizedAddressAtIndex(
                target,
                index
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
            target: string,
            index: BigNumber,
        ): string {
            const self = this as any as ERC20ProxyContract;
            const inputAbi = self._lookupAbi('removeAuthorizedAddressAtIndex(address,uint256)').inputs;
            [target,
    index
    ] = BaseContract._formatABIDataItemList(inputAbi, [target,
    index
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('removeAuthorizedAddressAtIndex(address,uint256)').functions.removeAuthorizedAddressAtIndex(
                target,
                index
            ).data;
            return abiEncodedTransactionData;
        },
    };
    public transferFrom = {
        async sendTransactionAsync(
            assetData: string,
            from: string,
            to: string,
            amount: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as ERC20ProxyContract;
            const inputAbi = self._lookupAbi('transferFrom(bytes,address,address,uint256)').inputs;
            [assetData,
    from,
    to,
    amount
    ] = BaseContract._formatABIDataItemList(inputAbi, [assetData,
    from,
    to,
    amount
    ], BaseContract._bigNumberToString.bind(self));
            const encodedData = self._lookupEthersInterface('transferFrom(bytes,address,address,uint256)').functions.transferFrom(
                assetData,
                from,
                to,
                amount
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.transferFrom.estimateGasAsync.bind(
                    self,
                    assetData,
                    from,
                    to,
                    amount
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            assetData: string,
            from: string,
            to: string,
            amount: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ERC20ProxyContract;
            const inputAbi = self._lookupAbi('transferFrom(bytes,address,address,uint256)').inputs;
            [assetData,
    from,
    to,
    amount
    ] = BaseContract._formatABIDataItemList(inputAbi, [assetData,
    from,
    to,
    amount
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('transferFrom(bytes,address,address,uint256)').functions.transferFrom(
                assetData,
                from,
                to,
                amount
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
            assetData: string,
            from: string,
            to: string,
            amount: BigNumber,
        ): string {
            const self = this as any as ERC20ProxyContract;
            const inputAbi = self._lookupAbi('transferFrom(bytes,address,address,uint256)').inputs;
            [assetData,
    from,
    to,
    amount
    ] = BaseContract._formatABIDataItemList(inputAbi, [assetData,
    from,
    to,
    amount
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('transferFrom(bytes,address,address,uint256)').functions.transferFrom(
                assetData,
                from,
                to,
                amount
            ).data;
            return abiEncodedTransactionData;
        },
    };
    public getProxyId = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as ERC20ProxyContract;
            const functionSignature = 'getProxyId()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getProxyId(
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
            const outputAbi = (_.find(self.abi, {name: 'getProxyId'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public authorized = {
        async callAsync(
            index_0: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as ERC20ProxyContract;
            const functionSignature = 'authorized(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [index_0
        ] = BaseContract._formatABIDataItemList(inputAbi, [index_0
        ], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.authorized(
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
            const outputAbi = (_.find(self.abi, {name: 'authorized'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getAuthorizedAddresses = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string[]
        > {
            const self = this as any as ERC20ProxyContract;
            const functionSignature = 'getAuthorizedAddresses()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getAuthorizedAddresses(
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
            const outputAbi = (_.find(self.abi, {name: 'getAuthorizedAddresses'}) as MethodAbi).outputs;
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
            const self = this as any as ERC20ProxyContract;
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
            const self = this as any as ERC20ProxyContract;
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
            const self = this as any as ERC20ProxyContract;
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
    public static async deployFrom0xArtifactAsync(
        artifact: ContractArtifact,
        provider: Provider,
        txDefaults: Partial<TxData>,
    ): Promise<ERC20ProxyContract> {
        if (_.isUndefined(artifact.compilerOutput)) {
            throw new Error('Compiler output not found in the artifact file');
        }
        const bytecode = artifact.compilerOutput.evm.bytecode.object;
        const abi = artifact.compilerOutput.abi;
        return ERC20ProxyContract.deployAsync(bytecode, abi, provider, txDefaults, );
    }
    public static async deployAsync(
        bytecode: string,
        abi: ContractAbi,
        provider: Provider,
        txDefaults: Partial<TxData>,
    ): Promise<ERC20ProxyContract> {
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
        logUtils.log(`ERC20Proxy successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new ERC20ProxyContract(abi, txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [];
        return contractInstance;
    }
    constructor(abi: ContractAbi, address: string, provider: Provider, txDefaults?: Partial<TxData>) {
        super('ERC20Proxy', abi, address, provider, txDefaults);
        classUtils.bindAll(this, ['_ethersInterfacesByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
    }
} // tslint:disable:max-file-line-count
