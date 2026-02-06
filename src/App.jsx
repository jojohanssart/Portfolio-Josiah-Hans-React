import { Hero } from "@/sections/Hero";
import { Navbar } from "@/layout/Navbar";
import { About } from "@/sections/About";
import { Works } from "@/sections/Works";
import { Footer } from "@/sections/Footer";

function App() {

  return (

    <main >
      <Hero />
      <Navbar />
      <div style={{ height: '200vh', background: 'transparent' }} />
      <About />
      <Works />
      <Footer />
    </main>
  )
}

export default App
