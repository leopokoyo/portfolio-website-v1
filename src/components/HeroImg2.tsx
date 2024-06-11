import React from 'react';

interface HeroImageProps {
    imageUrl: string;
    title: string;
    description: string;
}

const HeroImage2: React.FC<HeroImageProps> = ({imageUrl, title, description}) => {
    return (
        <>
            <div
                className="relative h-40 flex items-center justify-center"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black opacity-70"/>
                <div className="relative z-10 text-palette_2 shadow-black text-center">
                    <h1 className="text-red-700 text-4xl sm:text-5xl md:text-6xl font-bold">{title}</h1>
                    <p className="text-white mt-1 text-lg sm:text-xl">{description}</p>
                </div>
            </div>
        </>
    );
};

export default HeroImage2;
