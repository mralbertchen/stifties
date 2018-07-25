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
        var dummyERC721TokenContract, zeroEx, _a, maker, taker, makerAssetAmount, takerAssetAmount, tokenId, makerAssetData, etherTokenAddress, takerAssetData, txHash, txReceipt, mintTxHash, makerERC721ApprovalTxHash, takerWETHApprovalTxHash, takerWETHDepositTxHash, tenMinutes, randomExpiration, exchangeAddress, order, erc20ProxyAddress, orderHashHex, ecSignature, signature, signedOrder;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    // In this scenario, the maker creates and signs an order for selling an ERC721 token for WETH.
                    // The taker takes this order and fills it via the 0x Exchange contract.
                    print_utils_1.printScenario("Fill Order ERC721");
                    dummyERC721TokenContract = contracts_1.dummyERC721TokenContracts[0];
                    if (!dummyERC721TokenContract) {
                        console.log("No Dummy ERC721 Tokens deployed on this network");
                        return [2 /*return*/];
                    }
                    zeroEx = new _0x_js_1.ZeroEx(contracts_1.providerEngine, { networkId: constants_1.NETWORK_ID });
                    return [4 /*yield*/, zeroEx.getAvailableAddressesAsync()];
                case 1:
                    _a = _b.sent(), maker = _a[0], taker = _a[1];
                    print_utils_1.printData("Accounts", [["Maker", maker], ["Taker", taker]]);
                    makerAssetAmount = new utils_1.BigNumber(1);
                    takerAssetAmount = new utils_1.BigNumber(10);
                    tokenId = _0x_js_1.ZeroEx.generatePseudoRandomSalt();
                    makerAssetData = order_utils_1.assetDataUtils.encodeERC721AssetData(dummyERC721TokenContract.address, tokenId);
                    etherTokenAddress = zeroEx.etherToken.getContractAddressIfExists();
                    takerAssetData = _0x_js_1.ZeroEx.encodeERC20AssetData(etherTokenAddress);
                    return [4 /*yield*/, dummyERC721TokenContract.mint.sendTransactionAsync(maker, tokenId, { from: maker })];
                case 2:
                    mintTxHash = _b.sent();
                    return [4 /*yield*/, print_utils_1.awaitTransactionMinedSpinnerAsync("Mint ERC721 Token", mintTxHash, zeroEx)];
                case 3:
                    txReceipt = _b.sent();
                    return [4 /*yield*/, zeroEx.erc721Token.setProxyApprovalForAllAsync(dummyERC721TokenContract.address, maker, true)];
                case 4:
                    makerERC721ApprovalTxHash = _b.sent();
                    return [4 /*yield*/, print_utils_1.awaitTransactionMinedSpinnerAsync("Maker ERC721 Approval", makerERC721ApprovalTxHash, zeroEx)];
                case 5:
                    txReceipt = _b.sent();
                    return [4 /*yield*/, zeroEx.erc20Token.setUnlimitedProxyAllowanceAsync(etherTokenAddress, taker)];
                case 6:
                    takerWETHApprovalTxHash = _b.sent();
                    return [4 /*yield*/, print_utils_1.awaitTransactionMinedSpinnerAsync("Taker WETH Approval", takerWETHApprovalTxHash, zeroEx)];
                case 7:
                    txReceipt = _b.sent();
                    return [4 /*yield*/, zeroEx.etherToken.depositAsync(etherTokenAddress, takerAssetAmount, taker)];
                case 8:
                    takerWETHDepositTxHash = _b.sent();
                    return [4 /*yield*/, print_utils_1.awaitTransactionMinedSpinnerAsync("Taker WETH Deposit", takerWETHDepositTxHash, zeroEx)];
                case 9:
                    txReceipt = _b.sent();
                    print_utils_1.printData("Setup", [
                        ["Mint ERC721", mintTxHash],
                        ["Maker ERC721 Approval", makerERC721ApprovalTxHash],
                        ["Taker WETH Approval", takerWETHApprovalTxHash],
                        ["Taker WETH Deposit", takerWETHDepositTxHash]
                    ]);
                    tenMinutes = 10 * 60 * 1000;
                    randomExpiration = new utils_1.BigNumber(Date.now() + tenMinutes);
                    exchangeAddress = zeroEx.exchange.getContractAddress();
                    order = {
                        exchangeAddress: exchangeAddress,
                        makerAddress: maker,
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
                    print_utils_1.printData("Order", Object.entries(order));
                    erc20ProxyAddress = zeroEx.erc20Proxy.getContractAddress();
                    return [4 /*yield*/, print_utils_1.fetchAndPrintAllowancesAsync({ maker: maker, taker: taker }, [contracts_1.etherTokenContract], erc20ProxyAddress)];
                case 10:
                    _b.sent();
                    return [4 /*yield*/, print_utils_1.fetchAndPrintBalancesAsync({ maker: maker, taker: taker }, [
                            dummyERC721TokenContract,
                            contracts_1.etherTokenContract
                        ])];
                case 11:
                    _b.sent();
                    return [4 /*yield*/, print_utils_1.fetchAndPrintERC721Owner({ maker: maker, taker: taker }, dummyERC721TokenContract, tokenId)];
                case 12:
                    _b.sent();
                    orderHashHex = _0x_js_1.ZeroEx.getOrderHashHex(order);
                    return [4 /*yield*/, zeroEx.ecSignOrderHashAsync(orderHashHex, maker, {
                            prefixType: order_utils_1.MessagePrefixType.EthSign,
                            shouldAddPrefixBeforeCallingEthSign: false
                        })];
                case 13:
                    ecSignature = _b.sent();
                    signature = signing_utils_1.signingUtils.rsvToSignature(ecSignature);
                    signedOrder = __assign({}, order, { signature: signature });
                    return [4 /*yield*/, zeroEx.exchange.fillOrderAsync(signedOrder, takerAssetAmount, taker, { gasLimit: constants_1.TX_DEFAULTS.gas })];
                case 14:
                    // Fill the Order via 0x.js Exchange contract
                    txHash = _b.sent();
                    return [4 /*yield*/, print_utils_1.awaitTransactionMinedSpinnerAsync("fillOrder", txHash, zeroEx)];
                case 15:
                    txReceipt = _b.sent();
                    print_utils_1.printTransaction("fillOrder", txReceipt, [["orderHash", orderHashHex]]);
                    // Print the Balances
                    return [4 /*yield*/, print_utils_1.fetchAndPrintBalancesAsync({ maker: maker, taker: taker }, [
                            dummyERC721TokenContract,
                            contracts_1.etherTokenContract
                        ])];
                case 16:
                    // Print the Balances
                    _b.sent();
                    return [4 /*yield*/, print_utils_1.fetchAndPrintERC721Owner({ maker: maker, taker: taker }, dummyERC721TokenContract, tokenId)];
                case 17:
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
