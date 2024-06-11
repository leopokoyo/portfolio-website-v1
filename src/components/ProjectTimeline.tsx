import React, { useState } from 'react';
import { Project } from "../interfaces/Project.tsx";

interface TimelineProps {
    projects: Project[];
}

const Timeline: React.FC<TimelineProps> = ({ projects }) => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    return (
        <section className="pt-40 py-16 pb-20 bg-gradient-to-b from-red-950 to-red-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-extrabold text-white">Project Timeline</h1>
                    <p className="mt-4 text-xl text-gray-300">The many Prof Dev challenges</p>
                </div>
                <div className="flex flex-col md:flex-row">
                    {/* Left Side - Dates */}
                    <div className="md:w-1/12 bg-black p-10 rounded-2xl bg-opacity-70">
                        <div className="relative">
                            <div className="border-r-2 opacity-30 border-gray-200 absolute h-full top-0 left-1/2 transform -translate-x-1/2"></div>
                            <div className="space-y-12">
                                {projects.map((project, index) => (
                                    <div key={index} className="text-center relative z-10"> {/* Added z-10 here */}
                                        <div
                                            className={`w-6 h-6 rounded-full inline-block cursor-pointer ${selectedProjectIndex === index ? 'bg-blue-500 text-white' : 'bg-white text-gray-500'}`}
                                            onClick={() => setSelectedProjectIndex(index)}
                                        ></div>
                                        <p className={`mt-2 text-sm ${selectedProjectIndex === index ? 'text-blue-500 ' : 'text-gray-500'}`}>{project.date}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Right Side - Project Details */}
                    <div className="md:w-11/12 p-10">
                        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row">
                            <img
                                src={projects[selectedProjectIndex].imageUrl}
                                alt={projects[selectedProjectIndex].title}
                                className="w-full md:w-1/3 rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4 object-cover object-center"
                                style={{ maxHeight: "300px" }}
                            />
                            <div className="md:flex-1">
                                <h2 className="text-2xl font-bold mb-2">{projects[selectedProjectIndex].title}</h2>
                                <p className="text-gray-700 text-justify">{projects[selectedProjectIndex].description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Timeline;
