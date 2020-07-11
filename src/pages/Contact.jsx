import React from 'react';
import GlobalContext from '../context/global-context.js'
import './Contact.scss'

export default function Contact() {
    return (
        <GlobalContext.Consumer>
            {context => (
                <div id="contact">
                    <h1>{context.contact.title}</h1>
                    <fieldset>
                        <legend>Send me a message</legend>
                        {context.contact.feedback ? 
                        <div className={context.contact.feedback.status}>
                            {context.contact.feedback.message}
                        </div> : null}
                        <form onSubmit={context.sendEmail}>
                            <input type="hidden" name="contact_number" />
                            <div className="form-group">
                                <label htmlFor='user_name'>Name</label>
                                <input 
                                    type='text' 
                                    id='user_name' 
                                    name='user_name' 
                                    value={context.contact.form.user_name}
                                    onChange={context.updateContactField}
                                    />
                            </div>

                            <div className="form-group">
                                <label htmlFor='user_email'>Email</label>
                                <input 
                                    type='email' 
                                    id='user_email' 
                                    name='user_email'
                                    value={context.contact.form.user_email}
                                    onChange={context.updateContactField}
                                    />
                            </div>

                            <div className="form-group">
                                <label htmlFor='subject'>Subject</label>
                                <input 
                                    type='text' 
                                    id='subject' 
                                    name='subject' 
                                    value={context.contact.form.subject}
                                    onChange={context.updateContactField}
                                    />
                            </div>

                            <div className="form-group">
                                <label htmlFor='message'>Message</label>
                                <textarea 
                                    id='message' 
                                    name='message' 
                                    maxLength='5000' 
                                    value={context.contact.form.message}
                                    onChange={context.updateContactField}
                                    />
                            </div>

                            <input id='send-button' type='submit' value='Send' />
                        </form>
                    </fieldset>
                    <div className='media-links'>
                        {context.contact.content.map((section, index) => (
                            <a href={section.content} target='_blank' rel="noopener noreferrer" key={index}>
                                <img src={section.image} alt={section.title}/>
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </GlobalContext.Consumer>
    );
}
