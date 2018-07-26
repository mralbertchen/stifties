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
var utils_1 = require("@0xproject/utils");
var constants_1 = require("../constants");
var contracts_1 = require("../contracts");
var print_utils_1 = require("../print_utils");
function scenario() {
    return __awaiter(this, void 0, void 0, function () {
        var zeroEx, _a, maker, taker, makerAssetAmount, takerAssetAmount, makerAssetData, takerAssetData, oneMinute, tenMinutes, randomExpiration, exchangeAddress, order1, order2, order3, order1Info, order2Info, order3Info, targetOrderEpoch, txHash, txReceipt;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    // In this scenario, the maker creates and signs many orders for selling ZRX for WETH.
                    // The maker is able to cancel all of these orders effeciently by using cancelOrdersUpTo
                    print_utils_1.printScenario('Cancel Orders Up To');
                    zeroEx = new _0x_js_1.ZeroEx(contracts_1.providerEngine, { networkId: constants_1.NETWORK_ID });
                    return [4 /*yield*/, zeroEx.getAvailableAddressesAsync()];
                case 1:
                    _a = _b.sent(), maker = _a[0], taker = _a[1];
                    print_utils_1.printData('Accounts', [['Maker', maker], ['Taker', taker]]);
                    makerAssetAmount = new utils_1.BigNumber(100);
                    takerAssetAmount = new utils_1.BigNumber(10);
                    makerAssetData = _0x_js_1.ZeroEx.encodeERC20AssetData(contracts_1.zrxTokenContract.address);
                    takerAssetData = _0x_js_1.ZeroEx.encodeERC20AssetData(contracts_1.etherTokenContract.address);
                    oneMinute = 60 * 1000;
                    tenMinutes = 10 * oneMinute;
                    randomExpiration = new utils_1.BigNumber(Date.now() + tenMinutes);
                    exchangeAddress = zeroEx.exchange.getContractAddress();
                    order1 = {
                        exchangeAddress: exchangeAddress,
                        makerAddress: maker,
                        takerAddress: constants_1.NULL_ADDRESS,
                        senderAddress: constants_1.NULL_ADDRESS,
                        feeRecipientAddress: constants_1.NULL_ADDRESS,
                        expirationTimeSeconds: randomExpiration,
                        salt: new utils_1.BigNumber(Date.now() - tenMinutes),
                        makerAssetAmount: makerAssetAmount,
                        takerAssetAmount: takerAssetAmount,
                        makerAssetData: makerAssetData,
                        takerAssetData: takerAssetData,
                        makerFee: constants_1.ZERO,
                        takerFee: constants_1.ZERO
                    };
                    order2 = __assign({}, order1, { salt: new utils_1.BigNumber(Date.now() - oneMinute) });
                    order3 = __assign({}, order1, { salt: new utils_1.BigNumber(Date.now()) });
                    return [4 /*yield*/, zeroEx.exchange.getOrderInfoAsync(order1)];
                case 2:
                    order1Info = _b.sent();
                    return [4 /*yield*/, zeroEx.exchange.getOrderInfoAsync(order2)];
                case 3:
                    order2Info = _b.sent();
                    return [4 /*yield*/, zeroEx.exchange.getOrderInfoAsync(order3)];
                case 4:
                    order3Info = _b.sent();
                    print_utils_1.printOrderInfos({ order1: order1Info, order2: order2Info, order3: order3Info });
                    targetOrderEpoch = order2.salt;
                    return [4 /*yield*/, zeroEx.exchange.cancelOrdersUpToAsync(targetOrderEpoch, maker)];
                case 5:
                    txHash = _b.sent();
                    return [4 /*yield*/, print_utils_1.awaitTransactionMinedSpinnerAsync('cancelOrdersUpTo', txHash, zeroEx)];
                case 6:
                    txReceipt = _b.sent();
                    print_utils_1.printTransaction('cancelOrdersUpTo', txReceipt, [['targetOrderEpoch', targetOrderEpoch.toString()]]);
                    return [4 /*yield*/, zeroEx.exchange.getOrderInfoAsync(order1)];
                case 7:
                    // Fetch and print the order info
                    order1Info = _b.sent();
                    return [4 /*yield*/, zeroEx.exchange.getOrderInfoAsync(order2)];
                case 8:
                    order2Info = _b.sent();
                    return [4 /*yield*/, zeroEx.exchange.getOrderInfoAsync(order3)];
                case 9:
                    order3Info = _b.sent();
                    print_utils_1.printOrderInfos({ order1: order1Info, order2: order2Info, order3: order3Info });
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
