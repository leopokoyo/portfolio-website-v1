// src/routes.ts

import Home from "../routes/Home.tsx";
import About from "../routes/About.tsx";
import Projects from "../routes/Projects.tsx";
import Contact from "../routes/Contact.tsx";


export interface Route {
    path: string;
    name: string;
    component: React.FC;
}

const routes: Route[] = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/projects', name: 'Projects', component: Projects },
    { path: '/contact-me', name: 'Contact Me', component: Contact}
];

export default routes;