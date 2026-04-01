import React from 'react';

const CartSection = ({ cartItems, removeFromCart, clearCart }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 border border-slate-100 mb-24 shadow-sm">
      <h3 className="text-xl font-bold text-slate-800 mb-6">Your Cart</h3>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-slate-500 text-lg">Your cart is currently empty.</p>
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-8">
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-5 bg-slate-50/70 rounded-2xl mb-3">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl shadow-sm">
                    {item?.icon?.replace('Fa', 'Icon') || '📦'}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-[15px]">{item.name}</h4>
                    <p className="text-slate-500 text-sm mt-0.5">${item.price}</p>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(index, item)}
                  className="text-rose-500 hover:text-rose-600 text-sm font-medium transition-colors"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between items-center text-lg mt-8 mb-6 pt-4">
            <span className="text-slate-500 text-sm">Total:</span>
            <span className="font-bold text-slate-800">${total}</span>
          </div>
          
          <button 
            onClick={clearCart}
            className="btn btn-primary w-full bg-[#8B5CF6] hover:bg-[#7c3aed] border-none text-white rounded-full h-12 text-sm font-medium"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CartSection;
