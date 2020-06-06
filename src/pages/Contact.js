import React from 'react';
import GlobalContext from '../context/global-context.js'
import './Contact.scss' 

export default function Contact(){
    return (
        <GlobalContext.Consumer>
            {context => (
                <div id="contact">
                    <h1>{context.contact.title}</h1>
                    {context.contact.content.map(section => (
                        <div>
                            <a href={section.content}>
                                <img src={section.image}/>
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </GlobalContext.Consumer>
    );
}
