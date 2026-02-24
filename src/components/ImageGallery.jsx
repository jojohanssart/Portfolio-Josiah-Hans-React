import styles from "./imagegallery.module.css";
import { motion } from "framer-motion";
import { feedImages } from "../data/feedData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// ImageGallery Component are a mix of tutorials and Gemini

export const ImageGallery = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className={styles.headerWrapper}>
            <motion.div className={styles.header} variants={itemVariants}>
              <h2 className={styles.h2}>Feed</h2>
            </motion.div>
          </div>

          <motion.p className={styles.feedDesc} variants={itemVariants}>
            A collection of design explorations, visual experiments, and
            work-in-progress.
          </motion.p>
        </motion.div>

        {/* Masonry Grid Section */}
        <motion.div
          className={styles.masonryGrid}
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
        >
          {feedImages.map((item) => (
            <motion.div
              key={item.id}
              className={styles.imageWrapper}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.55 }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className={styles.image}
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                  <h3 className={styles.imageTitle}>{item.title}</h3>
                  <span className={styles.imageYear}>{item.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
