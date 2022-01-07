async function main() {
    // A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts, 
    // so HelloWorld here is a factory for instances of our hello world contract. 
    // When using the hardhat-ethers plugin ContractFactory and Contract, 
    // instances are connected to the first signer (owner) by default.
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
 
    // Start deployment, returning a promise that resolves to a contract object
    const hello_world = await HelloWorld.deploy("Hello World!");
    console.log("Contract deployed to address:", hello_world.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });