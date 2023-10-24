// truffle-config.js

const HDWalletProvider = require("@truffle/hdwallet-provider");

// Replace with your 12-word mnemonic phrase
const mnemonic = "oxygen name royal cushion snow jar scare spider coast stumble solid spirit";

// Replace with the Sepolia network URL or the URL of your target testnet
const sepoliaURL = "https://sepolia.infura.io/v3/ea4a20b5b96e4b0888f0b2b50b9c962a";

module.exports = {
  networks: {
    sepolia: {
      provider: () => new HDWalletProvider(mnemonic, sepoliaURL),
      network_id: 11155111, // Use the correct network ID for Sepolia
      gas: 5500000, // Adjust the gas limit as needed
      gasPrice: 10000000000, // Adjust the gas price as needed
    },
  },
  compilers: {
    solc: {
      version: "0.8.0", // Specify the version you want to use
    },
  },
  // Other configurations...
};
