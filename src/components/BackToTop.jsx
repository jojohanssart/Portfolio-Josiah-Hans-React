import { useState, useEffect } from 'react';
import styles from './backtotop.module.css';

import upIcon from "../../src/assets/icons/up-arrow-icon.svg"

export const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let timeoutId = null;

        const handleScroll = () => {
            setIsVisible(false);

            if (timeoutId) {
                clearTimeout(timeoutId);
            }

            timeoutId = setTimeout(() => {
                if (window.scrollY > 300) {
                    setIsVisible(true);
                }
            }, 1500);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            className={`${styles.backToTopBtn} ${isVisible ? styles.show : ''}`}
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to top"
        >
            <img
                src={upIcon}
                alt="Up Arrow"
                className={`${styles.upArrow}`}
                draggable="false"
            />
        </button>
    );
};