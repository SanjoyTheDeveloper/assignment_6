import React from 'react';

const StatsSection = () => {
  return (
    <div className="w-full bg-[#7c3aed] py-20 px-4 mt-8 mb-20">
      <div className="max-w-7xl mx-auto text-white text-center grid grid-cols-1 md:grid-cols-3 gap-12 divide-x-0 md:divide-x divide-violet-400">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-5xl md:text-[3.5rem] font-extrabold mb-3 leading-tight">50K+</h2>
          <p className="text-violet-200 text-lg font-medium">Active Users</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-5xl md:text-[3.5rem] font-extrabold mb-3 leading-tight">200+</h2>
          <p className="text-violet-200 text-lg font-medium">Premium Tools</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-5xl md:text-[3.5rem] font-extrabold mb-3 leading-tight">4.9</h2>
          <p className="text-violet-200 text-lg font-medium">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
