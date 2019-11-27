// arquivo App.js, criado pelo create-react-app, modificado
import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from './header/Home';
import About from './header/About';
import User from './header/User';

class App extends Component {
  render() {
    return (
      <header>
        <BrowserRouter>
          <ul>
            <li> <Link to="/" > Home </Link> </li>
            <li> <Link to="/about" >About </Link> </li>
            <li> <Link to="/user" > User </Link> </li>
          </ul>  
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/User" component= {User} greetingMessage={"Good Morning"} />
          {/* <Route path="/User" component={User} /> */}
        </BrowserRouter>
      </header>
    );
  }
}

export default App;
