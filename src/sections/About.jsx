import styles from "./about.module.css"

import { projects } from "../data/projectsData";
import { Cards } from "../components/ProjectCards";

import nameCard from "../../src/assets/images/name-card-back.png"
import adobeIllustrator from "../../src/assets/icons/adobe-illustrator-icon.svg"
import procreate from "../../src/assets/icons/procreate-icon.svg"
import figma from "../../src/assets/icons/figma-icon.svg"
import html5 from "../../src/assets/icons/html5-icon.svg"
import css3 from "../../src/assets/icons/css3-icon.svg"


export const About = () => {
    const feedProject = projects.find(p => p.title === "Feed");


    return <section
        id="about"
        className={`${styles.aboutSection}`}
    >
        <div className={`${styles.aboutContainer}`}>
            <div className={`${styles.profileContainer}`}>
                <img
                    src={nameCard}
                    alt="Josiah Hans name card"
                    className={`${styles.nameCard}`}
                    draggable="false"
                />


                <hr className={`${styles.greyLine}`}></hr>


                <div className={`${styles.contentGroup} ${styles.about}`}>
                    <h2 className={`${styles.h2}`}>
                        About
                    </h2>
                    <p>
                        <b>I’m primarily a UI/UX Designer</b> based in Jakarta. Focused on
                        solving user problems through digital experiences that are intuitive,
                        easy to use and also visually stunning.
                    </p>
                </div>


                <hr className={`${styles.greyLine}`}></hr>


                <div className={`${styles.contentGroup} ${styles.skills}`}>

                    <h2 className={`${styles.h2}`}>
                        Skills
                    </h2>
                    <div className={`${styles.iconContainer}`}>
                        <div className={`${styles.iconGroup}`}>
                            <img
                                src={adobeIllustrator}
                                alt="Adobe Illustrator"
                                aria-label="Adobe Illustrator"
                                className={`${styles.adobeIllustrator}`}
                                draggable="false"
                            />

                            <img
                                src={procreate}
                                alt="Procreate"
                                aria-label="Procreate"
                                className={`${styles.procreate}`}
                                draggable="false"
                            />

                            <img
                                src={figma}
                                alt="Figma"
                                aria-label="Figma"
                                className={`${styles.figma}`}
                                draggable="false"
                            />
                        </div>

                        <div className={`${styles.iconGroup}`}>
                            <img
                                src={html5}
                                alt="HTML 5"
                                aria-label="HTML 5"
                                className={`${styles.html5}`}
                                draggable="false"
                            />

                            <img
                                src={css3}
                                alt="CSS 3"
                                aria-label="CSS 3"
                                className={`${styles.css3}`}
                                draggable="false"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.featuredProject}>
                {feedProject && <Cards project={feedProject} />}
            </div>
        </div>
    </section>;
}