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
exports.__esModule = true;
var _0x_js_1 = require("0x.js");
var order_utils_1 = require("@0xproject/order-utils");
var utils_1 = require("@0xproject/utils");
var constants_1 = require("../constants");
var contracts_1 = require("../contracts");
var print_utils_1 = require("../print_utils");
var signing_utils_1 = require("../signing_utils");
var dummyERC721TokenContract = contracts_1.dummyERC721TokenContracts[0];
if (!dummyERC721TokenContract) {
    throw "No Dummy ERC721 Tokens deployed on this network";
}
var zeroEx = new _0x_js_1.ZeroEx(contracts_1.providerEngine, { networkId: constants_1.NETWORK_ID });
var expirationTimeSeconds = new utils_1.BigNumber(168 * 60 * 60 * 1000);
var exchangeAddress = zeroEx.exchange.getContractAddress();
// the amount the maker is selling in maker asset (1 ERC721 Token)
var makerAssetAmount = new utils_1.BigNumber(1);
var takerAssetAmount = new utils_1.BigNumber(10);
// 0x v2 uses asset data to encode the correct proxy type and additional parameters
var etherTokenAddress = zeroEx.etherToken.getContractAddressIfExists();
var takerAssetData = _0x_js_1.ZeroEx.encodeERC20AssetData(etherTokenAddress);
var txHash;
var txReceipt;
function fillOrder(orderData, taker) {
    return __awaiter(this, void 0, void 0, function () {
        var maker, tokenId, erc20ProxyAddress, makerERC721ApprovalTxHash, takerWETHApprovalTxHash, takerWETHDepositTxHash, orderHashHex, ecSignature, signature, signedOrder, txHash_1, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 16, , 17]);
                    maker = orderData.makerAddress;
                    tokenId = new utils_1.BigNumber(orderData.tokenId);
                    delete orderData.tokenId;
                    delete orderData.orderId;
                    delete orderData.uri;
                    delete orderData.name;
                    erc20ProxyAddress = zeroEx.erc20Proxy.getContractAddress();
                    return [4 /*yield*/, print_utils_1.fetchAndPrintAllowancesAsync({ maker: maker, taker: taker }, [contracts_1.etherTokenContract], erc20ProxyAddress)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, print_utils_1.fetchAndPrintBalancesAsync({ maker: maker, taker: taker }, [
                            dummyERC721TokenContract,
                            contracts_1.etherTokenContract
                        ])];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, print_utils_1.fetchAndPrintERC721Owner({ maker: maker, taker: taker }, dummyERC721TokenContract, tokenId)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, zeroEx.erc721Token.setProxyApprovalForAllAsync(dummyERC721TokenContract.address, maker, true)];
                case 4:
                    makerERC721ApprovalTxHash = _a.sent();
                    return [4 /*yield*/, print_utils_1.awaitTransactionMinedSpinnerAsync("Maker ERC721 Approval", makerERC721ApprovalTxHash, zeroEx)];
                case 5:
                    txReceipt = _a.sent();
                    return [4 /*yield*/, zeroEx.erc20Token.setUnlimitedProxyAllowanceAsync(etherTokenAddress, taker)];
                case 6:
                    takerWETHApprovalTxHash = _a.sent();
                    return [4 /*yield*/, print_utils_1.awaitTransactionMinedSpinnerAsync("Taker WETH Approval", takerWETHApprovalTxHash, zeroEx)];
                case 7:
                    txReceipt = _a.sent();
                    return [4 /*yield*/, zeroEx.etherToken.depositAsync(etherTokenAddress, takerAssetAmount, taker)];
                case 8:
                    takerWETHDepositTxHash = _a.sent();
                    return [4 /*yield*/, print_utils_1.awaitTransactionMinedSpinnerAsync("Taker WETH Deposit", takerWETHDepositTxHash, zeroEx)];
                case 9:
                    txReceipt = _a.sent();
                    print_utils_1.printData("Fill", [
                        ["Maker ERC721 Approval", makerERC721ApprovalTxHash],
                        ["Taker WETH Approval", takerWETHApprovalTxHash],
                        ["Taker WETH Deposit", takerWETHDepositTxHash]
                    ]);
                    orderHashHex = _0x_js_1.ZeroEx.getOrderHashHex(orderData);
                    return [4 /*yield*/, zeroEx.ecSignOrderHashAsync(orderHashHex, maker, {
                            prefixType: order_utils_1.MessagePrefixType.EthSign,
                            shouldAddPrefixBeforeCallingEthSign: false
                        })];
                case 10:
                    ecSignature = _a.sent();
                    signature = signing_utils_1.signingUtils.rsvToSignature(ecSignature);
                    signedOrder = __assign({}, orderData, { signature: signature });
                    return [4 /*yield*/, zeroEx.exchange.isValidSignatureAsync(orderHashHex, maker, signature)];
                case 11:
                    _a.sent();
                    console.log("filling order...");
                    return [4 /*yield*/, zeroEx.exchange.fillOrderAsync(signedOrder, takerAssetAmount, taker, { gasLimit: constants_1.TX_DEFAULTS.gas })];
                case 12:
                    txHash_1 = _a.sent();
                    console.log("order filled " + txHash_1);
                    return [4 /*yield*/, print_utils_1.awaitTransactionMinedSpinnerAsync("fillOrder", txHash_1, zeroEx)];
                case 13:
                    txReceipt = _a.sent();
                    console.log(txReceipt);
                    print_utils_1.printTransaction("fillOrder", txReceipt, [["orderHash", orderHashHex]]);
                    // Print the Balances
                    return [4 /*yield*/, print_utils_1.fetchAndPrintBalancesAsync({ maker: maker, taker: taker }, [
                            dummyERC721TokenContract,
                            contracts_1.etherTokenContract
                        ])];
                case 14:
                    // Print the Balances
                    _a.sent();
                    return [4 /*yield*/, print_utils_1.fetchAndPrintERC721Owner({ maker: maker, taker: taker }, dummyERC721TokenContract, tokenId)];
                case 15:
                    _a.sent();
                    return [2 /*return*/, txHash_1];
                case 16:
                    err_1 = _a.sent();
                    Promise.reject("Could not fill order, error occured: " + err_1);
                    return [3 /*break*/, 17];
                case 17: return [2 /*return*/];
            }
        });
    });
}
exports.fillOrder = fillOrder;
