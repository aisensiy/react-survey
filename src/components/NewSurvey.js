import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewSurvey extends Component {
  render() {
    return <button
        className="btn btn-primary"
        onClick={this.props.onClick}
        disabled={this.props.isLoading}>{this.props.isLoading ? 'Loading...' : 'New Survey'}</button>
  }
}

NewSurvey.propTypes = {
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default NewSurvey;

