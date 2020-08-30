import React from 'react';
import GlobalContext from '../context/global-context.js'
import './Home.scss';

export default function Home() {
    return (
        <GlobalContext.Consumer>
            {context => (
                <div id="home">
                    <div className="titles">
                        <h1>
                            {context.welcome.title.map(item => <span> {item}</span>)}
                            <br />
                            {context.welcome.highlight.map(item => <span className='highlight'> {item}</span>)}
                        </h1>
                        <hr />
                        <h2>
                            {context.welcome.subtitle.map(item => <span> {item}</span>)}
                        </h2>
                    </div>
                    <div className='profile'>
                        <img src={context.welcome.imageLarge} alt='profile' />
                        <a href='#contact'>
                            <button>
                                Contact
                            </button>
                        </a>
                    </div>
                </div>
            )}
        </GlobalContext.Consumer>
    );
}