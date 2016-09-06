import React from 'react';

class SurveyHeader extends React.Component {
  render() {
    let { title, subTitle, isActive, onActive } = this.props;
    return (
      <header className={isActive ? 'active' : ''} onClick={onActive}>
        <h3>{title}</h3>
        <p>{subTitle}</p>
      </header>
    );
  }
}

SurveyHeader.propTypes = {
  title: React.PropTypes.string,
  subTitle: React.PropTypes.string
};
SurveyHeader.defaultProps = {};

export default SurveyHeader;
