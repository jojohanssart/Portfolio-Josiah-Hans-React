import { MenuOverlay } from "./NavbarMobileOverlay"
import { useState, useEffect } from "react"


import styles from "./navbar.module.css"
import feedIcon from "../../src/assets/icons/feed-icon.svg"
import jhLogo from "../../src/assets/icons/JH-logo-navbar.svg"
import hamburgerIcon from "../../src/assets/icons/hamburger-icon.svg"

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#works", label: "Selected Works" },
    { href: "#contact", label: "Contact" },
]

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);


    // useEffect by Gemini
    useEffect(() => {
        const controlNavbar = () => {
            // Get current scroll position
            const currentScrollY = window.scrollY;
            const threshold = window.innerWidth > 1180
                ? window.innerHeight + 220  // Large Screens
                : window.innerWidth > 766
                    ? window.innerHeight + 200  // Tablets / Laptops
                    : window.innerHeight; // Mobile

            if (currentScrollY > lastScrollY && currentScrollY > threshold) {
                setShowNavbar(false); // Hide
            } else {
                setShowNavbar(true);  // Show (Scrolling UP)
            }

            // Update memory for next scroll event
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', controlNavbar);

        // Cleanup function to remove listener when component unmounts
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);


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
        <header className={`${styles.sticky} ${!showNavbar ? styles.navHidden : ''}`}>
            <nav className={`${styles.wrapper}`}>
                {/* container */}
                <div className={`${styles.navContainer}`}>


                    {/* Left Section */}
                    <div className={`${styles.leftSection}`}>

                        <a href="#hero" className={`${styles.jhButton}`}>
                            <img
                                src={jhLogo}
                                alt="Josiah Hans Logo"
                                className={`${styles.jhLogo}`}
                                draggable="false"
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
                                draggable="false"
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
                            draggable="false"
                        />
                    </button>

                </div>

                <MenuOverlay isOpen={isOpen} setIsOpen={setIsOpen} />

            </nav>

        </header>

    );
}