const { ethers } = require("hardhat");

async function main() {
    console.log("Deploying smart contract...");

    const Medical = await ethers.getContractFactory("Medical"); // Kiểm tra tên hợp đồng
    const accounts = await ethers.getSigners();
    
    // Triển khai hợp đồng từ tài khoản user1
    const medical = await Medical.connect(accounts[1]).deploy();
    await medical.waitForDeployment(); // Hardhat Ethers v6 thay cho .deployed()

    console.log(`Medical is deployed at address: ${await medical.getAddress()}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
