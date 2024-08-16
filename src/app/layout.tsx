import './global.css'
import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import TopNav from '@/features/top-nav'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
// import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { Providers } from './providers'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1
}

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Front-end Fun',
    template: '%s | Front-end Fun',
  },
  description: '前端的乐趣',
  openGraph: {
    title: 'Front-end Fun',
    description: 'Front-end Fun, have fun.',
    url: baseUrl,
    siteName: 'Front-end Fun',
    locale: 'en_US',
    type: 'website',
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
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // className={cx(
  //       'text-black bg-white dark:text-white dark:bg-black',
  //       GeistSans.variable,
  //       GeistMono.variable
  //     )}
  return (
    <html
      lang="en"
      suppressHydrationWarning className='scroll-smooth scroll-pt-16'
    >
      <body>
        <Providers >
        <div className="flex flex-col items-center min-w-mini min-h-screen">
          <TopNav />
          {/* <section className="flex w-full relative justify-center"> */}
          {children}
          {/* </section> */}
         {/* <Footer /> */}
        </div>
          <Analytics />
          <SpeedInsights />
          </Providers>
      </body>
    </html>
  )
}
