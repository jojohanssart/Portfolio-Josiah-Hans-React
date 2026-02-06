import { useState } from "react"
import { useEffect, useRef } from 'react';

import styles from "./navbar.module.css"
import feedIcon from "../../src/assets/icons/feed-icon.svg"
import linkedInIcon from "../../src/assets/icons/linkedin-icon.svg"
import gitHubIcon from "../../src/assets/icons/github-icon.svg"
import jhLogo from "../../src/assets/icons/JH-logo.svg"
import hamburgerIcon from "../../src/assets/icons/hamburger-icon.svg"

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#works", label: "Selected Works" },
    { href: "#contact", label: "Contact" },
]

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Auto close mobile menu overlay
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 640 && isOpen) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isOpen]);

    return (
        <header className={`${styles.sticky}`}>
            <nav>
                {/* container */}
                <div className={`${styles.navContainer}`}>


                    {/* Left Section */}
                    <div className={`${styles.leftSection}`}>

                        <a href="#hero" className={`${styles.jhButton}`}>
                            <img
                                src={jhLogo}
                                alt="Josiah Hans Logo"
                                className={`${styles.jhLogo}`}
                            />
                        </a>

                        {/* Desktop Only Links */}
                        {navLinks.map((link, index) => (
                            <a
                                href={link.href}
                                key={index}
                                className={`${styles.links}`}
                            >
                                {link.label}
                            </a>
                        ))}


                    </div>

                    {/* Feeds Button (Desktop) */}
                    {/* <a href="#feeds" className={`${styles.feedButton}`}>
                        <img
                            src={feedIcon}
                            alt="Feeds"
                            className={`${styles.feedIcon}`}
                        />
                        <span className={`${styles.linkLabel}`}>
                            Feeds
                        </span>
                    </a> */}

                    <a href="#feeds" className={`${styles.feedButtonMother}`}>
                        <span className={`${styles.linkLabel}`}>
                            <img
                                src={feedIcon}
                                alt="Feeds"
                                className={`${styles.feedIcon}`}
                            />
                            <span>F</span>
                            <span>e</span>
                            <span>e</span>
                            <span>d</span>
                            <span>s</span>
                        </span>

                        <span className={`${styles.linkLabel2}`}>
                            <img
                                src={feedIcon}
                                alt="Feeds"
                                className={`${styles.feedIcon}`}
                            />
                            <span>F</span>
                            <span>e</span>
                            <span>e</span>
                            <span>d</span>
                            <span>s</span>
                        </span>
                    </a>

                    {/* Hamburger - Mobile Only */}
                    <button
                        className={`${styles.menuButton}`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        <img
                            src={hamburgerIcon}
                            alt="Menu"
                            className={`${styles.menuIcon}`}
                        />
                    </button>

                </div>

                {/* Menu Overlay */}
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
                        Last updated: January 2025
                    </p>
                </div>

            </nav>
        </header>
    );
}