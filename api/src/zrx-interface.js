const { ZeroEx } = require('0x.js');
const { BigNumber } = require('@0xproject/utils');
const { assetDataUtils, MessagePrefixType } = require('@0xproject/order-utils');
const Web3 = require('web3');

const provider = new Web3.providers.HttpProvider('http://localhost:8545');

// Instantiate 0x.js instance
const configs = {
  networkId: 50,
};

const zeroEx = new ZeroEx(provider, configs);

// Number of decimals to use (for ETH and ZRX)
const DECIMALS = 18;

// Set up the Order and fill it
const tenMinutes = 10 * 60 * 1000;
const randomExpiration = new BigNumber(Date.now() + tenMinutes);
const exchangeAddress = zeroEx.exchange.getContractAddress();


const makerAssetData = assetDataUtils.encodeERC721AssetData(
  dummyERC721TokenContract.address,
  tokenId,
);

const etherTokenAddress = zeroEx.etherToken.getContractAddressIfExists();
const takerAssetData = ZeroEx.encodeERC20AssetData(etherTokenAddress);

// Addresses
const WETH_ADDRESS = zeroEx.etherToken.getContractAddressIfExists(); // The wrapped ETH token contract
const ZRX_ADDRESS = zeroEx.exchange.getZRXTokenAddress(); // The ZRX token contract
// The Exchange.sol address (0x exchange smart contract)
const EXCHANGE_ADDRESS = zeroEx.exchange.getContractAddress();

console.log(WETH_ADDRESS, ZRX_ADDRESS, EXCHANGE_ADDRESS);

const accounts = zeroEx
  .getAvailableAddressesAsync()
  .then(accounts => console.log('accounts: ', accounts));

const validateOrder = async (signedOrder) => {
  zeroEx.exchange.validateOrderFillableOrThrowAsync(signedOrder).then(;
};

const fillOrder = async (order, ) => {
  // Create the order hash


  // Fill the Order via 0x.js Exchange contract
  txHash = await zeroEx.exchange.fillOrderAsync(signedOrder, takerAssetAmount, taker, { gasLimit: TX_DEFAULTS.gas });
  txReceipt = await awaitTransactionMinedSpinnerAsync('fillOrder', txHash, zeroEx);
};





const createOrder = (order) => {

  const fullOrder = {
    exchangeAddress,
    makerAddress: maker,
    takerAddress: NULL_ADDRESS,
    senderAddress: NULL_ADDRESS,
    feeRecipientAddress: NULL_ADDRESS,
    expirationTimeSeconds: randomExpiration,
    salt: ZeroEx.generatePseudoRandomSalt(),
    makerAssetAmount,
    takerAssetAmount,
    makerAssetData,
    takerAssetData,
    makerFee: ZERO,
    takerFee: ZERO,
    metaData: ZeroEx.decodeERC721AssetData(assetData)
  };

  return order;

}




/**
 * @function
 * Signs a order object with privateKey
 * @param {Object} order
 * @param {string} privateKey
 * @returns {Object} signedOrder
 */
const signOrder = async (order, privateKey) => {

  const orderHashHex = ZeroEx.getOrderHashHex(order);
  const ecSignature = await zeroEx.ecSignOrderHashAsync(orderHashHex, maker, {
      prefixType: MessagePrefixType.EthSign,
      shouldAddPrefixBeforeCallingEthSign: false,
  });
  const signature = signingUtils.rsvToSignature(ecSignature);
  const signedOrder = { ...order, signature };

  return signedOrder;

};