import { BigNumber } from "@0xproject/utils";
import { stickers } from "./constants";
import { dummyERC721TokenContracts } from "./contracts";
import { createOrder } from "./features/create_order";
import { createTokens } from "./features/create_tokens";
import { fillOrder } from "./features/fill_order";
import { findERC721Owner } from "./print_utils";
import { assert } from "chai";
const bodyParser = require("body-parser");
const express = require("express");
const http = require("http");
const cors = require("cors");

const dummyERC721TokenContract = dummyERC721TokenContracts[0];

const orders = []; // Global state, for this hackathon we will store orders in memory

// Generate orders
createTokens(stickers.length).then(tokenList => {
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
app.use(cors());

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
    assert(orderId, "There must be orderId");
    assert(taker, "There must be a taker address");
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
    let temp = await findERC721Owner(
      dummyERC721TokenContract,
      new BigNumber(stickers[i].id)
    );
    owners.push({ owner: temp, tokenId: stickers[i].id });
  }
  const portfolio = owners
    .map(element => (element.owner === address ? element.tokenId : undefined))
    .filter(obj => obj);
  return stickers.filter(obj => portfolio.includes(obj.id));
}
