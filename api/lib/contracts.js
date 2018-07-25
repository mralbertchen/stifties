"use strict";
exports.__esModule = true;
var subproviders_1 = require("@0xproject/subproviders");
var artifacts_1 = require("./artifacts");
var constants_1 = require("./constants");
var exchange_1 = require("./contract_wrappers/exchange");
var forwarder_1 = require("./contract_wrappers/forwarder");
var weth9_1 = require("./contract_wrappers/weth9");
var zrx_token_1 = require("./contract_wrappers/zrx_token");
var dummy_erc20_token_1 = require("./contract_wrappers/dummy_erc20_token");
var dummy_erc721_token_1 = require("./contract_wrappers/dummy_erc721_token");
var Web3ProviderEngine = require("web3-provider-engine");
var RpcSubprovider = require("web3-provider-engine/subproviders/rpc");
exports.mnemonicWallet = new subproviders_1.MnemonicWalletSubprovider({
    mnemonic: constants_1.MNEMONIC,
    baseDerivationPath: constants_1.BASE_DERIVATION_PATH
});
exports.providerEngine = new Web3ProviderEngine();
exports.providerEngine.addProvider(exports.mnemonicWallet);
exports.providerEngine.addProvider(new RpcSubprovider({ rpcUrl: constants_1.RPC_URL }));
exports.providerEngine.start();
// Extract the Proxy addresses
exports.zrxTokenAddress = artifacts_1.artifacts.ZRX.networks[constants_1.NETWORK_ID].address;
exports.exchangeContract = new exchange_1.ExchangeContract(artifacts_1.artifacts.Exchange.compilerOutput.abi, artifacts_1.artifacts.Exchange.networks[constants_1.NETWORK_ID].address, exports.providerEngine);
exports.etherTokenContract = new weth9_1.WETH9Contract(artifacts_1.artifacts.EtherToken.compilerOutput.abi, artifacts_1.artifacts.EtherToken.networks[constants_1.NETWORK_ID].address, exports.providerEngine);
exports.zrxTokenContract = new zrx_token_1.ZRXTokenContract(artifacts_1.artifacts.ZRX.compilerOutput.abi, artifacts_1.artifacts.ZRX.networks[constants_1.NETWORK_ID].address, exports.providerEngine);
exports.forwarderContract = new forwarder_1.ForwarderContract(artifacts_1.artifacts.Forwarder.compilerOutput.abi, artifacts_1.artifacts.Forwarder.networks[50].address, exports.providerEngine);
// These are only deployed on Ganache
exports.dummyERC20TokenContracts = [];
exports.dummyERC721TokenContracts = [];
var GANACHE_ERC20_TOKENS = [
    "0x6dfff22588be9b3ef8cf0ad6dc9b84796f9fb45f",
    "0xcfc18cec799fbd1793b5c43e773c98d4d61cc2db",
    "0xf22469f31527adc53284441bae1665a7b9214dba",
    "0x10add991de718a69dec2117cb6aa28098836511b",
    "0x8d61158a366019ac78db4149d75fff9dda51160d"
];
var GANACHE_ERC721_TOKENS = ["0x131855dda0aaff096f6854854c55a4debf61077a"];
if (constants_1.NETWORK_ID === constants_1.GANACHE_NETWORK_ID) {
    for (var _i = 0, GANACHE_ERC20_TOKENS_1 = GANACHE_ERC20_TOKENS; _i < GANACHE_ERC20_TOKENS_1.length; _i++) {
        var tokenAddress = GANACHE_ERC20_TOKENS_1[_i];
        exports.dummyERC20TokenContracts.push(new dummy_erc20_token_1.DummyERC20TokenContract(artifacts_1.artifacts.DummyERC20Token.compilerOutput.abi, tokenAddress, exports.providerEngine));
    }
    for (var _a = 0, GANACHE_ERC721_TOKENS_1 = GANACHE_ERC721_TOKENS; _a < GANACHE_ERC721_TOKENS_1.length; _a++) {
        var tokenAddress = GANACHE_ERC721_TOKENS_1[_a];
        exports.dummyERC721TokenContracts.push(new dummy_erc721_token_1.DummyERC721TokenContract(artifacts_1.artifacts.DummyERC721Token.compilerOutput.abi, tokenAddress, exports.providerEngine));
    }
}
