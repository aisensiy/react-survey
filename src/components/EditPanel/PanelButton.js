import React from 'react';

class PanelButton extends React.Component {
  render() {
    let { className, ...rest } = this.props;
    return (
      <a className={`btn btn-sm btn-primary ${className || ''}`} {...rest} href="javascript:void(0)">{this.props.children}</a>
    );
  }
}

PanelButton.propTypes = {};
PanelButton.defaultProps = {};

export default PanelButton;
