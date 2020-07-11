import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch, NavLink, HashRouter } from 'react-router-dom';
// import {NavHashLink as NavLink} from 'react-router-hash-link';
import GlobalContext from '../context/global-context';
import './Nav.scss';

export default function Nav(props){
    return (
        <GlobalContext.Consumer>
            {context => (
                <nav className="navbar">
                    <div className="navbar-nav">

                        <a href='#home' className="logo nav-item">
                        <span className="link-text logo-text">Menu</span>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fad"
                            data-icon="angle-double-right"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x">
                            <g className="fa-group">
                            <path
                                fill="currentColor"
                                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                                className="fa-secondary"
                            />
                            <path
                                fill="currentColor"
                                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                                className="fa-primary"
                            />
                            </g>
                        </svg>
                        </a>
            
                        <a href='#about' className="nav-item">
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
                        <span className="link-text">About</span>
                        </a>

                        <a href='#resume' className="nav-item">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            aria-hidden="true" 
                            focusable="false" 
                            data-prefix="fas" 
                            data-icon="file-alt" 
                            className="svg-inline--fa fa-file-alt fa-w-12" 
                            role="img" 
                            viewBox="0 0 384 512">
                            <path 
                            fill="currentColor" 
                            d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"
                            className="fa-secondary "
                            />
                        </svg>
                        <span className="link-text">Resumé</span>
                        </a>

                        <a href='#portfolio' className="nav-item">
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
                        </a>

                        <a href='#contact' className="nav-item">
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
                        </a>

                        <div className="nav-item" id="themeButton" onClick={context.toggleTheme}>
                        <svg
                            className="theme-icon svg-inline--fa fa-moon-stars fa-w-16 fa-7x"
                            id="darkIcon"
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
                            id="lightIcon"
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
                            id="solarIcon"
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
            )}
        </GlobalContext.Consumer>
    )}