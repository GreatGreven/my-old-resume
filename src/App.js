import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, useHistory as history, Switch, NavLink, HashRouter } from 'react-router-dom';
import Nav from './components/Nav';
import GlobalState from './context/GlobalState.js';
import About from './pages/About';
import Resumé from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './App.scss';
import Home from './pages/Home';
import Resume from './pages/Resume';

class App extends Component {
 render(){
    return (
      <Router className="App" history={history}>
        <GlobalState>
          <Nav toggleTheme={this.toggleTheme}/>
          <main>
            <Switch>
              <Route exact path='/' component={Home}
                // onEnter={document.getElementById("home").scrollIntoView()}
                // onEnter={console.log(document.getElementById("home"))}
              />
              <Route path='/about' component={About}
                // onEnter={document.getElementById("about").scrollIntoView()}
              />
              <Route path='/resume' component={Resume}
                // onEnter={document.getElementById("resume").scrollIntoView()}
              />
              <Route path='/portfolio' component={Portfolio}
                // onEnter={document.getElementById("portfolio").scrollIntoView()}
              />
              <Route path='/contact' component={Contact}
                // onEnter={document.getElementById("contact").scrollIntoView()}
              />
              <Route component={NotFound} 
                // onEnter={document.getElementById("not-found").scrollIntoView()}
              />
            </Switch>
          </main>
        </GlobalState>
      </Router>
    );
  }
}

export default App;
