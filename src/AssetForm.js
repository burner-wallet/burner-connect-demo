import React, { useState, useEffect } from 'react';
import { web3, provider } from './web3';
import ierc20 from './IERC20.json';

const AssetForm = ({ asset, address }) => {
  const [balance, setBalance] = useState(0);
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('0');
  const [loading, setLoading] = useState(false);
  const [hash, setHash] = useState(null);

  useEffect(() => {
    let timer = null;
    let token = null;
    let running = true;
    if (asset.type !== 'native') {
      token = new web3.eth.Contract(ierc20, asset.address);
    }

    const refreshBalance = async () => {
      provider.setNetwork(asset.network);
      const balance = await (token ? token.methods.balanceOf(address).call() : web3.eth.getBalance(address));

      if (running) {
        setBalance(web3.utils.fromWei(balance, 'ether'));
        timer = setTimeout(refreshBalance, 2000);
      }
    };
    refreshBalance();

    return () => {
      running = false;
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [address, asset]);

  const send = async () => {
    setHash(null);
    setLoading(true);
    const value = web3.utils.toWei(amount, 'ether');

    provider.setNetwork(asset.network);

    let call;
    if (asset.type === 'native') {
      call = web3.eth.sendTransaction({ to, from: address, value });
    } else {
      const token = new web3.eth.Contract(ierc20, asset.address);
      call = token.methods.transfer(to, value).send({ from: address });
    }
    const response = await call;

    setLoading(false);
    setAmount('0');
    setHash(response.transactionHash);
  };

  return (
    <div>
      <div>Balance: {balance}</div>
      <div>To: <input value={to} onChange={e => setTo(e.target.value)} /></div>
      <div>Value: <input type="number" min="0" value={amount} onChange={e => setAmount(e.target.value)} /></div>
      <button disabled={loading || to.length !== 42 || amount === '0'} onClick={send}>Send</button>
      {hash && (
        <div>Sent in Transaction {hash}</div>
      )}
    </div>
  )
}

export default AssetForm;