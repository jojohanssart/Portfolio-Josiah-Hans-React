import styles from "./feed.module.css";

import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/sections/Footer";
import { ImageGallery } from "../src/components/ImageGallery";

export const Feed = () => {
  return (
    <section>
      <Navbar />

      <main
        style={{
          marginTop: "2rem",
        }}
      >
        <ImageGallery />
      </main>

      <Footer />
    </section>
  );
};
