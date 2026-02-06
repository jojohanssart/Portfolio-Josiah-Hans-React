import styles from "./hero.module.css"
import jhLogo from "../../src/assets/icons/JH-logo.svg"
import jhAvatar1 from "../../src/assets/images/jh-avatar-1.png"
import jhAvatar2 from "../../src/assets/images/jh-avatar-2.png"

export const Hero = () => {
    return (
        <section
            className={`${styles.heroSection}`}
        >
            <div
                className={`${styles.emailInfo}`}>
                jojohanss.art@gmail.com
                <img
                    src={jhLogo}
                    alt="Josiah Hans Logo"
                // className={`${styles.jhLogo}`}
                />
            </div>
            <div className={`${styles.heroDiv}`}>
                <div
                    className={`${styles.heroContent}`}
                >
                    <div
                        className={`${styles.topSection}`}
                    >
                        <h1>
                            Crafting Intuitive <br />
                            Digital Products
                        </h1>
                        <h3>
                            Simplifying complexity through <br />
                            stunning design.
                        </h3>

                    </div>
                    <button
                        className={`${styles.buttonCTA}`}
                    >
                        View My Work
                    </button>
                </div>
                <img
                    src={jhAvatar1}
                    alt="Josiah Hans Avatar"
                    className={`${styles.jhAvatar1}`}
                />
                <img
                    src={jhAvatar2}
                    alt="2nd Josiah Hans Avatar"
                    className={`${styles.jhAvatar2}`}
                />

            </div>

        </section>

    );
}