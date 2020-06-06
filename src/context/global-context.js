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
        content: ''
    },
    contact: {
        title: '',
        content: [
            {
                title:'',
                content:'',
                image:''
            }
        ] 
        },
    notFound: {}
});