import Web3 from 'web3';
import BurnerConnectProvider from '@burner-wallet/burner-connect-provider';

export const provider = new BurnerConnectProvider();
export const web3 = new Web3(provider);
