import React from 'react'

const problems = [
  {
    title: 'Missing calls while on the mower',
    description: 'MIA answers 24/7 when you\'re working'
  },
  {
    title: 'Chasing payments after every job',
    description: 'Auto invoices and payment collection'
  },
  {
    title: 'No idea what you actually made',
    description: 'P&L, mileage, expenses, tax prep built in'
  }
]

export default function ProblemSection() {
  return (
    <section className="py-16 px-4 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">The Problems We Solve</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, i) => (
            <div key={i} className="p-8 bg-slate-700 rounded-lg border border-slate-600 hover:border-green-500 transition">
              <h3 className="text-xl font-semibold text-white mb-3">{problem.title}</h3>
              <p className="text-gray-300">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
