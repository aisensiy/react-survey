import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ResultGridView from '../../components/Result/ResultGrid';
import { resultsToGrid } from '../../reducers/data';
import { openModal } from '../../actions/gridModal';

class ResultGrid extends React.Component {
  render() {
    return (
      <ResultGridView {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    grid: resultsToGrid(state.data)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickRow: bindActionCreators(openModal, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultGrid);

