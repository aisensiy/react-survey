import React from 'react';
import PropTypes from "prop-types";
import { Modal, Button } from 'react-bootstrap';

class ResultModal extends React.Component {
  render() {
    let { showModal, onHide, columns, result } = this.props;
    return (
        <Modal show={showModal} onHide={onHide} keyboard={false} backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>Data Detail</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul>
              {columns.map(col => {
                let { displayName, columnName } = col;
                return (
                    <li key={columnName}>
                      <h4>{displayName}</h4>
                      <p>{result[columnName]}</p>
                    </li>
                )
              })}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}

ResultModal.propTypes = {
  showModal: PropTypes.bool,
  onHide: PropTypes.func,
  columns: PropTypes.array,
  result: PropTypes.object
};

export default ResultModal;
