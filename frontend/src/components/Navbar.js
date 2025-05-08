import React from 'react';
import { Link } from 'react-router-dom';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';

const Navbar = () => {
    const { address, isConnected } = useAccount();
    const { connect } = useConnect({
        connector: new MetaMaskConnector(),
    });
    const { disconnect } = useDisconnect();

    return (
        <nav className="bg-gray-900 text-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="text-xl font-bold text-purple-400">
                        Etherix
                    </Link>

                    <div className="flex items-center space-x-4">
                        <Link to="/buy-ticket" className="hover:text-purple-400 transition-colors">
                            Buy Ticket
                        </Link>
                        <Link to="/issue-ticket" className="hover:text-purple-400 transition-colors">
                            Issue Ticket
                        </Link>
                        <Link to="/my-tickets" className="hover:text-purple-400 transition-colors">
                            My Tickets
                        </Link>
                        <Link to="/resale-ticket" className="hover:text-purple-400 transition-colors">
                            Resale
                        </Link>

                        {isConnected ? (
                            <div className="flex items-center space-x-4">
                                <span className="text-sm text-gray-400">
                                    {address?.slice(0, 6)}...{address?.slice(-4)}
                                </span>
                                <button
                                    onClick={() => disconnect()}
                                    className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
                                >
                                    Disconnect
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={() => connect()}
                                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                            >
                                Connect Wallet
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 