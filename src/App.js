import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';

class App extends Component {
  
  constructor()
  {
    super();
    this.state = {speed: 0}
  }

  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div>
            <Route path='/' component={Home} />
            <Route path='/contact' component={Contact} />
          </div>
        </BrowserRouter>
      </ MuiThemeProvider>
    );
  }
}

export default App;
