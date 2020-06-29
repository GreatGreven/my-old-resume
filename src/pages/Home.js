import React from 'react';
import GlobalContext from '../context/global-context.js'
import './Home.scss';

export default function Home(){
    return (
        <GlobalContext.Consumer>
            {context => (
                <div id="home">
                    <h1>
                        {context.welcome.title.map(item => <span> {item}</span>)}
                        <br />
                        {context.welcome.highlight.map(item => <span className='highlight'> {item}</span>)}
                    </h1>
                    <img src={context.welcome.imageSmall} alt='profile'/>
                </div>
            )}
        </GlobalContext.Consumer>
    );
}