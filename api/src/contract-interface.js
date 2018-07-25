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

  const myContract = new web3.eth.Contract(dummy721ABI, contractAddress, {
    from: account.address
  });

  const contractTx = myContract.methods.mint(
    account.address,
    web3.utils.randomHex(32)
  );
  const encodedABI = contractTx.encodeABI();

  const tx = {
    from: account.address,
    to: contractAddress,
    gasPrice: "0x4A817C800",
    gas: 40000000,
    data: encodedABI
  };

  web3.eth.getBalance(account.address).then(res => {
    console.log(web3.utils.fromWei(res, "ether"));
  });

  const signed = await web3.eth.accounts.signTransaction(tx, privateKey);

  web3.eth
    .sendSignedTransaction(signed.rawTransaction)
    .then(res => console.log(res))
    .catch(err => console.error(err));
})();
