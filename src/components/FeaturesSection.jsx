import React, { useState } from 'react'

const tabs = [
  {
    name: 'Scheduling',
    features: [
      'Recurring jobs for repeat customers',
      'Weather-based automatic rescheduling',
      'Route optimization for efficiency',
      'Mobile crew dispatch'
    ]
  },
  {
    name: 'Billing',
    features: [
      'Auto-charge customers on completion',
      'Digital invoices sent instantly',
      'Prepay contracts & retainers',
      'Seasonal billing support'
    ]
  },
  {
    name: 'Irrigation',
    features: [
      'Winterization tracking',
      'Spring startup management',
      'Zone mapping & documentation',
      'Backflow certification reminders'
    ]
  },
  {
    name: 'Business Suite',
    features: [
      'Expense tracking per job',
      'Automatic mileage logging',
      'Tax preparation reports',
      'Employee & payroll tracking',
      'Inventory management'
    ]
  },
  {
    name: 'MIA Voice',
    features: [
      'AI answers incoming calls',
      'Books jobs automatically',
      'Generates estimates over phone',
      'Processes payments',
      'Collects customer reviews'
    ]
  }
]

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-16 px-4 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Complete Feature Set</h2>
        
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                i === activeTab
                  ? 'bg-green-500 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        <div className="bg-slate-700 rounded-lg p-8 border border-slate-600">
          <h3 className="text-2xl font-semibold text-white mb-6">{tabs[activeTab].name}</h3>
          <ul className="space-y-3">
            {tabs[activeTab].features.map((feature, i) => (
              <li key={i} className="flex items-center text-gray-300 text-lg">
                <span className="text-green-500 mr-4 text-xl">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
