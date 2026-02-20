import { useState } from "react";
import styles from "./hero.module.css";

import jhLogo from "../../src/assets/icons/JH-logo.svg";
import emojiGif from "../../src/assets/icons/waving-hand_1f44b.png";
import jhAvatar1 from "../../src/assets/images/jh-avatar-1.png";
import jhAvatar2 from "../../src/assets/images/jh-avatar-2.png";
import avatarBg from "../../src/assets/images/avatar-bg.svg";

export const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const email = "jojohanss.art@gmail.com";
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 800);
  };

  const scrollToWorks = () => {
    const worksSection = document.getElementById('works');
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={`${styles.heroSection}`}>
      <div
        className={`${styles.emailInfo}`}
        onClick={handleCopy}
        style={{ cursor: "pointer" }}
        title="Click to copy email"
      >
        {copied ? (
          <span style={{ fontStyle: "italic", color: "var(--grey-800)" }}>
            Copied to clipboard!
          </span>
        ) : (
          "jojohanss.art@gmail.com"
        )}
        <img
          src={jhLogo}
          alt="Josiah Hans Logo"
          className={`${styles.jhLogo}`}
          draggable="false"
        />
      </div>
      <div className={`${styles.heroDiv}`}>
        <div className={`${styles.heroContent}`}>
          <div className={`${styles.topSection}`}>
            <h1 className={`${styles.h1}`}>
              Hi
              <img
                style={{ marginLeft: "8px" }}
                aria-hidden="true"
                src={emojiGif}
                alt="Waving Hand"
                className={styles.emojiGif}
                draggable="false"
              />
              , I'm
              <span className={`${styles.name}`} style={{ marginLeft: "12px" }}>
                Josiah Hans
              </span>
              <br />a UI/UX Designer.
            </h1>
            <h3 className={`${styles.h3}`}>
              I turn complicated ideas into a<br />
              beautiful easy to use designs.
            </h3>

            <div className={`${styles.offsetImages}`}>
              <img
                src={jhAvatar1}
                alt="Josiah Hans Avatar"
                className={`${styles.jhAvatar1}`}
                draggable="false"
              />
              <img
                src={jhAvatar2}
                alt="2nd Josiah Hans Avatar"
                className={`${styles.jhAvatar2}`}
                draggable="false"
              />
              <img
                src={avatarBg}
                className={`${styles.avatarBg}`}
                draggable="false"
              />
            </div>
          </div>
          <button
            className={`${styles.buttonCTA}`}
            onClick={scrollToWorks}
          >
            Explore My Work
          </button>
        </div>
      </div>
    </section>
  );
};
