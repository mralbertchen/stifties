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
// tslint:enable:no-unused-variable
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
var ForwarderContract = /** @class */ (function (_super) {
    __extends(ForwarderContract, _super);
    function ForwarderContract(abi, address, provider, txDefaults) {
        var _this = _super.call(this, 'Forwarder', abi, address, provider, txDefaults) || this;
        _this.onERC721Received1 = {
            callAsync: function (index_0, index_1, index_2, index_3, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'onERC721Received(address,address,uint256,bytes)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [index_0,
                                    index_1,
                                    index_2,
                                    index_3
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), index_0 = _a[0], index_1 = _a[1], index_2 = _a[2], index_3 = _a[3];
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.onERC721Received(index_0, index_1, index_2, index_3);
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'onERC721Received' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.marketSellEthForERC20 = {
            sendTransactionAsync: function (orders, signatures, feeOrders, feeSignatures, feeProportion, feeRecipient, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('marketSellEthForERC20(tuple[],bytes[],tuple[],bytes[],uint16,address)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    signatures,
                                    feeOrders,
                                    feeSignatures,
                                    feeProportion,
                                    feeRecipient
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), orders = _a[0], signatures = _a[1], feeOrders = _a[2], feeSignatures = _a[3], feeProportion = _a[4], feeRecipient = _a[5];
                                encodedData = self._lookupEthersInterface('marketSellEthForERC20(tuple[],bytes[],tuple[],bytes[],uint16,address)').functions.marketSellEthForERC20(orders, signatures, feeOrders, feeSignatures, feeProportion, feeRecipient).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.marketSellEthForERC20.estimateGasAsync.bind(self, orders, signatures, feeOrders, feeSignatures, feeProportion, feeRecipient))];
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
            estimateGasAsync: function (orders, signatures, feeOrders, feeSignatures, feeProportion, feeRecipient, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, gas, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('marketSellEthForERC20(tuple[],bytes[],tuple[],bytes[],uint16,address)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    signatures,
                                    feeOrders,
                                    feeSignatures,
                                    feeProportion,
                                    feeRecipient
                                ], base_contract_1.BaseContract._bigNumberToString), orders = _a[0], signatures = _a[1], feeOrders = _a[2], feeSignatures = _a[3], feeProportion = _a[4], feeRecipient = _a[5];
                                encodedData = self._lookupEthersInterface('marketSellEthForERC20(tuple[],bytes[],tuple[],bytes[],uint16,address)').functions.marketSellEthForERC20(orders, signatures, feeOrders, feeSignatures, feeProportion, feeRecipient).data;
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
            getABIEncodedTransactionData: function (orders, signatures, feeOrders, feeSignatures, feeProportion, feeRecipient) {
                var self = this;
                var inputAbi = self._lookupAbi('marketSellEthForERC20(tuple[],bytes[],tuple[],bytes[],uint16,address)').inputs;
                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                    signatures,
                    feeOrders,
                    feeSignatures,
                    feeProportion,
                    feeRecipient
                ], base_contract_1.BaseContract._bigNumberToString), orders = _a[0], signatures = _a[1], feeOrders = _a[2], feeSignatures = _a[3], feeProportion = _a[4], feeRecipient = _a[5];
                var abiEncodedTransactionData = self._lookupEthersInterface('marketSellEthForERC20(tuple[],bytes[],tuple[],bytes[],uint16,address)').functions.marketSellEthForERC20(orders, signatures, feeOrders, feeSignatures, feeProportion, feeRecipient).data;
                return abiEncodedTransactionData;
                var _a;
            },
            callAsync: function (orders, signatures, feeOrders, feeSignatures, feeProportion, feeRecipient, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'marketSellEthForERC20(tuple[],bytes[],tuple[],bytes[],uint16,address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    signatures,
                                    feeOrders,
                                    feeSignatures,
                                    feeProportion,
                                    feeRecipient
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), orders = _a[0], signatures = _a[1], feeOrders = _a[2], feeSignatures = _a[3], feeProportion = _a[4], feeRecipient = _a[5];
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.marketSellEthForERC20(orders, signatures, feeOrders, feeSignatures, feeProportion, feeRecipient);
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'marketSellEthForERC20' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.calculateMarketBuyResults = {
            callAsync: function (orders, makerAssetFillAmount, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'calculateMarketBuyResults(tuple[],uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    makerAssetFillAmount
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), orders = _a[0], makerAssetFillAmount = _a[1];
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.calculateMarketBuyResults(orders, makerAssetFillAmount);
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'calculateMarketBuyResults' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.ALLOWABLE_EXCHANGE_PERCENTAGE = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'ALLOWABLE_EXCHANGE_PERCENTAGE()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.ALLOWABLE_EXCHANGE_PERCENTAGE();
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'ALLOWABLE_EXCHANGE_PERCENTAGE' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.marketBuyTokensWithEth = {
            sendTransactionAsync: function (orders, signatures, feeOrders, feeSignatures, makerTokenFillAmount, feeProportion, feeRecipient, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('marketBuyTokensWithEth(tuple[],bytes[],tuple[],bytes[],uint256,uint16,address)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    signatures,
                                    feeOrders,
                                    feeSignatures,
                                    makerTokenFillAmount,
                                    feeProportion,
                                    feeRecipient
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), orders = _a[0], signatures = _a[1], feeOrders = _a[2], feeSignatures = _a[3], makerTokenFillAmount = _a[4], feeProportion = _a[5], feeRecipient = _a[6];
                                encodedData = self._lookupEthersInterface('marketBuyTokensWithEth(tuple[],bytes[],tuple[],bytes[],uint256,uint16,address)').functions.marketBuyTokensWithEth(orders, signatures, feeOrders, feeSignatures, makerTokenFillAmount, feeProportion, feeRecipient).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.marketBuyTokensWithEth.estimateGasAsync.bind(self, orders, signatures, feeOrders, feeSignatures, makerTokenFillAmount, feeProportion, feeRecipient))];
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
            estimateGasAsync: function (orders, signatures, feeOrders, feeSignatures, makerTokenFillAmount, feeProportion, feeRecipient, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, gas, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('marketBuyTokensWithEth(tuple[],bytes[],tuple[],bytes[],uint256,uint16,address)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    signatures,
                                    feeOrders,
                                    feeSignatures,
                                    makerTokenFillAmount,
                                    feeProportion,
                                    feeRecipient
                                ], base_contract_1.BaseContract._bigNumberToString), orders = _a[0], signatures = _a[1], feeOrders = _a[2], feeSignatures = _a[3], makerTokenFillAmount = _a[4], feeProportion = _a[5], feeRecipient = _a[6];
                                encodedData = self._lookupEthersInterface('marketBuyTokensWithEth(tuple[],bytes[],tuple[],bytes[],uint256,uint16,address)').functions.marketBuyTokensWithEth(orders, signatures, feeOrders, feeSignatures, makerTokenFillAmount, feeProportion, feeRecipient).data;
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
            getABIEncodedTransactionData: function (orders, signatures, feeOrders, feeSignatures, makerTokenFillAmount, feeProportion, feeRecipient) {
                var self = this;
                var inputAbi = self._lookupAbi('marketBuyTokensWithEth(tuple[],bytes[],tuple[],bytes[],uint256,uint16,address)').inputs;
                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                    signatures,
                    feeOrders,
                    feeSignatures,
                    makerTokenFillAmount,
                    feeProportion,
                    feeRecipient
                ], base_contract_1.BaseContract._bigNumberToString), orders = _a[0], signatures = _a[1], feeOrders = _a[2], feeSignatures = _a[3], makerTokenFillAmount = _a[4], feeProportion = _a[5], feeRecipient = _a[6];
                var abiEncodedTransactionData = self._lookupEthersInterface('marketBuyTokensWithEth(tuple[],bytes[],tuple[],bytes[],uint256,uint16,address)').functions.marketBuyTokensWithEth(orders, signatures, feeOrders, feeSignatures, makerTokenFillAmount, feeProportion, feeRecipient).data;
                return abiEncodedTransactionData;
                var _a;
            },
            callAsync: function (orders, signatures, feeOrders, feeSignatures, makerTokenFillAmount, feeProportion, feeRecipient, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'marketBuyTokensWithEth(tuple[],bytes[],tuple[],bytes[],uint256,uint16,address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    signatures,
                                    feeOrders,
                                    feeSignatures,
                                    makerTokenFillAmount,
                                    feeProportion,
                                    feeRecipient
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), orders = _a[0], signatures = _a[1], feeOrders = _a[2], feeSignatures = _a[3], makerTokenFillAmount = _a[4], feeProportion = _a[5], feeRecipient = _a[6];
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.marketBuyTokensWithEth(orders, signatures, feeOrders, feeSignatures, makerTokenFillAmount, feeProportion, feeRecipient);
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'marketBuyTokensWithEth' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.PERCENTAGE_DENOMINATOR = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'PERCENTAGE_DENOMINATOR()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.PERCENTAGE_DENOMINATOR();
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'PERCENTAGE_DENOMINATOR' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.MAX_FEE = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'MAX_FEE()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.MAX_FEE();
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'MAX_FEE' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.calculateMarketSellResults = {
            callAsync: function (orders, takerAssetFillAmount, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'calculateMarketSellResults(tuple[],uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    takerAssetFillAmount
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), orders = _a[0], takerAssetFillAmount = _a[1];
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.calculateMarketSellResults(orders, takerAssetFillAmount);
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'calculateMarketSellResults' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.calculateMarketBuyZrxResults = {
            callAsync: function (orders, zrxFillAmount, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'calculateMarketBuyZrxResults(tuple[],uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    zrxFillAmount
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), orders = _a[0], zrxFillAmount = _a[1];
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.calculateMarketBuyZrxResults(orders, zrxFillAmount);
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'calculateMarketBuyZrxResults' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.onERC721Received2 = {
            callAsync: function (index_0, index_1, index_2, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'onERC721Received(address,uint256,bytes)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [index_0,
                                    index_1,
                                    index_2
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), index_0 = _a[0], index_1 = _a[1], index_2 = _a[2];
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.onERC721Received(index_0, index_1, index_2);
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'onERC721Received' }).outputs;
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
    ForwarderContract.deployFrom0xArtifactAsync = function (artifact, provider, txDefaults, _exchange, _etherToken, _zrxToken, _erc20AssetProxyId, _zrxAssetData, _wethAssetData) {
        return __awaiter(this, void 0, void 0, function () {
            var bytecode, abi;
            return __generator(this, function (_a) {
                if (_.isUndefined(artifact.compilerOutput)) {
                    throw new Error('Compiler output not found in the artifact file');
                }
                bytecode = artifact.compilerOutput.evm.bytecode.object;
                abi = artifact.compilerOutput.abi;
                return [2 /*return*/, ForwarderContract.deployAsync(bytecode, abi, provider, txDefaults, _exchange, _etherToken, _zrxToken, _erc20AssetProxyId, _zrxAssetData, _wethAssetData)];
            });
        });
    };
    ForwarderContract.deployAsync = function (bytecode, abi, provider, txDefaults, _exchange, _etherToken, _zrxToken, _erc20AssetProxyId, _zrxAssetData, _wethAssetData) {
        return __awaiter(this, void 0, void 0, function () {
            var constructorAbi, txData, web3Wrapper, txDataWithDefaults, txHash, txReceipt, contractInstance, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        constructorAbi = base_contract_1.BaseContract._lookupConstructorAbi(abi);
                        _a = base_contract_1.BaseContract._formatABIDataItemList(constructorAbi.inputs, [_exchange,
                            _etherToken,
                            _zrxToken,
                            _erc20AssetProxyId,
                            _zrxAssetData,
                            _wethAssetData
                        ], base_contract_1.BaseContract._bigNumberToString), _exchange = _a[0], _etherToken = _a[1], _zrxToken = _a[2], _erc20AssetProxyId = _a[3], _zrxAssetData = _a[4], _wethAssetData = _a[5];
                        txData = ethers.Contract.getDeployTransaction(bytecode, abi, _exchange, _etherToken, _zrxToken, _erc20AssetProxyId, _zrxAssetData, _wethAssetData);
                        web3Wrapper = new web3_wrapper_1.Web3Wrapper(provider);
                        return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(txData, txDefaults, web3Wrapper.estimateGasAsync.bind(web3Wrapper))];
                    case 1:
                        txDataWithDefaults = _b.sent();
                        return [4 /*yield*/, web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                    case 2:
                        txHash = _b.sent();
                        utils_1.logUtils.log("transactionHash: " + txHash);
                        return [4 /*yield*/, web3Wrapper.awaitTransactionMinedAsync(txHash)];
                    case 3:
                        txReceipt = _b.sent();
                        utils_1.logUtils.log("Forwarder successfully deployed at " + txReceipt.contractAddress);
                        contractInstance = new ForwarderContract(abi, txReceipt.contractAddress, provider, txDefaults);
                        contractInstance.constructorArgs = [_exchange,
                            _etherToken,
                            _zrxToken,
                            _erc20AssetProxyId,
                            _zrxAssetData,
                            _wethAssetData
                        ];
                        return [2 /*return*/, contractInstance];
                }
            });
        });
    };
    return ForwarderContract;
}(base_contract_1.BaseContract)); // tslint:disable:max-file-line-count
exports.ForwarderContract = ForwarderContract;
