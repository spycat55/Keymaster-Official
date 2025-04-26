import React from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Background geometric elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-600/30 blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-indigo-600/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-purple-600/20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="inline-block">Welcome to </span>
            <span> </span>
            <span className="text-blue-500 inline-block">Keymaster</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-blue-300 mb-8">
            Rebuilding the Internet as a Value Network
          </h2>
          
          <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
            Keymaster leverages files and blockchain to transform the internet into a decentralized, 
            value-driven ecosystem. Say goodbye to disappearing data and limited bandwidth—embrace a 
            future where files persist, value flows, and connectivity thrives.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button primary className="group">
              <span>Coming Soon - Stay Tuned!</span>
            </Button>
            {/* <Button className="group" withArrow>
              <span>Learn More</span>
            </Button> */}
          </div>
        </div>
      </div>
      
      {/* Animated element */}
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-gray-800 to-transparent"></div>
    </section>
  );
};

export default Hero;