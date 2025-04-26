import React from 'react';
import { Key, Github, Twitter, Mail, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-gray-900 border-t border-gray-800 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white mb-4">
              <Key className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold">Keymaster</span>
            </div>
            <p className="text-gray-400">
              Files. Blockchain. Value.
            </p>
            <div >
            {/* <a href="https://t.me/keymastercc" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-blue-500 transition-colors">
              <MessageCircle className="h-4 w-4 mr-1" />
              <span>Join the Telegram group</span>
            </a> */}
            </div>
            {/* <div className="flex space-x-4 text-gray-400">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:master@keymaster.cc" className="hover:text-blue-500 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://t.me/keymastercc" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div> */}
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://t.me/keymastercc" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-500 transition-colors"><MessageCircle className="h-4 w-4 mr-1" />Join the Telegram group</a></li>
              <li><a href="mailto:master@keymaster.cc" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-500 transition-colors"><Mail className="h-4 w-4 mr-1" />Contact us via email</a></li>
              {/* <li><a href="#" className="hover:text-blue-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">API Docs</a></li> */}
            </ul>
          </div>
          
          {/* <div>
            <h3 className="text-lg font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Guides</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Use Cases</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">FAQ</a></li>
            </ul>
          </div> */}
          
          {/* <div>
            <h3 className="text-lg font-bold text-white mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest news and updates</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 rounded-l-md bg-gray-800 border border-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex-grow"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </form>
          </div> */}
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-gray-500">Built with </span>
            <span className="ml-2 text-white font-medium"> Bitcoin SV </span>
            <span className="ml-2 text-gray-500"> payments </span>
            
          </div>
          
          <div className="text-gray-500 flex flex-col md:flex-row items-center">
            <p className="mb-2 md:mb-0 md:mr-4">
              © 2025 Keymaster.cc. All rights reserved.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;