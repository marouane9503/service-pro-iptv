import { Check, Star, Crown, Shield } from 'lucide-react'

export default function Pricing() {
  return (
    <section id="pricing" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Lifetime Subscription Plans
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            Choose your perfect lifetime IPTV plan. Get permanent access with our exclusive lifetime subscription plans 
            <span className="hidden sm:inline"> with one-time payment and no recurring fees</span>.
          </p>
        </div>

        {/* Lifetime Subscription Plans Grid */}
        <div className="max-w-7xl mx-auto mb-12 sm:mb-16">
          {/* Premium badge */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="bg-gradient-to-r from-primary-800 to-primary-900 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center shadow-lg border-2 border-primary-600">
              <Crown className="w-3 h-3 sm:w-4 sm:h-4 mr-2 animate-pulse" />
              <span className="hidden sm:inline">✨ EXCLUSIVE LIFETIME OFFERS ✨</span>
              <span className="sm:hidden">✨ LIFETIME OFFERS ✨</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            
            {/* 1 Device Plan - Special Pricing */}
            <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300 overflow-hidden border-2 border-blue-500">
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-bl-xl text-xs font-bold">
                BEST VALUE
              </div>
              
              <div className="text-center text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-3">
                  1 Device
                </h3>
                
                <div className="mb-4 relative">
                  <div className="text-3xl sm:text-4xl font-black text-white">
                    $289
                  </div>
                  <div className="text-sm font-medium text-gray-300">
                    One-time payment
                  </div>
                </div>

                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-400" />
                    <span>25,000+ Channels</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-400" />
                    <span>26,000+ Movies</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-400" />
                    <span>HD & 4K Quality</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-400" />
                    <span>Lifetime Access</span>
                  </div>
                </div>

                <a 
                  href="https://wa.me/447956154482" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-500 text-white py-3 rounded-xl text-lg font-bold hover:bg-blue-600 transition-all duration-300 shadow-lg"
                >
                  ORDER NOW
                </a>
              </div>
            </div>

            {/* 2 Devices Plan */}
            <div className="relative bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300 border border-gray-200">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">
                  2 Devices
                </h3>
                
                <div className="mb-4 relative">
                  <div className="text-3xl sm:text-4xl font-black text-gray-800">
                    $416
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    One-time payment
                  </div>
                </div>

                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-500" />
                    <span>All 1-Device Features</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-500" />
                    <span>2 Simultaneous Streams</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-500" />
                    <span>Multi-Device Support</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-500" />
                    <span>Family Sharing</span>
                  </div>
                </div>

                <a 
                  href="https://wa.me/447956154482" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-slate-700 text-white py-3 rounded-xl text-lg font-bold hover:bg-slate-800 transition-all duration-300 shadow-lg"
                >
                  ORDER NOW
                </a>
              </div>
            </div>

            {/* 3 Devices Plan */}
            <div className="relative bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300 border border-gray-200">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">
                  3 Devices
                </h3>
                
                <div className="mb-4 relative">
                  <div className="text-3xl sm:text-4xl font-black text-gray-800">
                    $543
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    One-time payment
                  </div>
                </div>

                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-500" />
                    <span>All Previous Features</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-500" />
                    <span>3 Simultaneous Streams</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-500" />
                    <span>Priority Support</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-500" />
                    <span>Extended Family Plan</span>
                  </div>
                </div>

                <a 
                  href="https://wa.me/447956154482" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-slate-700 text-white py-3 rounded-xl text-lg font-bold hover:bg-slate-800 transition-all duration-300 shadow-lg"
                >
                  ORDER NOW
                </a>
              </div>
            </div>

            {/* 4 Devices Plan */}
            <div className="relative bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300 border border-gray-200">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">
                  4 Devices
                </h3>
                
                <div className="mb-4 relative">
                  <div className="text-3xl sm:text-4xl font-black text-gray-800">
                    $670
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    One-time payment
                  </div>
                </div>

                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-500" />
                    <span>All Previous Features</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-500" />
                    <span>4 Simultaneous Streams</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-500" />
                    <span>VIP Support</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-500" />
                    <span>Premium Quality</span>
                  </div>
                </div>

                <a 
                  href="https://wa.me/447956154482" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-slate-700 text-white py-3 rounded-xl text-lg font-bold hover:bg-slate-800 transition-all duration-300 shadow-lg"
                >
                  ORDER NOW
                </a>
              </div>
            </div>

            {/* 5 Devices Plan */}
            <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 bg-slate-600 text-white px-3 py-1 rounded-bl-xl text-xs font-bold">
                FAMILY PLAN
              </div>
              
              <div className="text-center text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-3">
                  5 Devices
                </h3>
                
                <div className="mb-4 relative">
                  <div className="text-3xl sm:text-4xl font-black text-white">
                    $797
                  </div>
                  <div className="text-sm font-medium text-gray-300">
                    One-time payment
                  </div>
                </div>

                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-400" />
                    <span>Maximum Devices</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-400" />
                    <span>5 Simultaneous Streams</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-400" />
                    <span>Premium VIP Support</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-400" />
                    <span>Ultimate Family Plan</span>
                  </div>
                </div>

                <a 
                  href="https://wa.me/447956154482" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-500 text-white py-3 rounded-xl text-lg font-bold hover:bg-blue-600 transition-all duration-300 shadow-lg"
                >
                  ORDER NOW
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Features Section */}
          <div className="mt-8 sm:mt-12 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8">
            <h4 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6">
              All Plans Include
            </h4>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div className="font-semibold text-gray-800 text-sm">25,000+ Live Channels</div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div className="font-semibold text-gray-800 text-sm">26,000+ Movies & Shows</div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div className="font-semibold text-gray-800 text-sm">Ultra HD & 4K Quality</div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div className="font-semibold text-gray-800 text-sm">24/7 Support</div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="mt-6 flex justify-center items-center space-x-4 sm:space-x-8 text-gray-600">
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-2 text-blue-500" />
                <span className="text-sm font-semibold">Premium Quality</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-blue-500" />
                <span className="text-sm font-semibold">Secure Payment</span>
              </div>
              <div className="flex items-center">
                <Crown className="w-4 h-4 mr-2 text-blue-500" />
                <span className="text-sm font-semibold">Lifetime Access</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 text-center text-gray-600 text-xs sm:text-sm">
          <p>*All prices are in USD. Subscription will not auto-renew, and no taxes apply.</p>
          <p className="hidden sm:block">Start with any plan and upgrade to lifetime anytime to save more.</p>
        </div>
      </div>
    </section>
  )
}
