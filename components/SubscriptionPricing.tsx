import { Check, Star, Clock, Calendar, TrendingUp } from 'lucide-react'

export default function SubscriptionPricing() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Clock className="w-4 h-4 mr-2" />
            Flexible Billing Options
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            IPTVPUT Subscription Plans
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed">
            Choose your perfect IPTVPUT subscription plan and start streaming today with flexible billing options. 
            <span className="hidden sm:inline"> Perfect for all your entertainment needs with monthly to annual plans.</span>
          </p>
        </div>

        {/* Monthly/Annual Plans Grid */}
        <div className="max-w-6xl mx-auto">
          {/* Header Badge */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="bg-slate-700 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center shadow-lg">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              <span className="hidden sm:inline">🚀 FLEXIBLE SUBSCRIPTION PLANS - 1 DEVICE</span>
              <span className="sm:hidden">🚀 FLEXIBLE PLANS</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            
            {/* 1 Month Plan */}
            <div className="relative bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border border-gray-200 hover:shadow-xl">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-blue-500" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  1 Month
                </h3>
                
                <div className="mb-4">
                  <div className="text-3xl font-black text-gray-800">
                    $10.99
                  </div>
                  <div className="text-sm text-gray-600">
                    per month
                  </div>
                </div>

                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-500" />
                    <span>1 Device Access</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-500" />
                    <span>All Channels</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-500" />
                    <span>HD Quality</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-500" />
                    <span>Try Our Service</span>
                  </div>
                </div>

                <a 
                  href="https://wa.me/447956154482" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-500 text-white py-3 rounded-xl text-lg font-bold hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  GET STARTED
                </a>
              </div>
            </div>

            {/* 3 Months Plan */}
            <div className="relative bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border border-gray-200 hover:shadow-xl">
              <div className="text-center">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-slate-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  3 Months
                </h3>
                
                <div className="mb-4">
                  <div className="text-3xl font-black text-gray-800">
                    $25.99
                  </div>
                  <div className="text-sm text-gray-600">
                    $8.66/month
                  </div>
                </div>

                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-500" />
                    <span>Save 21%</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-500" />
                    <span>Quarterly Billing</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-500" />
                    <span>Better Value</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-500" />
                    <span>Priority Support</span>
                  </div>
                </div>

                <a 
                  href="https://wa.me/447956154482" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-slate-700 text-white py-3 rounded-xl text-lg font-bold hover:bg-slate-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  GET STARTED
                </a>
              </div>
            </div>

            {/* 6 Months Plan */}
            <div className="relative bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border border-gray-200 hover:shadow-xl">
              <div className="text-center">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-slate-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  6 Months
                </h3>
                
                <div className="mb-4">
                  <div className="text-3xl font-black text-gray-800">
                    $39.99
                  </div>
                  <div className="text-sm text-gray-600">
                    $6.67/month
                  </div>
                </div>

                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-500" />
                    <span>Save 39%</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-500" />
                    <span>Semi-Annual Plan</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-500" />
                    <span>Great Savings</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-500" />
                    <span>Extended Access</span>
                  </div>
                </div>

                <a 
                  href="https://wa.me/447956154482" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-slate-700 text-white py-3 rounded-xl text-lg font-bold hover:bg-slate-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  GET STARTED
                </a>
              </div>
            </div>

            {/* 12 Months Plan - Most Popular */}
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-all duration-300 border-2 border-blue-500">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center">
                  <Star className="w-3 h-3 mr-1" />
                  MOST POPULAR
                </div>
              </div>
              
              <div className="text-center text-white">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-2">
                  12 Months
                </h3>
                
                <div className="mb-4">
                  <div className="text-3xl font-black">
                    $49.99
                  </div>
                  <div className="text-sm text-blue-100">
                    $4.17/month
                  </div>
                </div>

                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-200" />
                    <span>Save 62%</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-200" />
                    <span>Annual Plan</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-200" />
                    <span>Best Value</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-200" />
                    <span>VIP Support</span>
                  </div>
                </div>

                <a 
                  href="https://wa.me/447956154482" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-blue-600 py-3 rounded-xl text-lg font-black hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  GET STARTED
                </a>
              </div>
            </div>

            {/* 24 Months Plan */}
            <div className="relative bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border border-gray-200 hover:shadow-xl">
              <div className="absolute top-0 right-0 bg-slate-600 text-white px-3 py-1 rounded-bl-xl text-xs font-bold">
                BEST DEAL
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-slate-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  24 Months
                </h3>
                
                <div className="mb-4">
                  <div className="text-3xl font-black text-gray-800">
                    $89.99
                  </div>
                  <div className="text-sm text-gray-600">
                    $3.75/month
                  </div>
                </div>

                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-500" />
                    <span>Save 66%</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-500" />
                    <span>2-Year Plan</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-500" />
                    <span>Maximum Savings</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2 text-blue-500" />
                    <span>Premium VIP</span>
                  </div>
                </div>

                <a 
                  href="https://wa.me/447956154482" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-slate-700 text-white py-3 rounded-xl text-lg font-bold hover:bg-slate-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  GET STARTED
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Comparison Section */}
          <div className="mt-8 sm:mt-12 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                All Subscription Plans Include
              </h4>
              <p className="text-gray-600">Perfect for testing our premium IPTV service</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-blue-500" />
                </div>
                <div className="font-semibold text-gray-800 text-sm">25,000+ Live Channels</div>
                <div className="text-xs text-gray-600 mt-1">Worldwide coverage</div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-blue-500" />
                </div>
                <div className="font-semibold text-gray-800 text-sm">26,000+ Movies & Shows</div>
                <div className="text-xs text-gray-600 mt-1">Latest releases</div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-blue-500" />
                </div>
                <div className="font-semibold text-gray-800 text-sm">Ultra HD & 4K Quality</div>
                <div className="text-xs text-gray-600 mt-1">Crystal clear</div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-blue-500" />
                </div>
                <div className="font-semibold text-gray-800 text-sm">24/7 Customer Support</div>
                <div className="text-xs text-gray-600 mt-1">Always here to help</div>
              </div>
            </div>

            {/* CTA to Lifetime */}
            <div className="mt-8 p-6 bg-gray-50 rounded-xl text-center border border-gray-200">
              <h5 className="text-lg font-bold text-gray-800 mb-2">
                Ready to Upgrade to Lifetime Plans?
              </h5>
              <p className="text-gray-600 mb-4 text-sm">
                Save even more with our lifetime subscription plans starting at $289
              </p>
              <a 
                href="#pricing"
                className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                View Lifetime Plans
              </a>
            </div>
          </div>

          {/* Trust & Guarantee */}
          <div className="mt-6 flex justify-center items-center space-x-4 sm:space-x-8 text-gray-600">
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-2 text-blue-500" />
              <span className="text-sm font-semibold">Premium Quality</span>
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 mr-2 text-blue-500" />
              <span className="text-sm font-semibold">Instant Activation</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-blue-500" />
              <span className="text-sm font-semibold">Try Risk-Free</span>
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
