import React from 'react';
import { FiCheck } from 'react-icons/fi';

const PricingSection = () => {
  return (
    <>
      <div className="py-24 max-w-5xl mx-auto">
        <div className="text-center mb-16 px-4">
        <h2 className="text-4xl font-extrabold text-slate-800 mb-4">Simple, Transparent Pricing</h2>
        <p className="text-lg text-slate-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Starter Plan */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col h-full transform transition-transform hover:-translate-y-2">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Starter</h3>
            <p className="text-slate-500 min-h-[48px]">Perfect for getting started</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-5xl font-extrabold text-slate-800">$0</span>
              <span className="text-slate-500 font-medium">/Month</span>
            </div>
          </div>
          
          <div className="space-y-4 mb-8 flex-grow">
            {['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                <FiCheck className="text-emerald-500 flex-shrink-0" size={20} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          
          <button className="btn w-full rounded-2xl border-none h-14 text-lg bg-violet-600 text-white hover:bg-violet-700 mt-auto">
            Get Started Free
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-violet-600 rounded-3xl p-8 shadow-xl shadow-violet-200/50 flex flex-col h-full relative transform transition-transform hover:-translate-y-2 scale-100 md:scale-105 z-10 border border-violet-500">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
            Most Popular
          </div>
          <div className="mb-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <p className="text-violet-200 min-h-[48px]">Best for professionals</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-5xl font-extrabold">$29</span>
              <span className="text-violet-200 font-medium">/Month</span>
            </div>
          </div>
          
          <div className="space-y-4 mb-8 flex-grow text-violet-50">
            {['Access to all premium tools', 'Unlimited templates', 'Priority support', 'Unlimited projects', 'Cloud sync', 'Advanced analytics'].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 font-medium">
                <FiCheck className="text-white flex-shrink-0" size={20} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          
          <button className="btn w-full rounded-2xl border-none h-14 text-lg bg-white text-violet-600 hover:bg-slate-50 mt-auto font-bold shadow-md shadow-violet-900/20">
            Start Pro Trial
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col h-full transform transition-transform hover:-translate-y-2">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Enterprise</h3>
            <p className="text-slate-500 min-h-[48px]">For teams and businesses</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-5xl font-extrabold text-slate-800">$99</span>
              <span className="text-slate-500 font-medium">/Month</span>
            </div>
          </div>
          
          <div className="space-y-4 mb-8 flex-grow">
            {['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'Custom branding'].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                <FiCheck className="text-emerald-500 flex-shrink-0" size={20} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          
          <button className="btn w-full rounded-2xl border-none h-14 text-lg bg-violet-600 text-white hover:bg-violet-700 mt-auto">
            Contact Sales
          </button>
        </div>
      </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-[#7c3aed] py-24 px-4 text-center mt-32">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-violet-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Join thousands of professionals who are already using Digitools to work smarter.<br />Start your free trial today.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button className="btn btn-lg bg-white text-violet-600 border-white hover:bg-slate-50 hover:border-slate-50 rounded-full px-10">
            Explore Products
          </button>
          <button className="btn btn-lg btn-outline border border-white text-white hover:bg-white hover:text-violet-600 rounded-full px-10">
            View Pricing
          </button>
        </div>
        <p className="text-violet-300 text-sm font-medium">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </>
  );
};

export default PricingSection;
