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

const dummyERC721TokenContract = dummyERC721TokenContracts[0];
if (!dummyERC721TokenContract) {
  throw "No Dummy ERC721 Tokens deployed on this network";
}

const zeroEx = new ZeroEx(providerEngine, { networkId: NETWORK_ID });

const expirationTimeSeconds = new BigNumber(168 * 60 * 60 * 1000);
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
  tokenId,
  metaDataRef
) {
  const metaData = Object.assign({}, metaDataRef);

  const makerAssetData = assetDataUtils.encodeERC721AssetData(
    dummyERC721TokenContract.address,
    new BigNumber(tokenId)
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

  const ecSignature = await zeroEx.ecSignOrderHashAsync(
    orderHashHex,
    makerAddress,
    {
      prefixType: MessagePrefixType.EthSign,
      shouldAddPrefixBeforeCallingEthSign: false
    }
  );
  const signature = signingUtils.rsvToSignature(ecSignature);
  const signedOrderWithMetaData = { ...rawOrder, signature, ...metaData };

  return signedOrderWithMetaData;
}
