// import { ChainId } from '@pancakeswap-libs/sdk';
import { ChainId } from '@traderjoe-xyz/sdk';
import { Configuration } from './tomb-finance/config';
import { BankInfo } from './tomb-finance';

const configurations: { [env: string]: Configuration } = {
  development: {
    chainId: ChainId.AVALANCHE,
    networkName: 'Avalanche C Chain',
    ftmscanUrl: 'https://snowtrace.io/',
    defaultProvider: 'https://api.avax.network/ext/bc/C/rpc',
    deployments: require('./tomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WFTM: ['0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd', 18],
      FUSDT: ['0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664', 6], // This is actually usdc on mainnet not fusdt
      BOO: ['0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7', 18],
      ZOO: ['0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7', 0],
      SHIBA: ['0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7', 9],
      SNO: ['0x1fE4869f2C5181b9CD780a7E16194FA2c4C4293D', 18],
      'WAVAX-USDC-LP': ['0x67926d973cD8eE876aD210fAaf7DFfA99E414aCf', 18],
      'SNO-JOE-LP': ['0xE63b66A8CF7811525cd15daB15F17fb62aa5af2F', 18],
      'SNOSHARE-JOE-LP': ['0x061349a57b702ebE3139CA419457bb23f7e0D8A2', 18],
      'SNO-SNOSHARE-LP': ['0x3e262be2339069ceC95552683c1eb3F513aDCc66', 18],
    },
    baseLaunchDate: new Date('2021-06-02 13:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    masonryLaunchesAt: new Date('2020-12-11T00:00:00Z'),
    refreshInterval: 10000,
  },
  production: {
    chainId: ChainId.AVALANCHE,
    networkName: 'Avalanche C Chain',
    ftmscanUrl: 'https://snowtrace.io/',
    defaultProvider: 'https://api.avax.network/ext/bc/C/rpc',
    deployments: require('./tomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WFTM: ['0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd', 18],
      FUSDT: ['0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664', 6], // This is actually usdc on mainnet not fusdt
      BOO: ['0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7', 18],
      ZOO: ['0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7', 0],
      SHIBA: ['0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7', 9],
      SNO: ['0x1fE4869f2C5181b9CD780a7E16194FA2c4C4293D', 18],
      'WAVAX-USDC-LP': ['0x67926d973cD8eE876aD210fAaf7DFfA99E414aCf', 18],
      'SNO-JOE-LP': ['0xE63b66A8CF7811525cd15daB15F17fb62aa5af2F', 18],
      'SNOSHARE-JOE-LP': ['0x061349a57b702ebE3139CA419457bb23f7e0D8A2', 18],
      'SNO-SNOSHARE-LP': ['0x3e262be2339069ceC95552683c1eb3F513aDCc66', 18],
    },
    baseLaunchDate: new Date('2021-06-02 13:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    masonryLaunchesAt: new Date('2020-12-11T00:00:00Z'),
    refreshInterval: 10000,
  },
};

export const bankDefinitions: { [contractName: string]: BankInfo } = {
  /*
  Explanation:
  name: description of the card
  poolId: the poolId assigned in the contract
  sectionInUI: way to distinguish in which of the 3 pool groups it should be listed
        - 0 = Single asset stake pools
        - 1 = LP asset staking rewarding TOMB
        - 2 = LP asset staking rewarding TSHARE
  contract: the contract name which will be loaded from the deployment.environmnet.json
  depositTokenName : the name of the token to be deposited
  earnTokenName: the rewarded token
  finished: will disable the pool on the UI if set to true
  sort: the order of the pool
  */
  SnoJoeLPSnoShareRewardPool: {
    name: 'Earn SNOSHARE by SNO-JOE LP',
    poolId: 0,
    sectionInUI: 2,
    contract: 'TombAvaxLPHShareRewardPool',
    depositTokenName: 'SNO-JOE-LP',
    earnTokenName: 'SNOSHARE',
    finished: false,
    sort: 6,
    closedForStaking: true,
  },
  SnoJoe1LPSnoShareRewardPool: {
    name: 'Earn SNOSHARE by SNO-JOE LP',
    poolId: 0,
    sectionInUI: 2,
    contract: 'TombAvaxLPHShareRewardPool',
    depositTokenName: 'SNO-JOE-LP',
    earnTokenName: 'SNOSHARE',
    finished: false,
    sort: 6,
    closedForStaking: true,
  },
  SnoShareJoeLPSnoShareRewardPool: {
    name: 'Earn SNOSHARE by SNOSHARE-JOE LP',
    poolId: 1,
    sectionInUI: 2,
    contract: 'TombAvaxLPHShareRewardPool',
    depositTokenName: 'SNOSHARE-JOE-LP',
    earnTokenName: 'SNOSHARE',
    finished: false,
    sort: 7,
    closedForStaking: true,
  },
  SnoSnoShareLPSnoShareRewardPool: {
    name: 'Earn SNOSHARE by SNO-SNOSHARE LP',
    poolId: 2,
    sectionInUI: 2,
    contract: 'TombAvaxLPHShareRewardPool',
    depositTokenName: 'SNO-SNOSHARE-LP',
    earnTokenName: 'SNOSHARE',
    finished: false,
    sort: 8,
    closedForStaking: true,
  },
  SnoSnoShareRewardPool: {
    name: 'Earn SNOSHARE by SNO',
    poolId: 5,
    sectionInUI: 2,
    contract: 'TombAvaxLPHShareRewardPool',
    depositTokenName: 'SNO',
    earnTokenName: 'SNOSHARE',
    finished: false,
    sort: 9,
    closedForStaking: true,
  },
  SnoJoeLPRebate: {
    name: 'Bond SNO-JOE LP for SNO',
    poolId: 100,
    sectionInUI: 3,
    contract: 'TombAvaxLPHShareRewardPool',
    depositTokenName: 'SNO-JOE-LP',
    earnTokenName: 'SNO',
    finished: false,
    sort: 6,
    closedForStaking: false,
  },
  SnoShareJoeLPRebate: {
    name: 'Bond SNOSHARE-JOE LP for SNO',
    poolId: 100,
    sectionInUI: 3,
    contract: 'TombAvaxLPHShareRewardPool',
    depositTokenName: 'SNOSHARE-JOE-LP',
    earnTokenName: 'SNO',
    finished: false,
    sort: 6,
    closedForStaking: false,
  },
};

export default configurations[process.env.NODE_ENV || 'development'];
