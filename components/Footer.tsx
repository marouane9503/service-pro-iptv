import { Tv, Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-800 text-white">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4 sm:mb-6">
              <img 
                src="/images/LOGO.webp" 
                alt="IPTVPUT Logo" 
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
              />
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Providing premium IPTV service with IPTVPUT. Our mission is to deliver 
              the best streaming experience with reliable servers and exceptional customer support.
              <span className="hidden sm:inline"> Visit us at iptvput.com for more information.</span>
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">About</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Blog</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Features</a></li>
              <li><a href="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Pricing</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Reviews</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Our Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="text-gray-400 text-sm sm:text-base">25,000+ Live TV Channels</li>
              <li className="text-gray-400 text-sm sm:text-base">26,000+ Movies & TV Shows</li>
              <li className="text-gray-400 text-sm sm:text-base">HD & 4K Quality</li>
              <li className="text-gray-400 text-sm sm:text-base">Compatible with All Devices</li>
              <li className="text-gray-400 text-sm sm:text-base">24/7 Premium Support</li>
              <li className="text-gray-400 text-sm sm:text-base">Regular Content Updates</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Contact Us</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400 flex-shrink-0" />
                <a href="https://wa.me/447956154482" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  +44 7956 154482 <span className="hidden sm:inline">(WhatsApp)</span>
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:contact@iptvput.com" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base break-all">
                  contact@iptvput.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base">
                  <span className="hidden sm:inline">Mon - Sat: 11:00am - 10:00pm</span>
                  <span className="sm:hidden">Mon-Sat: 11am-10pm</span>
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base">
                  123 Streaming Street<br />Digital City, DC 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2025 IPTVPUT. All rights reserved. | iptvput.com
            </p>
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-right">
              <span className="hidden sm:inline">Powered by Premium Streaming Technology</span>
              <span className="sm:hidden">Premium Streaming Tech</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
