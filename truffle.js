module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 3141592,
      gasPrice: 0x01,
    }
  },
  compilers: {
      solc: {
        version: "0.4.24",
      }
  },
};
