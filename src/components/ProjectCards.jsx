import styles from "./projectcards.module.css";
import arrowIcon from "../assets/icons/arrow-icon.svg";

export const Cards = ({ project }) => {
    if (!project) return null;

    const link = `/works/${project.title.toLowerCase()}`;

    return (
        <a href={link} className={styles.container} aria-label={`View ${project.title}`}>

            {/* Project Thumbnail */}
            <div
                className={styles.thumbnail}
                style={{ backgroundImage: `url("${project.mockup}")` }}
            />

            <div className={styles.overlay} />

            {/* Info Bar */}
            <div className={styles.infoBar}>
                <div className={styles.leftContent}>
                    <img src={project.logo} alt="" className={styles.projectLogo} />
                    <div className={styles.textGroup}>
                        <span className={styles.dot}>•</span>
                        <span className={styles.categoryText}>{project.category}</span>
                    </div>
                </div>

                <div className={styles.arrowButton}>
                    <img src={arrowIcon} alt="" className={styles.arrowIcon} />
                </div>
            </div>
        </a>
    );
};