import type { Metadata } from "next"
import { Outfit } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css"

const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "YT Video Downloader",
  description:
    "Fast, simple, and reliable YouTube video downloads for all your needs."
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider
          enableSystem
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
          storageKey="yt-video-downloader-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
