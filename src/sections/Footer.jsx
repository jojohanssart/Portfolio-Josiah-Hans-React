import styles from "./footer.module.css";
import { useState } from "react";

import nameCardBack from "../../src/assets/images/name-card-back.png";
import nameCardFront from "../../src/assets/images/name-card-front.png";

import linkedInIcon from "../../src/assets/icons/linkedin-icon.svg";
import gitHubIcon from "../../src/assets/icons/github-icon.svg";
import emailIcon from "../../src/assets/icons/email-icon.svg";

export const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("jojohanss.art@gmail.com");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 800);
  };

  return (
    <section id="contact" className={`${styles.section}`}>
      <div className={`${styles.footerSection}`}>

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
            <div
              className={`${styles.contactInfo}`}
              onClick={handleCopyEmail}
              style={{ cursor: "pointer", transition: "opacity 0.2s" }}
              title="Click to copy email"
            >
              <img
                src={emailIcon}
                alt="Email Icon"
                className={`${styles.contactIcon}`}
                draggable="false"
              />
              {copied ? (
                <span style={{ fontStyle: "italic" }}>
                  Copied to clipboard!
                </span>
              ) : (
                "jojohanss.art@gmail.com"
              )}
            </div>

            <div className={`${styles.contactInfo}`}>
              <a href="https://www.linkedin.com/in/jojohanss/" target="_blank">
                <img
                  src={linkedInIcon}
                  alt="linkedIn Icon"
                  className={`${styles.contactIcon}`}
                  title="Open LinkedIn linkedin.com/in/jojohanss"
                  draggable="false"
                />
                LinkedIn
              </a>
            </div>

            <div className={`${styles.contactInfo}`}>
              <a href="https://github.com/jojohanssart" target="_blank">
                <img
                  src={gitHubIcon}
                  alt="gitHub Icon"
                  className={`${styles.contactIcon}`}
                  title="Open GitHub github.com/jojohanssart"
                  draggable="false"
                />
                GitHub
              </a>
            </div>
          </div>

          <div className={`${styles.copyrightText}`}>
            &#169; 2026 Josiah Hans &bull; Crafted with passion in Jakarta
            <br /> Last updated: February 2026
          </div>
        </div>

        <div className={`${styles.cardGroup}`}>
          <img
            src={nameCardBack}
            alt="name card back"
            className={`${styles.cardBack} ${styles.card}`}
            draggable="false"
          />
          <img
            src={nameCardFront}
            alt="name card front"
            className={`${styles.cardFront} ${styles.card}`}
            draggable="false"
          />
        </div>

      </div>
    </section>
  );
};
