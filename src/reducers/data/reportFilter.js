export const SET_FILTER = 'REPORT_SET_FILTER';

export default function reducer(state={}, action) {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    default:
      return state;
  }
}