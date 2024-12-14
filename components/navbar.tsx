import Link from "next/link"
import { Download } from "lucide-react"

import { ModeToggle } from "./mode-toogle"

const navigations = [
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

export const Navbar = () => {
  return (
    <header className="w-full px-4 py-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-x-2">
          <Download className="size-6 text-red-600" />
          <span className="text-xl font-bold">YT Video Downloader</span>
        </Link>

        <nav className="hidden gap-x-4 md:flex">
          {navigations.map(({ id, href, label }) => (
            <Link
              key={id}
              href={href}
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-200"
            >
              {label}
            </Link>
          ))}
        </nav>

        <ModeToggle />
      </div>
    </header>
  )
}
