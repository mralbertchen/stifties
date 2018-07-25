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

export async function createTokens() {
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

  const tokenId = ZeroEx.generatePseudoRandomSalt();

  const tokenIdList = [];

  // Mint 10 new ERC721 tokens

  for (let i = 0; i < 10; i++) {
    let tempNum = tokenId.add(i);
    let temp = await dummyERC721TokenContract.mint.sendTransactionAsync(
      maker,
      tempNum,
      {
        from: maker
      }
    );
    console.log(`Creating token number ${temp}`);
    tokenIdList.push(temp);
  }

  return tokenIdList;
}
