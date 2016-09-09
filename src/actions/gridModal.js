import {
  OPEN_MODAL,
  CLOSE_MODAL
} from '../reducers/data/modal';

export const openModal = (result) => ({
  type: OPEN_MODAL,
  payload: result
});

export const closeModal = () => ({
  type: CLOSE_MODAL
});