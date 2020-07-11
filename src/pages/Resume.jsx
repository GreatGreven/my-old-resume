import React from 'react';
import GlobalContext from '../context/global-context.js';
import Card from '../components/Card';
import './Resume.scss'; 

export default function Resume(){
    return (
        <GlobalContext.Consumer>
            {context => (
                <div id="resume">
                    <h1>{context.resume.title}</h1>
                    {context.resume.content.map((section) => {
                        return (<Card>
                            <h3>{section.title}</h3>
                            <ul>
                                {section.content.map(item => <li>{item}</li>)}
                            </ul>
                        </Card>);
                    })}
                </div>
            )}
        </GlobalContext.Consumer>
    );
}
