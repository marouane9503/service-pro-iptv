import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { IPTVONLINEUKStructuredData } from '../components/seo/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IPTV ONLINE UK - Premium IPTV Streaming Service | 25,000+ Channels',
  description: 'IPTV ONLINE UK offers premium IPTV streaming with 25,000+ live TV channels, 26,000+ movies & TV shows. Get your IPTV ONLINE UK subscription with HD & 4K quality streaming worldwide.',
  keywords: 'IPTV ONLINE UK, iptv online uk subscription, premium iptv, iptv streaming, live tv channels, iptv service, uk iptv provider, iptv uk, streaming service',
  openGraph: {
    title: 'IPTV ONLINE UK - Premium IPTV Streaming Service | 25,000+ Channels',
    description: 'Get IPTV ONLINE UK subscription with 25,000+ live TV channels and 26,000+ movies. Premium IPTV streaming service with HD & 4K quality.',
    url: 'https://iptvonlineuk.com',
    siteName: 'IPTV ONLINE UK',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://iptvonlineuk.com/images/LOGO.webp',
        width: 300,
        height: 300,
        alt: 'IPTV ONLINE UK Logo - Premium IPTV Streaming Service'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IPTV ONLINE UK - Premium IPTV Streaming Service',
    description: 'Premium IPTV ONLINE UK streaming with 25,000+ channels. Best IPTV subscription service.',
    images: ['https://iptvonlineuk.com/images/LOGO.webp']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google6ce108ec9bf739e5', // Google Search Console verification
  },
  alternates: {
    canonical: 'https://iptvonlineuk.com',
    languages: {
      'en': 'https://iptvonlineuk.com',
      'en-US': 'https://iptvonlineuk.com/en',
    }
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/images/ICON.ico' }
    ],
    apple: '/images/ICON.ico'
  },
  category: 'technology'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/ICON.ico" />
        <link rel="canonical" href="https://iptvonlineuk.com" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="application-name" content="IPTV ONLINE UK" />
        <meta name="apple-mobile-web-app-title" content="IPTV ONLINE UK" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={inter.className}>
        <IPTVONLINEUKStructuredData />
        {children}
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HDHHD12SGJ"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HDHHD12SGJ');
            `
          }}
        />
        
        {/* Tawk.to Live Chat Script */}
        <Script
          id="tawk-to-chat"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/68f21d5c6a1b1c195189998d/1j7os5c92';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `
          }}
        />
      </body>
    </html>
  )
}
