import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  const navigate = useNavigate();

  return (
    <div className="navbar bg-white shadow-sm sticky top-0 z-50 px-4 sm:px-8">
      <div className="navbar-start">
        <a 
          className="text-2xl font-bold text-violet-600 cursor-pointer"
          onClick={() => navigate('/')}
        >
          DigiTools
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-slate-700">
          <li><a onClick={() => navigate('/')}>Products</a></li>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li><a>Testimonials</a></li>
          <li><a>FAQ</a></li>
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-4">
        <div 
          className="indicator cursor-pointer text-slate-700 hover:text-violet-600 transition-colors"
          onClick={() => navigate('/cart')}
        >
          <FiShoppingCart size={24} />
          {cartCount > 0 && (
            <span className="badge badge-sm badge-primary indicator-item">{cartCount}</span>
          )}
        </div>
        <button className="btn btn-ghost font-medium">Login</button>
        <button className="btn btn-primary bg-violet-600 hover:bg-violet-700 border-none text-white rounded-full px-6">Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;
