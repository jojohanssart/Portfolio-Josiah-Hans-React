import styles from "./footer.module.css";

import linkedInIcon from "../../src/assets/icons/linkedin-icon.svg";
import gitHubIcon from "../../src/assets/icons/github-icon.svg";
import emailIcon from "../../src/assets/icons/email-icon.svg";

export const Footer = () => {
  return (
    <section id="contact" className={`${styles.footerSection}`}>
      <div className={`${styles.footerContent}`}>
        <div className={`${styles.footerText}`}>
          <div className={`${styles.headline}`}>
            <span className={`${styles.impactDiff}`}>I</span>
            <span className={`${styles.impact}`}>mpact</span>
            <br />
            <span className={`${styles.startsDiff}`}>S</span>
            <span className={`${styles.starts}`}>tarts </span>
            <span className={`${styles.here}`}>here</span>
          </div>
          <p>
            Let’s make your product look as <br />
            good as it works.
          </p>
        </div>
        <div className={`${styles.contactGroup}`}>
          <div className={`${styles.contactInfo}`}>
            <img
              src={emailIcon}
              alt="Email Icon"
              className={`${styles.contactIcon}`}
              draggable="false"
            />
            jojohanss.art@gmail.com
          </div>

          <div className={`${styles.contactInfo}`}>
            <a href="#">
              <img
                src={linkedInIcon}
                alt="linkedIn Icon"
                className={`${styles.contactIcon}`}
                draggable="false"
              />
              LinkedIn
            </a>
          </div>

          <div className={`${styles.contactInfo}`}>
            <a href="#">
              <img
                src={gitHubIcon}
                alt="gitHub Icon"
                className={`${styles.contactIcon}`}
                draggable="false"
              />
              GitHub
            </a>
          </div>

          <div className={`${styles.copyrightText}`}></div>
        </div>
      </div>
      footer
    </section>
  );
};
