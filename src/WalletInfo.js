import React, { useEffect, useState } from 'react';
import { web3, provider } from './web3';

const WalletInfo = () => {
  const [address, setAddress] = useState(null);

  useEffect(() => {
    web3.eth.getAccounts().then(accounts => setAddress(accounts[0]));
  }, [])

  return (
    <div>
      <div>Connected to {provider.wallet.name} ({provider.wallet.origin})</div>
      {address && (<div>{address}</div>)}
    </div>
  );
}

export default WalletInfo;
