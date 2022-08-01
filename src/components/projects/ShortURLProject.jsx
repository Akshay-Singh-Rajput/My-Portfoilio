import React from 'react';
import ProjectComponents from '../ProjectComponents';

export const ShortURLProject = () => {
    return (
        <ProjectComponents
            imgSrc={
                "https://user-images.githubusercontent.com/97354310/172386629-b58f856d-ead9-412e-8daf-50c0c3f8edb3.png"
            }
            originalLink={ "https://shorturlweb.herokuapp.com/" }
            title={ "Short URL" }
            about={
                "Short URL is web app which generate a short url of your long url, so you can remember your url or it's easy to store and share, This Project is developed by using MongoDB, Express.js, React.js, Node.js and ChakraUI" }
            blogLink={
                "#"
            }
            gitLink={ "https://github.com/Akshay-Singh-Rajput/Short_URL" }
            demoLink={ "https://shorturlweb.herokuapp.com/" }
            videoLink={ "https://youtu.be/ILIA2y4Qoow" }
        />
    );
};
