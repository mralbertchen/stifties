"use strict";
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
var contracts_1 = require("../contracts");
var print_utils_1 = require("../print_utils");
var constants_1 = require("../constants");
(function () { return __awaiter(_this, void 0, void 0, function () {
    var zeroEx, _a, maker, taker, exchangeAddress, erc20ProxyId, erc721ProxyId, erc20AssetProxyResult, erc721AssetProxyResult, erc20ProxyAuthorisedAddresses, erc20ProxyAddress, erc721ProxyAddress, erc721ProxyAuthorisedAddresses;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                zeroEx = new _0x_js_1.ZeroEx(contracts_1.providerEngine, { networkId: constants_1.NETWORK_ID });
                return [4 /*yield*/, zeroEx.getAvailableAddressesAsync()];
            case 1:
                _a = _b.sent(), maker = _a[0], taker = _a[1];
                print_utils_1.printData('Accounts', [['Maker', maker], ['Taker', taker]]);
                return [4 /*yield*/, print_utils_1.fetchAndPrintBalancesAsync({ maker: maker, taker: taker }, [contracts_1.zrxTokenContract, contracts_1.etherTokenContract])];
            case 2:
                _b.sent();
                console.log('');
                exchangeAddress = zeroEx.exchange.getContractAddress();
                return [4 /*yield*/, zeroEx.erc20Proxy.getProxyIdAsync()];
            case 3:
                erc20ProxyId = _b.sent();
                return [4 /*yield*/, zeroEx.erc721Proxy.getProxyIdAsync()];
            case 4:
                erc721ProxyId = _b.sent();
                return [4 /*yield*/, zeroEx.exchange.getAssetProxyBySignatureAsync(erc20ProxyId)];
            case 5:
                erc20AssetProxyResult = _b.sent();
                return [4 /*yield*/, zeroEx.exchange.getAssetProxyBySignatureAsync(erc721ProxyId)];
            case 6:
                erc721AssetProxyResult = _b.sent();
                print_utils_1.printData('Exchange', [
                    ['address', exchangeAddress],
                    ['erc20Proxy', erc20AssetProxyResult],
                    ['erc721Proxy', erc721AssetProxyResult],
                ]);
                return [4 /*yield*/, zeroEx.erc20Proxy.getAuthorizedAddressesAsync()];
            case 7:
                erc20ProxyAuthorisedAddresses = _b.sent();
                erc20ProxyAddress = zeroEx.erc20Proxy.getContractAddress();
                erc721ProxyAddress = zeroEx.erc721Proxy.getContractAddress();
                return [4 /*yield*/, zeroEx.erc721Proxy.getAuthorizedAddressesAsync()];
            case 8:
                erc721ProxyAuthorisedAddresses = _b.sent();
                print_utils_1.printData('ERC20 Proxy', [['address', erc20ProxyAddress], ['authorised', erc20ProxyAuthorisedAddresses.join(',')]]);
                print_utils_1.printData('ERC721 Proxy', [
                    ['address', erc721ProxyAddress],
                    ['authorised', erc721ProxyAuthorisedAddresses.join(',')],
                ]);
                contracts_1.providerEngine.stop();
                return [2 /*return*/];
        }
    });
}); })();
