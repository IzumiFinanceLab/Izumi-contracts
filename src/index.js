import Web3 from 'web3';
import { PRIVATEKEY } from './secret.js';

const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
const account = web3.eth.accounts.privateKeyToAccount(PRIVATEKEY);

console.log(account);