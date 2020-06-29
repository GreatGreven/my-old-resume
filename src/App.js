import React, { Component } from 'react';
import { Route, BrowserRouter as Router, useHistory as history, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import GlobalState from './context/GlobalState.js';
import About from './pages/About';
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
              <Route exact path='/' component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/resume' component={Resume}/>
              <Route path='/portfolio' component={Portfolio}/>
              <Route path='/contact' component={Contact}/>
              <Route component={NotFound}/>
            </Switch>
          </main>
        </GlobalState>
      </Router>
    );
  }
}

export default App;
