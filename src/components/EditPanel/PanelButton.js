import React from 'react';

class PanelButton extends React.Component {
  render() {
    let { className, ...rest } = this.props;
    return (
      <a type="button" className={`btn btn-sm btn-primary ${className || ''}`} {...rest}>{this.props.children}</a>
    );
  }
}

PanelButton.propTypes = {};
PanelButton.defaultProps = {};

export default PanelButton;
