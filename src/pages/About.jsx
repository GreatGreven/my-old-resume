import React from 'react';
import GlobalContext from '../context/global-context.js'
import './About.scss'

export default function About() {
    return (
        <GlobalContext.Consumer>
            {context => (
                <div id="about">
                    {context.profile.map(section =>
			<div>                                             <h1>                                              {section.title}                                                                         </h1>
			    {section.title === 'Hobbies' ? 
				<ul>
				    {section.content.map(item => 
					<li>
				  	{item}
					</li>
				    )}
                                </ul>
				:
                                <p>
				    {section.content}
				</p>
                    	    }
			</div>
		    )}
                </div>
            )}
        </GlobalContext.Consumer>
    );
}
