import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black to-purple-900 text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-purple-400">
                        Welcome to Etherix
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Your decentralized platform for event tickets. Buy, sell, and manage your tickets securely on the blockchain.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-gray-900/50 p-6 rounded-xl border border-purple-700">
                        <h3 className="text-xl font-semibold mb-4 text-purple-400">Buy Tickets</h3>
                        <p className="text-gray-300 mb-4">Purchase event tickets securely using cryptocurrency.</p>
                        <Link
                            to="/buy-ticket"
                            className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                        >
                            Browse Tickets
                        </Link>
                    </div>

                    <div className="bg-gray-900/50 p-6 rounded-xl border border-purple-700">
                        <h3 className="text-xl font-semibold mb-4 text-purple-400">Issue Tickets</h3>
                        <p className="text-gray-300 mb-4">Create and issue your own event tickets as NFTs.</p>
                        <Link
                            to="/issue-ticket"
                            className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                        >
                            Create Ticket
                        </Link>
                    </div>

                    <div className="bg-gray-900/50 p-6 rounded-xl border border-purple-700">
                        <h3 className="text-xl font-semibold mb-4 text-purple-400">My Tickets</h3>
                        <p className="text-gray-300 mb-4">View and manage your purchased tickets.</p>
                        <Link
                            to="/my-tickets"
                            className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                        >
                            View Tickets
                        </Link>
                    </div>

                    <div className="bg-gray-900/50 p-6 rounded-xl border border-purple-700">
                        <h3 className="text-xl font-semibold mb-4 text-purple-400">Resale</h3>
                        <p className="text-gray-300 mb-4">List your tickets for resale on the marketplace.</p>
                        <Link
                            to="/resale-ticket"
                            className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                        >
                            Resell Tickets
                        </Link>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-bold mb-4 text-purple-400">Why Choose Etherix?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2 text-purple-400">Secure</h3>
                            <p className="text-gray-300">Built on blockchain technology for maximum security and transparency.</p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2 text-purple-400">Decentralized</h3>
                            <p className="text-gray-300">No central authority, giving you full control over your tickets.</p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2 text-purple-400">Easy to Use</h3>
                            <p className="text-gray-300">Simple and intuitive interface for managing your tickets.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home; 