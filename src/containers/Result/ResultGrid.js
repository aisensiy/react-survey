import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ResultGridView from '../../components/Result/ResultGrid';
import { resultsToGrid, getRowSelects, getAllSelected } from '../../reducers/data';
import { openModal } from '../../actions/gridModal';
import { toggleRowSelect, selectAll, unSelectAll } from '../../actions/data';

class ResultGrid extends React.Component {
  render() {
    return (
      <ResultGridView {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    grid: resultsToGrid(state.data),
    rowSelects: getRowSelects(state.data),
    allSelected: getAllSelected(state.data)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickRow: bindActionCreators(openModal, dispatch),
    onSelectRow: bindActionCreators(toggleRowSelect, dispatch),
    onSelectAll: bindActionCreators(selectAll, dispatch),
    onUnSelectAll: bindActionCreators(unSelectAll, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultGrid);

