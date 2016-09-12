import { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/logout';

class Logout extends Component {
  componentWillMount() {
    this.props.logout().then(() => {
    }).catch(() => {
    });
    this.props.router.push('/login');
  }

  render() {
    return null;
  }
}

export default connect(null, {
  logout
})(Logout);
