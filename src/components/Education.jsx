import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import  { useContext } from "react";
import { ThemeContext } from "../themeProvider";



export const Education = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <>
            <div className="sm:text-center lg:text-left my-8">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl"> <motion.span
                    className={ darkMode ? "block text-black" : " text-white" }
                >
                    Education
                </motion.span>
                    </h1>
            </div>

            <div className={
                darkMode
                    ? " text-black eduUpdate"
                    : "text-white eduUpdate "
            }>
                <div className="edu_cont border-l-4 border-indigo-500 pl-3 border-blue-500">
                    <h4 className="course">Full-Stack Web Development</h4>
                    <p className="institute">Masai School, Bangalore</p>
                    <p className="duration">November 2021 - Present</p>
                </div>

                <div className="border-l-4 border-indigo-500 pl-3 border-blue-500 edu_cont ">
                    <h4 className="course">Diploma(Electrical Engineer)</h4>
                    <p className="institute">
                        IES College of Technology Bhopal, Madhya Pardesh
                    </p>
                    <p className="duration">July 2016 - October 2020</p>
                </div>
            </div>
        </>
    );
};
