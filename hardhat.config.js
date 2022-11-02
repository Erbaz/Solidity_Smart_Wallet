// https://eth-goerli.g.alchemy.com/v2/nztKhTqn78mc2vTdT6X7ByMigJqrspSi

require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    goerli:{
      url: "https://eth-goerli.g.alchemy.com/v2/nztKhTqn78mc2vTdT6X7ByMigJqrspSi",
      accounts: ["f7796a942bc48d580bff1f2cfd2b0fec8c5f56e7150c55c129ea481ab6752e97"]
    }
  }
};
