import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../interfaces/Cards.tsx';
import SimpleButton from './SimpleButton.tsx';

interface OpenCardProps {
    cards: Card[];
}

const OpenCards: React.FC<OpenCardProps> = ({ cards }) => {
    const [expandedIndex, setExpandedIndex] = useState(-1);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768); // Adjust the breakpoint as needed
        };

        // Initial check on mount
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleCardClick = (index: number) => {
        if (isSmallScreen) {
            setExpandedIndex(index);
        } else {
            setExpandedIndex(index === expandedIndex ? -1 : index);
        }
    };

    const handleNextCard = () => {
        setExpandedIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const handlePrevCard = () => {
        setExpandedIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    const cardVariants = {
        expanded: {
            width: isSmallScreen ? '100%' : '600px',
            marginRight: isSmallScreen ? '0' : '20px',
        },
        collapsed: {
            width: isSmallScreen ? '0%' : '300px',
            marginRight: '0',
        },
    };

    return (
        <section className="py-16 pb-10 bg-gradient-to-b from-red-950 to-red-600 shadow-2xl">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-3xl font-extrabold text-white">Featured Projects</h1>
                <p className="mt-4 text-xl text-gray-300">Check out our latest works</p>
            </div>

            {/* Cards */}
            <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-5">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] ${
                            index === expandedIndex ? 'expanded' : ''
                        }`}
                        variants={cardVariants}
                        initial="collapsed"
                        animate={index === expandedIndex ? 'expanded' : 'collapsed'}
                        transition={{ duration: 0.5 }}
                        onClick={() => handleCardClick(index)}
                        style={{
                            backgroundImage: `url(${card.imageUrl})`,
                            display: isSmallScreen && index !== expandedIndex ? 'none' : 'block',
                        }}
                    >
                        <motion.div
                            className="card-content h-full flex flex-col justify-end"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            layout
                        >
                            <motion.div
                                className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-start p-4"
                                layout
                            >
                                <h2 className="text-xl font-semibold text-white text-center mb-2">{card.title}</h2>
                                {index === expandedIndex && (
                                    <motion.p
                                        className="mt-2 text-gray-300 text-center p-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        layout
                                    >
                                        {card.description}
                                    </motion.p>
                                )}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Navigation Buttons - Render only on small screens */}
            {isSmallScreen && (
                <div className="flex justify-center mt-4">
                    <button
                        className="bg-gray-800 text-white py-2 px-4 rounded-lg mr-2"
                        onClick={handlePrevCard}
                    >
                        Previous
                    </button>
                    <button
                        className="bg-gray-800 text-white py-2 px-4 rounded-lg"
                        onClick={handleNextCard}
                    >
                        Next
                    </button>
                </div>
            )}

            {/* Footer */}
            <p className="text-center pt-10 text-white">For more information</p>
            <SimpleButton text="Projects" url="/projects" />
        </section>
    );
};

export default OpenCards;
