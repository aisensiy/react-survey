import React, { Component, PropTypes } from "react";
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
        <div className="app">
          <header className="navbar main-nav">
            <section className="navbar-section">
              <a href="#" className="btn btn-link btn-lg">
                <i className="icon icon-people"></i>
              </a>
              <a href="#/react-survey" className="navbar-brand">React Survey</a>
            </section>
            <section className="navbar-section">
              <Link to="/surveys" className="btn btn-link">Surveys</Link>
              <Link to="/profile" className="btn btn-link">
                Profile
              </Link>
            </section>
          </header>
          { this.props.children }
        </div>
    )
  }
}

export default App;
