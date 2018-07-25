const bodyParser = require("body-parser");
const express = require("express");
const http = require("http");

/*
const order = {
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
    }

*/

const orders = [
  {
    id: 1,
    name: "Blacksmith",
    uri:
      "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FBlockstudios_Blacksmith.jpg?1532520144524"
  },
  {
    id: 2,
    name: "Hokkaido Melon",
    uri:
      "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FBlockstudios_HokkaidoMelon.jpg?1532520144781"
  },

  {
    id: 3,
    name: "Optician",
    uri:
      "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FBlockstudios_Optician_FanArt.jpg?1532520145184"
  },

  {
    id: 4,
    name: "Otterman",
    uri:
      "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FBlockstudios_OtterMan.jpg?1532520145239"
  },

  {
    id: 5,
    name: "CoinZuki",
    uri:
      "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FKnownOrigin_CoinZuki.jpg?1532520234241"
  },

  {
    id: 6,
    name: "Like a Human 1",
    uri:
      "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FKnownOrigin_Like%20a%20Human%201.jpg?1532520234767"
  },

  {
    id: 7,
    name: "Melt",
    uri:
      "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FKnownOrigin_Melt.jpg?1532520235200"
  },

  {
    id: 8,
    name: "Tempo",
    uri:
      "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FKnownOrigin_Tempo.jpg?1532520236125"
  },

  {
    id: 9,
    name: "Cells",
    uri:
      "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FKnownOrigin_Cells.jpg?1532520236416"
  },

  {
    id: 10,
    name: "Pebbles",
    uri:
      "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FKnownOrigin_Pebbles.jpg?1532520240265"
  }
]; // for this hackathon we will store orders in memory

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

app.post("/v0/fillorder/:id", (req, res) => {
  console.log("HTTP: POST fill order");
  const order = req.body;
  const { id } = req.params;
  res.status(201).send({});
});

app.listen(3000, () =>
  console.log("Standard relayer API (HTTP) listening on port 3000!")
);

function renderOrderBook() {
  return {
    orders
  };
}
