import React, { useContext } from "react";
import Typewriter from "typewriter-effect";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import cloud from "../assets/cloudBg.png";
// import cloudDark from "../assets/cloudDark.png";
import myPic from "../assets/myPic.png";
// import myResume from "../assets/Akshay Kumar Resume.pdf";
import cloudDark from "../assets/Pin-on-Super-gif.gif";

const Home = () => {
    const myResume = "https://drive.google.com/file/d/1FPBY2jfPbqU24wUT9q8aZPdVVW2PsgWt/view"
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    
    return (
        <>
            <div
                style={
                    darkMode
                        ? { backgroundImage: `url('${cloud}')`, backgroundSize: "cover" }
                        : { backgroundImage: `url('${cloudDark}'`, backgroundSize: "cover" }
                }
            >
                <main
                    className="mx-auto max-w-7xl px-4 sm:px-6 h-screen md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
                    id="/"
                >
                    <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl mt-60 md:text-6xl lg:mt-0">
                            <motion.span
                                className={ darkMode ? "block text-black" : " text-white" }
                            >
                                Hi, I am Akshay
                            </motion.span>
                            <span className="block text-blue-500 z-0 lg:inline">

                                <Typewriter
                                    options={ {
                                        strings: [
                                            "A Full Stack Developer",
                                            "MERN Stack Developer",
                                            "A Programmer",
                                            "A Web Developer",
                                            "A React Developer.",
                                            "A Student.",
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 60,
                                    } }
                                />
                            </span>
                        </h1>
                        <p
                            className={
                                darkMode
                                    ? "mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                                    : "mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                            }
                        >
                            Passionate Full Stack Web Developer with a specializaion in MERN
                            Stack
                        </p>
                        <div className="flex md:justify-start ">
                            { contactLinks.map((el) => (
                                <a
                                    target="_blank"
                                    href={ el.link }
                                    className="mr-5 cursor-pointer mt-8 hover:scale-125"
                                >
                                    <img alt="" src={ el.url } />
                                    {/* <p className="text-md mt-2 hover:hidden">{el.name}</p> */ }
                                </a>
                            )) }
                        </div>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            {/* download="Akshay Kumar Resume"  */ }
                            <a target="_blank" href={ myResume }>
                                <div className="mt-3 sm:mt-0 cursor-pointer w-full">
                                    <p className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 md:py-4 md:text-lg md:px-10">
                                        Download Resume
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <motion.img
                        initial="hidden"
                        whileInView={ "visible" }
                        variants={ {
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                },
                            },
                            hidden: { opacity: 1, y: 80 },
                        } }
                        src={ myPic }
                        alt=""
                        className="md:w-2/6  mt-10 sm:block w-6/12 mb-20 lg:w-4/12"
                    />
                </main>
            </div>
        </>
    );
};

export default Home;
