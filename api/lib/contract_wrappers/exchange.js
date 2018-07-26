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
var ExchangeEvents;
(function (ExchangeEvents) {
    ExchangeEvents["SignatureValidatorApproval"] = "SignatureValidatorApproval";
    ExchangeEvents["Fill"] = "Fill";
    ExchangeEvents["Cancel"] = "Cancel";
    ExchangeEvents["CancelUpTo"] = "CancelUpTo";
    ExchangeEvents["AssetProxySet"] = "AssetProxySet";
})(ExchangeEvents = exports.ExchangeEvents || (exports.ExchangeEvents = {}));
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
var ExchangeContract = /** @class */ (function (_super) {
    __extends(ExchangeContract, _super);
    function ExchangeContract(abi, address, provider, txDefaults) {
        var _this = _super.call(this, 'Exchange', abi, address, provider, txDefaults) || this;
        _this.EIP712_DOMAIN_SEPARATOR_SCHEMA_HASH = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'EIP712_DOMAIN_SEPARATOR_SCHEMA_HASH()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.EIP712_DOMAIN_SEPARATOR_SCHEMA_HASH();
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'EIP712_DOMAIN_SEPARATOR_SCHEMA_HASH' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.filled = {
            callAsync: function (index_0, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'filled(bytes32)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                index_0 = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [index_0
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self))[0];
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.filled(index_0);
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'filled' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.batchFillOrders = {
            sendTransactionAsync: function (orders, takerAssetFillAmounts, signatures, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('batchFillOrders(tuple[],uint256[],bytes[])').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    takerAssetFillAmounts,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), orders = _a[0], takerAssetFillAmounts = _a[1], signatures = _a[2];
                                encodedData = self._lookupEthersInterface('batchFillOrders(tuple[],uint256[],bytes[])').functions.batchFillOrders(orders, takerAssetFillAmounts, signatures).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.batchFillOrders.estimateGasAsync.bind(self, orders, takerAssetFillAmounts, signatures))];
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
            estimateGasAsync: function (orders, takerAssetFillAmounts, signatures, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, gas, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('batchFillOrders(tuple[],uint256[],bytes[])').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    takerAssetFillAmounts,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString), orders = _a[0], takerAssetFillAmounts = _a[1], signatures = _a[2];
                                encodedData = self._lookupEthersInterface('batchFillOrders(tuple[],uint256[],bytes[])').functions.batchFillOrders(orders, takerAssetFillAmounts, signatures).data;
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
            getABIEncodedTransactionData: function (orders, takerAssetFillAmounts, signatures) {
                var self = this;
                var inputAbi = self._lookupAbi('batchFillOrders(tuple[],uint256[],bytes[])').inputs;
                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                    takerAssetFillAmounts,
                    signatures
                ], base_contract_1.BaseContract._bigNumberToString), orders = _a[0], takerAssetFillAmounts = _a[1], signatures = _a[2];
                var abiEncodedTransactionData = self._lookupEthersInterface('batchFillOrders(tuple[],uint256[],bytes[])').functions.batchFillOrders(orders, takerAssetFillAmounts, signatures).data;
                return abiEncodedTransactionData;
                var _a;
            },
            callAsync: function (orders, takerAssetFillAmounts, signatures, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'batchFillOrders(tuple[],uint256[],bytes[])';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    takerAssetFillAmounts,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), orders = _a[0], takerAssetFillAmounts = _a[1], signatures = _a[2];
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.batchFillOrders(orders, takerAssetFillAmounts, signatures);
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'batchFillOrders' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.cancelled = {
            callAsync: function (index_0, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'cancelled(bytes32)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                index_0 = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [index_0
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self))[0];
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.cancelled(index_0);
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'cancelled' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.preSign = {
            sendTransactionAsync: function (hash, signerAddress, signature, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('preSign(bytes32,address,bytes)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [hash,
                                    signerAddress,
                                    signature
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), hash = _a[0], signerAddress = _a[1], signature = _a[2];
                                encodedData = self._lookupEthersInterface('preSign(bytes32,address,bytes)').functions.preSign(hash, signerAddress, signature).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.preSign.estimateGasAsync.bind(self, hash, signerAddress, signature))];
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
            estimateGasAsync: function (hash, signerAddress, signature, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, gas, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('preSign(bytes32,address,bytes)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [hash,
                                    signerAddress,
                                    signature
                                ], base_contract_1.BaseContract._bigNumberToString), hash = _a[0], signerAddress = _a[1], signature = _a[2];
                                encodedData = self._lookupEthersInterface('preSign(bytes32,address,bytes)').functions.preSign(hash, signerAddress, signature).data;
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
            getABIEncodedTransactionData: function (hash, signerAddress, signature) {
                var self = this;
                var inputAbi = self._lookupAbi('preSign(bytes32,address,bytes)').inputs;
                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [hash,
                    signerAddress,
                    signature
                ], base_contract_1.BaseContract._bigNumberToString), hash = _a[0], signerAddress = _a[1], signature = _a[2];
                var abiEncodedTransactionData = self._lookupEthersInterface('preSign(bytes32,address,bytes)').functions.preSign(hash, signerAddress, signature).data;
                return abiEncodedTransactionData;
                var _a;
            }
        };
        _this.matchOrders = {
            sendTransactionAsync: function (leftOrder, rightOrder, leftSignature, rightSignature, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('matchOrders({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},{address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},bytes,bytes)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [leftOrder,
                                    rightOrder,
                                    leftSignature,
                                    rightSignature
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), leftOrder = _a[0], rightOrder = _a[1], leftSignature = _a[2], rightSignature = _a[3];
                                encodedData = self._lookupEthersInterface('matchOrders({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},{address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},bytes,bytes)').functions.matchOrders(leftOrder, rightOrder, leftSignature, rightSignature).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.matchOrders.estimateGasAsync.bind(self, leftOrder, rightOrder, leftSignature, rightSignature))];
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
            estimateGasAsync: function (leftOrder, rightOrder, leftSignature, rightSignature, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, gas, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('matchOrders({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},{address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},bytes,bytes)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [leftOrder,
                                    rightOrder,
                                    leftSignature,
                                    rightSignature
                                ], base_contract_1.BaseContract._bigNumberToString), leftOrder = _a[0], rightOrder = _a[1], leftSignature = _a[2], rightSignature = _a[3];
                                encodedData = self._lookupEthersInterface('matchOrders({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},{address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},bytes,bytes)').functions.matchOrders(leftOrder, rightOrder, leftSignature, rightSignature).data;
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
            getABIEncodedTransactionData: function (leftOrder, rightOrder, leftSignature, rightSignature) {
                var self = this;
                var inputAbi = self._lookupAbi('matchOrders({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},{address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},bytes,bytes)').inputs;
                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [leftOrder,
                    rightOrder,
                    leftSignature,
                    rightSignature
                ], base_contract_1.BaseContract._bigNumberToString), leftOrder = _a[0], rightOrder = _a[1], leftSignature = _a[2], rightSignature = _a[3];
                var abiEncodedTransactionData = self._lookupEthersInterface('matchOrders({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},{address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},bytes,bytes)').functions.matchOrders(leftOrder, rightOrder, leftSignature, rightSignature).data;
                return abiEncodedTransactionData;
                var _a;
            },
            callAsync: function (leftOrder, rightOrder, leftSignature, rightSignature, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'matchOrders({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},{address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},bytes,bytes)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [leftOrder,
                                    rightOrder,
                                    leftSignature,
                                    rightSignature
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), leftOrder = _a[0], rightOrder = _a[1], leftSignature = _a[2], rightSignature = _a[3];
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.matchOrders(leftOrder, rightOrder, leftSignature, rightSignature);
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'matchOrders' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.fillOrderNoThrow = {
            sendTransactionAsync: function (order, takerAssetFillAmount, signature, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('fillOrderNoThrow({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [order,
                                    takerAssetFillAmount,
                                    signature
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), order = _a[0], takerAssetFillAmount = _a[1], signature = _a[2];
                                encodedData = self._lookupEthersInterface('fillOrderNoThrow({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').functions.fillOrderNoThrow(order, takerAssetFillAmount, signature).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.fillOrderNoThrow.estimateGasAsync.bind(self, order, takerAssetFillAmount, signature))];
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
            estimateGasAsync: function (order, takerAssetFillAmount, signature, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, gas, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('fillOrderNoThrow({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [order,
                                    takerAssetFillAmount,
                                    signature
                                ], base_contract_1.BaseContract._bigNumberToString), order = _a[0], takerAssetFillAmount = _a[1], signature = _a[2];
                                encodedData = self._lookupEthersInterface('fillOrderNoThrow({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').functions.fillOrderNoThrow(order, takerAssetFillAmount, signature).data;
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
            getABIEncodedTransactionData: function (order, takerAssetFillAmount, signature) {
                var self = this;
                var inputAbi = self._lookupAbi('fillOrderNoThrow({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').inputs;
                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [order,
                    takerAssetFillAmount,
                    signature
                ], base_contract_1.BaseContract._bigNumberToString), order = _a[0], takerAssetFillAmount = _a[1], signature = _a[2];
                var abiEncodedTransactionData = self._lookupEthersInterface('fillOrderNoThrow({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').functions.fillOrderNoThrow(order, takerAssetFillAmount, signature).data;
                return abiEncodedTransactionData;
                var _a;
            },
            callAsync: function (order, takerAssetFillAmount, signature, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'fillOrderNoThrow({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [order,
                                    takerAssetFillAmount,
                                    signature
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), order = _a[0], takerAssetFillAmount = _a[1], signature = _a[2];
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.fillOrderNoThrow(order, takerAssetFillAmount, signature);
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'fillOrderNoThrow' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.assetProxies = {
            callAsync: function (index_0, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'assetProxies(bytes4)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                index_0 = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [index_0
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self))[0];
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.assetProxies(index_0);
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'assetProxies' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.batchCancelOrders = {
            sendTransactionAsync: function (orders, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('batchCancelOrders(tuple[])').inputs;
                                orders = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self))[0];
                                encodedData = self._lookupEthersInterface('batchCancelOrders(tuple[])').functions.batchCancelOrders(orders).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.batchCancelOrders.estimateGasAsync.bind(self, orders))];
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
            estimateGasAsync: function (orders, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('batchCancelOrders(tuple[])').inputs;
                                orders = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders
                                ], base_contract_1.BaseContract._bigNumberToString)[0];
                                encodedData = self._lookupEthersInterface('batchCancelOrders(tuple[])').functions.batchCancelOrders(orders).data;
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
            getABIEncodedTransactionData: function (orders) {
                var self = this;
                var inputAbi = self._lookupAbi('batchCancelOrders(tuple[])').inputs;
                orders = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders
                ], base_contract_1.BaseContract._bigNumberToString)[0];
                var abiEncodedTransactionData = self._lookupEthersInterface('batchCancelOrders(tuple[])').functions.batchCancelOrders(orders).data;
                return abiEncodedTransactionData;
            }
        };
        _this.batchFillOrKillOrders = {
            sendTransactionAsync: function (orders, takerAssetFillAmounts, signatures, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('batchFillOrKillOrders(tuple[],uint256[],bytes[])').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    takerAssetFillAmounts,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), orders = _a[0], takerAssetFillAmounts = _a[1], signatures = _a[2];
                                encodedData = self._lookupEthersInterface('batchFillOrKillOrders(tuple[],uint256[],bytes[])').functions.batchFillOrKillOrders(orders, takerAssetFillAmounts, signatures).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.batchFillOrKillOrders.estimateGasAsync.bind(self, orders, takerAssetFillAmounts, signatures))];
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
            estimateGasAsync: function (orders, takerAssetFillAmounts, signatures, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, gas, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('batchFillOrKillOrders(tuple[],uint256[],bytes[])').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    takerAssetFillAmounts,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString), orders = _a[0], takerAssetFillAmounts = _a[1], signatures = _a[2];
                                encodedData = self._lookupEthersInterface('batchFillOrKillOrders(tuple[],uint256[],bytes[])').functions.batchFillOrKillOrders(orders, takerAssetFillAmounts, signatures).data;
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
            getABIEncodedTransactionData: function (orders, takerAssetFillAmounts, signatures) {
                var self = this;
                var inputAbi = self._lookupAbi('batchFillOrKillOrders(tuple[],uint256[],bytes[])').inputs;
                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                    takerAssetFillAmounts,
                    signatures
                ], base_contract_1.BaseContract._bigNumberToString), orders = _a[0], takerAssetFillAmounts = _a[1], signatures = _a[2];
                var abiEncodedTransactionData = self._lookupEthersInterface('batchFillOrKillOrders(tuple[],uint256[],bytes[])').functions.batchFillOrKillOrders(orders, takerAssetFillAmounts, signatures).data;
                return abiEncodedTransactionData;
                var _a;
            },
            callAsync: function (orders, takerAssetFillAmounts, signatures, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'batchFillOrKillOrders(tuple[],uint256[],bytes[])';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    takerAssetFillAmounts,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), orders = _a[0], takerAssetFillAmounts = _a[1], signatures = _a[2];
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.batchFillOrKillOrders(orders, takerAssetFillAmounts, signatures);
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'batchFillOrKillOrders' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.cancelOrdersUpTo = {
            sendTransactionAsync: function (targetOrderEpoch, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('cancelOrdersUpTo(uint256)').inputs;
                                targetOrderEpoch = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [targetOrderEpoch
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self))[0];
                                encodedData = self._lookupEthersInterface('cancelOrdersUpTo(uint256)').functions.cancelOrdersUpTo(targetOrderEpoch).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.cancelOrdersUpTo.estimateGasAsync.bind(self, targetOrderEpoch))];
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
            estimateGasAsync: function (targetOrderEpoch, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('cancelOrdersUpTo(uint256)').inputs;
                                targetOrderEpoch = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [targetOrderEpoch
                                ], base_contract_1.BaseContract._bigNumberToString)[0];
                                encodedData = self._lookupEthersInterface('cancelOrdersUpTo(uint256)').functions.cancelOrdersUpTo(targetOrderEpoch).data;
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
            getABIEncodedTransactionData: function (targetOrderEpoch) {
                var self = this;
                var inputAbi = self._lookupAbi('cancelOrdersUpTo(uint256)').inputs;
                targetOrderEpoch = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [targetOrderEpoch
                ], base_contract_1.BaseContract._bigNumberToString)[0];
                var abiEncodedTransactionData = self._lookupEthersInterface('cancelOrdersUpTo(uint256)').functions.cancelOrdersUpTo(targetOrderEpoch).data;
                return abiEncodedTransactionData;
            }
        };
        _this.batchFillOrdersNoThrow = {
            sendTransactionAsync: function (orders, takerAssetFillAmounts, signatures, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('batchFillOrdersNoThrow(tuple[],uint256[],bytes[])').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    takerAssetFillAmounts,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), orders = _a[0], takerAssetFillAmounts = _a[1], signatures = _a[2];
                                encodedData = self._lookupEthersInterface('batchFillOrdersNoThrow(tuple[],uint256[],bytes[])').functions.batchFillOrdersNoThrow(orders, takerAssetFillAmounts, signatures).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.batchFillOrdersNoThrow.estimateGasAsync.bind(self, orders, takerAssetFillAmounts, signatures))];
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
            estimateGasAsync: function (orders, takerAssetFillAmounts, signatures, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, gas, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('batchFillOrdersNoThrow(tuple[],uint256[],bytes[])').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    takerAssetFillAmounts,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString), orders = _a[0], takerAssetFillAmounts = _a[1], signatures = _a[2];
                                encodedData = self._lookupEthersInterface('batchFillOrdersNoThrow(tuple[],uint256[],bytes[])').functions.batchFillOrdersNoThrow(orders, takerAssetFillAmounts, signatures).data;
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
            getABIEncodedTransactionData: function (orders, takerAssetFillAmounts, signatures) {
                var self = this;
                var inputAbi = self._lookupAbi('batchFillOrdersNoThrow(tuple[],uint256[],bytes[])').inputs;
                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                    takerAssetFillAmounts,
                    signatures
                ], base_contract_1.BaseContract._bigNumberToString), orders = _a[0], takerAssetFillAmounts = _a[1], signatures = _a[2];
                var abiEncodedTransactionData = self._lookupEthersInterface('batchFillOrdersNoThrow(tuple[],uint256[],bytes[])').functions.batchFillOrdersNoThrow(orders, takerAssetFillAmounts, signatures).data;
                return abiEncodedTransactionData;
                var _a;
            },
            callAsync: function (orders, takerAssetFillAmounts, signatures, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'batchFillOrdersNoThrow(tuple[],uint256[],bytes[])';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    takerAssetFillAmounts,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), orders = _a[0], takerAssetFillAmounts = _a[1], signatures = _a[2];
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.batchFillOrdersNoThrow(orders, takerAssetFillAmounts, signatures);
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'batchFillOrdersNoThrow' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.getAssetProxy = {
            callAsync: function (assetProxyId, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getAssetProxy(bytes4)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                assetProxyId = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [assetProxyId
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self))[0];
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getAssetProxy(assetProxyId);
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getAssetProxy' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.transactions = {
            callAsync: function (index_0, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'transactions(bytes32)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                index_0 = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [index_0
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self))[0];
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.transactions(index_0);
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'transactions' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.fillOrKillOrder = {
            sendTransactionAsync: function (order, takerAssetFillAmount, signature, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('fillOrKillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [order,
                                    takerAssetFillAmount,
                                    signature
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), order = _a[0], takerAssetFillAmount = _a[1], signature = _a[2];
                                encodedData = self._lookupEthersInterface('fillOrKillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').functions.fillOrKillOrder(order, takerAssetFillAmount, signature).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.fillOrKillOrder.estimateGasAsync.bind(self, order, takerAssetFillAmount, signature))];
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
            estimateGasAsync: function (order, takerAssetFillAmount, signature, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, gas, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('fillOrKillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [order,
                                    takerAssetFillAmount,
                                    signature
                                ], base_contract_1.BaseContract._bigNumberToString), order = _a[0], takerAssetFillAmount = _a[1], signature = _a[2];
                                encodedData = self._lookupEthersInterface('fillOrKillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').functions.fillOrKillOrder(order, takerAssetFillAmount, signature).data;
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
            getABIEncodedTransactionData: function (order, takerAssetFillAmount, signature) {
                var self = this;
                var inputAbi = self._lookupAbi('fillOrKillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').inputs;
                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [order,
                    takerAssetFillAmount,
                    signature
                ], base_contract_1.BaseContract._bigNumberToString), order = _a[0], takerAssetFillAmount = _a[1], signature = _a[2];
                var abiEncodedTransactionData = self._lookupEthersInterface('fillOrKillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').functions.fillOrKillOrder(order, takerAssetFillAmount, signature).data;
                return abiEncodedTransactionData;
                var _a;
            },
            callAsync: function (order, takerAssetFillAmount, signature, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'fillOrKillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [order,
                                    takerAssetFillAmount,
                                    signature
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), order = _a[0], takerAssetFillAmount = _a[1], signature = _a[2];
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.fillOrKillOrder(order, takerAssetFillAmount, signature);
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'fillOrKillOrder' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.setSignatureValidatorApproval = {
            sendTransactionAsync: function (validatorAddress, approval, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('setSignatureValidatorApproval(address,bool)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [validatorAddress,
                                    approval
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), validatorAddress = _a[0], approval = _a[1];
                                encodedData = self._lookupEthersInterface('setSignatureValidatorApproval(address,bool)').functions.setSignatureValidatorApproval(validatorAddress, approval).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.setSignatureValidatorApproval.estimateGasAsync.bind(self, validatorAddress, approval))];
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
            estimateGasAsync: function (validatorAddress, approval, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, gas, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('setSignatureValidatorApproval(address,bool)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [validatorAddress,
                                    approval
                                ], base_contract_1.BaseContract._bigNumberToString), validatorAddress = _a[0], approval = _a[1];
                                encodedData = self._lookupEthersInterface('setSignatureValidatorApproval(address,bool)').functions.setSignatureValidatorApproval(validatorAddress, approval).data;
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
            getABIEncodedTransactionData: function (validatorAddress, approval) {
                var self = this;
                var inputAbi = self._lookupAbi('setSignatureValidatorApproval(address,bool)').inputs;
                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [validatorAddress,
                    approval
                ], base_contract_1.BaseContract._bigNumberToString), validatorAddress = _a[0], approval = _a[1];
                var abiEncodedTransactionData = self._lookupEthersInterface('setSignatureValidatorApproval(address,bool)').functions.setSignatureValidatorApproval(validatorAddress, approval).data;
                return abiEncodedTransactionData;
                var _a;
            }
        };
        _this.allowedValidators = {
            callAsync: function (index_0, index_1, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'allowedValidators(address,address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [index_0,
                                    index_1
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), index_0 = _a[0], index_1 = _a[1];
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.allowedValidators(index_0, index_1);
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'allowedValidators' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.marketSellOrders = {
            sendTransactionAsync: function (orders, takerAssetFillAmount, signatures, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('marketSellOrders(tuple[],uint256,bytes[])').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    takerAssetFillAmount,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), orders = _a[0], takerAssetFillAmount = _a[1], signatures = _a[2];
                                encodedData = self._lookupEthersInterface('marketSellOrders(tuple[],uint256,bytes[])').functions.marketSellOrders(orders, takerAssetFillAmount, signatures).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.marketSellOrders.estimateGasAsync.bind(self, orders, takerAssetFillAmount, signatures))];
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
            estimateGasAsync: function (orders, takerAssetFillAmount, signatures, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, gas, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('marketSellOrders(tuple[],uint256,bytes[])').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    takerAssetFillAmount,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString), orders = _a[0], takerAssetFillAmount = _a[1], signatures = _a[2];
                                encodedData = self._lookupEthersInterface('marketSellOrders(tuple[],uint256,bytes[])').functions.marketSellOrders(orders, takerAssetFillAmount, signatures).data;
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
            getABIEncodedTransactionData: function (orders, takerAssetFillAmount, signatures) {
                var self = this;
                var inputAbi = self._lookupAbi('marketSellOrders(tuple[],uint256,bytes[])').inputs;
                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                    takerAssetFillAmount,
                    signatures
                ], base_contract_1.BaseContract._bigNumberToString), orders = _a[0], takerAssetFillAmount = _a[1], signatures = _a[2];
                var abiEncodedTransactionData = self._lookupEthersInterface('marketSellOrders(tuple[],uint256,bytes[])').functions.marketSellOrders(orders, takerAssetFillAmount, signatures).data;
                return abiEncodedTransactionData;
                var _a;
            },
            callAsync: function (orders, takerAssetFillAmount, signatures, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'marketSellOrders(tuple[],uint256,bytes[])';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    takerAssetFillAmount,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), orders = _a[0], takerAssetFillAmount = _a[1], signatures = _a[2];
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.marketSellOrders(orders, takerAssetFillAmount, signatures);
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'marketSellOrders' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.preSigned = {
            callAsync: function (index_0, index_1, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'preSigned(bytes32,address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [index_0,
                                    index_1
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), index_0 = _a[0], index_1 = _a[1];
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.preSigned(index_0, index_1);
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'preSigned' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.registerAssetProxy = {
            sendTransactionAsync: function (assetProxyId, newAssetProxy, oldAssetProxy, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('registerAssetProxy(bytes4,address,address)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [assetProxyId,
                                    newAssetProxy,
                                    oldAssetProxy
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), assetProxyId = _a[0], newAssetProxy = _a[1], oldAssetProxy = _a[2];
                                encodedData = self._lookupEthersInterface('registerAssetProxy(bytes4,address,address)').functions.registerAssetProxy(assetProxyId, newAssetProxy, oldAssetProxy).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.registerAssetProxy.estimateGasAsync.bind(self, assetProxyId, newAssetProxy, oldAssetProxy))];
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
            estimateGasAsync: function (assetProxyId, newAssetProxy, oldAssetProxy, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, gas, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('registerAssetProxy(bytes4,address,address)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [assetProxyId,
                                    newAssetProxy,
                                    oldAssetProxy
                                ], base_contract_1.BaseContract._bigNumberToString), assetProxyId = _a[0], newAssetProxy = _a[1], oldAssetProxy = _a[2];
                                encodedData = self._lookupEthersInterface('registerAssetProxy(bytes4,address,address)').functions.registerAssetProxy(assetProxyId, newAssetProxy, oldAssetProxy).data;
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
            getABIEncodedTransactionData: function (assetProxyId, newAssetProxy, oldAssetProxy) {
                var self = this;
                var inputAbi = self._lookupAbi('registerAssetProxy(bytes4,address,address)').inputs;
                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [assetProxyId,
                    newAssetProxy,
                    oldAssetProxy
                ], base_contract_1.BaseContract._bigNumberToString), assetProxyId = _a[0], newAssetProxy = _a[1], oldAssetProxy = _a[2];
                var abiEncodedTransactionData = self._lookupEthersInterface('registerAssetProxy(bytes4,address,address)').functions.registerAssetProxy(assetProxyId, newAssetProxy, oldAssetProxy).data;
                return abiEncodedTransactionData;
                var _a;
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
        _this.isValidSignature = {
            callAsync: function (hash, signerAddress, signature, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'isValidSignature(bytes32,address,bytes)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [hash,
                                    signerAddress,
                                    signature
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), hash = _a[0], signerAddress = _a[1], signature = _a[2];
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.isValidSignature(hash, signerAddress, signature);
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'isValidSignature' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.marketBuyOrdersNoThrow = {
            sendTransactionAsync: function (orders, makerAssetFillAmount, signatures, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('marketBuyOrdersNoThrow(tuple[],uint256,bytes[])').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    makerAssetFillAmount,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), orders = _a[0], makerAssetFillAmount = _a[1], signatures = _a[2];
                                encodedData = self._lookupEthersInterface('marketBuyOrdersNoThrow(tuple[],uint256,bytes[])').functions.marketBuyOrdersNoThrow(orders, makerAssetFillAmount, signatures).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.marketBuyOrdersNoThrow.estimateGasAsync.bind(self, orders, makerAssetFillAmount, signatures))];
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
            estimateGasAsync: function (orders, makerAssetFillAmount, signatures, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, gas, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('marketBuyOrdersNoThrow(tuple[],uint256,bytes[])').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    makerAssetFillAmount,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString), orders = _a[0], makerAssetFillAmount = _a[1], signatures = _a[2];
                                encodedData = self._lookupEthersInterface('marketBuyOrdersNoThrow(tuple[],uint256,bytes[])').functions.marketBuyOrdersNoThrow(orders, makerAssetFillAmount, signatures).data;
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
            getABIEncodedTransactionData: function (orders, makerAssetFillAmount, signatures) {
                var self = this;
                var inputAbi = self._lookupAbi('marketBuyOrdersNoThrow(tuple[],uint256,bytes[])').inputs;
                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                    makerAssetFillAmount,
                    signatures
                ], base_contract_1.BaseContract._bigNumberToString), orders = _a[0], makerAssetFillAmount = _a[1], signatures = _a[2];
                var abiEncodedTransactionData = self._lookupEthersInterface('marketBuyOrdersNoThrow(tuple[],uint256,bytes[])').functions.marketBuyOrdersNoThrow(orders, makerAssetFillAmount, signatures).data;
                return abiEncodedTransactionData;
                var _a;
            },
            callAsync: function (orders, makerAssetFillAmount, signatures, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'marketBuyOrdersNoThrow(tuple[],uint256,bytes[])';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    makerAssetFillAmount,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), orders = _a[0], makerAssetFillAmount = _a[1], signatures = _a[2];
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.marketBuyOrdersNoThrow(orders, makerAssetFillAmount, signatures);
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'marketBuyOrdersNoThrow' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.fillOrder = {
            sendTransactionAsync: function (order, takerAssetFillAmount, signature, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('fillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [order,
                                    takerAssetFillAmount,
                                    signature
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), order = _a[0], takerAssetFillAmount = _a[1], signature = _a[2];
                                encodedData = self._lookupEthersInterface('fillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').functions.fillOrder(order, takerAssetFillAmount, signature).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.fillOrder.estimateGasAsync.bind(self, order, takerAssetFillAmount, signature))];
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
            estimateGasAsync: function (order, takerAssetFillAmount, signature, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, gas, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('fillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [order,
                                    takerAssetFillAmount,
                                    signature
                                ], base_contract_1.BaseContract._bigNumberToString), order = _a[0], takerAssetFillAmount = _a[1], signature = _a[2];
                                encodedData = self._lookupEthersInterface('fillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').functions.fillOrder(order, takerAssetFillAmount, signature).data;
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
            getABIEncodedTransactionData: function (order, takerAssetFillAmount, signature) {
                var self = this;
                var inputAbi = self._lookupAbi('fillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').inputs;
                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [order,
                    takerAssetFillAmount,
                    signature
                ], base_contract_1.BaseContract._bigNumberToString), order = _a[0], takerAssetFillAmount = _a[1], signature = _a[2];
                var abiEncodedTransactionData = self._lookupEthersInterface('fillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').functions.fillOrder(order, takerAssetFillAmount, signature).data;
                return abiEncodedTransactionData;
                var _a;
            },
            callAsync: function (order, takerAssetFillAmount, signature, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'fillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [order,
                                    takerAssetFillAmount,
                                    signature
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), order = _a[0], takerAssetFillAmount = _a[1], signature = _a[2];
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.fillOrder(order, takerAssetFillAmount, signature);
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'fillOrder' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.executeTransaction = {
            sendTransactionAsync: function (salt, signerAddress, data, signature, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('executeTransaction(uint256,address,bytes,bytes)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [salt,
                                    signerAddress,
                                    data,
                                    signature
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), salt = _a[0], signerAddress = _a[1], data = _a[2], signature = _a[3];
                                encodedData = self._lookupEthersInterface('executeTransaction(uint256,address,bytes,bytes)').functions.executeTransaction(salt, signerAddress, data, signature).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.executeTransaction.estimateGasAsync.bind(self, salt, signerAddress, data, signature))];
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
            estimateGasAsync: function (salt, signerAddress, data, signature, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, gas, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('executeTransaction(uint256,address,bytes,bytes)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [salt,
                                    signerAddress,
                                    data,
                                    signature
                                ], base_contract_1.BaseContract._bigNumberToString), salt = _a[0], signerAddress = _a[1], data = _a[2], signature = _a[3];
                                encodedData = self._lookupEthersInterface('executeTransaction(uint256,address,bytes,bytes)').functions.executeTransaction(salt, signerAddress, data, signature).data;
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
            getABIEncodedTransactionData: function (salt, signerAddress, data, signature) {
                var self = this;
                var inputAbi = self._lookupAbi('executeTransaction(uint256,address,bytes,bytes)').inputs;
                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [salt,
                    signerAddress,
                    data,
                    signature
                ], base_contract_1.BaseContract._bigNumberToString), salt = _a[0], signerAddress = _a[1], data = _a[2], signature = _a[3];
                var abiEncodedTransactionData = self._lookupEthersInterface('executeTransaction(uint256,address,bytes,bytes)').functions.executeTransaction(salt, signerAddress, data, signature).data;
                return abiEncodedTransactionData;
                var _a;
            }
        };
        _this.getOrderInfo = {
            callAsync: function (order, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getOrderInfo({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes})';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                order = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [order
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self))[0];
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getOrderInfo(order);
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getOrderInfo' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.cancelOrder = {
            sendTransactionAsync: function (order, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('cancelOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes})').inputs;
                                order = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [order
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self))[0];
                                encodedData = self._lookupEthersInterface('cancelOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes})').functions.cancelOrder(order).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.cancelOrder.estimateGasAsync.bind(self, order))];
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
            estimateGasAsync: function (order, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('cancelOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes})').inputs;
                                order = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [order
                                ], base_contract_1.BaseContract._bigNumberToString)[0];
                                encodedData = self._lookupEthersInterface('cancelOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes})').functions.cancelOrder(order).data;
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
            getABIEncodedTransactionData: function (order) {
                var self = this;
                var inputAbi = self._lookupAbi('cancelOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes})').inputs;
                order = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [order
                ], base_contract_1.BaseContract._bigNumberToString)[0];
                var abiEncodedTransactionData = self._lookupEthersInterface('cancelOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes})').functions.cancelOrder(order).data;
                return abiEncodedTransactionData;
            }
        };
        _this.orderEpoch = {
            callAsync: function (index_0, index_1, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'orderEpoch(address,address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [index_0,
                                    index_1
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), index_0 = _a[0], index_1 = _a[1];
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.orderEpoch(index_0, index_1);
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'orderEpoch' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.marketSellOrdersNoThrow = {
            sendTransactionAsync: function (orders, takerAssetFillAmount, signatures, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('marketSellOrdersNoThrow(tuple[],uint256,bytes[])').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    takerAssetFillAmount,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), orders = _a[0], takerAssetFillAmount = _a[1], signatures = _a[2];
                                encodedData = self._lookupEthersInterface('marketSellOrdersNoThrow(tuple[],uint256,bytes[])').functions.marketSellOrdersNoThrow(orders, takerAssetFillAmount, signatures).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.marketSellOrdersNoThrow.estimateGasAsync.bind(self, orders, takerAssetFillAmount, signatures))];
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
            estimateGasAsync: function (orders, takerAssetFillAmount, signatures, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, gas, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('marketSellOrdersNoThrow(tuple[],uint256,bytes[])').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    takerAssetFillAmount,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString), orders = _a[0], takerAssetFillAmount = _a[1], signatures = _a[2];
                                encodedData = self._lookupEthersInterface('marketSellOrdersNoThrow(tuple[],uint256,bytes[])').functions.marketSellOrdersNoThrow(orders, takerAssetFillAmount, signatures).data;
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
            getABIEncodedTransactionData: function (orders, takerAssetFillAmount, signatures) {
                var self = this;
                var inputAbi = self._lookupAbi('marketSellOrdersNoThrow(tuple[],uint256,bytes[])').inputs;
                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                    takerAssetFillAmount,
                    signatures
                ], base_contract_1.BaseContract._bigNumberToString), orders = _a[0], takerAssetFillAmount = _a[1], signatures = _a[2];
                var abiEncodedTransactionData = self._lookupEthersInterface('marketSellOrdersNoThrow(tuple[],uint256,bytes[])').functions.marketSellOrdersNoThrow(orders, takerAssetFillAmount, signatures).data;
                return abiEncodedTransactionData;
                var _a;
            },
            callAsync: function (orders, takerAssetFillAmount, signatures, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'marketSellOrdersNoThrow(tuple[],uint256,bytes[])';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    takerAssetFillAmount,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), orders = _a[0], takerAssetFillAmount = _a[1], signatures = _a[2];
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.marketSellOrdersNoThrow(orders, takerAssetFillAmount, signatures);
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'marketSellOrdersNoThrow' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.EIP712_DOMAIN_HASH = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'EIP712_DOMAIN_HASH()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.EIP712_DOMAIN_HASH();
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'EIP712_DOMAIN_HASH' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.marketBuyOrders = {
            sendTransactionAsync: function (orders, makerAssetFillAmount, signatures, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('marketBuyOrders(tuple[],uint256,bytes[])').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    makerAssetFillAmount,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), orders = _a[0], makerAssetFillAmount = _a[1], signatures = _a[2];
                                encodedData = self._lookupEthersInterface('marketBuyOrders(tuple[],uint256,bytes[])').functions.marketBuyOrders(orders, makerAssetFillAmount, signatures).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.marketBuyOrders.estimateGasAsync.bind(self, orders, makerAssetFillAmount, signatures))];
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
            estimateGasAsync: function (orders, makerAssetFillAmount, signatures, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, gas, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('marketBuyOrders(tuple[],uint256,bytes[])').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    makerAssetFillAmount,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString), orders = _a[0], makerAssetFillAmount = _a[1], signatures = _a[2];
                                encodedData = self._lookupEthersInterface('marketBuyOrders(tuple[],uint256,bytes[])').functions.marketBuyOrders(orders, makerAssetFillAmount, signatures).data;
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
            getABIEncodedTransactionData: function (orders, makerAssetFillAmount, signatures) {
                var self = this;
                var inputAbi = self._lookupAbi('marketBuyOrders(tuple[],uint256,bytes[])').inputs;
                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                    makerAssetFillAmount,
                    signatures
                ], base_contract_1.BaseContract._bigNumberToString), orders = _a[0], makerAssetFillAmount = _a[1], signatures = _a[2];
                var abiEncodedTransactionData = self._lookupEthersInterface('marketBuyOrders(tuple[],uint256,bytes[])').functions.marketBuyOrders(orders, makerAssetFillAmount, signatures).data;
                return abiEncodedTransactionData;
                var _a;
            },
            callAsync: function (orders, makerAssetFillAmount, signatures, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'marketBuyOrders(tuple[],uint256,bytes[])';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    makerAssetFillAmount,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), orders = _a[0], makerAssetFillAmount = _a[1], signatures = _a[2];
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.marketBuyOrders(orders, makerAssetFillAmount, signatures);
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'marketBuyOrders' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.currentContextAddress = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'currentContextAddress()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.currentContextAddress();
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'currentContextAddress' }).outputs;
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
        _this.VERSION = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'VERSION()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.VERSION();
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'VERSION' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        utils_1.classUtils.bindAll(_this, ['_ethersInterfacesByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
        return _this;
    }
    ExchangeContract.deployFrom0xArtifactAsync = function (artifact, provider, txDefaults) {
        return __awaiter(this, void 0, void 0, function () {
            var bytecode, abi;
            return __generator(this, function (_a) {
                if (_.isUndefined(artifact.compilerOutput)) {
                    throw new Error('Compiler output not found in the artifact file');
                }
                bytecode = artifact.compilerOutput.evm.bytecode.object;
                abi = artifact.compilerOutput.abi;
                return [2 /*return*/, ExchangeContract.deployAsync(bytecode, abi, provider, txDefaults)];
            });
        });
    };
    ExchangeContract.deployAsync = function (bytecode, abi, provider, txDefaults) {
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
                        utils_1.logUtils.log("Exchange successfully deployed at " + txReceipt.contractAddress);
                        contractInstance = new ExchangeContract(abi, txReceipt.contractAddress, provider, txDefaults);
                        contractInstance.constructorArgs = [];
                        return [2 /*return*/, contractInstance];
                }
            });
        });
    };
    return ExchangeContract;
}(base_contract_1.BaseContract)); // tslint:disable:max-file-line-count
exports.ExchangeContract = ExchangeContract;
