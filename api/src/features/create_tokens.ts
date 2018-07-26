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

export async function createTokens(qty = 10) {
  // In this scenario, the maker creates and signs an order for selling an ERC721 token for WETH.
  // The taker takes this order and fills it via the 0x Exchange contract.
  printScenario("Create ERC721");
  const dummyERC721TokenContract = dummyERC721TokenContracts[0];
  if (!dummyERC721TokenContract) {
    console.log("No Dummy ERC721 Tokens deployed on this network");
    return;
  }
  const zeroEx = new ZeroEx(providerEngine, { networkId: NETWORK_ID });
  const [maker, taker] = await zeroEx.getAvailableAddressesAsync();
  printData("Accounts", [["Maker", maker], ["Taker", taker]]);

  const tokenIdList = [];

  for (let i = 0; i < qty; i++) {
    let tokenId = ZeroEx.generatePseudoRandomSalt();
    let temp = await dummyERC721TokenContract.mint.sendTransactionAsync(
      maker,
      tokenId,
      {
        from: maker
      }
    );
    console.log(`Creating token id ${tokenId.toString(16)}, tx: ${temp}`);
    tokenIdList.push(tokenId);
  }

  return tokenIdList;
}
