export interface Skill {
    name: string;
    icon: string; // Assuming the icon is a Font Awesome class name
}

// Mockup programming languages
export const programmingLanguages: Skill[] = [
    { name: 'JavaScript', icon: './icons/javascript.png' },
    { name: 'TypeScript', icon: '/icons/typescript.png' },
    { name: 'Java', icon: '/icons/python.png' },
    { name: 'C#', icon: '/icons/python.png' },
    { name: 'Python', icon: '/icons/python.png' },
    { name: 'SQL', icon: '/icons/python.png' },
    // Add more programming languages as needed
];

// Mockup tools
export const tools: Skill[] = [
    { name: 'React', icon: '/icons/react.png' },
    { name: 'Vue.js', icon: '/icons/vuejs.png' },
    { name: 'Webpack', icon: '/icons/webpack.png' },
    // Add more tools as needed
];

// Mockup soft skills
export const softSkills: Skill[] = [
    { name: 'Communication', icon: '/icons/communication.png' },
    { name: 'Problem Solving', icon: '/icons/problem-solving.png' },
    { name: 'Teamwork', icon: '/icons/teamwork.png' },
    // Add more soft skills as needed
];