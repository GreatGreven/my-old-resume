import React from 'react';

export default React.createContext({
    themeMap: {
        dark: '',
        light: '',
        solar: ''
    },
    welcome: {
        title: [],
        highlight: [],
        imageSmall: '',
        imageLarge: ''
    },
    profile: [
        {
            title: '',
            content: ''
        },
        {
            title: '',
            content: ''
        }
    ],
    resume: {
        title: '',
        content: [
            {
                title: '',
                content: []
            }
        ]
    },
    portfolio: {
        title: '',
        content: [
            {
                name: '',
                image: '',
            }
        ]
    },
    contact: {
        title: '',
        content: [
            {
                title:'',
                content:'',
                image:''
            }
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
    notFound: {}
});