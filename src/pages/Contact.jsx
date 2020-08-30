import React from 'react';
import GlobalContext from '../context/global-context.js'
import './Contact.scss'

export default function Contact() {
    return (
        <GlobalContext.Consumer>
            {context => (
                <div id="contact">
                    <fieldset>
                        <legend>Send me a message</legend>
                        {context.contact.feedback ?
                            <div className={context.contact.feedback.status}>
                                {context.contact.feedback.message}
                            </div> : null
                        }
                        <form onSubmit={context.sendEmail}>
                            <input type="hidden" name="contact_number" />
                            <div className="field">
                                <input
                                    type='text'
                                    className='input'
                                    id='user_name'
                                    name='user_name'
                                    value={context.contact.form.user_name}
                                    onChange={context.updateContactField}
                                    placeholder=" "
                                />
                                <label htmlFor='user_name' className='label'>Name</label>
                            </div>

                            <div className="field">
                                <input
                                    type='email'
                                    className='input'
                                    id='user_email'
                                    name='user_email'
                                    value={context.contact.form.user_email}
                                    onChange={context.updateContactField}
                                    placeholder=" "
                                />
                                <label htmlFor='email' className='label'>Email</label>
                            </div>

                            <div className="field">
                                <input
                                    type='text'
                                    className='input'
                                    id='subject'
                                    name='subject'
                                    value={context.contact.form.subject}
                                    onChange={context.updateContactField}
                                    placeholder=" "
                                />
                                <label htmlFor='subject' className='label'>Subject</label>
                            </div>

                            <div className="field">
                                <textarea
                                    id='message'
                                    className='input'
                                    name='message'
                                    maxLength='5000'
                                    value={context.contact.form.message}
                                    onChange={context.updateContactField}
                                    placeholder=" "
                                />
                                <label htmlFor='message' className='label'>Message</label>
                            </div>

                            <input className='send button' type='submit' value='Send' disabled={!context.contact.form.valid} />
                        </form>
                    </fieldset>
                    <div className='media-links'>
                        {/* {context.contact.content.map((section, index) => (
                            <a href={section.content} target='_blank' rel="noopener noreferrer" key={index}>
                                <img src={section.image} alt={section.title}/>
                            </a>
                        ))} */}
                        <a href="https://www.facebook.com/eric.grevillius/" target="_blank" rel="noopener noreferrer">
                            <svg
                                id="facebook"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="facebook-square"
                                class="svg-inline--fa fa-facebook-square fa-w-14"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512">
                                <path
                                    fill="currentColor"
                                    d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                                    className="facebook" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/greatgreven/" target="_blank" rel="noopener noreferrer">
                            <svg
                                id="instagram"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="instagram"
                                class="svg-inline--fa fa-instagram fa-w-14"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512">
                                <path
                                    fill="currentColor"
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                    className="instagram" />
                            </svg>
                        </a>
                        <a href="https://github.com/GreatGreven" target="_blank" rel="noopener noreferrer">
                            <svg
                                id="github"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="github"
                                class="svg-inline--fa fa-github fa-w-16"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 496 512">
                                <path fill="currentColor"
                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                    className="github" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/eric-grevillius-b2356119a/" target="_blank" rel="noopener noreferrer">
                            <svg
                                id="linkedin"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="linkedin"
                                class="svg-inline--fa fa-linkedin fa-w-14"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512">
                                <path
                                    fill="currentColor"
                                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                                    className="linkedin" />
                            </svg>
                        </a>
                    </div>
                </div>
            )}
        </GlobalContext.Consumer>
    );
}
