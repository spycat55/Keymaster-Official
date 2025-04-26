import React from 'react';
import Feature from './Feature';
import { HardDrive, Wifi, Radio, Bitcoin } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Why Keymaster?
        </h2>
        <p className="text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Discover how our revolutionary Value Network is changing the internet forever
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Feature 
            title="Permanent Files, Powered by Value" 
            icon={<HardDrive className="h-6 w-6" />}
            index={1}
          >
            <p>
              Files are the backbone of the internet, but they vanish when deemed "worthless." Keymaster changes that.
            </p>
            
            <div className="mt-4 pl-4 border-l-2 border-blue-500">
              <h4 className="font-bold text-blue-400 mb-2">Pay for Persistence</h4>
              <p className="text-sm text-gray-400">
                As long as someone values a file and pays for it, it stays online forever.
              </p>
            </div>
            
            <div className="mt-4 pl-4 border-l-2 border-blue-500">
              <h4 className="font-bold text-blue-400 mb-2">Decentralized Storage</h4>
              <p className="text-sm text-gray-400">
                Built on blockchain, your files are secure, immutable, and accessible globally.
              </p>
            </div>
          </Feature>
          
          <Feature 
            title="Unleashing Bandwidth with a Value Network" 
            icon={<Wifi className="h-6 w-6" />}
            index={2}
          >
            <p>
              Operators shrink files to cut costs, leaving users with underutilized gigabit connections. Keymaster unlocks true potential:
            </p>
            
            <div className="mt-4 pl-4 border-l-2 border-blue-500">
              <h4 className="font-bold text-blue-400 mb-2">P2P File Transfer</h4>
              <p className="text-sm text-gray-400">
                Peer-to-peer technology maximizes bandwidth efficiency.
              </p>
            </div>
            
            <div className="mt-4 pl-4 border-l-2 border-blue-500">
              <h4 className="font-bold text-blue-400 mb-2">Market-Driven Pricing</h4>
              <p className="text-sm text-gray-400">
                Files are priced based on demand, incentivizing operators to deliver high-quality service.
              </p>
            </div>
            
            <div className="mt-4 pl-4 border-l-2 border-blue-500">
              <h4 className="font-bold text-blue-400 mb-2">No More Bottlenecks</h4>
              <p className="text-sm text-gray-400">
                From 5G to gigabit broadband, experience the full power of your connection.
              </p>
            </div>
          </Feature>
          
          <Feature 
            title="High-Definition Streaming, Redefined" 
            icon={<Radio className="h-6 w-6" />}
            index={3}
          >
            <p>
              Keymaster's Value Network supports Value Streaming—real-time, high-quality live streaming without buffering.
            </p>
            
            <div className="mt-4 pl-4 border-l-2 border-blue-500">
              <h4 className="font-bold text-blue-400 mb-2">HD & 8K Live</h4>
              <p className="text-sm text-gray-400">
                Stream crystal-clear content powered by decentralized bandwidth.
              </p>
            </div>
            
            <div className="mt-4 pl-4 border-l-2 border-blue-500">
              <h4 className="font-bold text-blue-400 mb-2">Value-Driven</h4>
              <p className="text-sm text-gray-400">
                Pay for what you watch, and creators earn directly.
              </p>
            </div>
          </Feature>
          
          <Feature 
            title="Powered by Bitcoin SV" 
            icon={<Bitcoin className="h-6 w-6" />}
            index={4}
          >
            <p>
              Keymaster is built on Bitcoin SV, the blockchain designed for scalability and microtransactions.
            </p>
            
            <div className="mt-4 pl-4 border-l-2 border-blue-500">
              <h4 className="font-bold text-blue-400 mb-2">Fast Transactions</h4>
              <p className="text-sm text-gray-400">
                Instant payments for file access and streaming.
              </p>
            </div>
            
            <div className="mt-4 pl-4 border-l-2 border-blue-500">
              <h4 className="font-bold text-blue-400 mb-2">Low Fees</h4>
              <p className="text-sm text-gray-400">
                Affordable for users, sustainable for operators.
              </p>
            </div>
            
            <div className="mt-4 pl-4 border-l-2 border-blue-500">
              <h4 className="font-bold text-blue-400 mb-2">Global Reach</h4>
              <p className="text-sm text-gray-400">
                A borderless network for a borderless internet.
              </p>
            </div>
          </Feature>
        </div>
      </div>
    </section>
  );
};

export default Features;