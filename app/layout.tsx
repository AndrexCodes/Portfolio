import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "Andrew Macharia - Full Stack Developer",
  description:
    "Full stack developer and founder with extensive experience architecting scalable MERN applications and IoT solutions.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${openSans.style.fontFamily};
  --font-work-sans: ${workSans.variable};
  --font-open-sans: ${openSans.variable};
}
        `}</style>
      </head>
      <body className={`${workSans.variable} ${openSans.variable} font-serif antialiased`}>{children}</body>
    </html>
  )
}
