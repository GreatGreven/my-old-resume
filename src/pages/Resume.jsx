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
                    {context.resume.content.map((section) => 
			<div>
			<h3>{section.title}</h3>
			{section.content.map(item => 
			<Card>
			    <Face>
				{item.title}
			    </Face>
			    <Face>
			    </Face>
			</Card>)}
			</div>
		    )
                    }
                    </div>
                </div>
            )}
        </GlobalContext.Consumer>
    );
}
