import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ToggleSection = ({ cartCount }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="text-center mb-10 mt-16">
      <h2 className="text-[2.5rem] font-bold mb-4 text-slate-800 tracking-tight">Premium Digital Tools</h2>
      <p className="text-slate-500 max-w-2xl mx-auto mb-10">
        Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
      </p>
      <div className="inline-flex bg-slate-100 rounded-full p-1 border border-slate-200">
        <button 
          onClick={() => navigate('/')}
          className={`px-8 py-3 rounded-full font-medium transition-all ${
            isActive('/') 
              ? 'bg-violet-600 text-white shadow-md' 
              : 'text-slate-600 hover:text-violet-600'
          }`}
        >
          Products
        </button>
        <button 
          onClick={() => navigate('/cart')}
          className={`px-8 py-3 rounded-full font-medium transition-all ${
            isActive('/cart') 
              ? 'bg-violet-600 text-white shadow-md' 
              : 'text-slate-600 hover:text-violet-600'
          }`}
        >
          {cartCount > 0 ? `Cart (${cartCount})` : 'Cart'}
        </button>
      </div>
    </div>
  );
};

export default ToggleSection;
