const Web3 = require("web3");

const provider = new Web3.providers.HttpProvider("http://localhost:8545");

const mokenABI = require("../Mokens.json").abi;
const dummy721ABI = require("./dummy721.json").abi;

(async () => {
  const privateKey =
    "0xf2f48ee19680706196e2e339e5da3491186e0c4c5030670656b0e0164837257d";
  const contractAddress = "0x48BaCB9266a570d521063EF5dD96e61686DbE788";

  const web3 = new Web3(provider);
  const account = web3.eth.accounts.privateKeyToAccount(privateKey);

  web3.eth.getGasPrice().then(console.log);
})();
