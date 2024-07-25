require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    arbitrum: {
      url: "https://rpc.ankr.com/arbitrum",
    },
    bsc: {
      url: "https://bsc-dataseed1.binance.org",
    },
    mantle: {
      url: "https://rpc.mantle.xyz",
    },
  }
};
