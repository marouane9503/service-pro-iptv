'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/images/LOGO.webp" 
              alt="IPTVPUT Logo" 
              className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            <a href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Home
            </a>
            <a href="/about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              About
            </a>
            <a href="/blog" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Blog
            </a>
            <a href="#features" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Features
            </a>
            <a href="/pricing" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Reviews
            </a>
            <a href="/contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:block">
            <a 
              href="https://wa.me/447956154482" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-semibold text-sm sm:text-base"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t bg-white">
            <nav className="flex flex-col space-y-3">
              <a href="/" className="text-gray-700 hover:text-primary-600 font-medium py-2 px-2 rounded transition-colors">
                Home
              </a>
              <a href="/about" className="text-gray-700 hover:text-primary-600 font-medium py-2 px-2 rounded transition-colors">
                About
              </a>
              <a href="/blog" className="text-gray-700 hover:text-primary-600 font-medium py-2 px-2 rounded transition-colors">
                Blog
              </a>
              <a href="#features" className="text-gray-700 hover:text-primary-600 font-medium py-2 px-2 rounded transition-colors">
                Features
              </a>
              <a href="/pricing" className="text-gray-700 hover:text-primary-600 font-medium py-2 px-2 rounded transition-colors">
                Pricing
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary-600 font-medium py-2 px-2 rounded transition-colors">
                Reviews
              </a>
              <a href="/contact" className="text-gray-700 hover:text-primary-600 font-medium py-2 px-2 rounded transition-colors">
                Contact
              </a>
              <div className="pt-2">
                <a 
                  href="https://wa.me/447956154482" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold w-full sm:w-auto block text-center"
                >
                  Get Started
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
