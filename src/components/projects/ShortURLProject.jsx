import React from 'react';
import ProjectComponents from '../ProjectComponents';

export const ShortURLProject = () => {
    return (
        <ProjectComponents
            imgSrc={
                "https://user-images.githubusercontent.com/97354310/172386629-b58f856d-ead9-412e-8daf-50c0c3f8edb3.png"
            }
            originalLink={ "https://shorturlweb.herokuapp.com/" }
            title={ "URL Shortener Web Application" }
            about={
                "It is a user-friendly web-based tool that allows users to create shortened versions of long URLs, making them easier to share. This project is built using the MERN stack (MongoDB, Express, React, Node.js) and styled with Chakra UI for a visually appealing and responsive user interface" }
            blogLink={
                "#"
            }
            gitLink={ "https://github.com/Akshay-Singh-Rajput/Short_URL" }
            demoLink={ "https://shorturlweb.herokuapp.com/" }
            videoLink={ "https://youtu.be/ILIA2y4Qoow" }
        />
    );
};
