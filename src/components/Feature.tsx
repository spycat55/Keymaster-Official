import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureProps {
  title: string;
  icon: React.ReactElement;
  children: React.ReactNode;
  index: number;
}

const Feature: React.FC<FeatureProps> = ({ title, icon, children, index }) => {
  return (
    <div className="feature-card" data-index={index}>
      <div className="bg-gray-800 rounded-xl p-6 md:p-8 h-full border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
        <div className="flex items-center mb-6">
          <div className="mr-4 p-3 bg-blue-500/20 rounded-lg text-blue-400">
            {icon}
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
        </div>
        <div className="text-gray-300 space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Feature;