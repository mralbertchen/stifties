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
const takerAssetAmount = new BigNumber(10);

// 0x v2 uses asset data to encode the correct proxy type and additional parameters

const etherTokenAddress = zeroEx.etherToken.getContractAddressIfExists();
const takerAssetData = ZeroEx.encodeERC20AssetData(etherTokenAddress);
let txHash;
let txReceipt;

export async function fillOrder(orderData, taker) {
  try {
    const maker = orderData.makerAddress;
    // gets rid of metaData
    const tokenId = new BigNumber(orderData.tokenId);
    delete orderData.tokenId;
    delete orderData.orderId;
    delete orderData.uri;
    delete orderData.name;

    // Print out the Balances and Allowances
    const erc20ProxyAddress = zeroEx.erc20Proxy.getContractAddress();
    await fetchAndPrintAllowancesAsync(
      { maker, taker },
      [etherTokenContract],
      erc20ProxyAddress
    );
    await fetchAndPrintBalancesAsync({ maker, taker }, [
      dummyERC721TokenContract,
      etherTokenContract
    ]);
    await fetchAndPrintERC721Owner(
      { maker, taker },
      dummyERC721TokenContract,
      tokenId
    );

    // Approve the new ERC721 Proxy to move the ERC721 tokens for maker
    const makerERC721ApprovalTxHash = await zeroEx.erc721Token.setProxyApprovalForAllAsync(
      dummyERC721TokenContract.address,
      maker,
      true
    );
    txReceipt = await awaitTransactionMinedSpinnerAsync(
      "Maker ERC721 Approval",
      makerERC721ApprovalTxHash,
      zeroEx
    );

    // Approve the new ERC20 Proxy to move WETH for takerAccount
    const takerWETHApprovalTxHash = await zeroEx.erc20Token.setUnlimitedProxyAllowanceAsync(
      etherTokenAddress,
      taker
    );
    txReceipt = await awaitTransactionMinedSpinnerAsync(
      "Taker WETH Approval",
      takerWETHApprovalTxHash,
      zeroEx
    );

    // Deposit ETH into WETH for the taker
    const takerWETHDepositTxHash = await zeroEx.etherToken.depositAsync(
      etherTokenAddress,
      takerAssetAmount,
      taker
    );
    txReceipt = await awaitTransactionMinedSpinnerAsync(
      "Taker WETH Deposit",
      takerWETHDepositTxHash,
      zeroEx
    );

    printData("Fill", [
      ["Maker ERC721 Approval", makerERC721ApprovalTxHash],
      ["Taker WETH Approval", takerWETHApprovalTxHash],
      ["Taker WETH Deposit", takerWETHDepositTxHash]
    ]);

    const orderHashHex = ZeroEx.getOrderHashHex(orderData);

    const ecSignature = await zeroEx.ecSignOrderHashAsync(orderHashHex, maker, {
      prefixType: MessagePrefixType.EthSign,
      shouldAddPrefixBeforeCallingEthSign: false
    });
    const signature = signingUtils.rsvToSignature(ecSignature);

    const signedOrder = { ...orderData, signature };

    await zeroEx.exchange.isValidSignatureAsync(orderHashHex, maker, signature);

    console.log(`filling order...`);
    const txHash = await zeroEx.exchange.fillOrderAsync(
      signedOrder,
      takerAssetAmount,
      taker,
      { gasLimit: TX_DEFAULTS.gas }
    );

    console.log(`order filled ${txHash}`);

    txReceipt = await awaitTransactionMinedSpinnerAsync(
      "fillOrder",
      txHash,
      zeroEx
    );

    console.log(txReceipt);

    printTransaction("fillOrder", txReceipt, [["orderHash", orderHashHex]]);

    // Print the Balances
    await fetchAndPrintBalancesAsync({ maker, taker }, [
      dummyERC721TokenContract,
      etherTokenContract
    ]);
    await fetchAndPrintERC721Owner(
      { maker, taker },
      dummyERC721TokenContract,
      tokenId
    );

    return txHash;
  } catch (err) {
    Promise.reject(`Could not fill order, error occured: ${err}`);
  }
}
