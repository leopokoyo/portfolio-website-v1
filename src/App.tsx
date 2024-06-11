// src/App.tsx
import React from 'react';

import routes from './interfaces/Routes.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/*Components*/
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
const App: React.FC = () => {
    return (
        <Router>
            <Header routes={routes} className="z-50" />
            <Routes>
                {routes.map((route) => (
                    <Route key={route.path} path={route.path} element={<route.component />} />
                ))}
            </Routes>
            <Footer/>
        </Router>
    );
};

export default App;