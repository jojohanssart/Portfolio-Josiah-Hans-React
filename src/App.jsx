import { Hero } from "@/sections/Hero";
import { Navbar } from "@/layout/Navbar";
import { About } from "@/sections/About";
import { Works } from "@/sections/Works";
import { Footer } from "@/sections/Footer";

function App() {

  return (
    <div>
      <main>
        <Hero />
        <Navbar />
        <About />
        <Works />
        <Footer />

      </main>
    </div >
  )
}

export default App
