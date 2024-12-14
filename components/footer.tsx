import Link from "next/link"
import { Download } from "lucide-react"

import { name, navigations, policyLinks } from "@/constants"

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white dark:bg-gray-900">
      <div className="container mx-auto flex flex-col gap-y-8">
        <div className="grid grid-cols-1 gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
          <div className="flex flex-col gap-y-4">
            <Link href="/" className="flex items-center gap-x-2">
              <Download className="size-6 text-red-600" />
              <span className="text-xl font-bold">{name}</span>
            </Link>
            <p className="text-gray-400">
              Fast and easy YouTube video downloads.
            </p>
          </div>

          <div className="flex flex-col gap-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="flex flex-col gap-y-2">
              {navigations.map(({ id, href, label }) => (
                <Link
                  key={id}
                  href={href}
                  className="text-gray-400 hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="flex flex-col gap-y-2">
              {policyLinks.map(({ id, href, label }) => (
                <Link
                  key={id}
                  href={href}
                  className="text-gray-400 hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </ul>
          </div>
        </div>

        <p className="border-t border-gray-700 py-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
