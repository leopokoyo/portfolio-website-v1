export interface Card {
    title: string;
    description: string;
    imageUrl: string;

}

const featuredProjects: Card[] = [
    {
        title : "Ruination",
        description : "Our team's submission for the GGJ 2023. A 4x game inspired by the likes of Civilization and SimCity. You must manage your resources, to keep a prosperous civilasation or be forced to see it crumble.",
        imageUrl : "./ruination.png",
    },
    {
        title : "Waypoint Wizard",
        description : "Our team's submission for XPs GameJam 2024. A puzzle game about a time-travelling wizard, trying his best to save the town.",
        imageUrl : "./WaypointWizard.png",
    },
    {
        title : "Comets & Commerce",
        description : "lorem ipsum decorum",
        imageUrl : "./cats.png",
    },
    {
        title : "The Beauty in Cardboard Crack",
        description : "lorem ipsum decorum",
        imageUrl : "./beauty.png",
    },

]

export default featuredProjects;