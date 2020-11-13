import React, { Component } from 'react';
import logo from './logo.svg';
import MeuComponenteChildren from './MeuComponenteChildren';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MeuComponenteChildren titulo="Esse é o título">
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </MeuComponenteChildren>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer" >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;