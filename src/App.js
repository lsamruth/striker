import React, { Component } from 'react';
import Home from "./home";
import About from "./about";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
          </Switch>
      </Router>
    );
  }
}

export default App;
