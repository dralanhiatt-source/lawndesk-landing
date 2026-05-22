import React, { useState } from 'react'

const faqs = [
  {
    question: 'Will MIA replace my front desk person?',
    answer: 'MIA is designed to handle routine calls, lead qualification, and job booking 24/7. She works alongside your team, not against them. Many businesses use MIA to handle after-hours calls and reduce time spent on phone tag, allowing your team to focus on customer service and growth.'
  },
  {
    question: 'What phone number does MIA use?',
    answer: 'You get a dedicated phone number with MIA, or we can integrate with your existing business phone number. All calls are handled through our secure cloud infrastructure, and you can customize greeting, scripts, and call handling preferences.'
  },
  {
    question: 'Can I use this for other service businesses?',
    answer: 'While LawnDesk is optimized for lawn care and irrigation professionals, the core features (scheduling, billing, MIA AI receptionist) work well for other field service businesses including HVAC, pest control, plumbing, and landscaping services.'
  },
  {
    question: 'Is my customer data secure? HIPAA compliant?',
    answer: 'Yes. We use bank-level encryption, secure data centers, and follow SOC 2 Type II compliance standards. While we\'re not HIPAA-certified (as we don\'t handle healthcare data), we maintain the same security standards. All data is stored in encrypted, secure facilities.'
  },
  {
    question: 'What happens if a payment fails?',
    answer: 'MIA will attempt to retry failed payments and notify you immediately. You can also set up manual review for declined payments, or configure automatic follow-up reminders to customers with payment issues.'
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Absolutely. No long-term contracts required. You can cancel your subscription anytime. Your data remains yours—we provide export options for all your business information.'
  },
  {
    question: 'Do you offer Spanish language support?',
    answer: 'Yes! MIA supports Spanish language calls and conversations. You can enable Spanish support in settings, and MIA will seamlessly handle bilingual customer interactions.'
  },
  {
    question: 'How long does setup take?',
    answer: 'Most businesses are up and running in under 1 hour. We provide setup guidance, phone number provisioning, and integration with your calendar and payment systems. Our support team is available to help throughout the process.'
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-16 px-4 bg-slate-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-700 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-left flex items-center justify-between transition"
              >
                <span>{faq.question}</span>
                <span className="text-xl">{openIndex === i ? '−' : '+'}</span>
              </button>
              {openIndex === i && (
                <div className="px-6 py-4 bg-slate-800/50 border-t border-slate-700">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
