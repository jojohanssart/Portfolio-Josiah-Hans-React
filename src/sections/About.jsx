import styles from "./about.module.css";

import { projects } from "../data/projectsData";
import { Cards } from "../components/ProjectCards";

import nameCard from "../../src/assets/images/name-card-back.png";
import adobeIllustrator from "../../src/assets/icons/adobe-illustrator-icon.svg";
import procreate from "../../src/assets/icons/procreate-icon.svg";
import figma from "../../src/assets/icons/figma-icon.svg";
import html5 from "../../src/assets/icons/html5-icon.svg";
import css3 from "../../src/assets/icons/css3-icon.svg";

export const About = () => {
  const feedProject = projects.find((p) => p.title === "Feed");

  const skillsData = [
    {
      group: 1,
      name: "Adobe Illustrator",
      desc: "General Graphic Design",
      icon: adobeIllustrator,
      styleClass: styles.adobeIllustrator,
    },
    {
      group: 1,
      name: "Procreate",
      desc: "Digital Illustration | Visual Storytelling",
      icon: procreate,
      styleClass: styles.procreate,
    },
    {
      group: 1,
      name: "Figma",
      desc: "UI/UX Design | Scalable, Responsive UI",
      icon: figma,
      styleClass: styles.figma,
    },
    {
      group: 2,
      name: "HTML 5",
      desc: "Basic HTML Knowledge",
      icon: html5,
      styleClass: styles.html5,
    },
    {
      group: 2,
      name: "CSS 3",
      desc: "Basic CSS Styling",
      icon: css3,
      styleClass: styles.css3,
    },
  ];

  const renderSkill = (skill) => (
    <div key={skill.name} className={styles.tooltipWrapper}>
      <div className={styles.tooltip}>
        <h4>{skill.name}</h4>
        <p>{skill.desc}</p>
      </div>

      <img
        src={skill.icon}
        alt={skill.name}
        className={skill.styleClass}
        draggable="false"
      />
    </div>
  );

  return (
    <section id="about" className={`${styles.aboutSection}`}>
      <div className={`${styles.aboutContainer}`}>
        <div className={`${styles.profileContainer}`}>
          <a
            href="https://drive.google.com/file/d/1IjeLVRun2GoS_Zf5JYyHGpqjyXa2myPu/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            title="Download CV"
            type="application/pdf"
            className={styles.cvLink}
          >
            <img
              src={nameCard}
              alt="Josiah Hans name card - Click to Download CV"
              className={`${styles.nameCard}`}
              draggable="false"
            />
          </a>

          <hr className={`${styles.greyLine}`}></hr>

          <div className={`${styles.contentGroup} ${styles.about}`}>
            <h2 className={`${styles.h2}`}>About</h2>
            <p>
              <b>I’m primarily a UI/UX Designer</b> based in Jakarta. Focused on
              solving user problems through digital experiences that are
              intuitive, easy to use and also visually stunning.
            </p>
          </div>

          <hr className={`${styles.greyLine}`}></hr>

          <div className={`${styles.contentGroup} ${styles.skills}`}>
            <h2 className={`${styles.h2}`}>Skills</h2>
            <div className={`${styles.iconContainer}`}>
              <div className={`${styles.iconGroup}`}>
                {skillsData.filter((s) => s.group === 1).map(renderSkill)}
              </div>

              <div className={`${styles.iconGroup}`}>
                {skillsData.filter((s) => s.group === 2).map(renderSkill)}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.featuredProject}>
          {feedProject && <Cards project={feedProject} />}
        </div>
      </div>
    </section>
  );
};
