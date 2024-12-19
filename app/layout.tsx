import type { Metadata } from "next"
import { Outfit } from "next/font/google"

import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css"

const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "YT Video Downloader",
  description:
    "Fast, simple, and reliable YouTube video downloads for all your needs. Enjoy seamless MP4 downloads with our high-quality video downloader, designed for speed, efficiency, and exceptional performance.",
  keywords: [
    "YouTube video downloader",
    "download YouTube videos",
    "high-quality video downloader",
    "free YouTube downloader",
    "1080p video download",
    "720p YouTube downloader",
    "video downloader app",
    "YouTube to MP4",
    "online video downloader",
    "custom video formats",
    "fast YouTube downloader",
    "video resolution selector",
    "YouTube MP4 converter",
    "video streaming and downloading",
    "yt-dlp downloader"
  ]
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

        <Toaster richColors theme="light" position="top-center" />
      </body>
    </html>
  )
}

export default RootLayout
