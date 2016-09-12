import React from 'react';
import { withRouter, Link } from 'react-router';
import './SurveyNavBar.css';

class SurveyNavBar extends React.Component {
  render() {
    let { params, location } = this.props;

    return (
        <div className="SurveyNavBar">
          <div className="container">
            <ul className="nav nav-pills">
              <NavLink url={`/user/surveys/${params.surveyId}/`} location={location} text="Overview"/>
              <NavLink url={`/user/surveys/${params.surveyId}/edit`} location={location} text="Edit"/>
              <NavLink url={`/user/surveys/${params.surveyId}/data`} location={location} text="Data"/>
              <NavLink url={`/user/surveys/${params.surveyId}/report`} location={location} text="Report"/>
            </ul>
          </div>
        </div>
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

