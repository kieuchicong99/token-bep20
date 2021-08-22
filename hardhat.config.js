require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();

const NETWORK = ["bsc_testnet", "bsc_mainnet"];

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  // defaultNetwork: NETWORK[1],
  networks: {
    bsc_testnet: {
      url: process.env.BSC_TESTNET_NETWORK_URL,
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [process.env.WALLET_PRIVATE_KEY],
    },
    bsc_mainnet: {
      url: process.env.BSC_MAINNET_NETWORK_URL,
      chainId: 56,
      gasPrice: 20000000000,
      accounts: [process.env.WALLET_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.BSC_SCAN_KEY,
  },
  solidity: {
    compilers: [
      {
        version: "0.8.0",
        settings: {
          outputSelection: {
            "*": {
              "*": ["storageLayout"],
            },
          },
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
			{
        version: "0.6.0"
			},
      {
        version: "0.6.12"
			}
    ],
  },
};
