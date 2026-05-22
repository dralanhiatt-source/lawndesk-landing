import React from 'react'

export default function Hero() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          MIA Runs Your Lawn Business While You Run The Jobs
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          24/7 AI receptionist answers calls, books jobs, sends invoices, and tracks every dollar — automatically. Built for lawn care and irrigation professionals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition">
            Start 30-Day Trial $19.99
          </button>
          <button className="px-8 py-4 border-2 border-green-500 text-green-500 hover:bg-green-500/10 font-semibold rounded-lg transition">
            Watch Demo
          </button>
        </div>
        <p className="text-sm text-gray-400">
          Built for lawn care, irrigation, and field service professionals
        </p>
      </div>
    </section>
  )
}
