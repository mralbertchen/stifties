"use strict";
exports.__esModule = true;
var utils_1 = require("@0xproject/utils");
exports.GANACHE_NETWORK_ID = 50;
exports.GANACHE_RPC = "http://127.0.0.1:8545";
exports.GANACHE_TX_DEFAULTS = { gas: 400000 };
exports.KOVAN_NETWORK_ID = 42;
exports.KOVAN_RPC = "https://kovan.infura.io/";
exports.KOVAN_TX_DEFAULTS = { gas: 400000 };
exports.MNEMONIC = process.env.NODE_ENV === "kovan"
    ? "topic concert ramp load argue harbor equip island couple clarify fence smart"
    : "concert load couple harbor equip island argue ramp clarify fence smart topic";
exports.BASE_DERIVATION_PATH = "44'/60'/0'/0";
exports.UNLIMITED_ALLOWANCE_IN_BASE_UNITS = new utils_1.BigNumber(2)
    .pow(256)
    .minus(1);
exports.NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
exports.ZERO = new utils_1.BigNumber(0);
// Ganache
exports.RPC_URL = process.env.NODE_ENV === "kovan" ? exports.KOVAN_RPC : exports.GANACHE_RPC;
exports.NETWORK_ID = process.env.NODE_ENV === "kovan" ? exports.KOVAN_NETWORK_ID : exports.GANACHE_NETWORK_ID;
exports.TX_DEFAULTS = process.env.NODE_ENV === "kovan" ? exports.KOVAN_TX_DEFAULTS : exports.GANACHE_TX_DEFAULTS;
// Kovan
// export const RPC_URL = KOVAN_RPC;
// export const NETWORK_ID: number = KOVAN_NETWORK_ID;
// export const TX_DEFAULTS = KOVAN_TX_DEFAULTS;
exports.stickers = [
    {
        id: 1,
        name: "Blacksmith",
        uri: "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FBlockstudios_Blacksmith.jpg?1532520144524"
    },
    {
        id: 2,
        name: "Hokkaido Melon",
        uri: "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FBlockstudios_HokkaidoMelon.jpg?1532520144781"
    },
    {
        id: 3,
        name: "Optician",
        uri: "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FBlockstudios_Optician_FanArt.jpg?1532520145184"
    },
    {
        id: 4,
        name: "Otterman",
        uri: "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FBlockstudios_OtterMan.jpg?1532520145239"
    },
    {
        id: 5,
        name: "CoinZuki",
        uri: "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FKnownOrigin_CoinZuki.jpg?1532520234241"
    },
    {
        id: 6,
        name: "Like a Human 1",
        uri: "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FKnownOrigin_Like%20a%20Human%201.jpg?1532520234767"
    },
    {
        id: 7,
        name: "Melt",
        uri: "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FKnownOrigin_Melt.jpg?1532520235200"
    },
    {
        id: 8,
        name: "Tempo",
        uri: "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FKnownOrigin_Tempo.jpg?1532520236125"
    },
    {
        id: 9,
        name: "Cells",
        uri: "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FKnownOrigin_Cells.jpg?1532520236416"
    },
    {
        id: 10,
        name: "Pebbles",
        uri: "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FKnownOrigin_Pebbles.jpg?1532520240265"
    },
    {
        id: 11,
        name: "TopHat Banano",
        uri: "https://cdn.glitch.com/aa57ce9e-0c8a-4b85-9945-1fd92935bc3f%2FTophat%20Banano.jpeg?1532567797525"
    },
    {
        id: 12,
        name: "Bikini Banano",
        uri: "https://cdn.glitch.com/aa57ce9e-0c8a-4b85-9945-1fd92935bc3f%2FBikini%20Banano.jpeg?1532567797807"
    },
    {
        id: 13,
        name: "Sunglasses Banano",
        uri: "https://cdn.glitch.com/aa57ce9e-0c8a-4b85-9945-1fd92935bc3f%2FSunglasses%20Banano.jpeg?1532567798612"
    },
    {
        id: 14,
        name: "Goldmine Canary",
        uri: "https://cdn.glitch.com/aa57ce9e-0c8a-4b85-9945-1fd92935bc3f%2FGoldmine%20Canary.png?1532568115446"
    },
    {
        id: 15,
        name: "FOMO Panda",
        uri: "https://cdn.glitch.com/aa57ce9e-0c8a-4b85-9945-1fd92935bc3f%2FFOMO%20Panda.png?1532568115605"
    },
    {
        id: 16,
        name: "Last of Ours",
        uri: "https://cdn.glitch.com/aa57ce9e-0c8a-4b85-9945-1fd92935bc3f%2FLast%20of%20Ours.png?1532568115859"
    },
    {
        id: 17,
        name: "Protect Nature",
        uri: "https://cdn.glitch.com/aa57ce9e-0c8a-4b85-9945-1fd92935bc3f%2FProtect%20Nature.png?1532568116017"
    },
    {
        id: 18,
        name: "All for One",
        uri: "https://cdn.glitch.com/aa57ce9e-0c8a-4b85-9945-1fd92935bc3f%2FAll%20for%20One.png?1532568116535"
    },
    {
        id: 19,
        name: "Sad Tiger",
        uri: "https://cdn.glitch.com/aa57ce9e-0c8a-4b85-9945-1fd92935bc3f%2FSad%20Tiger.png?1532568343266"
    },
    {
        id: 20,
        name: "Share the Love",
        uri: "https://cdn.glitch.com/aa57ce9e-0c8a-4b85-9945-1fd92935bc3f%2FShare%20the%20Love.png?1532568343501"
    },
    {
        id: 21,
        name: "CryptoWhale",
        uri: "https://cdn.glitch.com/aa57ce9e-0c8a-4b85-9945-1fd92935bc3f%2FCryptoWhale.png?1532568343751"
    }
];
