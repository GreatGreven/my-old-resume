import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Resume from '../pages/Resume';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import './Container.scss';

export default function Container() {
    return (
        <div id="container">
            <Home />
            <hr/>
            <About />
            <hr/>
            <Resume />
            <hr/>
            <Portfolio />
            <hr/>
            <Contact />
        </div>
    )
}

