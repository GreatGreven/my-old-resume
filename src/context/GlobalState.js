import React, { Component } from 'react';
import profilePictureSmall from '../images/profile_round_small.png';
import profilePictureLarge from '../images/profile_round_large.png';
import emailIcon from '../images/email_small.png';
import githubIcon from '../images/GitHub-Mark-50px.png';
import linkedinIcon from '../images/linkedin-logo-png-2026_small.png';
import GlobalContext from './global-context';
import emailjs from 'emailjs-com';

class GlobalState extends Component {
    state = {
        themeMap: {
            dark: 'solar',
            light: 'dark',
            solar: 'light'
        },
        welcome: {
            title: ['Hello World!', 'I am'],
            highlight: ['Eric', 'Grevillius'],
            imageSmall: profilePictureSmall,
            imageLarge: profilePictureLarge
        },
        profile: [
            {
                title: 'About',
		image: '',
                content: 'My name is Eric Grevillius, 24 years old and my goal is to become a Software developer. I\'m studying ' +
                    'at the moment to complete my Bachelor\'s degree in Computer Science and ' +
                    'Application Development at Malmö University. I am a methodical ' +
                    'and analytical problem solver with an eye for detail. As a person ' +
                    'I am a quick learner, have a high level of ambition and like the ' +
                    'feeling of delivering something of high quality. I am not afraid of ' +
                    'hard work with many long hours to row a project in port. ' +
                    'What I am looking for today is a great place to start my career.'
            },
            {
                title: 'Passions',
                content: 'I am mostly interested in technology, especially building, ' +
                    'disassembling and understanding how both software and hardware ' +
                    'work. I am passionate about software development. I am used to ' +
                    'working with clients, working as part of a group, but also ' +
                    'enjoy working independently. I am considered a responsible ' +
                    'nice guy who is easy to talk to and always gives 100%.',
		image:''
	    },{
                title: 'Hobbies',
		image:'',
                content: [
		    "Programming/Developing",
                    "Playing basketball",
                    "Skiing",
                    "Outdoor activities",
                    "Study up on IT and emerging technologies",
                    "Play Board and Role-playing games",
                    "Play Video games"
                ]
            }
        ],
        resume: {
            title: 'Resume',
            content: [
                {
                    title: "Core Skills",
                    content: [
                        "Problem-solving",
                        "Application Development",
                        "Object-oriented programming",
                        "Web Development",
                        "Project Management",
                        "Database Management",
                        "Embedded Systems"
                    ]
                },
                {
                    title: "Education & Qualifications",
                    content: [
                        "Computer Science and Application development, Malmö University. (2017 - ongoing, expected graduation June 2020)",
                        "The electricity and energy program at Östersjögymnasiet, targeting computer and communication technology. (graduated 2015)",
                        "Foreign Exchange student program in California with Youth For Understanding (YFU) (2012/2013)",
                        "Alfa Laval, IT Service Desk, internship during my studies (2014)",
                        "Basketball coach and referee training",
                        "40+ hours of Web Development courses",
                        "90+ hours of Game Development courses"
                    ]
                },
                {
                    title: "Professional Experience",
                    content: [
                        "Summer work @ Alfa Laval AB, Sweden (2014)",
                        "Kitchen staff @ Hotel Ystad Saltsjöbad, Sweden (2015)",
                        "Substitute caregiver for elderly in Ystad, Sweden (2015)",
                        "Substitute worker and part-time during studies at Alfa Laval's Logistic Center, Staffanstorp (December 2015 - August 2019)"
                    ]
                },
                {
                    title: "Programming Languages",
                    content: [
                        "Java",
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "C# .NET",
                        "C",
                        "Assembly",
                        "Python",
                    ]
                }
            ]
        },
        portfolio: {
            title: 'My portfolio',
            description: '',
            repos: []
        },
        contact: {
            title: 'Contact',
            content: [
                { title: "Email", content: "mailto:ericgrevillius@gmail.com", image: emailIcon },
                { title: "LinkedIn", content: "https://www.linkedin.com/in/eric-grevillius-b2356119a/", image: linkedinIcon },
                { title: "GitHub", content: "https://github.com/GreatGreven", image: githubIcon }
            ],
            feedback: {
                status: '',
                message: ''
            },
            form: {
                user_name: '',
                user_email: '',
                subject: '',
                message: ''
            }
        },
        notFound: {
            title: 'Sorry! I have not implemented this page...'
        }
    };

