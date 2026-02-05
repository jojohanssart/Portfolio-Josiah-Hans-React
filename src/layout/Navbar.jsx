import { useState } from "react"
import styles from "./navbar.module.css"
import feedIcon from "../../src/assets/icons/feed-icon.svg"
import jhLogo from "../../src/assets/icons/JH-logo.svg"
import hamburgerIcon from "../../src/assets/icons/hamburger-icon.svg"

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#works", label: "Selected Works" },
    { href: "#contact", label: "Contact" },
]

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

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
                    <a href="#feeds" className={`${styles.feedButton}`}>
                        <img
                            src={feedIcon}
                            alt="Feeds"
                            className={`${styles.feedIcon}`}
                        />
                        <span className={`${styles.linkLabel}`}>
                            Feeds
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
                    <button onClick={() => setIsOpen(false)}>
                        Close
                    </button>
                    {navLinks.map((link, index) => (
                        <a
                            href={link.href}
                            key={index}
                            className={`${styles.mobileFeedsLink}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a href="#feeds" className={`${styles.mobileFeedsLink}`} onClick={() => setIsOpen(false)}>Feeds</a>
                </div>

            </nav>
        </header>
    );
}