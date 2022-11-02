import hre from 'hardhat';

const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();

  const transaction1 = await nftContract.makeAnEpicNFT();
  await transaction1.wait();
  console.log('Minted NFT 1');

  const transaction2 = await nftContract.makeAnEpicNFT();
  await transaction2.wait();
  console.log('Minted NFT 2');

  console.log('Contract deployed to:', nftContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log('error');
    process.exit(1);
  }
};

runMain();
