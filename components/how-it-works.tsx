import { ArrowRight } from "lucide-react"

import { steps } from "@/constants"

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col gap-y-12">
        <h2 className="text-center text-3xl font-bold">How It Works</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ number, title, description }) => (
            <div
              key={number}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-purple-600 text-xl font-bold text-white">
                {number}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{description}</p>
              {number !== 4 && (
                <ArrowRight className="mt-4 hidden size-6 text-gray-400 dark:text-gray-600 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
