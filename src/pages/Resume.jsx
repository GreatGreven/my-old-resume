import React from 'react';
import GlobalContext from '../context/global-context.js';
import Card from '../components/Card';
import Face from '../components/Face'
import './Resume.scss'; 

export default function Resume(){
    return (
        <GlobalContext.Consumer>
            {context => (
                <div id="resume">
                    <h1>{context.resume.title}</h1>
                    <div className="container">
                    {context.resume.content.map((section) => {
                        return (<Card>
                            <Face>
                                <h3>{section.title}</h3>
                            </Face>
                            <Face>
                                <ul>
                                    {section.content.map(item => <li>{item}</li>)}
                                </ul>
                            </Face>
                        </Card>);
                    })}
                    </div>
                </div>
            )}
        </GlobalContext.Consumer>
    );
}
