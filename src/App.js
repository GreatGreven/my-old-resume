import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch, NavLink, HashRouter } from 'react-router-dom';
import Nav from './components/Nav';
import './App.scss';
import Container from './components/Container';

class App extends Component {
  
  state = {
    themeMap: {
      dark: 'solar',
      light: 'dark',
      solar: 'light'
    }
  }

  constructor(){
    super();
    let current = localStorage.getItem('theme') ? localStorage.getItem('theme') : this.state.themeMap.solar;
    if (!current) {
      current = this.state.themeMap.solar;
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
      <Router className="App">
        <header>
        </header>
        <Nav toggleTheme={this.toggleTheme}></Nav>
        <main>
            <Route exact path='/' component={Container}
              // onEnter={document.getElementById("home").scrollIntoView()}
              onEnter={console.log(document.getElementById("home"))}
            />
            <Route path='/about' component={Container}
              // onEnter={document.getElementById("about").scrollIntoView()}
            />
            <Route path='/resume' component={Container}
              // onEnter={document.getElementById("resume").scrollIntoView()}
            />
            <Route path='/portfolio' component={Container}
              // onEnter={document.getElementById("portfolio").scrollIntoView()}
            />
            <Route path='/contact' component={Container}
              // onEnter={document.getElementById("contact").scrollIntoView()}
            />
            <Route component={Container} 
              // onEnter={document.getElementById("not-found").scrollIntoView()}
            />
        </main>
      </Router>
    );
  }
}

export default App;
