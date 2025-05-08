// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { WagmiConfig, createConfig, configureChains, mainnet, sepolia } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import BuyTicketPage from './Pages/BuyTicketPage';
import IssueTicket from './Pages/IssueTicket';
import MyticketPage from './Pages/MyticketPage';
import ResaleTicketPage from './Pages/ResaleTicketPage';
import './App.css';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, sepolia],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors: [
    new MetaMaskConnector({ chains })
  ]
});

function App() {
  return (
    <WagmiConfig config={config}>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buy-ticket" element={<BuyTicketPage />} />
            <Route path="/issue-ticket" element={<IssueTicket />} />
            <Route path="/my-tickets" element={<MyticketPage />} />
            <Route path="/resale-ticket" element={<ResaleTicketPage />} />
          </Routes>
        </div>
      </div>
    </WagmiConfig>
  );
}

export default App;
