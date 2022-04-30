import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import { Education } from "../components/Education";

const About = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div id="about" className={ darkMode === true ? "bg-white" : "bg-gray-900" }>
            <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
                <h2
                    className={
                        darkMode
                            ? "text-5xl font-bold px-4 md:px-0 text-center"
                            : "text-5xl font-bold px-4 md:px-0 text-center text-white"
                    }
                >
                    About Me
                </h2>
                <div>
                    <motion.div>
                        <h4 className="mt-12 text-3xl font-semibold text-blue-500">
                            A bit about me
                        </h4>
                        <p
                            className={
                                darkMode
                                    ? "mt-4 text-xl text-justify text-gray-500"
                                    : "mt-4 text-xl text-justify text-white"
                            }
                        >
                          FullStack Web Developer with knowledge of MERN Stack along with a knack of building apllication. I take into consideration the
                            user experience while writing reusable and efficient code. I
                            passionately combine good design, technology, and innovation in
                            all my projects, which I like to accompany from the first idea to
                            release.Currently, I'm focused on the backend development.
                        </p>
                    </motion.div>
                  
                        <Education  />
                        
                </div>
            </div>
            
        </div>
    );
};

export default About;