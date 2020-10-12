function getCoinDetails(coin, userID) {
  switch (coin) {
    case "Bitcoin":
      return {
        userID,
        name: coin,
        description: "BTC",
        moves: [],
        img:
          "https://img2.freepng.es/20171220/bhe/bitcoin-png-5a3a2702388611.73714972151376051423153857.jpg",
      };
    case "Ethereum":
      return {
        userID,
        name: coin,
        description: "ETH",
        moves: [],
        img:
          "https://i0.pngocean.com/files/906/776/980/ethereum-blockchain-bitcoin-logo-see-you-there.jpg",
      };
    case "Litecoin":
      return {
        userID,
        name: coin,
        description: "LTC",
        moves: [],
        img:
          "https://w7.pngwing.com/pngs/777/875/png-transparent-bitcoin-computer-icons-cryptocurrency-litecoin-bitcoin-text-trademark-logo.png",
      };
    case "Swipe":
      return {
        userID,
        name: coin,
        description: "SXP",
        moves: [],
        img: "https://swipe.io/images/network-img.svg",
      };
    default:
      throw new Error("Coin details lookup failed");
  }
}

module.exports = getCoinDetails;
