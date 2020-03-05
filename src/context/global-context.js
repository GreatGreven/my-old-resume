import React from 'react';

export default React.createContext({
    welcome: {},
    profile: {
        title: 'About me',
        content: 'I\'m baby kale chips affogato ennui lumbersexual, ' + 
                'williamsburg paleo quinoa iceland normcore tumeric. ' + 
                'Kitsch coloring book retro, seitan schlitz tattooed ' + 
                'biodiesel vexillologist neutra. Synth mumblecore deep v, ' + 
                'umami selfies normcore gluten-free snackwave. Seitan ' + 
                'ramps drinking vinegar venmo keytar, humblebrag VHS ' + 
                'post-ironic tacos godard pour-over.'
    },
    resume: {
        title: 'My resumé',
        content: 'Pok pok lumbersexual wayfarers, direct trade leggings' + 
                'poutine truffaut kitsch. Seitan aesthetic master cleanse' + 
                'squid coloring book banh mi YOLO vegan locavore' + 
                'vexillologist readymade next level pop-up edison bulb.' + 
                'Selvage knausgaard literally, quinoa photo booth 3 wolf' + 
                'moon microdosing freegan yuccie. Truffaut gentrify lomo put' + 
                'a bird on it waistcoat. Ugh austin distillery, tbh actually' + 
                'pork belly snackwave artisan mixtape quinoa vexillologist' + 
                'pok pok polaroid listicle readymade.'
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
        title: 'Contact me',
        content: 'Taxidermy thundercats whatever austin. VHS helvetica ethical,' + 
                'dreamcatcher enamel pin YOLO shabby chic locavore man bun crucifix' + 
                'pabst chillwave pop-up vegan. Air plant mlkshk ethical echo park' + 
                'tumeric, whatever crucifix godard scenester locavore pork belly yuccie' + 
                'vape. +1 gochujang put a bird on it, pork belly whatever selfies vaporware' + 
                'occupy banh mi normcore VHS. Cornhole normcore hashtag tilde.' + 
                'Hell of yr try-hard DIY raw denim banjo, enamel pin irony polaroid copper' + 
                'mug tofu. Dreamcatcher lomo literally 90\'s before they sold out, 3 wolf' + 
                'moon banh mi seitan chambray cliche offal tote bag occupy pug.'
    },
    notFound: {}
});