import { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Star, Zap, Shield, Users, Clock, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Service Pro IPTV - Premium IPTV Service Provider | Company',
  description: 'Learn about Service Pro IPTV - leading premium IPTV service provider. Discover our company story, mission, and why millions choose our IPTV subscription service worldwide.',
  keywords: 'about iptv online uk, iptv online uk company, uk iptv service provider, premium iptv provider, iptv online uk history, iptv streaming company',
  openGraph: {
    title: 'About Service Pro IPTV - Premium IPTV Service Provider',
    description: 'Discover Service Pro IPTV company story and why we are the leading premium IPTV service provider worldwide.',
    url: 'https://serviceproiptv.com/about/',
  },
}

export default function About() {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "100K+", label: "Happy Customers" },
    { icon: <Star className="w-8 h-8" />, number: "25K+", label: "Live TV Channels" },
    { icon: <CheckCircle className="w-8 h-8" />, number: "99.9%", label: "Uptime Guarantee" },
    { icon: <Clock className="w-8 h-8" />, number: "5+", label: "Years Experience" }
  ]

  const features = [
    {
      icon: <Zap className="w-12 h-12 text-primary-600" />,
      title: "Lightning Fast Streaming",
      description: "Experience buffer-free IPTV streaming with our premium servers and advanced technology."
    },
    {
      icon: <Shield className="w-12 h-12 text-primary-600" />,
      title: "Secure & Reliable",
      description: "Your IPTV subscription is protected with enterprise-grade security and 99.9% uptime."
    },
    {
      icon: <Users className="w-12 h-12 text-primary-600" />,
      title: "Customer First",
      description: "Our IPTV service includes 24/7 premium support to ensure your streaming experience is perfect."
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-blue-300">Service Pro IPTV</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Your trusted provider of premium IPTV subscriptions, delivering exceptional 
            streaming experiences with the best IPTV service in the industry.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center text-primary-600 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Our Service Pro IPTV Journey
            </h2>
            
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-8">
                Service Pro IPTV has been at the forefront of revolutionizing home entertainment 
                through our premium IPTV subscriptions. We started with a simple mission: to provide 
                the best IPTV service that combines quality, reliability, and affordability.
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                Our Service Pro IPTV platform has grown to serve over 100,000 satisfied customers worldwide, 
                offering access to 25,000+ live TV channels and 26,000+ movies and TV shows. We've built 
                our reputation on delivering the most comprehensive IPTV experience in the market.
              </p>
              
              <p className="text-lg leading-relaxed">
                Today, Service Pro IPTV stands as the premier destination for IPTV subscriptions, 
                continuing to innovate and improve our service to meet the evolving needs of modern 
                entertainment consumers who demand the best IPTV solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Why Choose Our Service Pro IPTV Service?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Your Service Pro IPTV Experience?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have chosen our premium Service Pro IPTV service 
            for their entertainment needs.
          </p>
          <a 
            href="https://wa.link/kkdei9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Get Service Pro IPTV Now
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
