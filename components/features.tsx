import { features, name } from "@/constants"

export const Features = () => {
  return (
    <section
      id="features"
      className="bg-gray-50 px-4 py-20 dark:bg-gray-900 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto flex flex-col gap-y-12">
        <h2 className="text-center text-3xl font-bold">Why Choose {name}?</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ id, icon: Icon, title, description }) => (
            <div key={id} className="rounded-lg bg-card p-6 shadow-md">
              <Icon className="mb-4 size-6 text-purple-600" />
              <h3 className="mb-2 text-xl font-semibold">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
