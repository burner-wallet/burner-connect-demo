import React, { useEffect, useState } from 'react';
import { web3, provider } from './web3';

const WalletInfo = () => {
  const [address, setAddress] = useState(null);
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    web3.eth.getAccounts().then(accounts => setAddress(accounts[0]));
    provider.getAssets().then(_assets => setAssets(_assets));

    const changeListener = (accounts) =>setAddress(accounts[0]);
    provider.on('accountsChanged', changeListener);

    return () => {
      provider.off(changeListener);
    };
  }, []);

  return (
    <div>
      <div>Connected to {provider.wallet.name} ({provider.wallet.origin})</div>
      {address && (<div>{address}</div>)}

      {assets.length > 0 && (<div>Assets:</div>)}
      <ul>
        {assets.map(asset => (
          <li key={asset.id}>
            {asset.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WalletInfo;
