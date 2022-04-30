import React from "react";
import { motion } from "framer-motion";

const Card2 = () => {
    return (
        <motion.div
            initial={ "hidden" }
            whileInView={ "visible" }
            variants={ {
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
            } }
            class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8 md:content-center"
        >
            <a href="hello">
                <img
                    class="rounded-t-lg w-full"
                    src="https://miro.medium.com/max/700/0*_MCzm8XjTL8k0CUu.jpeg"
                    alt=""
                />
            </a>
            <div class="p-5">
                <a target={ `_blank` } href="https://www.maxfashion.in/in/en/">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Clone of maxfashion.com
                    </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    MAX Fashion is one of the e-commerce websites working in India.
                    Launched in UAE in May 2004, Max was established in India in 2006,
                    opening its first store in Indore.
                </p>
                <div className="flex gap-1 justify-between">
                    <div className="  justify-between">
                        <a target="_blank"
                            href="https://medium.com/@akshaysinghr98/our-journey-to-constructing-a-clone-website-of-max-fashion-www-maxfashion-in-a51940db1f1"
                            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 m-2"
                        >
                            BLOG

                            <svg
                                className="ml-2 -mr-1 w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </a>
                        <a
                            target="_blank" href="https://github.com/Aakashvani/MaxFashion-Backend"
                            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 m-2"
                        >
                            GitHub
                            <svg
                                className="ml-2 -mr-1 w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </a>
                    </div>

                    <div>
                        <a
                            target="_blank" href="https://maxfashion-clone.netlify.app/"
                            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 m-2"
                        >
                            Demo
                            <svg
                                className="ml-2 -mr-1 w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </a>
                        <a
                            target='_blank' href="https://youtu.be/Tm2Lr8nbuHE"
                            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 m-2"
                        >
                            Video
                            <svg
                                className="ml-2 -mr-1 w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>

                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
export default Card2