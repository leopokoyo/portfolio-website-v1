import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Route } from '../interfaces/Routes.tsx';
import { motion, useAnimation } from 'framer-motion';

interface HeaderProps {
    routes: Route[];
}

const Header: React.FC<HeaderProps> = ({ routes }) => {
    const controls = useAnimation();

    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            if (window.scrollY > lastScrollY && window.scrollY > window.innerHeight / 2) {
                controls.start({ y: '-100%' });
            } else if (window.scrollY < lastScrollY && window.scrollY < window.innerHeight / 2) {
                controls.start({ y: '0%' });
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controls]);

    return (
        <motion.nav
            className="fixed top-0 left-0 w-full z-50 bg-black opacity-70 shadow-md"
            animate={controls}
            initial={{ y: '0%' }}
            transition={{ type: 'tween', duration: 0.3 }}
        >
            <div className="container max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link className="text-white font-bold text-5xl font-Rosmatika" to="/">Leo's Domain</Link>
                <button className="text-white inline-flex p-2 rounded-md md:hidden bg-palette_2 hover:bg-palette_3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                <div className="hidden w-full md:flex md:items-center md:w-auto text-palette_4" id="navbarNav">
                    <ul className="md:flex md:space-x-4">
                        {routes.map((route) => (
                            <li className="nav-item" key={route.path}>
                                <Link className="text-white hover:text-gray-400" to={route.path}>{route.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.nav>
    );
};

export default Header;
