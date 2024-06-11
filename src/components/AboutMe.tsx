import React from 'react';

const AboutMeComponent: React.FC = () => {
    return (
        <div className="max-w-screen-lg mx-auto p-8 flex items-center justify-center">
            <div className="flex items-center justify-center flex-shrink-0 mr-8">
                <img src="/path/to/your/picture.jpg" alt="Your Name" className="w-48 h-48 object-cover rounded-md shadow-lg" />
            </div>
            <div className="flex flex-col">
                <div className="mb-8">
                    <h2 className="text-3xl font-semibold mb-4">About Me</h2>
                    <p className="text-lg leading-relaxed">
                        Hi there! I'm [Your Name], a passionate [Your Profession] with a love for [Your Interests]. I enjoy
                        [Something Interesting About You] and always strive to [Your Goals or Aspirations]. Let's connect and
                        create something amazing together!
                    </p>
                </div>
                <div>
                    <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
                    <p className="text-lg leading-relaxed">Feel free to reach out to me at [Your Email Address] or connect with me on [Your Social Media Handles]. I'm looking forward to hearing from you!</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMeComponent;
