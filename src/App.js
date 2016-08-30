import React, { Component } from 'react';
import './App.css';

import TopNavBar from './containers/TopNavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavBar />
        <div className="container">
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;
