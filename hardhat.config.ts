import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import 'dotenv/config';

const config: HardhatUserConfig = {
  solidity: '0.8.17',
  networks: {
    mumbai: {
      url: process.env.QUICKNODE_API_KEY_URL,
      accounts: [process.env.PRIVATE_KEY!],
    },
  },
};

export default config;
