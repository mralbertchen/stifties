const Web3 = require('web3');
const solc = require('solc');

const provider = new Web3.providers.HttpProvider('http://localhost:8545');

(async () => {
  const privateKey = '0xf2f48ee19680706196e2e339e5da3491186e0c4c5030670656b0e0164837257d';
  const contractAddress = '0x131855dda0aaff096f6854854c55a4debf61077a';

  const web3 = new Web3(provider);
  const account = web3.eth.accounts.privateKeyToAccount(privateKey);
})();
