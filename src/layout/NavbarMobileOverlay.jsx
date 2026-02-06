import { useState } from "react"
import { useEffect } from 'react';

import linkedInIcon from "../../src/assets/icons/linkedin-icon.svg"
import gitHubIcon from "../../src/assets/icons/github-icon.svg"
import styles from "./navbarmobileoverlay.module.css"


const navLinks = [
    { href: "#about", label: "About" },
    { href: "#works", label: "Selected Works" },
    { href: "#contact", label: "Contact" },
]


export const MenuOverlay = ({ isOpen, setIsOpen }) => {
    return (
        <div className={`${styles.menuOverlay} ${isOpen ? styles.showMenu : ''}`} >
            <button
                onClick={() => setIsOpen(false)}
                className={`${styles.closeButton}`}
            >
                Close
            </button>
            {navLinks.map((link, index) => (
                <a
                    href={link.href}
                    key={index}
                    className={`${styles.mobileNavLink}`}
                    onClick={() => setIsOpen(false)}
                >
                    {link.label}
                </a>
            ))}
            <a
                href="#feeds"
                className={`${styles.mobileNavLink}`}
                onClick={() => setIsOpen(false)}
            >
                Feeds
            </a>

            {/* Socials */}
            <div
                className={`${styles.socialDiv}`}
            >
                <a
                    href="https://www.linkedin.com/in/jojohanss/"
                    target="_blank"
                    className={`${styles.socials}`}
                    onClick={() => setIsOpen(false)}
                >
                    <img
                        src={linkedInIcon}
                        alt="LinkedIn"
                        className={`${styles.socialIcon}`}
                    />
                    {/* <span
                                className={`${styles.mobileNavLink}`}
                            >
                                LinkedIn
                            </span> */}
                </a>
                <a
                    href="https://github.com/jojohanssart"
                    target="_blank"
                    className={`${styles.socials}`}
                    onClick={() => setIsOpen(false)}
                >
                    <img
                        src={gitHubIcon}
                        alt="GitHub"
                        className={`${styles.socialIcon}`}
                    />
                    {/* <span
                                className={`${styles.mobileNavLink}`}
                            >
                                Github
                            </span> */}
                </a>

            </div>
            <p className={`${styles.lastUpdated}`}>&#169; 2026 Josiah Hans &#x2022; Crafted with passion in Jakarta<br />
                Last updated: February 2026
            </p>
        </div>
    );
}