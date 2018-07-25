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
var constants_1 = require("./constants");
var ora = require("ora");
var Table = require('cli-table');
var EMPTY_DATA = [];
var erc721IconRaw = [
    '    ____  ',
    '  .X +.    .',
    '.Xx + -.     .',
    'XXx++ -..      ',
    'XXxx++--..    ',
    " XXXxx+++--  ",
    "  XXXxxx'     ",
    '     ""     ',
];
var erc721Icon = erc721IconRaw.join('\n');
var defaultSchema = {
    style: {
        head: ['green']
    }
};
var borderlessSchema = __assign({}, defaultSchema, { chars: {
        top: '',
        'top-mid': '',
        'top-left': '',
        'top-right': '',
        bottom: '',
        'bottom-mid': '',
        'bottom-left': '',
        'bottom-right': '',
        left: '',
        'left-mid': '',
        mid: '',
        'mid-mid': '',
        right: '',
        'right-mid': '',
        middle: ' '
    }, style: { 'padding-left': 1, 'padding-right': 0, head: ['blue'] } });
var dataSchema = __assign({}, borderlessSchema, { style: { 'padding-left': 1, 'padding-right': 0, head: ['yellow'] } });
function pushAndPrint(table, tableData) {
    for (var _i = 0, tableData_1 = tableData; _i < tableData_1.length; _i++) {
        var col = tableData_1[_i];
        for (var i in col) {
            if (col[i] === constants_1.UNLIMITED_ALLOWANCE_IN_BASE_UNITS.toString()) {
                col[i] = 'MAX_UINT';
            }
        }
        table.push(col);
    }
    console.log(table.toString());
}
function printHeader(header) {
    var table = new Table(__assign({}, borderlessSchema, { style: { 'padding-left': 0, 'padding-right': 0, head: ['blue'] }, head: [header] }));
    console.log('');
    pushAndPrint(table, EMPTY_DATA);
}
exports.printHeader = printHeader;
function printScenario(header) {
    var table = new Table(__assign({}, defaultSchema, { head: [header] }));
    pushAndPrint(table, EMPTY_DATA);
}
exports.printScenario = printScenario;
function printData(header, tableData) {
    var table = new Table(__assign({}, dataSchema, { head: [header, ''] }));
    pushAndPrint(table, tableData);
}
exports.printData = printData;
function fetchAndPrintBalancesAsync(accountDetails, contracts) {
    return __awaiter(this, void 0, void 0, function () {
        var flattenedBalances, flattenedAccounts, _i, contracts_1, token, tokenSymbol, balances, _a, _b, _c, account, address, balance, table;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    flattenedBalances = [];
                    flattenedAccounts = Object.keys(accountDetails).map(function (account) { return account.charAt(0).toUpperCase() + account.slice(1); });
                    _i = 0, contracts_1 = contracts;
                    _d.label = 1;
                case 1:
                    if (!(_i < contracts_1.length)) return [3 /*break*/, 8];
                    token = contracts_1[_i];
                    return [4 /*yield*/, token.symbol.callAsync()];
                case 2:
                    tokenSymbol = _d.sent();
                    balances = [tokenSymbol];
                    _a = [];
                    for (_b in accountDetails)
                        _a.push(_b);
                    _c = 0;
                    _d.label = 3;
                case 3:
                    if (!(_c < _a.length)) return [3 /*break*/, 6];
                    account = _a[_c];
                    address = accountDetails[account];
                    return [4 /*yield*/, token.balanceOf.callAsync(address)];
                case 4:
                    balance = _d.sent();
                    balances.push(balance.toString());
                    _d.label = 5;
                case 5:
                    _c++;
                    return [3 /*break*/, 3];
                case 6:
                    flattenedBalances.push(balances);
                    _d.label = 7;
                case 7:
                    _i++;
                    return [3 /*break*/, 1];
                case 8:
                    table = new Table(__assign({}, dataSchema, { head: ['Token'].concat(flattenedAccounts) }));
                    printHeader('Balances');
                    pushAndPrint(table, flattenedBalances);
                    return [2 /*return*/];
            }
        });
    });
}
exports.fetchAndPrintBalancesAsync = fetchAndPrintBalancesAsync;
function fetchAndPrintERC721Owner(accountDetails, erc721Contract, tokenId) {
    return __awaiter(this, void 0, void 0, function () {
        var flattenedBalances, flattenedAccounts, tokenSymbol, balances, owner, account, address, balance, table;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    flattenedBalances = [];
                    flattenedAccounts = Object.keys(accountDetails).map(function (account) { return account.charAt(0).toUpperCase() + account.slice(1); });
                    return [4 /*yield*/, erc721Contract.symbol.callAsync()];
                case 1:
                    tokenSymbol = _a.sent();
                    balances = [tokenSymbol];
                    return [4 /*yield*/, erc721Contract.ownerOf.callAsync(tokenId)];
                case 2:
                    owner = _a.sent();
                    for (account in accountDetails) {
                        address = accountDetails[account];
                        balance = owner === address ? erc721Icon : '';
                        balances.push(balance);
                    }
                    flattenedBalances.push(balances);
                    table = new Table(__assign({}, dataSchema, { head: ['Token'].concat(flattenedAccounts) }));
                    printHeader('ERC721 Owner');
                    pushAndPrint(table, flattenedBalances);
                    return [2 /*return*/];
            }
        });
    });
}
exports.fetchAndPrintERC721Owner = fetchAndPrintERC721Owner;
function fetchAndPrintAllowancesAsync(accountDetails, contracts, spender) {
    return __awaiter(this, void 0, void 0, function () {
        var flattenedAllowances, flattenedAccounts, _i, contracts_2, token, tokenSymbol, allowances, _a, _b, _c, account, address, balance, table;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    flattenedAllowances = [];
                    flattenedAccounts = Object.keys(accountDetails).map(function (account) { return account.charAt(0).toUpperCase() + account.slice(1); });
                    _i = 0, contracts_2 = contracts;
                    _d.label = 1;
                case 1:
                    if (!(_i < contracts_2.length)) return [3 /*break*/, 8];
                    token = contracts_2[_i];
                    return [4 /*yield*/, token.symbol.callAsync()];
                case 2:
                    tokenSymbol = _d.sent();
                    allowances = [tokenSymbol];
                    _a = [];
                    for (_b in accountDetails)
                        _a.push(_b);
                    _c = 0;
                    _d.label = 3;
                case 3:
                    if (!(_c < _a.length)) return [3 /*break*/, 6];
                    account = _a[_c];
                    address = accountDetails[account];
                    return [4 /*yield*/, token.allowance.callAsync(address, spender)];
                case 4:
                    balance = _d.sent();
                    allowances.push(balance.toString());
                    _d.label = 5;
                case 5:
                    _c++;
                    return [3 /*break*/, 3];
                case 6:
                    flattenedAllowances.push(allowances);
                    _d.label = 7;
                case 7:
                    _i++;
                    return [3 /*break*/, 1];
                case 8:
                    table = new Table(__assign({}, dataSchema, { head: ['Token'].concat(flattenedAccounts) }));
                    printHeader('Allowances');
                    pushAndPrint(table, flattenedAllowances);
                    return [2 /*return*/];
            }
        });
    });
}
exports.fetchAndPrintAllowancesAsync = fetchAndPrintAllowancesAsync;
function awaitTransactionMinedSpinnerAsync(message, txHash, zeroEx) {
    return __awaiter(this, void 0, void 0, function () {
        var spinner, receipt, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    spinner = ora(message + ": " + txHash).start();
                    if (!spinner['isSpinning']) {
                        console.log(message, txHash);
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, zeroEx.awaitTransactionMinedAsync(txHash)];
                case 2:
                    receipt = _a.sent();
                    receipt.status === 1 ? spinner.stop() : spinner.fail(message);
                    return [2 /*return*/, receipt];
                case 3:
                    e_1 = _a.sent();
                    spinner.fail(message);
                    throw e_1;
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.awaitTransactionMinedSpinnerAsync = awaitTransactionMinedSpinnerAsync;
function printTransaction(header, txReceipt, data, events) {
    if (data === void 0) { data = []; }
    if (events === void 0) { events = ['Fill', 'Transfer', 'CancelUpTo', 'Cancel']; }
    printHeader('Transaction');
    var status = txReceipt.status == 1 ? 'Success' : 'Failure';
    var headerColor = txReceipt.status == 1 ? 'green' : 'red';
    var table = new Table(__assign({}, defaultSchema, { head: [header, txReceipt.transactionHash], style: __assign({}, defaultSchema.style, { head: [headerColor] }) }));
    var tableData = data.concat([['gasUsed', txReceipt.gasUsed.toString()], ['status', status]]);
    pushAndPrint(table, tableData);
    if (txReceipt.logs.length > 0) {
        printHeader('Logs');
        for (var _i = 0, _a = txReceipt.logs; _i < _a.length; _i++) {
            var log = _a[_i];
            var event = log.event;
            if (event && events.includes(event)) {
                var args = log.args;
                var data_1 = [['contract', log.address]].concat(Object.entries(args));
                printData("" + event, data_1);
            }
        }
    }
}
exports.printTransaction = printTransaction;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["INVALID"] = 0] = "INVALID";
    OrderStatus[OrderStatus["INVALID_MAKER_ASSET_AMOUNT"] = 1] = "INVALID_MAKER_ASSET_AMOUNT";
    OrderStatus[OrderStatus["INVALID_TAKER_ASSET_AMOUNT"] = 2] = "INVALID_TAKER_ASSET_AMOUNT";
    OrderStatus[OrderStatus["FILLABLE"] = 3] = "FILLABLE";
    OrderStatus[OrderStatus["EXPIRED"] = 4] = "EXPIRED";
    OrderStatus[OrderStatus["FULLY_FILLED"] = 5] = "FULLY_FILLED";
    OrderStatus[OrderStatus["CANCELLED"] = 6] = "CANCELLED";
})(OrderStatus || (OrderStatus = {}));
function printOrderInfos(orderInfos) {
    var data = [];
    for (var order in orderInfos) {
        var orderInfo = orderInfos[order];
        var orderStatus = OrderStatus[orderInfo.orderStatus];
        data.push([order, orderStatus]);
    }
    printData('Order Info', data);
}
exports.printOrderInfos = printOrderInfos;
