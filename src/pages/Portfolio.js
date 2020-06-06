import React from 'react';
import GlobalContext from '../context/global-context.js'
import './Portfolio.scss'

export default function Portfolio() {
    return (
        <GlobalContext.Consumer>
            {context => (
                <div id="portfolio">
                    <h1>{context.portfolio.title}</h1>
                    <p>{context.portfolio.content}</p>
                </div>
            )}
        </GlobalContext.Consumer>
    );
}
