import React, { useState } from 'react'

const pricingTiers = [
  {
    name: 'Trial',
    price: 19.99,
    period: 'one-time',
    description: '30-day full access',
    features: ['All features included', 'No credit card required', 'Full support']
  },
  {
    name: 'Starter',
    price: 79,
    period: '/month',
    description: 'For growing businesses',
    features: [
      'MIA AI Receptionist',
      'Basic scheduling',
      'Invoice & payment',
      'Email support'
    ]
  },
  {
    name: 'Elite',
    price: 199,
    period: '/month',
    description: 'Complete lawn & irrigation business',
    features: [
      'Everything in Starter',
      'Irrigation module',
      'Advanced routing',
      'Tax & expense tracking',
      'Employee management',
      'Priority support'
    ],
    highlighted: true
  }
]

const prepayOptions = [
  { months: 3, discount: 10 },
  { months: 6, discount: 15 },
  { months: 9, discount: 20 },
  { months: 12, discount: 30 }
]

export default function PricingSection() {
  const [selectedMonths, setSelectedMonths] = useState(12)

  const calculateSavings = (basePrice, months, discount) => {
    const monthlyTotal = basePrice * months
    const discountAmount = monthlyTotal * (discount / 100)
    return {
      original: monthlyTotal,
      discount: discountAmount,
      final: monthlyTotal - discountAmount,
      monthlyRate: (monthlyTotal - discountAmount) / months
    }
  }

  return (
    <section className="py-16 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Simple, Transparent Pricing</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, i) => (
            <div 
              key={i}
              className={`rounded-lg p-8 border transition ${
                tier.highlighted
                  ? 'bg-gradient-to-b from-green-500/20 to-green-500/5 border-green-500 relative'
                  : 'bg-slate-800 border-slate-700 hover:border-slate-600'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{tier.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">${tier.price}</span>
                <span className="text-gray-400 text-sm ml-2">{tier.period}</span>
              </div>
              <button className={`w-full py-3 rounded-lg font-semibold transition mb-6 ${
                tier.highlighted
                  ? 'bg-green-500 hover:bg-green-600 text-white'
                  : 'bg-slate-700 hover:bg-slate-600 text-white'
              }`}>
                Get Started
              </button>
              <ul className="space-y-2">
                {tier.features.map((feature, j) => (
                  <li key={j} className="text-gray-300 text-sm flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Prepay Discount Calculator</h3>
          
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {prepayOptions.map((option) => (
              <button
                key={option.months}
                onClick={() => setSelectedMonths(option.months)}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  selectedMonths === option.months
                    ? 'bg-green-500 text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                {option.months} months ({option.discount}% off)
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-700 rounded-lg p-6">
              <h4 className="text-white font-semibold mb-4">Starter Annual Plan</h4>
              {(() => {
                const option = prepayOptions.find(o => o.months === selectedMonths)
                const savings = calculateSavings(79, selectedMonths, option?.discount || 0)
                return (
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Original Price: ${savings.original.toFixed(2)}</p>
                    <p className="text-green-500 text-sm mb-4">Save: ${savings.discount.toFixed(2)}</p>
                    <p className="text-white text-2xl font-bold">${savings.final.toFixed(2)}</p>
                    <p className="text-gray-400 text-sm">${savings.monthlyRate.toFixed(2)}/month</p>
                  </div>
                )
              })()}
            </div>

            <div className="bg-slate-700 rounded-lg p-6">
              <h4 className="text-white font-semibold mb-4">Elite Annual Plan</h4>
              {(() => {
                const option = prepayOptions.find(o => o.months === selectedMonths)
                const savings = calculateSavings(199, selectedMonths, option?.discount || 0)
                return (
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Original Price: ${savings.original.toFixed(2)}</p>
                    <p className="text-green-500 text-sm mb-4">Save: ${savings.discount.toFixed(2)}</p>
                    <p className="text-white text-2xl font-bold">${savings.final.toFixed(2)}</p>
                    <p className="text-gray-400 text-sm">${savings.monthlyRate.toFixed(2)}/month</p>
                  </div>
                )
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
