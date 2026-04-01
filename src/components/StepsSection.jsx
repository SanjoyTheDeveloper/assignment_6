import React from 'react';
import { FiUser, FiBox, FiZap } from 'react-icons/fi';

const StepsSection = () => {
  return (
    <div className="py-24 bg-slate-50 relative">
      <div className="absolute top-0 left-0 w-full h-[80%] bg-slate-100/50 -z-10 rounded-[3rem]"></div>
      
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl font-extrabold text-slate-800 mb-4">Get Started In 3 Steps</h2>
        <p className="text-lg text-slate-500">Start using premium digital tools in minutes, not hours.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-5xl mx-auto">
        <div className="bg-white rounded-[2rem] p-10 text-center shadow-lg shadow-slate-200/50 relative border border-slate-100">
          <div className="absolute -top-4 -right-4 w-10 h-10 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md border-4 border-white">
            01
          </div>
          <div className="w-24 h-24 bg-violet-50 rounded-full flex items-center justify-center mx-auto mb-8 text-violet-600">
            <FiUser size={40} />
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Create Account</h3>
          <p className="text-slate-500 leading-relaxed max-w-[250px] mx-auto">Sign up for free in seconds. No credit card required to get started.</p>
        </div>

        <div className="bg-white rounded-[2rem] p-10 text-center shadow-lg shadow-slate-200/50 relative border border-slate-100">
          <div className="absolute -top-4 -right-4 w-10 h-10 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md border-4 border-white">
            02
          </div>
          <div className="w-24 h-24 bg-violet-50 rounded-full flex items-center justify-center mx-auto mb-8 text-violet-600">
            <FiBox size={40} />
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Choose Products</h3>
          <p className="text-slate-500 leading-relaxed max-w-[250px] mx-auto">Browse our catalog and select the tools that fit your needs.</p>
        </div>

        <div className="bg-white rounded-[2rem] p-10 text-center shadow-lg shadow-slate-200/50 relative border border-slate-100">
          <div className="absolute -top-4 -right-4 w-10 h-10 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md border-4 border-white">
            03
          </div>
          <div className="w-24 h-24 bg-violet-50 rounded-full flex items-center justify-center mx-auto mb-8 text-violet-600">
            <FiZap size={40} />
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Start Creating</h3>
          <p className="text-slate-500 leading-relaxed max-w-[250px] mx-auto">Download and start using your premium tools immediately.</p>
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
