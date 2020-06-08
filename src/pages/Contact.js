import React from 'react';
import GlobalContext from '../context/global-context.js'
import './Contact.scss' 

export default function Contact(){
    return (
        <GlobalContext.Consumer>
            {context => (
                <div id="contact">
                    <h1>{context.contact.title}</h1>
                    <div className='media-links'>
                        {context.contact.content.map((section, index) => (
                                <a href={section.content} target='_blank' key={index}>
                                    <img src={section.image}/>
                                </a>
                        ))}
                    </div>
                    <form onSubmit={context.sendEmail}>
                        <fieldset>
                            <legend>Send me a message</legend>

                            <input type="hidden" name="contact_number" />
                            
                            <label htmlFor='user_name'>Name</label>
                            <input type='text' id='user_name' name='user_name' required/>
                            
                            <label htmlFor='user_email'>Email</label>
                            <input type='email' name='user_email' required/>

                            <label htmlFor='subject'>Title</label>
                            <input type='text' id='subject' name='subject' required/>
                            
                            <label htmlFor='message'>Message</label>
                            <textarea id='message' name='message' maxLength='5000' required/>
                            
                            <input type='submit' value='Send'/>
                        </fieldset>
                    </form>
                </div>
            )}
        </GlobalContext.Consumer>
    );
}
