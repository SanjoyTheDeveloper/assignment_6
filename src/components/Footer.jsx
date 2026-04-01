import React from 'react';
import { FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-slate-300 py-16 px-4 md:px-12 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <a className="text-3xl font-bold text-white mb-4 block">DigiTools</a>
          <p className="text-slate-400 mb-6 text-sm">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Product</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-violet-400 transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-violet-400 transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-violet-400 transition-colors">Templates</a></li>
            <li><a href="#" className="hover:text-violet-400 transition-colors">Integrations</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-violet-400 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-violet-400 transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-violet-400 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-violet-400 transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Resources</h4>
          <ul className="space-y-3 text-sm mb-6">
            <li><a href="#" className="hover:text-violet-400 transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-violet-400 transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-violet-400 transition-colors">Community</a></li>
          </ul>
          
          <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Social Links</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-violet-600 transition-colors">
              <FiTwitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-violet-600 transition-colors">
              <FiFacebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-violet-600 transition-colors">
              <FiInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} DigiTools. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
