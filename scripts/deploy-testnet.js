const hre = require('hardhat');
async function deploy() {
  //get the contract to deploy
  const contract = await hre.ethers.getContractFactory("contracts/TVA.sol:TVA"); 
  const deployedContract = await contract.deploy();
  await deployedContract.deployTransaction.wait(5);
  await hre.run("verify:verify",{
    address: deployedContract.address,
    contract :"contracts/TVA.sol:TVA",
    constructorArguments : []
  })
  .then(()=>{
    console.log(`Link of contract: https://testnet.bscscan.com/address/${deployedContract.address}`);
  })
}

deploy()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
