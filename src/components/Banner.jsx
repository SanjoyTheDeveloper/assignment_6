import React from 'react';
import { FiPlayCircle } from 'react-icons/fi';

const Banner = () => {
  return (
    <div className="hero min-h-[60vh] bg-transparent py-10 md:py-16">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-20 w-full p-0">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
          className="w-full lg:w-1/2 max-w-[550px] rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] object-cover aspect-square"
          alt="Digital workflow"
        />
        <div className="w-full lg:w-1/2 text-left">
          <span className="inline-flex items-center bg-violet-100 text-violet-600 px-4 py-1.5 rounded-full font-semibold text-[13px] mb-8 border border-violet-200">
            <span className="w-2 h-2 rounded-full bg-violet-600 inline-block mr-2 animate-pulse"></span>
            New: AI-Powered Tools Available
          </span>
          <h1 className="text-5xl lg:text-[4.2rem] font-extrabold text-slate-800 leading-[1.1] mb-6 tracking-tight">
            Supercharge Your<br />Digital Workflow
          </h1>
          <p className="py-2 text-[17px] text-slate-500 max-w-md leading-relaxed mb-8">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
            <br/><br/>
            Explore Products
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button className="btn bg-violet-600 hover:bg-violet-700 border-none text-white rounded-full px-8 py-3 h-auto font-bold shadow-lg shadow-violet-600/30">
              Explore Products
            </button>
            <button className="btn bg-white border border-slate-200 text-violet-600 hover:bg-slate-50 hover:border-slate-300 rounded-full px-8 py-3 h-auto font-bold shadow-sm">
              <FiPlayCircle className="mr-2" size={20} /> Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
