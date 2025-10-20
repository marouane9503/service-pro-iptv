import { Metadata } from 'next'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Home, Search, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Page Not Found - IPTVPUT | Return to Premium IPTV Service',
  description: 'The page you are looking for was not found. Return to IPTVPUT homepage to explore our premium IPTV subscription plans and streaming services.',
  robots: {
    index: false,
    follow: true
  }
}

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gray-50 min-h-screen flex items-center">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-8xl font-bold text-primary-600 mb-6">404</div>
            
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Page Not Found
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Sorry, we couldn't find the page you're looking for. 
              Let's get you back to exploring our premium IPTV services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center justify-center"
              >
                <Home className="w-5 h-5 mr-2" />
                Back to IPTVPUT Home
              </Link>
              
              <Link 
                href="/contacts"
                className="bg-white border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 transition-colors inline-flex items-center justify-center"
              >
                <Search className="w-5 h-5 mr-2" />
                Get Help
              </Link>
            </div>
            
            {/* Popular IPTVPUT Pages */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Popular IPTVPUT Pages
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/en" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-800 mb-2">Premium Services</h3>
                  <p className="text-gray-600 text-sm">Explore IPTVPUT premium features</p>
                </Link>
                
                <Link href="/product/1-month" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-800 mb-2">1 Month Plan</h3>
                  <p className="text-gray-600 text-sm">Try IPTVPUT monthly subscription</p>
                </Link>
                
                <Link href="/contacts" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-800 mb-2">Customer Service</h3>
                  <p className="text-gray-600 text-sm">24/7 IPTVPUT support</p>
                </Link>
                
                <Link href="/about" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-800 mb-2">About IPTVPUT</h3>
                  <p className="text-gray-600 text-sm">Learn about our company</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
