import { Metadata } from 'next'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ChannelLogosCarousel from '../components/ChannelLogosCarousel'
import MoviesCarousel from '../components/MoviesCarousel'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import SubscriptionPricing from '../components/SubscriptionPricing'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Service Pro IPTV - Official Website | Premium IPTV Subscription Service',
  description: 'Official Service Pro IPTV website offering premium IPTV subscriptions. Get Service Pro IPTV with 25,000+ live TV channels, 26,000+ movies & TV shows. Start your Service Pro IPTV subscription today.',
  keywords: 'service pro iptv, service pro iptv subscription, service pro iptv website, premium iptv, iptv streaming service, live tv channels, uk iptv',
  openGraph: {
    title: 'Service Pro IPTV - Official Website | Premium IPTV Subscription',
    description: 'Get your Service Pro IPTV subscription from the official website. 25,000+ channels, 26,000+ movies with premium streaming quality.',
    url: 'https://serviceproiptv.com',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ChannelLogosCarousel />
      <MoviesCarousel />
      <Features />
      <SubscriptionPricing />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  )
}
