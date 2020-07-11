import React, {Component} from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Resumé from '../pages/Resume';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import './Container.scss';

export default function Container() {
    return (
        <div id="container">
            <Home />
            <About />
            <Resumé />
            <Portfolio />
            <Contact />
            {/* <NotFound /> */}
        </div>
    )
}

