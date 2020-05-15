import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img width="220" height="70" src="https://rajyugsolutions.com/wp-content/uploads/2020/03/cropped-RajYugWebSiteLogo-3.jpg" alt="Rajyug solutions Ltd" />
        <Login/>
      </div>
    );
  }
}

export default App;
