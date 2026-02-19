import { Hero } from "@/sections/Hero";
import { Navbar } from "@/layout/Navbar";
import { About } from "@/sections/About";
import { Works } from "@/sections/Works";
import { Footer } from "@/sections/Footer";

function App() {
  return (
    <main>
      <Hero />
      <Navbar />
      <About />
      {/* <div style={{ height: "50vh", background: "transparent" }} /> */}
      <Works />
      <Footer />
    </main>
  );
}

export default App