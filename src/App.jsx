import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import StatsSection from './components/StatsSection';
import ToggleSection from './components/ToggleSection';
import ProductsSection from './components/ProductsSection';
import CartSection from './components/CartSection';
import StepsSection from './components/StepsSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

function App() {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setCartCount(cartCount + 1);
    toast.success(`${product.name} added to cart!`);
  };

  const removeFromCart = (index, product) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
    setCartCount(cartCount - 1);
    toast.info(`${product.name} removed from cart.`);
  };

  const clearCart = () => {
    setCartItems([]);
    setCartCount(0);
    toast.success('Successfully checked out!');
    navigate('/');
  };

  const checkProductInCart = (id) => {
    return cartItems.some(item => item.id === id);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col">
      <Navbar cartCount={cartCount} />
      <div className="w-full flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
                <Banner />
              </div>
              <StatsSection />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ToggleSection cartCount={cartCount} />
                <ProductsSection addToCart={addToCart} checkProductInCart={checkProductInCart} />
              </div>
            </>
          } />
          <Route path="/cart" element={
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
              <ToggleSection cartCount={cartCount} />
              <CartSection 
                cartItems={cartItems} 
                removeFromCart={removeFromCart} 
                clearCart={clearCart} 
              />
            </div>
          } />
        </Routes>
        <StepsSection />
        <PricingSection />
      </div>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
