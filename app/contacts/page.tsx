import { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Phone, Mail, MessageCircle, Clock, MapPin, Headphones, Users, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Service Pro IPTV Customer Service - 24/7 Premium IPTV Support',
  description: 'Contact Service Pro IPTV customer service for instant support. Our premium Service Pro IPTV customer service team provides 24/7 assistance via WhatsApp, phone, and email for all your IPTV needs.',
  keywords: 'contact gamma iptv, gamma iptv customer service, gamma iptv support, iptv customer service, gamma iptv help, premium iptv support, gamma iptv contact number',
  openGraph: {
    title: 'Contact Service Pro IPTV Customer Service - Premium 24/7 Support',
    description: 'Get instant help from Service Pro IPTV customer service. Expert support for all your IPTV streaming needs available 24/7.',
    url: 'https://serviceproiptv.com/contacts/',
  },
}

export default function Contacts() {
  const contactMethods = [
    {
      icon: <MessageCircle className="w-8 h-8 text-green-500" />,
      title: "WhatsApp Support",
      subtitle: "Instant Service Pro IPTV Customer Service",
      description: "Get immediate assistance from our Service Pro IPTV customer service team via WhatsApp",
      action: "Chat with Support",
      link: "https://wa.link/eepo31",
      availability: "24/7 Available"
    },
    {
      icon: <Phone className="w-8 h-8 text-blue-500" />,
      title: "Phone Support", 
      subtitle: "Direct Service Pro IPTV Customer Service",
      description: "Speak directly with our premium IPTV customer service representatives",
      action: "+1 (873) 300‑0545",
      link: "tel:+18733000545",
      availability: "Mon-Sat 11AM-10PM"
    },
    {
      icon: <Mail className="w-8 h-8 text-purple-500" />,
      title: "Email Support",
      subtitle: "Service Pro IPTV Customer Service Email",
      description: "Send detailed inquiries to our Service Pro IPTV customer service team",
      action: "contact@iptvonlineuk.com",
      link: "mailto:contact@iptvonlineuk.com",
      availability: "Response within 2 hours"
    }
  ]

  const supportFeatures = [
    {
      icon: <Headphones className="w-6 h-6 text-blue-500" />,
      title: "Premium IPTV Support",
      description: "Expert Service Pro IPTV customer service for all technical issues"
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: "Dedicated Account Manager",
      description: "Personal Service Pro IPTV customer service representative for VIP customers"
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: "Secure Support",
      description: "Safe and secure Service Pro IPTV customer service with data protection"
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-500" />,
      title: "24/7 Availability", 
      description: "Round-the-clock Service Pro IPTV customer service when you need it"
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Service Pro IPTV <span className="text-blue-300">Customer Service</span>
          </h1>
          <p className="text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
            Premium 24/7 Service Pro IPTV customer service support for all your streaming needs. 
            Our expert team provides instant assistance for technical issues, billing, and account management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.link/eepo31" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors inline-flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Support Now
            </a>
            <a 
              href="tel:+18733000545"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Customer Service
            </a>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Contact Service Pro IPTV Customer Service
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose your preferred method to reach our premium Service Pro IPTV customer service team. 
              We're here to help with setup, technical issues, billing, and any questions about your IPTV service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                <div className="flex justify-center mb-6">
                  {method.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                  {method.title}
                </h3>
                <p className="text-blue-600 font-semibold mb-4 text-center">
                  {method.subtitle}
                </p>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  {method.description}
                </p>
                <div className="text-center mb-4">
                  <a 
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 inline-block"
                  >
                    {method.action}
                  </a>
                </div>
                <p className="text-sm text-gray-500 text-center">
                  {method.availability}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Features */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Why Choose Service Pro IPTV Customer Service?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our premium Service Pro IPTV customer service team is trained to provide expert assistance 
              for all your streaming needs with fast response times and professional support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Service Pro IPTV Customer Service FAQ
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about our Service Pro IPTV customer service
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                How fast does Service Pro IPTV customer service respond?
              </h3>
              <p className="text-gray-600">
                Our Service Pro IPTV customer service team typically responds within 5 minutes via WhatsApp 
                and within 2 hours via email. Phone support is available Mon-Sat 11AM-10PM.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                What can Service Pro IPTV customer service help me with?
              </h3>
              <p className="text-gray-600">
                Our customer service team assists with account setup, technical issues, billing questions, 
                device compatibility, channel updates, and any other IPTV-related concerns.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Is Service Pro IPTV customer service available in multiple languages?
              </h3>
              <p className="text-gray-600">
                Yes, our Service Pro IPTV customer service team provides support in English, Spanish, French, 
                and Arabic to serve our global customer base effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Need Help? Contact Service Pro IPTV Customer Service
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our premium Service Pro IPTV customer service team is ready to assist you with any questions 
            or technical support you need for your IPTV streaming experience.
          </p>
          <a 
            href="https://wa.link/eepo31" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors inline-flex items-center"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Get Instant Support
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
