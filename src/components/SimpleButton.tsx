import React from 'react';

interface SimpleButtonProps {
    text: string;
    url: string;
    width?: string; // Optional width prop
}

const SimpleButton: React.FC<SimpleButtonProps> = ({ text, url, width='w-32'}) => {
    return (
        <>
            <div className="flex justify-center p-3">
                <a
                    href={url}
                    className={`inline-block outline-1 outline-black bg-red-950 hover:bg-gray-200 hover:text-red-950 text-white font-bold py-2 px-4 shadow-md mx-auto text-center ${width}`}
                >
                    {text}
                </a>
            </div>
        </>
    );
};

export default SimpleButton;
