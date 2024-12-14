import { FAQ } from "@/components/faq"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"

const Home = () => {
  return (
    <div>
      <Navbar />

      <main>
        <Features />
        <HowItWorks />
        <FAQ />
      </main>

      <Footer />
    </div>
  )
}

export default Home
