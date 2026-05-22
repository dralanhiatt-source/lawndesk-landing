import React from 'react'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'
import FeaturesSection from './components/FeaturesSection'
import PricingSection from './components/PricingSection'
import ComparisonTable from './components/ComparisonTable'
import FAQSection from './components/FAQSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <PricingSection />
      <ComparisonTable />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App
