async function main() {
    const MyNFT = await ethers.getContractFactory("MyNft");

    // Start deployment, returning a promise that resolves to a contract object
    const MyNft = await MyNFT.deploy();
    console.log("Contract deployed to address:", MyNft.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
  //0xaC7AabD8b5F9A8a75760E6Cc227DaA497d6dc5a9-- contract address
  //npx hardhat run scripts/deploy.js --network rinkeby 
  
  
  //node scripts/mint-nft.js