import React from 'react';

export default React.createContext({
    welcome: {},
    profile: [
        {
        title: 'About',
        content: 'My name is Eric Grevillius, 24 years old and my long term ' +
                'career goal is to become a Fullstack developer. I\'m studying' + 
                'at the moment my last semester of Computer Science and ' +
                'Application Developers at Malmö University. I am a methodical ' + 
                'and analytical problem solver with an eye for detail. As a person ' +
                'I am a quick learner, have a high level of ambition and like the ' +
                'feeling of delivering something of high quality. I am not afraid of ' +
                'hard work with many long hours to row a project in port. ' +
                'What I am looking for today is a great place to start my career.'
        },
        {
            title: 'Interests',
            content: 'My interests lie in technology, especially building, ' +
                    'disassembling and understanding how both software and hardware' + 
                    'work. I am passionate about software development. I am used to ' +
                    'working with clients, working as part of a group, but also ' +
                    'enjoy working independently. I am considered a responsible ' +
                    'nice guy who is easy to talk to and always gives 100%.'
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
                    "Embedded Systems",
                ]},
            {
                title: "Education & Qualifications",
                content: [
                    "Computer Science and Application development, Malmö University. (2017 - ongoing, expected graduation June 2020)",
                    "The electricity and energy program at Östersjögymnasiet, targeting computer and communication technology. (graduated 2015)",
                    "Foreign Exchange student program in California with Youth For Understanding (YFU) (2012/2013)",
                    "Alfa Laval, IT Service Desk, internship during my studies (2014)",
                    "Basketball coach and referee training",
                    "40+ hours of Web Development courses",
                    "90+ hours of Game Development courses",
                ]
            },
            {
                title: "Professional Experience",
                content: [
                    "Summer work @ Alfa Laval AB, Sweden (2014)",
                    "Kitchen staff @ Hotel Ystad Saltsjöbad, Sweden (2015)",
                    "Substitute caregiver for elderly in Ystad, Sweden (2015)",
                    "Substitute worker and part-time during studies at Alfa Laval's Logistic Center, Staffanstorp (December 2015 - August 2019)",
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
            {title:"Location",content:"Sjöbo, Sweden"},
            {title:"Email", content: "ericgrevillius@gmail.com"},
            {title:"LinkedIn", content:"https://www.linkedin.com/in/eric-grevillius-b2356119a/"},
            {title:"GitHub", content:"https://github.com/GreatGreven"}
        ] 
        },
    notFound: {}
});