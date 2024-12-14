import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Features } from "@/components/features"

const Home = () => {
  return (
    <div>
      <Navbar />

      <main>
        <Features />
      </main>

      <Footer />
    </div>
  )
}

export default Home
