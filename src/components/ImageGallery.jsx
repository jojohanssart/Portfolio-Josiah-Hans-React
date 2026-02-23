import styles from "./imagegallery.module.css";
import { motion } from "framer-motion";

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
    <div>
      <div className={`${styles.div}`}>
        <div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 className={`${styles.headline}`} variants={itemVariants}>
              Feed
            </motion.h2>

            <motion.p className={`${styles.feedDesc}`} variants={itemVariants}>
              A collection of Design explorations, visual experiments, and
              work-in-progress projects.
            </motion.p>
          </motion.div>
        </div>
        <motion.div></motion.div>
        Image Gallery
      </div>
    </div>
  );
};
