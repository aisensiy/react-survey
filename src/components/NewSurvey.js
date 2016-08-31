import React, { Component } from 'react';

class NewSurvey extends Component {
  render() {
    return <button className="btn btn-primary" onClick={this.props.onClick}>New Survey</button>
  }
}

NewSurvey.propTypes = {
  onClick: React.PropTypes.func.isRequired
};

export default NewSurvey;

