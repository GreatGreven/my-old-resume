import React, { Component } from 'react';
import { Route, BrowserRouter as Router, useHistory as history, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import GlobalState from './context/GlobalState.js';
import Container from './components/Container'
import NotFound from './pages/NotFound';
import Footer from './components/Footer'
import './App.scss';

class App extends Component {
 render(){
    return (
      <Router className="App" history={history}>
        <GlobalState>
          <Nav toggleTheme={this.toggleTheme}/>
          <main>
            <Switch>
              <Route exact path='/' component={Container}/>
              <Route component={NotFound}/>
            </Switch>
          </main>
          <Footer>This is a footer</Footer>
        </GlobalState>
      </Router>
    );
  }
}

export default App;
