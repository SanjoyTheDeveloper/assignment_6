import React from 'react';
import { FiCheck } from 'react-icons/fi';

const ProductCard = ({ product, addToCart, inCart }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl hover:shadow-lg transition-all duration-300 p-8 flex flex-col h-full relative">
      
      {/* Top Header: Icon & Badge */}
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 bg-slate-50/80 rounded-full flex items-center justify-center text-xl border border-slate-100">
          {product?.icon?.replace('Fa', 'Icon') || '🛠️'}
        </div>
        {product.tag && (
          <span className={`text-[11px] font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide ${
            product.tag.toLowerCase().includes('popular') ? 'bg-indigo-100 text-indigo-600' : 
            product.tag.toLowerCase().includes('best') ? 'bg-amber-100 text-amber-600' : 
            'bg-emerald-100 text-emerald-600'
          }`}>
            {product.tagType || product.tag}
          </span>
        )}
      </div>
      
      {/* Title & Description */}
      <h2 className="text-xl font-bold text-slate-800 mb-3">{product.name}</h2>
      <p className="text-slate-500 text-[14px] leading-relaxed mb-6 flex-grow">
        {product.description}
      </p>
      
      {/* Price */}
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-3xl font-extrabold text-slate-800">${product.price}</span>
        <span className="text-slate-400 text-sm font-medium">/{product.period}</span>
      </div>
      
      {/* Features */}
      <div className="space-y-3 mb-8 text-[14px] text-slate-500">
        {product.features.map((feature, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <FiCheck className="text-emerald-500 mt-0.5 flex-shrink-0" size={16} />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      
      {/* Action Button */}
      <button 
        className={`w-full rounded-full py-3.5 text-[15px] font-bold ${
          inCart 
            ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
            : 'bg-violet-600 text-white hover:bg-violet-700 shadow-md shadow-violet-600/20 active:scale-[0.98] transition-all'
        }`}
        onClick={() => !inCart && addToCart(product)}
        disabled={inCart}
      >
        {inCart ? 'Added to Cart' : 'Buy Now'}
      </button>
      
    </div>
  );
};

export default ProductCard;
