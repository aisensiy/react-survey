import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ResultModalView from '../../components/Result/ResultModal';
import { closeModal } from '../../actions/gridModal';
import * as Data from '../../reducers/data';
import * as GridModal from '../../reducers/data/modal';

const mapStateToProps = (state) => {
  return {
    showModal: GridModal.getModalStatus(Data.getModal(state.data)),
    result: GridModal.getModalResult(Data.getModal(state.data)),
    columns: Data.getColumns(state.data)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onHide: bindActionCreators(closeModal, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultModalView);