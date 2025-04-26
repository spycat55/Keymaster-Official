import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
  withArrow?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  primary = false, 
  className = '', 
  withArrow = false,
  onClick 
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center
        ${primary 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'bg-gray-800 text-gray-100 hover:bg-gray-700'}
        ${className}
      `}
    >
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
};

export default Button;