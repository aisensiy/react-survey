import React from 'react';
import PanelButton from './PanelButton';
import './EditFooter.css';

class EditFooter extends React.Component {
  render() {
    return (
      <div className="EditFooter">
        <PanelButton>Save Survey</PanelButton>
      </div>
    );
  }
}

EditFooter.propTypes = {};
EditFooter.defaultProps = {};

export default EditFooter;
