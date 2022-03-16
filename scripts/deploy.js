async function main() {
    // We get the contract to deploy
    const TheOpList = await ethers.getContractFactory("TheOpList");
    const theOpList = await TheOpList.deploy();
  
    await theOpList.deployed();
  
    console.log("The Op List deployed to: ", theOpList.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });