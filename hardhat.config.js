require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
  networks:{
    hardhat:{},
    polygon_mumbai:{
      url:"https://polygon-mumbai.g.alchemy.com/v2/-Q3bwbk7Y-wznNCM9wzRsSffp7R8zNUs",
      accounts:[
        "0x2870ad1f27470f803b07ed18e97f0230d1bb262aa1329fd14154444a0c97dfd4"
      ]
    },
    mantle_testnet: {
      url: "https://rpc.testnet.mantle.xyz/",
      chainId:5001,
      accounts: ["0x2870ad1f27470f803b07ed18e97f0230d1bb262aa1329fd14154444a0c97dfd4"]
    }
  }
};
