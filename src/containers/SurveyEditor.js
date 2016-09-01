import React from 'react';
import SurveyPreview from '../components/SurveyPreview';
import EditPanel from '../components/EditPanel';

class SurveyEditor extends React.Component {
  render() {
    return (
      <div>
        <SurveyPreview/>
        <EditPanel/>
      </div>
    );
  }
}

SurveyEditor.propTypes = {};
SurveyEditor.defaultProps = {};

export default SurveyEditor;
