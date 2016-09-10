import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ResultGridView from '../../components/Result/ResultGrid';
import { resultsToGrid, getRowSelects } from '../../reducers/data';
import { openModal } from '../../actions/gridModal';
import { toggleRowSelect } from '../../actions/data';

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
    rowSelects: getRowSelects(state.data)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickRow: bindActionCreators(openModal, dispatch),
    onSelectRow: bindActionCreators(toggleRowSelect, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultGrid);

