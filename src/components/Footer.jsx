import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">LawnDesk</h3>
            <p className="text-gray-400 text-sm">AI-powered business management for lawn care professionals.</p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition">Demo</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:support@miaworks.pro" className="text-gray-400 hover:text-green-500 transition">support@miaworks.pro</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition">Status</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2025 LawnDesk. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-green-500 transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
