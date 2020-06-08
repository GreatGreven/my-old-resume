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
                title: 'A little about myself',
                content: 'My name is Eric Grevillius, 24 years old and my long term ' +
                    'career goal is to become a Fullstack developer. I\'m studying' +
                    'at the moment to complete my Backleor\'s degree in Computer Science and ' +
                    'Application Developers at Malmö University. I am a methodical ' +
                    'and analytical problem solver with an eye for detail. As a person ' +
                    'I am a quick learner, have a high level of ambition and like the ' +
                    'feeling of delivering something of high quality. I am not afraid of ' +
                    'hard work with many long hours to row a project in port. ' +
                    'What I am looking for today is a great place to start my career.'
            },
            {
                title: 'Brief about my compentence and skills',
                content: 'I have experience working with version management such as GIT, ' +
                    'and programming languages ​​such as Java (Swing, JavaFX and Spring), ' +
                    'HTML, CSS. Has also worked with JavaScript on front-end (Vanilla and React) ' +
                    'and back-end (Node.js). I have experience developing according to ' +
                    'test-driven and computer-driven methodologies. Databases I have ' +
                    'worked with are MySQL, Oracle, PostgreSQL and NoSQL databases like MongoDB.' +
                    'I am used to working with agile methods like Scrum or Extreme Programming (XP).' +
                    'In high school, I studied Electricity and Energy with a focus on computer and ' +
                    'communication technology. During that time I have practiced as IT support and ' +
                    'the majority of them were at Alfa Laval\'s IT Service Desk. There, my tasks were ' +
                    'to help employees with both simple and advanced IT problems by solving error reports.' +
                    'During the last year of high school, I was the deputy chair of the school\'s ' +
                    'student body and I have also been the team captain and coach KFUM Ystad Basketball Club, ' +
                    'where I still am a referee. So a leading role I find natural and responsibility ' +
                    'is something I like to take on.'
            },
            {
                title: 'My interests',
                content: 'I am mostly interested in technology, especially building, ' +
                    'disassembling and understanding how both software and hardware' +
                    'work. I am passionate about software development. I am used to ' +
                    'working with clients, working as part of a group, but also ' +
                    'enjoy working independently. I am considered a responsible ' +
                    'nice guy who is easy to talk to and always gives 100%.',
                interests: {
                    title: 'More things I like to do:',
                    content: [
                        "Playing basketball",
                        "Skiing",
                        "Outdoor activities",
                        "Study up on IT and emerging technologies",
                        "Play Board and Role-playing games",
                        "Play Video games"
                    ]
                }
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
            content: 'Sartorial kogi taxidermy, kickstarter synth yr irony ennui' +
                'everyday carry retro helvetica stumptown cloud bread squid' +
                'echo park. Etsy cloud bread sartorial quinoa tacos beard' +
                'mumblecore shaman tumblr pop-up. Twee retro fingerstache af' +
                ' helvetica pabst 8-bit leggings taiyaki portland ramps tbh' +
                'tumblr vinyl. Neutra humblebrag bushwick portland subway tile' +
                'plaid, offal scenester flexitarian cliche squid small batch' +
                'palo santo. Palo santo meh adaptogen +1 3 wolf moon, listicle' +
                'brunch ethical fanny pack everyday carry fam. Offal fingerstache' +
                'taxidermy, man bun venmo PBR&amp;B helvetica thundercats everyday' +
                'carry tote bag artisan cray wolf jianbing.'
        },
        contact: {
            title: 'Contact',
            content: [
                { title: "Email", content: "mailto:ericgrevillius@gmail.com", image: emailIcon},
                { title: "LinkedIn", content: "https://www.linkedin.com/in/eric-grevillius-b2356119a/", image: linkedinIcon},
                { title: "GitHub", content: "https://github.com/GreatGreven", image: githubIcon}
            ]
        },
        notFound: {
            title: 'Sorry! I have not implemented this page...'
        }
    };

    constructor(){
        super();
        let current = localStorage.getItem('theme') ? localStorage.getItem('theme') : this.state.themeMap.solar;
        if (!current) {
          current = this.state.themeMap.solar;
        }
        document.body.classList.add(current);
        localStorage.setItem('theme', current);
      }
    
      toggleTheme = () => {
        const current = localStorage.getItem('theme');
        const next = this.state.themeMap[current];
        console.log(current)
        console.log(next)
    
        document.body.classList.replace(current, next)
        localStorage.setItem('theme', next); 
      }

      sendEmail = (event) => {
          event.preventDefault();
          console.log('Sending email');
          emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, event.target, process.env.REACT_APP_EMAILJS_USER_ID)
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          });
      }

    render() {
        // return this.props.children;
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
                    toggleTheme: this.toggleTheme,
                    sendEmail: this.sendEmail,
                }}
            >
                {this.props.children}
            </GlobalContext.Provider>
        )
    }
}

export default GlobalState;
