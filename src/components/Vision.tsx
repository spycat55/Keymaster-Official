import React from 'react';
import { Network } from 'lucide-react';

const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-20 md:py-32 bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-10">
            <div className="bg-blue-500/20 p-4 rounded-full">
              <Network className="h-10 w-10 text-blue-400" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
            The Internet, Reimagined
          </h2>
          
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            At Keymaster.cc, we believe the foundation of the internet is files. By combining files 
            with blockchain technology, we're creating a Value Network—a revolutionary infrastructure 
            where data is permanent, bandwidth is limitless, and value drives connectivity.
          </p>
          
          <div className="relative h-[1px] my-16 bg-gradient-to-r from-transparent via-gray-600 to-transparent">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-blue-500 bg-gray-800"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;