import React from 'react'

export default function SolutionSection() {
  return (
    <section className="py-16 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">The Solution: MIA AI Receptionist</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Automated Job Booking</h3>
            <p className="text-gray-300 mb-6">
              MIA answers calls 24/7, qualifies leads, books appointments, and confirms jobs automatically. Never miss a call again while you're in the field.
            </p>
            <ul className="space-y-3 text-left">
              <li className="flex items-center text-gray-300">
                <span className="text-green-500 mr-3">✓</span>
                Multi-language conversation support
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-green-500 mr-3">✓</span>
                Real-time calendar integration
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-green-500 mr-3">✓</span>
                Instant customer notifications
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-green-500 mr-3">✓</span>
                Lead qualification & follow-up
              </li>
            </ul>
          </div>
          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <div className="aspect-square bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📱</div>
                <p className="text-gray-400">Phone Mockup Animation</p>
                <p className="text-sm text-gray-500 mt-2">Sample conversation showing MIA booking a lawn job</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
