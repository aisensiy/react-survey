import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import './TopNavBar.css';

class TopNavBar extends Component {
  loginView() {
    let { current_user } = this.props.session;
    return (
        <Nav pullRight>
          <NavDropdown eventKey={3} title={current_user.nickname || ''} id="basic-nav-dropdown">
            <MenuItem href="#/user">New Password</MenuItem>
            <MenuItem divider/>
            <MenuItem href="#/logout">Logout</MenuItem>
          </NavDropdown>
        </Nav>
    );
  }

  unLoginView() {
    return (
        <Nav pullRight>
          <NavItem eventKey={1} href="#/login">Login</NavItem>
        </Nav>

    );
  }

  render() {
    return (
        <Navbar className="TopNavBar">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">
                Eisen.Survey
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            {this.props.session.current_user ? this.loginView() : this.unLoginView()}
          </Navbar.Collapse>
        </Navbar>
    )
  }
}

var mapStateToProps = (state) => {
  return {
    session: {}
  }
};


TopNavBar = withRouter(connect(mapStateToProps)(TopNavBar));

export default TopNavBar;
