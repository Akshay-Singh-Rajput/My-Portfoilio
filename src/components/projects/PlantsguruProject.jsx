import React from "react";
import ProjectComponents from "../ProjectComponents";

export const PlantsguruProject = () => {
    return (
        <ProjectComponents
            imgSrc={ "https://miro.medium.com/max/700/1*7l4--6rpQ_FI9Ce-yUsrcA.png" }
            originalLink={ "https://www.plantsguru.com/" }
            title={ "Clone of plantsguru.com" }
            about={
            " Plantsguru, started in 2014, is a one stop online platform for catering all your needs for making this world greener and prettier then you found it.Plants bring natural beauty to our surroundings."
            }
            blogLink={
              "https://medium.com/@akshaysinghr98/our-first-collaboration-project-44ea8871d6b2"
            }
            gitLink={ "https://github.com/Akshay-Singh-Rajput/Plantsguru" }
            demoLink={ "https://plantsguru-clone.netlify.app/" }
            videoLink={ "https://youtu.be/UZ6SQDQlBcY" }
        />
    );
};
