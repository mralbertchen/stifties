"use strict";
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
var _this = this;
exports.__esModule = true;
var _0x_js_1 = require("0x.js");
var order_utils_1 = require("@0xproject/order-utils");
var utils_1 = require("@0xproject/utils");
var constants_1 = require("../constants");
var contracts_1 = require("../contracts");
var print_utils_1 = require("../print_utils");
var signing_utils_1 = require("../signing_utils");
function scenario() {
    return __awaiter(this, void 0, void 0, function () {
        var zeroEx, _a, leftMaker, rightMaker, matcherAccount, makerAssetAmount, takerAssetAmount, makerAssetData, takerAssetData, txHash, txReceipt, leftMakerZRXApprovalTxHash, rightMakerZRXApprovalTxHash, matcherZRXApprovalTxHash, rightMakerWETHApprovalTxHash, rightMakerWETHDepositTxHash, tenMinutes, randomExpiration, exchangeAddress, leftOrder, rightOrderTakerAssetAmount, rightOrder, leftOrderHashHex, leftECSignature, leftOrderSignature, leftSignedOrder, rightOrderHashHex, rightECSignature, rightOrderSignature, rightSignedOrder, erc20ProxyAddress;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    // In this scenario, the maker creates and signs an order (leftOrder) for selling ZRX for WETH.
                    // The taker has a matched (or mirrored) order (rightOrder) of WETH for ZRX.
                    // The matcher submits these orders and to the 0x Exchange contract.
                    // In this scenario, the matcher pays taker fees on both orders, the leftMaker pays the leftOrder maker fee
                    // and the rightMaker pays the rightOrder maker fee.
                    print_utils_1.printScenario("Match Orders");
                    zeroEx = new _0x_js_1.ZeroEx(contracts_1.providerEngine, { networkId: constants_1.NETWORK_ID });
                    return [4 /*yield*/, zeroEx.getAvailableAddressesAsync()];
                case 1:
                    _a = _b.sent(), leftMaker = _a[0], rightMaker = _a[1], matcherAccount = _a[2];
                    print_utils_1.printData("Accounts", [
                        ["Left Maker", leftMaker],
                        ["Right Maker", rightMaker],
                        ["Order Matcher", matcherAccount]
                    ]);
                    makerAssetAmount = new utils_1.BigNumber(10);
                    takerAssetAmount = new utils_1.BigNumber(4);
                    makerAssetData = _0x_js_1.ZeroEx.encodeERC20AssetData(contracts_1.zrxTokenContract.address);
                    takerAssetData = _0x_js_1.ZeroEx.encodeERC20AssetData(contracts_1.etherTokenContract.address);
                    return [4 /*yield*/, zeroEx.erc20Token.setUnlimitedProxyAllowanceAsync(contracts_1.zrxTokenContract.address, leftMaker)];
                case 2:
                    leftMakerZRXApprovalTxHash = _b.sent();
                    return [4 /*yield*/, print_utils_1.awaitTransactionMinedSpinnerAsync("Left Maker ZRX Approval", leftMakerZRXApprovalTxHash, zeroEx)];
                case 3:
                    txReceipt = _b.sent();
                    return [4 /*yield*/, zeroEx.erc20Token.setUnlimitedProxyAllowanceAsync(contracts_1.zrxTokenContract.address, rightMaker)];
                case 4:
                    rightMakerZRXApprovalTxHash = _b.sent();
                    return [4 /*yield*/, print_utils_1.awaitTransactionMinedSpinnerAsync("Right Maker ZRX Approval", rightMakerZRXApprovalTxHash, zeroEx)];
                case 5:
                    txReceipt = _b.sent();
                    return [4 /*yield*/, zeroEx.erc20Token.setUnlimitedProxyAllowanceAsync(contracts_1.zrxTokenContract.address, matcherAccount)];
                case 6:
                    matcherZRXApprovalTxHash = _b.sent();
                    return [4 /*yield*/, print_utils_1.awaitTransactionMinedSpinnerAsync("Matcher ZRX Approval", matcherZRXApprovalTxHash, zeroEx)];
                case 7:
                    txReceipt = _b.sent();
                    return [4 /*yield*/, zeroEx.erc20Token.setUnlimitedProxyAllowanceAsync(contracts_1.etherTokenContract.address, rightMaker)];
                case 8:
                    rightMakerWETHApprovalTxHash = _b.sent();
                    return [4 /*yield*/, print_utils_1.awaitTransactionMinedSpinnerAsync("Right Maker WETH Approval", rightMakerZRXApprovalTxHash, zeroEx)];
                case 9:
                    txReceipt = _b.sent();
                    return [4 /*yield*/, zeroEx.etherToken.depositAsync(contracts_1.etherTokenContract.address, takerAssetAmount, rightMaker)];
                case 10:
                    rightMakerWETHDepositTxHash = _b.sent();
                    return [4 /*yield*/, print_utils_1.awaitTransactionMinedSpinnerAsync("Right Maker WETH Deposit", rightMakerWETHDepositTxHash, zeroEx)];
                case 11:
                    txReceipt = _b.sent();
                    print_utils_1.printData("Setup", [
                        ["Left Maker ZRX Approval", leftMakerZRXApprovalTxHash],
                        ["Right Maker ZRX Approval", rightMakerZRXApprovalTxHash],
                        ["Matcher Maker ZRX Approval", matcherZRXApprovalTxHash],
                        ["Right Maker WETH Approval", rightMakerWETHApprovalTxHash],
                        ["RIght Maker WETH Deposit", rightMakerWETHDepositTxHash]
                    ]);
                    tenMinutes = 10 * 60 * 1000;
                    randomExpiration = new utils_1.BigNumber(Date.now() + tenMinutes);
                    exchangeAddress = zeroEx.exchange.getContractAddress();
                    leftOrder = {
                        exchangeAddress: exchangeAddress,
                        makerAddress: leftMaker,
                        takerAddress: constants_1.NULL_ADDRESS,
                        senderAddress: constants_1.NULL_ADDRESS,
                        feeRecipientAddress: constants_1.NULL_ADDRESS,
                        expirationTimeSeconds: randomExpiration,
                        salt: _0x_js_1.ZeroEx.generatePseudoRandomSalt(),
                        makerAssetAmount: makerAssetAmount,
                        takerAssetAmount: takerAssetAmount,
                        makerAssetData: makerAssetData,
                        takerAssetData: takerAssetData,
                        makerFee: constants_1.ZERO,
                        takerFee: constants_1.ZERO
                    };
                    print_utils_1.printData("Left Order", Object.entries(leftOrder));
                    rightOrderTakerAssetAmount = new utils_1.BigNumber(2);
                    rightOrder = {
                        exchangeAddress: exchangeAddress,
                        makerAddress: rightMaker,
                        takerAddress: constants_1.NULL_ADDRESS,
                        senderAddress: constants_1.NULL_ADDRESS,
                        feeRecipientAddress: constants_1.NULL_ADDRESS,
                        expirationTimeSeconds: randomExpiration,
                        salt: _0x_js_1.ZeroEx.generatePseudoRandomSalt(),
                        makerAssetAmount: leftOrder.takerAssetAmount,
                        takerAssetAmount: rightOrderTakerAssetAmount,
                        makerAssetData: leftOrder.takerAssetData,
                        takerAssetData: leftOrder.makerAssetData,
                        makerFee: constants_1.ZERO,
                        takerFee: constants_1.ZERO
                    };
                    print_utils_1.printData("Right Order", Object.entries(rightOrder));
                    leftOrderHashHex = _0x_js_1.ZeroEx.getOrderHashHex(leftOrder);
                    return [4 /*yield*/, zeroEx.ecSignOrderHashAsync(leftOrderHashHex, leftMaker, {
                            prefixType: order_utils_1.MessagePrefixType.EthSign,
                            shouldAddPrefixBeforeCallingEthSign: false
                        })];
                case 12:
                    leftECSignature = _b.sent();
                    leftOrderSignature = signing_utils_1.signingUtils.rsvToSignature(leftECSignature);
                    leftSignedOrder = __assign({}, leftOrder, { signature: leftOrderSignature });
                    rightOrderHashHex = _0x_js_1.ZeroEx.getOrderHashHex(rightOrder);
                    return [4 /*yield*/, zeroEx.ecSignOrderHashAsync(rightOrderHashHex, rightMaker, {
                            prefixType: order_utils_1.MessagePrefixType.EthSign,
                            shouldAddPrefixBeforeCallingEthSign: false
                        })];
                case 13:
                    rightECSignature = _b.sent();
                    rightOrderSignature = signing_utils_1.signingUtils.rsvToSignature(rightECSignature);
                    rightSignedOrder = __assign({}, rightOrder, { signature: rightOrderSignature });
                    erc20ProxyAddress = zeroEx.erc20Proxy.getContractAddress();
                    return [4 /*yield*/, print_utils_1.fetchAndPrintAllowancesAsync({ leftMaker: leftMaker, rightMaker: rightMaker }, [contracts_1.zrxTokenContract, contracts_1.etherTokenContract], erc20ProxyAddress)];
                case 14:
                    _b.sent();
                    return [4 /*yield*/, print_utils_1.fetchAndPrintBalancesAsync({ leftMaker: leftMaker, rightMaker: rightMaker, matcherAccount: matcherAccount }, [
                            contracts_1.zrxTokenContract,
                            contracts_1.etherTokenContract
                        ])];
                case 15:
                    _b.sent();
                    return [4 /*yield*/, zeroEx.exchange.matchOrdersAsync(leftSignedOrder, rightSignedOrder, matcherAccount, {
                            gasLimit: constants_1.TX_DEFAULTS.gas
                        })];
                case 16:
                    // Match the orders via 0x Exchange
                    txHash = _b.sent();
                    return [4 /*yield*/, print_utils_1.awaitTransactionMinedSpinnerAsync("matchOrders", txHash, zeroEx)];
                case 17:
                    txReceipt = _b.sent();
                    print_utils_1.printTransaction("matchOrders", txReceipt, [
                        ["left orderHash", leftOrderHashHex],
                        ["right orderHash", rightOrderHashHex]
                    ]);
                    // Print the Balances
                    return [4 /*yield*/, print_utils_1.fetchAndPrintBalancesAsync({ leftMaker: leftMaker, rightMaker: rightMaker, matcherAccount: matcherAccount }, [
                            contracts_1.zrxTokenContract,
                            contracts_1.etherTokenContract
                        ])];
                case 18:
                    // Print the Balances
                    _b.sent();
                    // Stop the Provider Engine
                    contracts_1.providerEngine.stop();
                    return [2 /*return*/];
            }
        });
    });
}
exports.scenario = scenario;
(function () { return __awaiter(_this, void 0, void 0, function () {
    var e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                if (!!module.parent) return [3 /*break*/, 2];
                return [4 /*yield*/, scenario()];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                console.log(e_1);
                contracts_1.providerEngine.stop();
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); })();
