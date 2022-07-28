import React, { useContext } from "react";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";

const Contact = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div
            id="contact"
            className={
                darkMode
                    ? "bg-gray-100 pt-10 md:h-full"
                    : "bg-gray-900 pt-10 text-white md:h-full"
            }
        >
            <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 ">
                <h2 className="text-5xl font-bold px-4 md:px-0 text-center z-0">
                    Contact
                </h2>
                <div>
                    <h4 className="mt-12 text-3xl font-semibold text-blue-500">
                        Connect with me
                    </h4>
                    <p className="text-gray-500 text-xl">
                        If you want to know more about me or my work, or if you would just
                        <br />
                        like to say hello, send me a message. I'd love to hear from you.
                    </p>
                </div>
                <div className="flex justify-between items-center md:items-stretch  flex-col md:flex-row pb-24">
                    <div className="w-full md:pr-8">
                        <form
                            action='https://formsubmit.co/akshaysinghr98@gmail.com'
                            method='POST'
                        >
                            <div className="my-6">
                                <label
                                    for="name"
                                    className={
                                        darkMode
                                            ? "block mb-2 text-lg font-medium text-gray-900"
                                            : "block mb-2 text-lg font-medium text-white"
                                    }
                                >
                                    Name
                                </label>
                                <input
                                    type="name"
                                    id="name"
                                    name="name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    for="email"
                                    className={
                                        darkMode
                                            ? "block mb-2 text-lg font-medium text-gray-900"
                                            : "block mb-2 text-lg font-medium text-white"
                                    }
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    for="message"
                                    className={
                                        darkMode
                                            ? "block mb-2 text-lg font-medium text-gray-900"
                                            : "block mb-2 text-lg font-medium text-white"
                                    }
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 h-28 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter your message"
                                    required
                                />
                            </div>
                            <div className="flex justify-between ">
                                <div className="underline">
                                    <a target="_blank" href="mailto:akshaysinghr98@gmail.com">
                                        Send me email directly
                                    </a>
                                </div>
                                <button className="bg-indigo-500 text-white px-4 py-2 w-40 rounded-md hover:bg-indigo-400" type="submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>  
                    
                    <div className="w-full flex flex-col md:items-end  mt-12 md:mt-6">
                        <h1 className="text-3xl font-bold">Phone</h1>
            <a
              href="hello"
              className="mb-12 mt-4 font-semibold text-blue-700 block uppercase"
            >
              +91 9340542711
            </a>
                        <h1 className="text-3xl font-bold">Email</h1>
                        <a
                            href="akshaysinghr98@gmail.com"
                            className="mb-12 mt-4 font-semibold text-blue-700 block"
                        >
                            akshaysinghr98@gmail.com
                        </a>
                        <h1 className="text-3xl  font-bold">Address</h1>
                        <a
                            href="hello"
                            className="mt-4  mb-12 md:text-right font-semibold text-blue-700 block"
                        >
                            Sector 43, Gurugram,<br /> Haryana 122022
                            <br />
                            India
                        </a>
                        <h1 className="text-3xl  font-bold">Social</h1>
                        <ul className="flex">
                            { contactLinks.map((el) => (
                                <a
                                    href={ el.link }
                                    className="md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center"
                                >
                                    <img alt="" src={ el.url } />
                                    {/* <p className="text-md mt-2 hover:hidden">{el.name}</p> */ }
                                </a>
                            )) }
                        </ul>
                    </div>
                </div>
            </div>
            <div
                className={
                    darkMode
                        ? "w-full bg-gray-100 text-black text-lg py-3 flex justify-center"
                        : "w-full bg-gray-900 text-white text-lg py-3 flex justify-center"
                }
            >
                Made with
                <div className="text-red-500 px-2 text-2xl">&#10084;</div>
                by Akshay Kumar
            </div>
        </div>
    );
};

export default Contact;
