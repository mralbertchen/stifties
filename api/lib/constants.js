"use strict";
exports.__esModule = true;
var utils_1 = require("@0xproject/utils");
exports.GANACHE_NETWORK_ID = 50;
exports.GANACHE_RPC = 'http://127.0.0.1:8545';
exports.GANACHE_TX_DEFAULTS = { gas: 400000 };
exports.KOVAN_NETWORK_ID = 42;
exports.KOVAN_RPC = 'https://kovan.infura.io/';
exports.KOVAN_TX_DEFAULTS = { gas: 400000 };
exports.MNEMONIC = 'concert load couple harbor equip island argue ramp clarify fence smart topic';
exports.BASE_DERIVATION_PATH = "44'/60'/0'/0";
exports.UNLIMITED_ALLOWANCE_IN_BASE_UNITS = new utils_1.BigNumber(2).pow(256).minus(1);
exports.NULL_ADDRESS = '0x0000000000000000000000000000000000000000';
exports.ZERO = new utils_1.BigNumber(0);
// Ganache
exports.RPC_URL = exports.GANACHE_RPC;
exports.NETWORK_ID = exports.GANACHE_NETWORK_ID;
exports.TX_DEFAULTS = exports.GANACHE_TX_DEFAULTS;
// Kovan
// export const RPC_URL = KOVAN_RPC;
// export const NETWORK_ID: number = KOVAN_NETWORK_ID;
// export const TX_DEFAULTS = KOVAN_TX_DEFAULTS;
