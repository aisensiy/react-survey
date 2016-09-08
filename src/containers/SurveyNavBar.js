import React from 'react';
import { withRouter, Link } from 'react-router';
import './SurveyNavBar.css';

class SurveyNavBar extends React.Component {
  render() {
    let { params, location } = this.props;

    return (
        <ul className="nav nav-pills SurveyNavBar">
          <li role="presentation"><a href="#">Overview</a></li>
          <NavLink url={`/user/surveys/${params.surveyId}/edit`} location={location} text="Edit"/>
          <NavLink url={`/user/surveys/${params.surveyId}/data`} location={location} text="Data"/>
        </ul>
    );
  }
}

const NavLink = (props) => {
  let { url, location, text } = props;
  return <li role="presentation" className={location.pathname === url ? 'active' : ''}>
    <Link to={url}>{text}</Link>
  </li>
};

SurveyNavBar.propTypes = {};
SurveyNavBar.defaultProps = {};

export default withRouter(SurveyNavBar);

