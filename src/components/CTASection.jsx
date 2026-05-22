import React from 'react'

export default function CTASection() {
  return (
    <section className="py-16 px-4 bg-slate-800">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Stop Missing Calls and Chasing Payments
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Start your 30-day free trial today. No credit card required.
        </p>
        <button className="px-10 py-4 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold rounded-lg transition">
          Start 30-Day Trial $19.99
        </button>
      </div>
    </section>
  )
}
