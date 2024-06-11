import React from 'react';
import { Skill } from '../interfaces/Skills.tsx';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillComponentProp {
    programmingLanguages: Skill[];
    tools: Skill[];
    softSkills: Skill[];
}

interface SKillListProp {
    title: string,
    skills: Skill[]
}

// Reusable component for rendering a list of skills
const SkillList: React.FC<SKillListProp> = ({ title, skills }) => (
    <div className="p-5">
        <h3 className="text-center text-lg font-semibold mb-5 text-palette_3">{title}</h3>
        <ul className="list-disc pl-4">
            {skills.map((skill, index) => (
                <li key={index} className="flex items-center mb-3 text-left">
                    <img src={skill.icon} alt={skill.name} className="w-6 h-6 mr-2" />
                    <span>{skill.name}</span>
                </li>
            ))}
        </ul>
    </div>
);


const SkillsComponent: React.FC<SkillComponentProp> = ({ programmingLanguages, tools, softSkills }) => {
    const { ref, inView } = useInView();
    const controls = useAnimation();

    React.useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        } else {
            controls.start({ opacity: 0, y: 50 });
        }
    }, [controls, inView]);

    return (
        <div
            ref={ref}
            className="relative h-fit p-10 flex items-center justify-center"
            style={{
                backgroundImage: `url(./flowers.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <motion.div
                className="relative z-10 text-palette_2 shadow-black text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5 }}
            >
                <div className="bg-black bg-opacity-60 max-w-screen-md mx-auto p-4 text-white shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-1 text-center text-white">Skills</h2>
                    <div className="grid grid-cols-3 gap-8">
                        <SkillList title="Languages" skills={programmingLanguages} />
                        <SkillList title="Tools" skills={tools} />
                        <SkillList title="Soft Skills" skills={softSkills} />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SkillsComponent;
