import ngaffeinLogo from "../assets/icons/ngaffein-logo.svg"
import lieveeLogo from "../assets/icons/lievee-logo.svg"
import startFridayLogo from "../assets/icons/start-friday-logo.svg"
import feedLogo from "../assets/icons/JH-logo-navbar.svg"

import ngaffeinImg from "../assets/images/ngaffein-img.png"
import lieveeImg from "../assets/images/lievee-img.png"
import startFridayImg from "../assets/images/start-friday-img.png"
import feedImg from "../assets/images/feed-img.png"



export const projects = [
    {
        id: 1,
        title: "Ngaffein",
        category: "Product Design",
        logo: ngaffeinLogo,
        mockup: ngaffeinImg,
        isLarge: true
    },
    {
        id: 2,
        title: "Lievee",
        category: "UI/UX Design",
        logo: lieveeLogo,
        mockup: lieveeImg,
        isLarge: false
    },
    {
        id: 3,
        title: "Start Friday",
        category: "Social Media",
        logo: startFridayLogo,
        mockup: startFridayImg,
        isLarge: false
    },
    {
        id: 4,
        title: "Feed",
        category: "Feed",
        logo: feedLogo,
        mockup: feedImg,
        isLarge: false
    }
];