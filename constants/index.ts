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

export const faqs = [
  {
    id: 1,
    question: "Is it legal to download YouTube videos?",
    answer:
      "Downloading YouTube videos for personal use is generally acceptable. However, distributing or using copyrighted content without permission may be illegal. Always respect copyright laws and YouTube's terms of service."
  },
  {
    id: 2,
    question: "What video formats are available?",
    answer:
      "We offer downloads in various formats including MP4, WebM, and MP3 for audio-only downloads. The available formats may depend on the original video quality and your subscription plan."
  },
  {
    id: 3,
    question: "How fast are the downloads?",
    answer:
      "Download speeds depend on various factors including your internet connection, server load, and the size of the video. We optimize our servers for the fastest possible downloads."
  },
  {
    id: 4,
    question: "Can I download entire playlists?",
    answer:
      "Yes, with our Pro and Business plans, you can download entire playlists. The Basic plan is limited to individual video downloads."
  },
  {
    id: 5,
    question: "Is my personal information safe?",
    answer:
      "We take your privacy seriously. We use industry-standard encryption and never share your personal information with third parties. Please refer to our Privacy Policy for more details."
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
