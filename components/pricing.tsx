import { Check } from "lucide-react"

import { plans } from "@/constants"
import { Button } from "@/components/ui/button"

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="bg-gray-50 px-4 py-20 dark:bg-gray-900 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto flex flex-col gap-y-12">
        <h2 className="text-center text-3xl font-bold">Choose Your Plan</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {plans.map(({ id, name, features, price }) => (
            <div
              key={id}
              className="flex flex-col rounded-lg bg-card p-8 shadow-md"
            >
              <h3 className="mb-4 text-2xl font-bold">{name}</h3>
              <p className="mb-6 text-4xl font-bold">{price}</p>
              <ul className="mb-8 flex-1">
                {features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="mb-2 flex items-center">
                    <Check className="mr-2 size-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full cursor-not-allowed">
                {id === 1 ? "Get Started" : "Coming Soon"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
