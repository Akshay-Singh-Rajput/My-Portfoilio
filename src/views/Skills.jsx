
import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import { techStack } from "../constants";


const Skills = () => {
    const theme = useContext(ThemeContext);
    return (
        <div
            className={
                theme.state.darkMode ? "pb-20 bg-fixed bg-gray-100" : "pb-20 bg-gray-900"
            }
        // style={{backgroundImage: `url('https://i.pinimg.com/originals/b0/b1/f5/b0b1f5d33de00e3c21ad29bbba25e31b.gif')`}}>
        >
            <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 px-4 pt-20"
                id="skills"
            >
                <h2
                    className={
                        theme.state.darkMode
                            ? "text-5xl font-bold px-4 md:px-0 text-center"
                            : "text-5xl font-bold px-4 md:px-0 text-center text-white"
                    }
                >
                    Technologies and Tools
                </h2>
                <div className="">
                    <h4 className="mt-16 text-3xl font-semibold text-blue-500">
                        My favorite tools
                    </h4>
                    <div >
                        <motion.div className="/flex flex-wrap mt-8 flex flex-wrap justify-between sm:grid-cols-2 ">
                        { techStack.map((el) => (
                            <motion.div
                            key={el.name}
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
                                className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
                            >
                                <img alt="" src={ el.link } className="w-12" />
                                <h4 className="text-md ml-4">{ el.name }</h4>
                            </motion.div>
                        )) }
          </motion.div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
