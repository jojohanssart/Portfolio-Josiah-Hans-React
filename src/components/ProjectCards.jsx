import styles from "./projectcards.module.css";
import arrowIcon from "../assets/icons/arrow-icon.svg";
import { Link } from "react-router-dom";

export const Cards = ({ project }) => {
    if (!project) return null;

    const link = project.title === "Feed" ? "/feed" : `/works/${project.title.toLowerCase()}`;

    const handleClick = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };

    return (
        <Link
            to={link}
            onClick={handleClick}
            className={styles.container}
            aria-label={`View ${project.title}`}
        >

            {/* Project Thumbnail */}
            <div
                className={styles.thumbnail}
                style={{ backgroundImage: `url("${project.mockup}")` }}
            />

            <div className={styles.overlay} />

            {/* Info Bar */}
            <div className={styles.infoBar}
                style={{
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    backgroundImage: "var(--bg-glass)",
                }}
            >
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
        </Link>
    );
};