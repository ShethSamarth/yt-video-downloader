import { Download, Shield, Video, Zap } from "lucide-react"

export const name = "YT Video Downloader"

export const navigations = [
  {
    id: 1,
    href: "#features",
    label: "Features"
  },
  {
    id: 2,
    href: "#how-it-works",
    label: "How It Works"
  },
  {
    id: 3,
    href: "#pricing",
    label: "Pricing"
  },
  {
    id: 4,
    href: "#faq",
    label: "FAQ"
  }
]

export const features = [
  {
    id: 1,
    icon: Download,
    title: "Easy Downloads",
    description:
      "Simply paste the YouTube URL and download your video in seconds."
  },
  {
    id: 2,
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Our optimized servers ensure the fastest download speeds possible."
  },
  {
    id: 3,
    icon: Shield,
    title: "Secure & Private",
    description:
      "Your downloads are always secure and your data is never shared."
  },
  {
    id: 4,
    icon: Video,
    title: "Multiple Formats",
    description:
      "Choose from various video and audio formats to suit your needs."
  }
]

export const steps = [
  {
    number: 1,
    title: "Copy YouTube URL",
    description:
      "Find the video you want to download and copy its URL from the address bar."
  },
  {
    number: 2,
    title: "Paste URL",
    description: "Paste the copied URL into the input field on our website."
  },
  {
    number: 3,
    title: "Choose Format",
    description:
      "Select your preferred video quality and format for the download."
  },
  {
    number: 4,
    title: "Download",
    description:
      "Click the download button and wait for your video to be ready."
  }
]

export const policyLinks = [
  {
    id: 1,
    label: "Terms of Service",
    href: "/terms-of-service"
  },
  {
    id: 2,
    label: "Privacy Policy",
    href: "/privacy-policy"
  },
  {
    id: 3,
    label: "Cookie Policy",
    href: "/cookie-policy"
  }
]
