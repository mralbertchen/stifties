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
var bodyParser = require("body-parser");
var express = require("express");
var http = require("http");
var utils_1 = require("@0xproject/utils");
var contracts_1 = require("./contracts");
var print_utils_1 = require("./print_utils");
var create_tokens_1 = require("./features/create_tokens");
var create_order_1 = require("./features/create_order");
var fill_order_1 = require("./features/fill_order");
var dummyERC721TokenContract = contracts_1.dummyERC721TokenContracts[0];
if (!dummyERC721TokenContract) {
    throw "No Dummy ERC721 Tokens deployed on this network";
}
var stickers = [
    {
        id: 0,
        name: "Blacksmith",
        uri: "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FBlockstudios_Blacksmith.jpg?1532520144524"
    },
    {
        id: 1,
        name: "Hokkaido Melon",
        uri: "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FBlockstudios_HokkaidoMelon.jpg?1532520144781"
    },
    {
        id: 2,
        name: "Optician",
        uri: "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FBlockstudios_Optician_FanArt.jpg?1532520145184"
    },
    {
        id: 3,
        name: "Otterman",
        uri: "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FBlockstudios_OtterMan.jpg?1532520145239"
    },
    {
        id: 4,
        name: "CoinZuki",
        uri: "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FKnownOrigin_CoinZuki.jpg?1532520234241"
    },
    {
        id: 5,
        name: "Like a Human 1",
        uri: "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FKnownOrigin_Like%20a%20Human%201.jpg?1532520234767"
    },
    {
        id: 6,
        name: "Melt",
        uri: "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FKnownOrigin_Melt.jpg?1532520235200"
    },
    {
        id: 7,
        name: "Tempo",
        uri: "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FKnownOrigin_Tempo.jpg?1532520236125"
    },
    {
        id: 8,
        name: "Cells",
        uri: "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FKnownOrigin_Cells.jpg?1532520236416"
    },
    {
        id: 9,
        name: "Pebbles",
        uri: "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FKnownOrigin_Pebbles.jpg?1532520240265"
    }
]; // bootstrapping with 10 stickers
var orders = []; // Global state, for this hackathon we will store orders in memory
// Generate orders
create_tokens_1.createTokens().then(function (tokenList) {
    for (var i = 0; i < stickers.length; i++) {
        stickers[i].id = tokenList[i];
        create_order_1.createOrder("0x5409ed021d9299bf6814279a6a1411a7e866a631", 10, tokenList[i], stickers[i]).then(function (res) { return orders.push(res); });
    }
});
// HTTP Serverss
var app = express();
app.use(bodyParser.json());
app.get("/v0/orderbook", function (req, res) {
    console.log("HTTP: GET orderbook");
    res.status(201).send(renderOrderBook());
});
app.post("/v0/order", function (req, res) {
    console.log("HTTP: POST order");
    var order = req.body;
    orders.push(order);
    res.status(201).send({});
});
app.get("/v0/portfolio/:address", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var address, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                address = req.params.address;
                console.log("HTTP: GET portfolio with " + address);
                _b = (_a = res.status(200)).send;
                return [4 /*yield*/, renderPortfolio(address)];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [2 /*return*/];
        }
    });
}); });
app.post("/v0/fillorder/", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var _a, orderId, taker, orderIndex, order, result, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, orderId = _a.orderId, taker = _a.taker;
                console.log("HTTP: POST fill order " + orderId);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                orderIndex = orders.findIndex(function (obj) { return obj.orderId === orderId; });
                order = orders[orderIndex];
                if (!order)
                    res.status(500).send("No such item");
                return [4 /*yield*/, fill_order_1.fillOrder(order, taker)];
            case 2:
                result = _b.sent();
                orders.splice(orderIndex, 1);
                res.status(200).send(result);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                res.status(500).json(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.listen(8080, function () {
    return console.log("Standard relayer API (HTTP) listening on port 8080!");
});
function renderOrderBook() {
    return {
        orders: orders
    };
}
function renderPortfolio(address) {
    return __awaiter(this, void 0, void 0, function () {
        var owners, i, temp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    owners = [];
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < stickers.length)) return [3 /*break*/, 4];
                    console.log(stickers[i].id);
                    return [4 /*yield*/, print_utils_1.findERC721Owner(dummyERC721TokenContract, new utils_1.BigNumber(stickers[i].id))];
                case 2:
                    temp = _a.sent();
                    owners.push(temp);
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4:
                    console.log(owners);
                    return [2 /*return*/];
            }
        });
    });
}
