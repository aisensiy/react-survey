import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import './TopNavBar.css';

class TopNavBar extends Component {
  loginView() {
    let { currentUser } = this.props;
    return (
        <Nav pullRight>
          <NavDropdown eventKey={3} title={currentUser.username} id="basic-nav-dropdown">
            <MenuItem divider/>
            <MenuItem href="/#/logout">Logout</MenuItem>
          </NavDropdown>
        </Nav>
    );
  }

  unLoginView() {
    return (
        <Nav pullRight>
          <NavItem eventKey={1} href="/#/login">Login</NavItem>
          <NavItem eventKey={1} href="/#/register">Register</NavItem>
        </Nav>

    );
  }

  render() {
    let { currentUser } = this.props;
    return (
        <Navbar className="TopNavBar">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">
                React Survey
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            {currentUser ? this.loginView() : this.unLoginView()}
          </Navbar.Collapse>
        </Navbar>
    )
  }
}

var mapStateToProps = (state) => {
  return {
    currentUser: state.session.user
  }
};


TopNavBar = withRouter(connect(mapStateToProps)(TopNavBar));

export default TopNavBar;