    constructor() {
        super();
        let current = localStorage.getItem('theme') ? localStorage.getItem('theme') : this.state.themeMap.solar;
        if (!current) {
            current = this.state.themeMap.solar;
        }
        document.body.classList.add(current);
        localStorage.setItem('theme', current);
    }

    fetchPortfolio = () => {
        fetch('https://api.github.com/users/greatgreven/repos')
        .then(res => res.json())
        .then(data => 
            data.map((repo, i) => 
                this.setState(prevState => ({
                        ...prevState,
                        portfolio: {
                            ...prevState.portfolio,
                            repos: [
                                ...prevState.portfolio.repos,
                                {
                                    key: i,
                                    name: repo.name,
                                    link: repo.html_url,
                                    description: repo.description,
                                    languages: repo.languages
                                    //todo: add more
                                }
                            ]
                        }
                    }))))
    }

    toggleTheme = () => {
        const current = localStorage.getItem('theme');
        const next = this.state.themeMap[current];
        document.body.classList.replace(current, next)
        localStorage.setItem('theme', next);
    }

    updateContactField = (event) => {
        event.preventDefault();
        var property = event.target.id;
        var value = event.target.value;
        console.log(event.target.id, event.target.value)
        this.setState((prevState) => ({
            ...prevState,
            contact: {
                ...prevState.contact,
                form: {
                    ...prevState.contact.form,
                    [property]: value,
                },
                feedback: {
                    status: '',
                    message: ''
                }
            }
        }));
    }

    sendEmail = (event) => {
        event.preventDefault();
        if (this.validateContactForm()) {
            console.log('Sending email', this.state.contact.form);
            emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                this.state.contact.form,
                process.env.REACT_APP_EMAILJS_USER_ID)
                .then((result) => {
                    this.setContactFeedback(result.text, 'Message sent!');
                }, (error) => {
                    this.setContactFeedback("ERROR", "Could not send message!")
                });
            this.resetContactForm();
        }
    }

    validateContactForm = () => {
        let form = this.state.contact.form;
        //check name
        if (form.user_name === '') {
            this.setContactFeedback('ERROR', 'Please enter your name.');
            return false;
        }
        //check email
        const emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
        if (!form.user_email.match(emailRegex)) {
            this.setContactFeedback('ERROR', 'Please enter a valid Email.');
            return false;
        }
        //check message
        if (form.message === '') {
            this.setContactFeedback('ERROR', 'Please send me a message, not an empty one 😊');
            return false;
        }
        return true;
    }

    resetContactForm = () => {
        this.setState((prevState) => ({
            ...prevState,
            contact: {
                ...prevState.contact,
                form: {
                    user_name: '',
                    user_email: '',
                    subject: '',
                    message: ''
                }
            }
        }));
    }

    setContactFeedback = (status, message) => {
        this.setState((prevState) => ({
            ...prevState,
            contact: {
                ...prevState.contact,
                feedback: {
                    status: status,
                    message: message
                }
            }
        }));
    }

    render() {
        return (
            <GlobalContext.Provider
                value={{
                    themeMap: this.state.themeMap,
                    welcome: this.state.welcome,
                    profile: this.state.profile,
                    resume: this.state.resume,
                    portfolio: this.state.portfolio,
                    contact: this.state.contact,
                    notFound: this.state.notFound,
                    fetchPortfolio: this.fetchPortfolio,
                    toggleTheme: this.toggleTheme,
                    sendEmail: this.sendEmail,
                    updateContactField: this.updateContactField
                }}
            >
                {this.props.children}
            </GlobalContext.Provider>
        )
    }
}

export default GlobalState;
