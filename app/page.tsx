import { FAQ } from "@/components/faq"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Pricing } from "@/components/pricing"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"

const Home = () => {
  return (
    <div>
      <Navbar />

      <main>
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
      </main>

      <Footer />
    </div>
  )
}

export default Home
