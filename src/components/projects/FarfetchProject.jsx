import React from "react";
import ProjectComponents from "../ProjectComponents";
export const FarfetchProject = () => {
    return (
        <ProjectComponents
            imgSrc={
                "https://user-images.githubusercontent.com/97354310/167339024-1984a60e-5b95-441c-8508-8300c015ee22.png"
            }
            originalLink={ "https://www.farfetch.com/" }
            title={ "Clone of farfetch.com" }
            about={
                "Farfetch is a British-Portuguese online luxury fashion retail platform that sells products from over 700 boutiques and brands from around the world. The company was founded in 2007 by the Portuguese entrepreneur José Neves with its headquarters in London and main branches in Lisbon and Porto."
            }
            blogLink={
                "https://medium.com/@abhishek94.bhaskar/unit-5-construct-week-3de333e31528"
            }
            gitLink={ "https://github.com/Akshay-Singh-Rajput/Farfetch-clone" }
            demoLink={ "https://farfetch-clone-react.netlify.app/" }
            videoLink={ "https://youtu.be/PW8s7IUZ7ZE" }
        />
    );
};
