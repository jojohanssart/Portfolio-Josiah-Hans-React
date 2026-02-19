import styles from "./works.module.css";

import { projects } from "../data/projectsData";
import { Cards } from "../components/ProjectCards";

export const Works = () => {
    return <section id="works" className={`${styles.section}`}>

        <div className={`${styles.sectionContainer}`}>
            <div className={styles.headerWrapper}>
                <div className={`${styles.header}`}>
                    <h2 className={styles.h2}>Selected Works</h2>
                </div>
            </div>

            <div className={styles.grid}>
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={`${styles.cardWrapper} ${styles[`area-p${project.id}`]}`}
                        style={{
                            gridArea: `p${project.id}`
                        }}
                    >
                        <Cards project={project} />
                    </div>
                ))}
            </div>
        </div>

    </section>
}