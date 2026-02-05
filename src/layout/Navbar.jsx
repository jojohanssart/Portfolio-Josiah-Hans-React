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
    return (
        <header>
            <nav>
                {/* container */}
                <div className={`${styles.navContainer}`}>


                    {/* Left Section */}
                    <div className={`${styles.leftSection}`}>

                        <button className={`${styles.jhButton}`}>
                            <img
                                src={jhLogo}
                                alt="Josiah Hans Logo"
                                className={`${styles.jhIcon}`}
                            />
                        </button>

                        {/* Links */}
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index} className={`${styles.links} ${styles.desktopMenu}`}>
                                {link.label}
                            </a>
                        ))}


                    </div>

                    {/* Feeds Button */}
                    <a href="#feeds" className={`${styles.feedButton} ${styles.desktopMenu}`}>
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
                    <a className={`${styles.menuButton}`}>
                        <img
                            src={hamburgerIcon}
                            alt="Menu"
                            className={`${styles.feedIcon}`}
                        />
                    </a>

                </div>
            </nav>
        </header>
    );
}