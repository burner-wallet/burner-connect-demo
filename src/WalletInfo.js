import React, { useEffect, useState } from 'react';
import { web3, provider } from './web3';
import AssetForm from './AssetForm';

const WalletInfo = () => {
  const [address, setAddress] = useState(null);
  const [assets, setAssets] = useState([]);
  const [selectedAsset, setSelectedAsset] = useState(null);

  useEffect(() => {
    web3.eth.getAccounts().then(accounts => setAddress(accounts[0]));
    provider.getAssets().then(_assets => setAssets(_assets));

    const changeListener = (accounts) =>setAddress(accounts[0]);
    provider.addListener('accountsChanged', changeListener);

    return () => {
      provider.removeListener(changeListener);
    };
  }, []);

  return (
    <div>
      <div>Connected to {provider.wallet.name} ({provider.wallet.origin})</div>
      {address && (<div>{address}</div>)}

      {assets.length > 0 && (<div>Assets:</div>)}
      <ul>
        {assets.map(asset => (
          <li onClick={() => setSelectedAsset(asset)} key={asset.id}>
            {asset.name}
          </li>
        ))}
      </ul>

      {selectedAsset && selectedAsset.type === 'native' && (
        <AssetForm asset={selectedAsset} address={address}/>
      )}
    </div>
  );
}

export default WalletInfo;
