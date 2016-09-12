import { connect } from 'react-redux';
import ReportView from '../../components/Report/Report';
import { resultsToReport } from '../../reducers/data';

const mapStateToProps = (state) => {
  return {
    ...resultsToReport(state.data)
  }
};

export default connect(mapStateToProps)(ReportView);
