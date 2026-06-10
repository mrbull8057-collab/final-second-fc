import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })

export const metadata: Metadata = {
  title: "Final Second FC | World Cup 2026",
  description: "Your World Cup 2026 fan hub — schedules, groups, venues, and stories.",
  other: {
    "google-adsense-account": "ca-pub-8224188820852809",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8224188820852809"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-[#080808] text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  )
}
