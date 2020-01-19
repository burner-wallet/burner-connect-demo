import React, { useState } from 'react';
import './App.css';
import { provider } from './web3';
import WalletInfo from './WalletInfo';

const App = () => {
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(false);

  const connect = async () => {
    setLoading(true);
    await provider.enable().catch(() => null);
    setLoading(false);
    setConnected(provider.connected);
  }

  return (
    <div className="App">
      <header className="App-header">
        Burner Connect
      </header>
      {connected ? (
        <WalletInfo />
      ) : (
        <div>
          <button onClick={connect} disabled={loading}>Connect to Burner Wallet</button>
        </div>
      )}
    </div>
  );
}

export default App;
