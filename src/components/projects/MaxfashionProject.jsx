import React from 'react';
import ProjectComponents from "../ProjectComponents";

export const MaxfashionProject = () => {
    return (
        <ProjectComponents
            imgSrc={
                "https://miro.medium.com/max/700/0*_MCzm8XjTL8k0CUu.jpeg"
            }
            originalLink={ "https://www.maxfashion.in/in/en/" }
            title={ "Clone of maxfashion.com" }
            about={
                "MAX Fashion is one of the e-commerce websites working in India.Launched in UAE in May 2004, Max was established in India in 2006,opening its first store in Indore." }
            blogLink={
                "https://medium.com/@akshaysinghr98/our-journey-to-constructing-a-clone-website-of-max-fashion-www-maxfashion-in-a51940db1f1"
            }
            gitLink={ "https://github.com/Aakashvani/MaxFashion-Backend" }
            demoLink={ "https://maxfashion-clone.netlify.app/" }
            videoLink={ "https://youtu.be/Tm2Lr8nbuHE" }
        />
    );
};
