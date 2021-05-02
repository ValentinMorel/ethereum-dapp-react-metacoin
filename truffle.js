// environment variables set in the package config
var networkId = process.env.npm_package_config_ganache_networkId;
var gasPrice = process.env.npm_package_config_ganache_gasPrice;
var gasLimit = process.env.npm_package_config_ganache_gasLimit;

module.exports = {
  networks: {
      development: {
          host: '127.0.0.1',  // ganache defaults
          port: 8545,         // ganache defaults
          network_id: "*",
          gas: gasLimit,
          gasPrice: gasPrice
      }
  },
  compilers: {
      solc: {
        version: "0.4.24",
      }
  },
};
