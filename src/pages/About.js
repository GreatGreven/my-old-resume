import React from 'react';
import GlobalContext from '../context/global-context.js'
import './About.scss'

export default function About() {
    return (
        <GlobalContext.Consumer>
            {context => (
                <div id="about">
                    {context.profile.map(section =>
                        <div>
                            <h1>{section.title}</h1>
                            <p>{section.content}</p>
                            {section.interests ? (
                                <div>
                                    <h2>{section.interests.title}</h2>
                                    <ul>
                                        {section.interests.content.map(item => <li>{item}</li>)}
                                    </ul>
                                </div>)
                                : null}
                        </div>
                    )}
                </div>
            )}
        </GlobalContext.Consumer>
    );
}
