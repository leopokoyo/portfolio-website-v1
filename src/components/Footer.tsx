// src/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
    return (
        <>
            <div className="bg-black text-white shadow-lg text-sm">
                <footer className="footer p-5">
                    <div className="container mx-auto">
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/4 mb-12 md:mb-0 md:px-6"> {/* Increased padding on sides */}
                                <h2 className="text-xl"> {/* Adjusted text size */}
                                    Leo's Portfolio
                                </h2>
                            </div>
                            <div className="w-full md:w-1/4 mb-12 md:mb-0 md:px-6"> {/* Increased padding on sides */}
                                <h5 className="text-md font-bold"> {/* Adjusted text size and added bold */}
                                    About Me
                                </h5>
                                <p>
                                    I am an aspiring game designer and programmer with a knack for developing
                                    RPG combat and progression systems.
                                </p>
                            </div>
                            <div className="w-full md:w-1/4 mb-12 md:mb-0 md:px-6"> {/* Increased padding on sides */}
                                <h5 className="text-md font-bold"> {/* Adjusted text size and added bold */}
                                    Useful Stuff
                                </h5>
                                <ul className="list-none p-0">
                                    <li>Email: leopokoyo@hotmail.com</li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/4 mb-12 md:mb-0 md:px-6"> {/* Increased padding on sides */}
                                <h5 className="text-md font-bold"> {/* Adjusted text size and added bold */}
                                    Follow Me
                                </h5>
                                <ul className="flex space-x-4">
                                    <li>
                                        <a href="https://x.com/Leopokoyo226" target="_blank">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/leopokoyo/" target="_blank">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/leo-rodrigo-heran-balbuena-0582a7281/" target="_blank">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/@leopokoyo" target="_blank">
                                            <i className="fab fa-youtube-square"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr className="my-4 border-gray-600"/>
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/2">
                                <p>© 2024 Leo's Portfolio. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Footer;
