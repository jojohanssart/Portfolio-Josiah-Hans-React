import { Hero } from "../src/sections/Hero";
import { Navbar } from "../src/layout/Navbar";
import { About } from "../src/sections/About";
import { Works } from "../src/sections/Works";
import { Footer } from "../src/sections/Footer";
import { Feed } from "./Feed";

import { BackToTop } from "./components/BackToTop";

import { Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* <div style={{
        backgroundColor: "var(--black-500)",
        height: "300px",
        paddingTop: "4rem",
        color: "var(--white)",
        fontSize: "4rem",
        textAlign: "center",
        zIndex: "100",
        marginBottom: "-80px",
      }}>
        Work in progress!
      </div> */}
      <Hero />
      <Navbar />
      <About />
      <Works />
      <Footer />
    </>
  );
};

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />

        <Route
          path="*"
          element={
            <div style={{ padding: "5rem", fontSize: "2rem" }}>
              404: Route Not Found! Current URL doesn't match "/" or "/feed"
            </div>
          }
        />
      </Routes>
      <BackToTop />
    </main>
  );
}

export default App;
