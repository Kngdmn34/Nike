
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google';
import { AOSinit } from './_aos';
import React from 'react';
import Footer from '@/app/components/Footer'
import { Analytics } from '@vercel/analytics/react';
import { Providers } from './providers';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'NIKE',
  description: 'Nike Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">

      <AOSinit />

      <body className={`${poppins.variable}`}>
        <Providers>
          {children}<Footer />   <Analytics />
        </Providers>
      </body>

    </html>


  )
}
