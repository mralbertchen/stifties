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
var DummyERC721TokenEvents;
(function (DummyERC721TokenEvents) {
    DummyERC721TokenEvents["Transfer"] = "Transfer";
    DummyERC721TokenEvents["Approval"] = "Approval";
    DummyERC721TokenEvents["ApprovalForAll"] = "ApprovalForAll";
})(DummyERC721TokenEvents = exports.DummyERC721TokenEvents || (exports.DummyERC721TokenEvents = {}));
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
var DummyERC721TokenContract = /** @class */ (function (_super) {
    __extends(DummyERC721TokenContract, _super);
    function DummyERC721TokenContract(abi, address, provider, txDefaults) {
        var _this = _super.call(this, 'DummyERC721Token', abi, address, provider, txDefaults) || this;
        _this.name = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'name()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.name();
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'name' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.getApproved = {
            callAsync: function (_tokenId, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getApproved(uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _tokenId = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_tokenId
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self))[0];
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getApproved(_tokenId);
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getApproved' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.approve = {
            sendTransactionAsync: function (_to, _tokenId, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('approve(address,uint256)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_to,
                                    _tokenId
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), _to = _a[0], _tokenId = _a[1];
                                encodedData = self._lookupEthersInterface('approve(address,uint256)').functions.approve(_to, _tokenId).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.approve.estimateGasAsync.bind(self, _to, _tokenId))];
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
            estimateGasAsync: function (_to, _tokenId, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, gas, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('approve(address,uint256)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_to,
                                    _tokenId
                                ], base_contract_1.BaseContract._bigNumberToString), _to = _a[0], _tokenId = _a[1];
                                encodedData = self._lookupEthersInterface('approve(address,uint256)').functions.approve(_to, _tokenId).data;
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
            getABIEncodedTransactionData: function (_to, _tokenId) {
                var self = this;
                var inputAbi = self._lookupAbi('approve(address,uint256)').inputs;
                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_to,
                    _tokenId
                ], base_contract_1.BaseContract._bigNumberToString), _to = _a[0], _tokenId = _a[1];
                var abiEncodedTransactionData = self._lookupEthersInterface('approve(address,uint256)').functions.approve(_to, _tokenId).data;
                return abiEncodedTransactionData;
                var _a;
            }
        };
        _this.transferFrom = {
            sendTransactionAsync: function (_from, _to, _tokenId, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('transferFrom(address,address,uint256)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to,
                                    _tokenId
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), _from = _a[0], _to = _a[1], _tokenId = _a[2];
                                encodedData = self._lookupEthersInterface('transferFrom(address,address,uint256)').functions.transferFrom(_from, _to, _tokenId).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.transferFrom.estimateGasAsync.bind(self, _from, _to, _tokenId))];
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
            estimateGasAsync: function (_from, _to, _tokenId, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, gas, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('transferFrom(address,address,uint256)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to,
                                    _tokenId
                                ], base_contract_1.BaseContract._bigNumberToString), _from = _a[0], _to = _a[1], _tokenId = _a[2];
                                encodedData = self._lookupEthersInterface('transferFrom(address,address,uint256)').functions.transferFrom(_from, _to, _tokenId).data;
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
            getABIEncodedTransactionData: function (_from, _to, _tokenId) {
                var self = this;
                var inputAbi = self._lookupAbi('transferFrom(address,address,uint256)').inputs;
                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                    _to,
                    _tokenId
                ], base_contract_1.BaseContract._bigNumberToString), _from = _a[0], _to = _a[1], _tokenId = _a[2];
                var abiEncodedTransactionData = self._lookupEthersInterface('transferFrom(address,address,uint256)').functions.transferFrom(_from, _to, _tokenId).data;
                return abiEncodedTransactionData;
                var _a;
            }
        };
        _this.mint = {
            sendTransactionAsync: function (to, tokenId, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('mint(address,uint256)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [to,
                                    tokenId
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), to = _a[0], tokenId = _a[1];
                                encodedData = self._lookupEthersInterface('mint(address,uint256)').functions.mint(to, tokenId).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.mint.estimateGasAsync.bind(self, to, tokenId))];
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
            estimateGasAsync: function (to, tokenId, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, gas, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('mint(address,uint256)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [to,
                                    tokenId
                                ], base_contract_1.BaseContract._bigNumberToString), to = _a[0], tokenId = _a[1];
                                encodedData = self._lookupEthersInterface('mint(address,uint256)').functions.mint(to, tokenId).data;
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
            getABIEncodedTransactionData: function (to, tokenId) {
                var self = this;
                var inputAbi = self._lookupAbi('mint(address,uint256)').inputs;
                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [to,
                    tokenId
                ], base_contract_1.BaseContract._bigNumberToString), to = _a[0], tokenId = _a[1];
                var abiEncodedTransactionData = self._lookupEthersInterface('mint(address,uint256)').functions.mint(to, tokenId).data;
                return abiEncodedTransactionData;
                var _a;
            }
        };
        _this.safeTransferFrom1 = {
            sendTransactionAsync: function (_from, _to, _tokenId, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('safeTransferFrom(address,address,uint256)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to,
                                    _tokenId
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), _from = _a[0], _to = _a[1], _tokenId = _a[2];
                                encodedData = self._lookupEthersInterface('safeTransferFrom(address,address,uint256)').functions.safeTransferFrom(_from, _to, _tokenId).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.safeTransferFrom1.estimateGasAsync.bind(self, _from, _to, _tokenId))];
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
            estimateGasAsync: function (_from, _to, _tokenId, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, gas, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('safeTransferFrom(address,address,uint256)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to,
                                    _tokenId
                                ], base_contract_1.BaseContract._bigNumberToString), _from = _a[0], _to = _a[1], _tokenId = _a[2];
                                encodedData = self._lookupEthersInterface('safeTransferFrom(address,address,uint256)').functions.safeTransferFrom(_from, _to, _tokenId).data;
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
            getABIEncodedTransactionData: function (_from, _to, _tokenId) {
                var self = this;
                var inputAbi = self._lookupAbi('safeTransferFrom(address,address,uint256)').inputs;
                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                    _to,
                    _tokenId
                ], base_contract_1.BaseContract._bigNumberToString), _from = _a[0], _to = _a[1], _tokenId = _a[2];
                var abiEncodedTransactionData = self._lookupEthersInterface('safeTransferFrom(address,address,uint256)').functions.safeTransferFrom(_from, _to, _tokenId).data;
                return abiEncodedTransactionData;
                var _a;
            }
        };
        _this.exists = {
            callAsync: function (_tokenId, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'exists(uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _tokenId = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_tokenId
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self))[0];
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.exists(_tokenId);
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'exists' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.ownerOf = {
            callAsync: function (_tokenId, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'ownerOf(uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _tokenId = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_tokenId
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self))[0];
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.ownerOf(_tokenId);
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'ownerOf' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.balanceOf = {
            callAsync: function (_owner, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'balanceOf(address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _owner = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_owner
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self))[0];
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.balanceOf(_owner);
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'balanceOf' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
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
        _this.symbol = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'symbol()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.symbol();
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'symbol' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            }
        };
        _this.burn = {
            sendTransactionAsync: function (owner, tokenId, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('burn(address,uint256)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [owner,
                                    tokenId
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), owner = _a[0], tokenId = _a[1];
                                encodedData = self._lookupEthersInterface('burn(address,uint256)').functions.burn(owner, tokenId).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.burn.estimateGasAsync.bind(self, owner, tokenId))];
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
            estimateGasAsync: function (owner, tokenId, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, gas, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('burn(address,uint256)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [owner,
                                    tokenId
                                ], base_contract_1.BaseContract._bigNumberToString), owner = _a[0], tokenId = _a[1];
                                encodedData = self._lookupEthersInterface('burn(address,uint256)').functions.burn(owner, tokenId).data;
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
            getABIEncodedTransactionData: function (owner, tokenId) {
                var self = this;
                var inputAbi = self._lookupAbi('burn(address,uint256)').inputs;
                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [owner,
                    tokenId
                ], base_contract_1.BaseContract._bigNumberToString), owner = _a[0], tokenId = _a[1];
                var abiEncodedTransactionData = self._lookupEthersInterface('burn(address,uint256)').functions.burn(owner, tokenId).data;
                return abiEncodedTransactionData;
                var _a;
            }
        };
        _this.setApprovalForAll = {
            sendTransactionAsync: function (_to, _approved, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('setApprovalForAll(address,bool)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_to,
                                    _approved
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), _to = _a[0], _approved = _a[1];
                                encodedData = self._lookupEthersInterface('setApprovalForAll(address,bool)').functions.setApprovalForAll(_to, _approved).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.setApprovalForAll.estimateGasAsync.bind(self, _to, _approved))];
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
            estimateGasAsync: function (_to, _approved, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, gas, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('setApprovalForAll(address,bool)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_to,
                                    _approved
                                ], base_contract_1.BaseContract._bigNumberToString), _to = _a[0], _approved = _a[1];
                                encodedData = self._lookupEthersInterface('setApprovalForAll(address,bool)').functions.setApprovalForAll(_to, _approved).data;
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
            getABIEncodedTransactionData: function (_to, _approved) {
                var self = this;
                var inputAbi = self._lookupAbi('setApprovalForAll(address,bool)').inputs;
                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_to,
                    _approved
                ], base_contract_1.BaseContract._bigNumberToString), _to = _a[0], _approved = _a[1];
                var abiEncodedTransactionData = self._lookupEthersInterface('setApprovalForAll(address,bool)').functions.setApprovalForAll(_to, _approved).data;
                return abiEncodedTransactionData;
                var _a;
            }
        };
        _this.safeTransferFrom2 = {
            sendTransactionAsync: function (_from, _to, _tokenId, _data, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('safeTransferFrom(address,address,uint256,bytes)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to,
                                    _tokenId,
                                    _data
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), _from = _a[0], _to = _a[1], _tokenId = _a[2], _data = _a[3];
                                encodedData = self._lookupEthersInterface('safeTransferFrom(address,address,uint256,bytes)').functions.safeTransferFrom(_from, _to, _tokenId, _data).data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.safeTransferFrom2.estimateGasAsync.bind(self, _from, _to, _tokenId, _data))];
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
            estimateGasAsync: function (_from, _to, _tokenId, _data, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, gas, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('safeTransferFrom(address,address,uint256,bytes)').inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to,
                                    _tokenId,
                                    _data
                                ], base_contract_1.BaseContract._bigNumberToString), _from = _a[0], _to = _a[1], _tokenId = _a[2], _data = _a[3];
                                encodedData = self._lookupEthersInterface('safeTransferFrom(address,address,uint256,bytes)').functions.safeTransferFrom(_from, _to, _tokenId, _data).data;
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
            getABIEncodedTransactionData: function (_from, _to, _tokenId, _data) {
                var self = this;
                var inputAbi = self._lookupAbi('safeTransferFrom(address,address,uint256,bytes)').inputs;
                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                    _to,
                    _tokenId,
                    _data
                ], base_contract_1.BaseContract._bigNumberToString), _from = _a[0], _to = _a[1], _tokenId = _a[2], _data = _a[3];
                var abiEncodedTransactionData = self._lookupEthersInterface('safeTransferFrom(address,address,uint256,bytes)').functions.safeTransferFrom(_from, _to, _tokenId, _data).data;
                return abiEncodedTransactionData;
                var _a;
            }
        };
        _this.isApprovedForAll = {
            callAsync: function (_owner, _operator, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'isApprovedForAll(address,address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_owner,
                                    _operator
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), _owner = _a[0], _operator = _a[1];
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.isApprovedForAll(_owner, _operator);
                                encodedData = ethersFunction.data;
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                resultArray = ethersFunction.parse(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'isApprovedForAll' }).outputs;
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
    DummyERC721TokenContract.deployFrom0xArtifactAsync = function (artifact, provider, txDefaults, name, symbol) {
        return __awaiter(this, void 0, void 0, function () {
            var bytecode, abi;
            return __generator(this, function (_a) {
                if (_.isUndefined(artifact.compilerOutput)) {
                    throw new Error('Compiler output not found in the artifact file');
                }
                bytecode = artifact.compilerOutput.evm.bytecode.object;
                abi = artifact.compilerOutput.abi;
                return [2 /*return*/, DummyERC721TokenContract.deployAsync(bytecode, abi, provider, txDefaults, name, symbol)];
            });
        });
    };
    DummyERC721TokenContract.deployAsync = function (bytecode, abi, provider, txDefaults, name, symbol) {
        return __awaiter(this, void 0, void 0, function () {
            var constructorAbi, txData, web3Wrapper, txDataWithDefaults, txHash, txReceipt, contractInstance, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        constructorAbi = base_contract_1.BaseContract._lookupConstructorAbi(abi);
                        _a = base_contract_1.BaseContract._formatABIDataItemList(constructorAbi.inputs, [name,
                            symbol
                        ], base_contract_1.BaseContract._bigNumberToString), name = _a[0], symbol = _a[1];
                        txData = ethers.Contract.getDeployTransaction(bytecode, abi, name, symbol);
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
                        utils_1.logUtils.log("DummyERC721Token successfully deployed at " + txReceipt.contractAddress);
                        contractInstance = new DummyERC721TokenContract(abi, txReceipt.contractAddress, provider, txDefaults);
                        contractInstance.constructorArgs = [name,
                            symbol
                        ];
                        return [2 /*return*/, contractInstance];
                }
            });
        });
    };
    return DummyERC721TokenContract;
}(base_contract_1.BaseContract)); // tslint:disable:max-file-line-count
exports.DummyERC721TokenContract = DummyERC721TokenContract;
