import React from 'react'

const comparisonData = [
  {
    feature: 'Price',
    lawndesk: '$19.99-$199',
    jobber: '$49-$249',
    servicetitan: '$99-$299',
    housecall: '$29-$199',
    spreadsheets: 'Free'
  },
  {
    feature: 'AI Receptionist',
    lawndesk: '✓',
    jobber: '✗',
    servicetitan: '✗',
    housecall: '✗',
    spreadsheets: '✗'
  },
  {
    feature: 'Auto Billing',
    lawndesk: '✓',
    jobber: '✓',
    servicetitan: '✓',
    housecall: '✓',
    spreadsheets: '✗'
  },
  {
    feature: 'Irrigation Module',
    lawndesk: '✓',
    jobber: '✗',
    servicetitan: '✓',
    housecall: '✗',
    spreadsheets: '✗'
  },
  {
    feature: 'Tax & Expenses',
    lawndesk: '✓',
    jobber: '✗',
    servicetitan: '✗',
    housecall: '✗',
    spreadsheets: '✗'
  },
  {
    feature: 'Spanish Support',
    lawndesk: '✓',
    jobber: '✗',
    servicetitan: '✓',
    housecall: '✗',
    spreadsheets: '✗'
  },
  {
    feature: 'Free Trial',
    lawndesk: '✓ 30 days',
    jobber: '✓ 14 days',
    servicetitan: '✗',
    housecall: '✓ 14 days',
    spreadsheets: '✓'
  }
]

export default function ComparisonTable() {
  return (
    <section className="py-16 px-4 bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">How LawnDesk Compares</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-600">
                <th className="text-left py-4 px-4 text-white font-semibold">Feature</th>
                <th className="text-center py-4 px-4 text-green-500 font-semibold">LawnDesk</th>
                <th className="text-center py-4 px-4 text-gray-400 font-semibold">Jobber</th>
                <th className="text-center py-4 px-4 text-gray-400 font-semibold">ServiceTitan</th>
                <th className="text-center py-4 px-4 text-gray-400 font-semibold">HouseCall Pro</th>
                <th className="text-center py-4 px-4 text-gray-400 font-semibold">Spreadsheets</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr key={i} className={`border-b border-slate-700 ${i % 2 === 0 ? 'bg-slate-700/30' : ''}`}>
                  <td className="py-4 px-4 text-white font-medium">{row.feature}</td>
                  <td className="text-center py-4 px-4 text-gray-300">{row.lawndesk}</td>
                  <td className="text-center py-4 px-4 text-gray-400">{row.jobber}</td>
                  <td className="text-center py-4 px-4 text-gray-400">{row.servicetitan}</td>
                  <td className="text-center py-4 px-4 text-gray-400">{row.housecall}</td>
                  <td className="text-center py-4 px-4 text-gray-400">{row.spreadsheets}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
