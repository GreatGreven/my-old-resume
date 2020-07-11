import React, { Children } from 'react';
import GlobalContext from '../context/global-context.js'
import './Footer.scss';

const Footer = (props) => {
    return (
        <GlobalContext.Consumer>
            {context => (
                <div id="footer">
                    {props.children}
                </div>
            )}
        </GlobalContext.Consumer>
    );
}

export default Footer;