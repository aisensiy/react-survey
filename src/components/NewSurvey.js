import React, { Component } from 'react';

class NewSurvey extends Component {
  render() {
    return <button
        className="btn btn-primary"
        onClick={this.props.onClick}
        disabled={this.props.isLoading}>{this.props.isLoading ? 'Loading...' : 'New Survey'}</button>
  }
}

NewSurvey.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  isLoading: React.PropTypes.bool.isRequired
};

export default NewSurvey;

