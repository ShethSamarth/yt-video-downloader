import type { Metadata } from "next"

import "./globals.css"

export const metadata: Metadata = {
  title: "YT Video Downloader",
  description:
    "Fast, simple, and reliable YouTube video downloads for all your needs.",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
