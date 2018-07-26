import { ZeroEx } from "0x.js";
import { assetDataUtils, MessagePrefixType } from "@0xproject/order-utils";
import { Order } from "@0xproject/types";
import { BigNumber } from "@0xproject/utils";
import { NETWORK_ID, NULL_ADDRESS, TX_DEFAULTS, ZERO } from "../constants";
import {
  dummyERC721TokenContracts,
  providerEngine,
  etherTokenContract
} from "../contracts";
import {
  awaitTransactionMinedSpinnerAsync,
  fetchAndPrintAllowancesAsync,
  fetchAndPrintBalancesAsync,
  fetchAndPrintERC721Owner,
  printData,
  printScenario,
  printTransaction
} from "../print_utils";
import { signingUtils } from "../signing_utils";
import config from "node-config";

const dummyERC721TokenContract = dummyERC721TokenContracts[0];

const nftContractAddress =
  process.env.NODE_ENV === "kovan"
    ? "0xE3E62025Ca7f71e1C3C12bf1eb2bc15fF5806647"
    : dummyERC721TokenContract.address;

const zeroEx = new ZeroEx(providerEngine, { networkId: NETWORK_ID });

const expirationTimeSeconds = new BigNumber(Date.now() + 168 * 60 * 60 * 1000);
const exchangeAddress = zeroEx.exchange.getContractAddress();

// the amount the maker is selling in maker asset (1 ERC721 Token)
const makerAssetAmount = new BigNumber(1);

// 0x v2 uses asset data to encode the correct proxy type and additional parameters

const etherTokenAddress = zeroEx.etherToken.getContractAddressIfExists();
const takerAssetData = ZeroEx.encodeERC20AssetData(etherTokenAddress);
let txHash;
let txReceipt;

export async function createOrder(
  makerAddress,
  askPrice,
  tokenId: BigNumber,
  metaDataRef
) {
  const metaData = Object.assign({}, metaDataRef);

  const makerAssetData = assetDataUtils.encodeERC721AssetData(
    dummyERC721TokenContract.address,
    tokenId
  );
  const rawOrder = {
    exchangeAddress,
    makerAddress,
    takerAddress: NULL_ADDRESS,
    senderAddress: NULL_ADDRESS,
    feeRecipientAddress: NULL_ADDRESS,
    expirationTimeSeconds,
    salt: ZeroEx.generatePseudoRandomSalt(),
    makerAssetAmount,
    takerAssetAmount: new BigNumber(askPrice),
    makerAssetData,
    takerAssetData,
    makerFee: ZERO,
    takerFee: ZERO
  } as Order;

  const orderHashHex = ZeroEx.getOrderHashHex(rawOrder);
  metaData["orderId"] = orderHashHex;
  metaData["tokenId"] = metaData.id;
  delete metaData.id;

  const orderToReturn = { ...rawOrder, ...metaData };

  return orderToReturn;
}
