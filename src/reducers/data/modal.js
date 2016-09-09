export const OPEN_MODAL = 'RESULT_OPEN_MODAL';
export const CLOSE_MODAL = 'RESULt_CLOSE_MODAL';

const gridModalReducer = (state={showModal: false, result: {}, view: 'READ'}, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        showModal: true,
        result: action.payload,
        view: 'READ'
      };
    case CLOSE_MODAL:
      return {
        ...state,
        showModal: false
      };
    default:
      return state;
  }
};

export default gridModalReducer;

export const getModalStatus = (state) => state.showModal;
export const getModalResult = (state) => state.result;