import React from "react";
import ProjectTimeline from "../components/ProjectTimeline.tsx";
import {projects} from "../interfaces/Project.tsx";

const Projects: React.FC = () => {
    return <>
        <ProjectTimeline projects={projects}/>
    </>
};
export default Projects;