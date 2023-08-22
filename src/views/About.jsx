import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import { Education } from "../components/Education";

const About = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div id="about" className={darkMode === true ? "bg-white" : "bg-gray-900"}>
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
                            I'm Akshay, a Software Developer based in Gurgaon, India.
                            Currently, I'm working as a Software Developer focused on frontend technologies since August 2022.
                            With over 1 year of frontend development experience, I specialize in FullStack Web Development, particularly the dynamic MERN Stack.
                            I thrive on merging user-centric design with technology, crafting innovative solutions that ensure a seamless user journey.
                            When not immersed in coding, you can find me engrossed in reading tech blogs or enjoying a game of cricket.
                            Let's reshape the digital realm together.
                        </p>
                    </motion.div>

                    <Education />

                </div>
            </div>

        </div>
    );
};

export default About;