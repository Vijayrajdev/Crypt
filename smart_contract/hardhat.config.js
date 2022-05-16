require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/8prqmubZfprCKDE6gJoZ4oLq4UiCy3Kj",
      accounts: [
        "f193d295ffe3e6fd872c9de9ee2ad2a87d7e1549f17a8563564e2a864e04b6cf",
      ],
    },
  },
};
