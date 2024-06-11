import React from "react";
import HeroImage from "../components/HeroImg.tsx";
import OpenCards from "../components/OpenCards.tsx";
import featuredProjects from "../interfaces/Cards.tsx";
import SkillsComponent from "../components/SkillComponent.tsx";
import {programmingLanguages, softSkills, tools} from "../interfaces/Skills.tsx";
import AboutMeComponent from "../components/AboutMe.tsx";


const Home: React.FC = () => {
    return <>
        <HeroImage
            imageUrl="./lima-background.jpg"
            title="Leo's Portfolio "
            description="Aspiring Game Developer and Designer!"
        />
        <AboutMeComponent/>
        <OpenCards cards = {featuredProjects}/>
        <SkillsComponent programmingLanguages={programmingLanguages} softSkills={softSkills} tools={tools}></SkillsComponent>

    </>
};
export default Home;