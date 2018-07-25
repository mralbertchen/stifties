"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
// tslint:disable:no-consecutive-blank-lines ordered-imports align trailing-comma whitespace
// tslint:disable:no-unused-variable
var base_contract_1 = require("@0xproject/base-contract");
var utils_1 = require("@0xproject/utils");
var web3_wrapper_1 = require("@0xproject/web3-wrapper");
var ethers = require("ethers");
var _ = require("lodash");
var ERC20ProxyEvents;
(function (ERC20ProxyEvents) {
    ERC20ProxyEvents["AuthorizedAddressAdded"] = "AuthorizedAddressAdded";
    ERC20ProxyEvents["AuthorizedAddressRemoved"] = "AuthorizedAddressRemoved";
})(ERC20ProxyEvents = exports.ERC20ProxyEvents || (exports.ERC20ProxyEvents = {}));
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
var ERC20ProxyContract = /** @class */ (function (_super) {
    __extends(ERC20ProxyContract, _super);
    function ERC20ProxyContract(abi, address, provider, txDefaults) {
        var _this = _super.call(this, 'ERC20Proxy', abi, address, provider, txDefaults) || this;
        _this.addAuthorizedAddress = {
            sendTransactionAsync: function (target, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('addAuthorizedAddress(address)').inputs;
                                target = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [target
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self))[0];
                                encodedData = self._lookupEthersInterface('addAuthorizedAddress(address)').functions.addAuthorizedAddress(target).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.addAuthorizedAddress.estimateGasAsync.bind(self, target))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (target, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('addAuthorizedAddress(address)').inputs;
                                target = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [target
                                ], base_contract_1.BaseContract._bigNumberToString)[0];
                                encodedData = self._lookupEthersInterface('addAuthorizedAddress(address)').functions.addAuthorizedAddress(target).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (target) {
                var self = this;
                var inputAbi = self._lookupAbi('addAuthorizedAddress(address)').inputs;
                target = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [target
                ], base_contract_1.BaseContract._bigNumberToString)[0];
                var abiEncodedTransactionData = self._lookupEthersInterface('addAuthorizedAddress(address)').functions.addAuthorizedAddress(target).data;
                return abiEncodedTransactionData;
            }
        };
        _this.authorities = {
            callAsync: function (index_0, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'authorities(uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                index_0 = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [index_0
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self))[0];
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.authorities(index_0);
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'authorities' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.removeAuthorizedAddress = {
            sendTransactionAsync: function (target, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('removeAuthorizedAddress(address)').inputs;
                                target = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [target
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self))[0];
                                encodedData = self._lookupEthersInterface('removeAuthorizedAddress(address)').functions.removeAuthorizedAddress(target).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.removeAuthorizedAddress.estimateGasAsync.bind(self, target))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (target, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('removeAuthorizedAddress(address)').inputs;
                                target = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [target
                                ], base_contract_1.BaseContract._bigNumberToString)[0];
                                encodedData = self._lookupEthersInterface('removeAuthorizedAddress(address)').functions.removeAuthorizedAddress(target).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (target) {
                var self = this;
                var inputAbi = self._lookupAbi('removeAuthorizedAddress(address)').inputs;
                target = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [target
                ], base_contract_1.BaseContract._bigNumberToString)[0];
                var abiEncodedTransactionData = self._lookupEthersInterface('removeAuthorizedAddress(address)').functions.removeAuthorizedAddress(target).data;
                return abiEncodedTransactionData;
            }
        };
        _this.owner = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'owner()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.owner();
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'owner' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.removeAuthorizedAddressAtIndex = {
            sendTransactionAsync: function (target, index, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('removeAuthorizedAddressAtIndex(address,uint256)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [target,
                                    index
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), target = _a[0], index = _a[1];
                                encodedData = self._lookupEthersInterface('removeAuthorizedAddressAtIndex(address,uint256)').functions.removeAuthorizedAddressAtIndex(target, index).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.removeAuthorizedAddressAtIndex.estimateGasAsync.bind(self, target, index))];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _b.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (target, index, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, gas, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('removeAuthorizedAddressAtIndex(address,uint256)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [target,
                                    index
                                ], base_contract_1.BaseContract._bigNumberToString), target = _a[0], index = _a[1];
                                encodedData = self._lookupEthersInterface('removeAuthorizedAddressAtIndex(address,uint256)').functions.removeAuthorizedAddressAtIndex(target, index).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (target, index) {
                var self = this;
                var inputAbi = self._lookupAbi('removeAuthorizedAddressAtIndex(address,uint256)').inputs;
                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [target,
                    index
                ], base_contract_1.BaseContract._bigNumberToString), target = _a[0], index = _a[1];
                var abiEncodedTransactionData = self._lookupEthersInterface('removeAuthorizedAddressAtIndex(address,uint256)').functions.removeAuthorizedAddressAtIndex(target, index).data;
                return abiEncodedTransactionData;
                var _a;
            }
        };
        _this.transferFrom = {
            sendTransactionAsync: function (assetData, from, to, amount, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('transferFrom(bytes,address,address,uint256)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [assetData,
                                    from,
                                    to,
                                    amount
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), assetData = _a[0], from = _a[1], to = _a[2], amount = _a[3];
                                encodedData = self._lookupEthersInterface('transferFrom(bytes,address,address,uint256)').functions.transferFrom(assetData, from, to, amount).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.transferFrom.estimateGasAsync.bind(self, assetData, from, to, amount))];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _b.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (assetData, from, to, amount, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, gas, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('transferFrom(bytes,address,address,uint256)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [assetData,
                                    from,
                                    to,
                                    amount
                                ], base_contract_1.BaseContract._bigNumberToString), assetData = _a[0], from = _a[1], to = _a[2], amount = _a[3];
                                encodedData = self._lookupEthersInterface('transferFrom(bytes,address,address,uint256)').functions.transferFrom(assetData, from, to, amount).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (assetData, from, to, amount) {
                var self = this;
                var inputAbi = self._lookupAbi('transferFrom(bytes,address,address,uint256)').inputs;
                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [assetData,
                    from,
                    to,
                    amount
                ], base_contract_1.BaseContract._bigNumberToString), assetData = _a[0], from = _a[1], to = _a[2], amount = _a[3];
                var abiEncodedTransactionData = self._lookupEthersInterface('transferFrom(bytes,address,address,uint256)').functions.transferFrom(assetData, from, to, amount).data;
                return abiEncodedTransactionData;
                var _a;
            }
        };
        _this.getProxyId = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getProxyId()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getProxyId();
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getProxyId' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.authorized = {
            callAsync: function (index_0, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'authorized(address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                index_0 = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [index_0
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self))[0];
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.authorized(index_0);
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'authorized' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.getAuthorizedAddresses = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getAuthorizedAddresses()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getAuthorizedAddresses();
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getAuthorizedAddresses' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.transferOwnership = {
            sendTransactionAsync: function (newOwner, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('transferOwnership(address)').inputs;
                                newOwner = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [newOwner
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self))[0];
                                encodedData = self._lookupEthersInterface('transferOwnership(address)').functions.transferOwnership(newOwner).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.transferOwnership.estimateGasAsync.bind(self, newOwner))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (newOwner, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('transferOwnership(address)').inputs;
                                newOwner = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [newOwner
                                ], base_contract_1.BaseContract._bigNumberToString)[0];
                                encodedData = self._lookupEthersInterface('transferOwnership(address)').functions.transferOwnership(newOwner).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (newOwner) {
                var self = this;
                var inputAbi = self._lookupAbi('transferOwnership(address)').inputs;
                newOwner = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [newOwner
                ], base_contract_1.BaseContract._bigNumberToString)[0];
                var abiEncodedTransactionData = self._lookupEthersInterface('transferOwnership(address)').functions.transferOwnership(newOwner).data;
                return abiEncodedTransactionData;
            }
        };
        utils_1.classUtils.bindAll(_this, ['_ethersInterfacesByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
        return _this;
    }
    ERC20ProxyContract.deployFrom0xArtifactAsync = function (artifact, provider, txDefaults) {
        return __awaiter(this, void 0, void 0, function () {
            var bytecode, abi;
            return __generator(this, function (_a) {
                if (_.isUndefined(artifact.compilerOutput)) {
                    throw new Error('Compiler output not found in the artifact file');
                }
                bytecode = artifact.compilerOutput.evm.bytecode.object;
                abi = artifact.compilerOutput.abi;
                return [2 /*return*/, ERC20ProxyContract.deployAsync(bytecode, abi, provider, txDefaults)];
            });
        });
    };
    ERC20ProxyContract.deployAsync = function (bytecode, abi, provider, txDefaults) {
        return __awaiter(this, void 0, void 0, function () {
            var constructorAbi, txData, web3Wrapper, txDataWithDefaults, txHash, txReceipt, contractInstance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        constructorAbi = base_contract_1.BaseContract._lookupConstructorAbi(abi);
                        base_contract_1.BaseContract._formatABIDataItemList(constructorAbi.inputs, [], base_contract_1.BaseContract._bigNumberToString);
                        txData = ethers.Contract.getDeployTransaction(bytecode, abi);
                        web3Wrapper = new web3_wrapper_1.Web3Wrapper(provider);
                        return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(txData, txDefaults, web3Wrapper.estimateGasAsync.bind(web3Wrapper))];
                    case 1:
                        txDataWithDefaults = _a.sent();
                        return [4 /*yield*/, web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                    case 2:
                        txHash = _a.sent();
                        utils_1.logUtils.log("transactionHash: " + txHash);
                        return [4 /*yield*/, web3Wrapper.awaitTransactionMinedAsync(txHash)];
                    case 3:
                        txReceipt = _a.sent();
                        utils_1.logUtils.log("ERC20Proxy successfully deployed at " + txReceipt.contractAddress);
                        contractInstance = new ERC20ProxyContract(abi, txReceipt.contractAddress, provider, txDefaults);
                        contractInstance.constructorArgs = [];
                        return [2 /*return*/, contractInstance];
                }
            });
        });
    };
    return ERC20ProxyContract;
}(base_contract_1.BaseContract)); // tslint:disable:max-file-line-count
exports.ERC20ProxyContract = ERC20ProxyContract;
