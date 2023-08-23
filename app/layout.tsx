import './globals.css'
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
        <main className='container'>
          {children}
        </main>
      <Footer/>
      </body>
    </html>
  )
}
