require("@nomiclabs/hardhat-waffle");


// Print Accounts 
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: { 
    version: "0.8.9",
    settings: {
      optimizer: {enabled: true,
      runs: 10,
      },
    },
  },
};

