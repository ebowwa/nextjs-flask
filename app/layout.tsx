// Importing necessary components and hooks
import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"; // Import the Toaster component

const inter = Inter({ subsets: ['latin'] }) // Loading the Inter font with 'latin' subset

export const metadata = {
  title: 'voiceovers',
  description: '"Enhance your digital content with Voiceovers – the premier AI voiceover application designed to revolutionize video productions. Powered by cutting-edge artificial intelligence, Voiceovers offers an intuitive platform for adding lifelike, customizable voiceovers to any video, making it perfect for content creators, marketers, and educators seeking to elevate their media presence. Our user-friendly interface ensures seamless integration of high-quality audio into your projects, transforming your videos with engaging narrations that captivate your audience. Unlock the potential of your videos with Voiceovers, where innovation meets creativity."',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main> {/* Main content area where child components will be rendered */}
        <Toaster /> {/* Placement of the Toaster component */}
      </body>
    </html>
  )
}
