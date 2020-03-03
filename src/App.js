import React, { Component } from 'react';
import './App.scss';



class App extends Component {
  
  state = {
    themeMap: {
      dark: 'light',
      light: 'solar',
      solar: 'dark'
    }
  }

  constructor(){
    super();
    let current = localStorage.getItem('theme') ? localStorage.getItem('theme') : this.state.themeMap.solar;
    if (!current) {
      // current = this.state.themeMap.solar;
    }
    document.body.classList.add(current)
    localStorage.setItem('theme', current)
  }

  toggleTheme = () => {
    const current = localStorage.getItem('theme');
    const next = this.state.themeMap[current];
    console.log(current)
    console.log(next)

    document.body.classList.replace(current, next)
    localStorage.setItem('theme', next); 
  }

  render(){
    return (
      <div className="App">
        <header>
        </header>
        <nav className="navbar">
          <div className="navbar-nav">
  
              <div className="logo nav-item">
                <span className="link-text logo-text">Menu</span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fad"
                  data-icon="angle-double-right"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
                >
                  <g className="fa-group">
                    <path
                      fill="currentColor"
                      d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                      className="fa-secondary"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                      className="fa-primary"
                    ></path>
                  </g>
                </svg>
              </div>
            
              <div className="nav-item">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                aria-hidden="true" 
                focusable="false" 
                data-prefix="fas" 
                data-icon="user" 
                className="svg-inline--fa fa-user fa-w-14" 
                role="img" 
                viewBox="0 0 448 512">
                  <path 
                  fill="currentColor" 
                  d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                  className="fa-secondary"
              />
              </svg>
                <span className="link-text">Profile</span>
              </div>
  
              <div className="nav-item">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                aria-hidden="true" 
                focusable="false" 
                data-prefix="fas" 
                data-icon="file-alt" 
                class="svg-inline--fa fa-file-alt fa-w-12" 
                role="img" 
                viewBox="0 0 384 512">
                  <path 
                  fill="currentColor" 
                  d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"
                  className="fa-secondary "
              />
              </svg>
                <span className="link-text">Resumé</span>
              </div>
  
              <div className="nav-item">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                aria-hidden="true" 
                focusable="false" 
                data-prefix="fas" 
                data-icon="briefcase" 
                className="svg-inline--fa fa-briefcase fa-w-16" 
                role="img" 
                viewBox="0 0 512 512">
                  <path fill="currentColor" 
                  d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"
                  className="fa-secondary"
                  />
                </svg>
                <span className="link-text">Portfolio</span>
              </div>
  
              <div className="nav-item">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                aria-hidden="true" 
                focusable="false" 
                data-prefix="fas" 
                data-icon="address-card" 
                className="svg-inline--fa fa-address-card fa-w-18" 
                role="img" 
                viewBox="0 0 576 512">
                <path 
                  fill="currentColor" 
                  d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2zM512 312c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"
                  className="fa-secondary"
                  />
              </svg>
                <span className="link-text">Contact</span>
              </div>
  
              <div className="nav-item" id="themeButton" onClick={this.toggleTheme}>
                <svg
                  className="theme-icon svg-inline--fa fa-moon-stars fa-w-16 fa-7x"
                  id="lightIcon"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fad"
                  data-icon="moon-stars"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g className="fa-group">
                    <path
                      fill="currentColor"
                      d="M320 32L304 0l-16 32-32 16 32 16 16 32 16-32 32-16zm138.7 149.3L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208z"
                      className="fa-secondary"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M332.2 426.4c8.1-1.6 13.9 8 8.6 14.5a191.18 191.18 0 0 1-149 71.1C85.8 512 0 426 0 320c0-120 108.7-210.6 227-188.8 8.2 1.6 10.1 12.6 2.8 16.7a150.3 150.3 0 0 0-76.1 130.8c0 94 85.4 165.4 178.5 147.7z"
                      className="fa-primary"
                    ></path>
                  </g>
                </svg>
                <svg
                  className="theme-icon svg-inline--fa fa-sun fa-w-16 fa-7x"
                  id="solarIcon"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fad"
                  data-icon="sun"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g className="fa-group">
                    <path
                      fill="currentColor"
                      d="M502.42 240.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.41-94.8a17.31 17.31 0 0 0-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4a17.31 17.31 0 0 0 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.41-33.5 47.3 94.7a17.31 17.31 0 0 0 31 0l47.31-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3a17.33 17.33 0 0 0 .2-31.1zm-155.9 106c-49.91 49.9-131.11 49.9-181 0a128.13 128.13 0 0 1 0-181c49.9-49.9 131.1-49.9 181 0a128.13 128.13 0 0 1 0 181z"
                      className="fa-secondary"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M352 256a96 96 0 1 1-96-96 96.15 96.15 0 0 1 96 96z"
                      className="fa-primary"
                    ></path>
                  </g>
                </svg>
                <svg
                  className="theme-icon svg-inline--fa fa-sunglasses fa-w-18 fa-7x"
                  id="darkIcon"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fad"
                  data-icon="sunglasses"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <g className="fa-group">
                    <path
                      fill="currentColor"
                      d="M574.09 280.38L528.75 98.66a87.94 87.94 0 0 0-113.19-62.14l-15.25 5.08a16 16 0 0 0-10.12 20.25L395.25 77a16 16 0 0 0 20.22 10.13l13.19-4.39c10.87-3.63 23-3.57 33.15 1.73a39.59 39.59 0 0 1 20.38 25.81l38.47 153.83a276.7 276.7 0 0 0-81.22-12.47c-34.75 0-74 7-114.85 26.75h-73.18c-40.85-19.75-80.07-26.75-114.85-26.75a276.75 276.75 0 0 0-81.22 12.45l38.47-153.8a39.61 39.61 0 0 1 20.38-25.82c10.15-5.29 22.28-5.34 33.15-1.73l13.16 4.39A16 16 0 0 0 180.75 77l5.06-15.19a16 16 0 0 0-10.12-20.21l-15.25-5.08A87.95 87.95 0 0 0 47.25 98.65L1.91 280.38A75.35 75.35 0 0 0 0 295.86v70.25C0 429 51.59 480 115.19 480h37.12c60.28 0 110.38-45.94 114.88-105.37l2.93-38.63h35.76l2.93 38.63c4.5 59.43 54.6 105.37 114.88 105.37h37.12C524.41 480 576 429 576 366.13v-70.25a62.67 62.67 0 0 0-1.91-15.5zM203.38 369.8c-2 25.9-24.41 46.2-51.07 46.2h-37.12C87 416 64 393.63 64 366.11v-37.55a217.35 217.35 0 0 1 72.59-12.9 196.51 196.51 0 0 1 69.91 12.9zM512 366.13c0 27.5-23 49.87-51.19 49.87h-37.12c-26.69 0-49.1-20.3-51.07-46.2l-3.12-41.24a196.55 196.55 0 0 1 69.94-12.9A217.41 217.41 0 0 1 512 328.58z"
                      className="fa-secondary"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M64.19 367.9c0-.61-.19-1.18-.19-1.8 0 27.53 23 49.9 51.19 49.9h37.12c26.66 0 49.1-20.3 51.07-46.2l3.12-41.24c-14-5.29-28.31-8.38-42.78-10.42zm404-50l-95.83 47.91.3 4c2 25.9 24.38 46.2 51.07 46.2h37.12C489 416 512 393.63 512 366.13v-37.55a227.76 227.76 0 0 0-43.85-10.66z"
                      className="fa-primary"
                    ></path>
                  </g>
                </svg>
                <span className="link-text">Themify</span>
              </div>
          </div>
        </nav>
        <main>
          <h1>CSS is Cool</h1>
  
          <p>
            I'm baby kale chips affogato ennui lumbersexual, williamsburg paleo quinoa
            iceland normcore tumeric. Kitsch coloring book retro, seitan schlitz
            tattooed biodiesel vexillologist neutra. Synth mumblecore deep v, umami
            selfies normcore gluten-free snackwave. Seitan ramps drinking vinegar
            venmo keytar, humblebrag VHS post-ironic tacos godard pour-over.
          </p>
          <p>
            Sartorial kogi taxidermy, kickstarter synth yr irony ennui everyday carry
            retro helvetica stumptown cloud bread squid echo park. Etsy cloud bread
            sartorial quinoa tacos beard mumblecore shaman tumblr pop-up. Twee retro
            fingerstache af helvetica pabst 8-bit leggings taiyaki portland ramps tbh
            tumblr vinyl. Neutra humblebrag bushwick portland subway tile plaid, offal
            scenester flexitarian cliche squid small batch palo santo. Palo santo meh
            adaptogen +1 3 wolf moon, listicle brunch ethical fanny pack everyday
            carry fam. Offal fingerstache taxidermy, man bun venmo PBR&amp;B helvetica
            thundercats everyday carry tote bag artisan cray wolf jianbing.
          </p>
          <p>
            Taxidermy thundercats whatever austin. VHS helvetica ethical, dreamcatcher
            enamel pin YOLO shabby chic locavore man bun crucifix pabst chillwave
            pop-up vegan. Air plant mlkshk ethical echo park tumeric, whatever
            crucifix godard scenester locavore pork belly yuccie vape. +1 gochujang
            put a bird on it, pork belly whatever selfies vaporware occupy banh mi
            normcore VHS. Cornhole normcore hashtag tilde. Hell of yr try-hard DIY raw
            denim banjo, enamel pin irony polaroid copper mug tofu. Dreamcatcher lomo
            literally 90's before they sold out, 3 wolf moon banh mi seitan chambray
            cliche offal tote bag occupy pug.
          </p>
          <p>
            Post-ironic hot chicken salvia yr yuccie ugh cold-pressed keffiyeh franzen
            viral taxidermy mustache slow-carb crucifix vape. Taiyaki yuccie hell of
            tacos PBR&amp;B, kitsch meggings tbh truffaut kickstarter mixtape af kogi.
            Fingerstache vegan tofu waistcoat gentrify cray. Drinking vinegar 3 wolf
            moon health goth craft beer master cleanse. Letterpress health goth 8-bit
            chillwave craft beer brooklyn. Chicharrones master cleanse 8-bit,
            mumblecore copper mug messenger bag poutine lomo kale chips flannel. Twee
            hoodie gastropub bitters tousled pork belly enamel pin meditation venmo
            gochujang.
          </p>
          <p>
            Next level selfies cronut ethical. Tofu tumblr you probably haven't heard
            of them, man braid literally forage swag chillwave. Pug yr flannel
            tumeric. Coloring book yr chillwave snackwave, shoreditch shaman gentrify
            typewriter tumeric DIY copper mug small batch. Scenester waistcoat YOLO
            hexagon kombucha poke 8-bit meditation. Selvage scenester forage
            williamsburg. Hoodie fingerstache tacos mustache, hashtag quinoa next
            level sartorial craft beer retro disrupt lo-fi.
          </p>
          <p>
            YOLO twee keytar farm-to-table flexitarian cardigan polaroid lumbersexual
            adaptogen drinking vinegar echo park dreamcatcher. Brunch shoreditch
            dreamcatcher iPhone knausgaard plaid edison bulb letterpress ethical yr
            fanny pack. Typewriter portland woke glossier cronut, post-ironic migas
            gentrify letterpress cray brunch lyft 8-bit master cleanse. Pitchfork
            thundercats organic pour-over unicorn lomo.
          </p>
          <p>
            Ugh yr tacos aesthetic everyday carry, tumeric selvage cliche skateboard.
            Wolf truffaut enamel pin vexillologist poutine. Hoodie roof party pabst,
            cardigan letterpress af disrupt +1 subway tile chillwave live-edge
            meggings next level readymade. Master cleanse gentrify hashtag, stumptown
            fam single-origin coffee occupy dreamcatcher air plant viral vexillologist
            enamel pin meggings. Tumblr chambray pickled microdosing austin scenester
            green juice.
          </p>
          <p>
            Austin four dollar toast church-key, vaporware hoodie edison bulb jean
            shorts sustainable williamsburg plaid helvetica scenester lomo humblebrag.
            Meditation tumblr kickstarter ennui williamsburg taiyaki pabst pour-over.
            8-bit godard cred, chillwave enamel pin skateboard you probably haven't
            heard of them. Meditation before they sold out single-origin coffee swag
            try-hard jianbing slow-carb shaman leggings. Palo santo shabby chic
            whatever man bun. Master cleanse wayfarers single-origin coffee pork belly
            cronut, normcore cliche jianbing before they sold out tousled shabby chic
            af pop-up gentrify. Direct trade la croix vexillologist jianbing,
            flexitarian selvage try-hard stumptown polaroid shaman wayfarers poke
            ramps food truck swag.
          </p>
          <p>
            Pok pok lumbersexual wayfarers, direct trade leggings poutine truffaut
            kitsch. Seitan aesthetic master cleanse squid coloring book banh mi YOLO
            vegan locavore vexillologist readymade next level pop-up edison bulb.
            Selvage knausgaard literally, quinoa photo booth 3 wolf moon microdosing
            freegan yuccie. Truffaut gentrify lomo put a bird on it waistcoat. Ugh
            austin distillery, tbh actually pork belly snackwave artisan mixtape
            quinoa vexillologist pok pok polaroid listicle readymade.
          </p>
          <p>
            Hammock letterpress prism dreamcatcher truffaut shabby chic vice
            cold-pressed. Franzen pug fashion axe before they sold out, tumblr irony
            kogi actually af bushwick banh mi. Snackwave bicycle rights tofu
            dreamcatcher tote bag pour-over meditation raw denim fanny pack. Pop-up
            retro taiyaki meditation twee gastropub VHS etsy. Semiotics gochujang
            street art normcore, edison bulb farm-to-table pour-over taxidermy
            brooklyn.
          </p>
        </main>
      </div>
    );
  }
}

export default App;
