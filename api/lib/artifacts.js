"use strict";
exports.__esModule = true;
var ERC20Proxy = require("./artifacts/ERC20Proxy.json");
var ERC721Proxy = require("./artifacts/ERC721Proxy.json");
var EtherToken = require("./artifacts/WETH9.json");
var Exchange = require("./artifacts/Exchange.json");
var Forwarder = require("./artifacts/Forwarder.json");
var DummyERC20Token = require("./artifacts/DummyERC20Token.json");
var DummyERC721Token = require("./artifacts/DummyERC721Token.json");
var ZRX = require("./artifacts/ZRXToken.json");
exports.artifacts = {
    ERC20Proxy: ERC20Proxy,
    ERC721Proxy: ERC721Proxy,
    EtherToken: EtherToken,
    Exchange: Exchange,
    Forwarder: Forwarder,
    DummyERC20Token: DummyERC20Token,
    DummyERC721Token: DummyERC721Token,
    ZRX: ZRX
};
