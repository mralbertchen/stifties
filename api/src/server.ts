import { DummyERC721TokenContract } from "./contract_wrappers/dummy_erc721_token";
const bodyParser = require("body-parser");
const express = require("express");
const http = require("http");

import { ZeroEx } from "0x.js";
import { assetDataUtils, MessagePrefixType } from "@0xproject/order-utils";
import { Order } from "@0xproject/types";
import { BigNumber } from "@0xproject/utils";
import { NETWORK_ID, NULL_ADDRESS, TX_DEFAULTS, ZERO } from "./constants";
import {
  dummyERC721TokenContracts,
  providerEngine,
  etherTokenContract
} from "./contracts";
import {
  awaitTransactionMinedSpinnerAsync,
  fetchAndPrintAllowancesAsync,
  fetchAndPrintBalancesAsync,
  fetchAndPrintERC721Owner,
  printData,
  printScenario,
  printTransaction,
  findERC721Owner
} from "./print_utils";
import { signingUtils } from "./signing_utils";
import { createTokens } from "./features/create_tokens";
import { createOrder } from "./features/create_order";
import { fillOrder } from "./features/fill_order";

const dummyERC721TokenContract = dummyERC721TokenContracts[0];
if (!dummyERC721TokenContract) {
  throw "No Dummy ERC721 Tokens deployed on this network";
}

const stickers = [
  {
    id: 0,
    name: "Blacksmith",
    uri:
      "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FBlockstudios_Blacksmith.jpg?1532520144524"
  },
  {
    id: 1,
    name: "Hokkaido Melon",
    uri:
      "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FBlockstudios_HokkaidoMelon.jpg?1532520144781"
  },

  {
    id: 2,
    name: "Optician",
    uri:
      "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FBlockstudios_Optician_FanArt.jpg?1532520145184"
  },

  {
    id: 3,
    name: "Otterman",
    uri:
      "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FBlockstudios_OtterMan.jpg?1532520145239"
  },

  {
    id: 4,
    name: "CoinZuki",
    uri:
      "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FKnownOrigin_CoinZuki.jpg?1532520234241"
  },

  {
    id: 5,
    name: "Like a Human 1",
    uri:
      "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FKnownOrigin_Like%20a%20Human%201.jpg?1532520234767"
  },

  {
    id: 6,
    name: "Melt",
    uri:
      "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FKnownOrigin_Melt.jpg?1532520235200"
  },

  {
    id: 7,
    name: "Tempo",
    uri:
      "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FKnownOrigin_Tempo.jpg?1532520236125"
  },

  {
    id: 8,
    name: "Cells",
    uri:
      "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FKnownOrigin_Cells.jpg?1532520236416"
  },

  {
    id: 9,
    name: "Pebbles",
    uri:
      "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FKnownOrigin_Pebbles.jpg?1532520240265"
  }
]; // bootstrapping with 10 stickers

const orders = []; // Global state, for this hackathon we will store orders in memory

// Generate orders
createTokens().then(tokenList => {
  for (let i = 0; i < stickers.length; i++) {
    stickers[i].id = tokenList[i];
    createOrder(
      "0x5409ed021d9299bf6814279a6a1411a7e866a631",
      10,
      tokenList[i],
      stickers[i]
    ).then(res => orders.push(res));
  }
});

// HTTP Serverss
const app = express();

app.use(bodyParser.json());

app.get("/v0/orderbook", (req, res) => {
  console.log("HTTP: GET orderbook");
  res.status(201).send(renderOrderBook());
});

app.post("/v0/order", (req, res) => {
  console.log("HTTP: POST order");
  const order = req.body;
  orders.push(order);
  res.status(201).send({});
});

app.get("/v0/portfolio/:address", async (req, res) => {
  const { address } = req.params;
  console.log(`HTTP: GET portfolio with ${address}`);
  res.status(200).send(await renderPortfolio(address));
});

app.post("/v0/fillorder/", async (req, res) => {
  const { orderId, taker } = req.body;
  console.log(`HTTP: POST fill order ${orderId}`);
  try {
    const orderIndex = orders.findIndex(obj => obj.orderId === orderId);
    const order = orders[orderIndex];
    if (!order) res.status(500).send("No such item");
    const result = await fillOrder(order, taker);
    orders.splice(orderIndex, 1);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(8080, () =>
  console.log("Standard relayer API (HTTP) listening on port 8080!")
);

function renderOrderBook() {
  return {
    orders
  };
}

async function renderPortfolio(address) {
  const owners = [];
  for (let i = 0; i < stickers.length; i++) {
    console.log(stickers[i].id);
    let temp = await findERC721Owner(
      dummyERC721TokenContract,
      new BigNumber(stickers[i].id)
    );
    owners.push(temp);
  }

  console.log(owners);
}
