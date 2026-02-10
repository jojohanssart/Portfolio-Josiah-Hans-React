import styles from "./cardInfo.module.css"
import arrowIcon from "../assets/icons/arrow-icon.svg"


export const CardInfo = ({ logo, title, category, link }) => {
    return (
        <a href={link}
            aria-label={`View ${title} project`}
        >
            <div className={`${styles.leftContent}`}>
                <img src={logo}
                    alt={`${title} logo`}
                    className={`${styles.projectLogo}`}
                />
                <div className={styles.textGroup}>
                    <span className={styles.dot}>•</span>
                    <span className={styles.categoryText}>{category}</span>
                </div>
            </div>

            <div className={`${styles.arrowButton}`}>
                <img src={arrowIcon}
                    alt={``}
                    className={`${styles.arrowIcon}`}
                />
            </div>
        </a>
    )
}