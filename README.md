# Welcome to the wonderful world of STIFTIES

## STIFTIES vision statement

We want to bring the next billion consumers to the world of non-fungible token without them even noticing.

STIFTIES is a marketplace for consumer to download stickers for social media and messaging apps, that are backed by NFTs. Consumers also have the possibility to purchase the NFT of a given sticker directly through the STIFTIES marketplace, by clicking on the sticker in the social media app.

## Inspiration - NIFTYs are made for play

The abundance of cryptocollectibles complicates the _discovery process_. _Engagement_ is limited to a few games which are not accessible to a broad audience. Existing marketplaces are difficult to navigate with limited integration into daily touchpoints on mobile devices.

People spend most of their time messaging on mobile devices, through text and video. Oftentimes, a picture says more than a thousand words having led to the emergence of a hugely profitable market for creating and selling digital stickers. These stickers are particularly prevalent across Asian-facing messaging apps such as Line, Kakao and WeChat. 

Any collectible only has value if there is an interested audience. By tokenising stickers, STIFTIES creates a captive audience for cryptocollectibles, driving discoverability and engagement. The platform allows creators & collectors to receive recurring license income and capture full upside from price increases of a given collectible.

## What it does - Turn any CryptoCollectible into a shareable digital sticker

STIFTIES is an Ethereum-based platform that turns NFTs (ERC721) into stickers that can be sent to contacts via messaging apps. STIFTIES is a marketplace on which stickers can be downloaded for free or for a fee. Free stickers can be sponsored by third-party advertisers. In both cases, the proceeds flow to the NFT owner, subject to a platform fee.

STIFTIES wants to capture as large a creator community as possible: Create stickers out of tokenised artwork and tokenize stickers of non-crypto content creators. 

Consumers who interact with stickers can purchase the underlying NFT by clicking on the sticker. This connects to the Stifties marketplace.

## Substantial market opportunity

The market for stickers is substantial: USD 425mln in FY 2017 (based on Line & Kakao financials) which equates to c. USD 1.70/MAU. This does not account for the large Chinese market opportunity however serves as good proxy.

Company | Sales (USDmln) FY17
---|---
WeChat | 340 <sup>1</sup>
Line | 275
Kakao | 150
**Total:** | **765**

Estimated transaction volumes for NFTs range from USD250mln to USD 500mln, adding up to a USD1bln market opportunity.

_<sup>1</sup>WeChat sales volume estimated based on USD 1.7 (spend pa per MAU) x 1,000mln MAU x 20% conversion (MAU spending USD 1.7)._

## How we built it

From the get-go we knew we wanted to create a marketplace of some kind for these stickers. We believe that 0x v2 Protocol was the best way to create this. We learned about how it works and we basically created our app around the idea that Stifties will act as a relay network for the decentralized sticker marketplace. This allows artists to create and sell their own artwork in a fully decentralized way. We utilized the 0x sample ERC721 token contract from the 0x-v2-beta-starter repo. The only issue is that the contract does not currently store meta data so we decided to hardcode it on our platform for now.

On the front end, the chat app is built using React/Redux that updates its state by querying the Node.js backend API, which in turn queries the blockchain via web3 and the 0x protocol exchange contract.

## Challenges we ran into

In the beginning we wanted to deploy our own contract to the Kovan testnet but none of the faucets were working. We then tried to deploy onto ganache-cli / testrpc but could not get the gas issue to work. In the end we settled for the sample contract from 0x with some workarounds. We tried to use Toshi instead of Metamask but it didn't work for us for the first few hours of the hackathon so we decided to go with Metamask. 

All of this is very new and the documentation has been sparse. A lot of time was spent debugging smart contract transactions which usually do not return verbose and useful error messages. A lot of head-banging in the process of making sure every single argument passed in was watertight and done correctly. Good thing we had TypeScript and that made a lot of it explicit and caught many errors at build time.

[0x/Toshi]

## Accomplishments that we're proud of

We were able to get the app working properly on the Ethereum blockchain despite many hurdles. All the transactions during the demo will be real and verifiable on the local node.

## What we learned

From a commercial perspective, we received great feedback from the NIFTY community with specific token teams highlighting how STIFTIES would complement the existing ecosystem.

On the technical side, we learned a lot about how decentralized marketplaces work and how 0x aids in creating that ecosystem. We understood the difficulty of compiling and testing Ethereum smart contracts and learned a lot about where ERC721 is and where it still needs to go. For example, there needs to be a function that returns an array of tokenIds based on msg.sender.

## What's next for STIFTIES

We definitely want to take the concept to the next level: Access the large messaging apps and create in-messaging gaming experiences around stickers. Upcoming releases of blockchain-compatible smartphones represent additional growth drivers for STIFTIES.

We see the following factors as strong avenues for adoption and growth:

:one: Gamify the cryptocollectible purchase experience: Sets need to include a minimum of ten stickers. This drives additional demand by collectors to fill gaps in their collections. In addition, Super-Sets would include rare collectibles and thus costs more than normal sets.

:two: Launchpad for new collectible sales: Ability to showcase collectibles to a wide audience before launch of official sale. Turn into a distribution channel of choice for NFT creators.

:three: Attract new creator to the Sticker economy: Content creator not only profit from recurring licensing income but also from a value increase of the NFT. This represents additional upside not available in the current sticker economy.

:four: Drive data analytics: Downloads and views give evidence about the popularity of a NFT-sticker which are relevant to the NFT investor community

## To Start
