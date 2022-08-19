import React from "react";
import { Button, Modal } from "react-bootstrap";

const ErrorModal = (props) => {
  return (
    <>
      <Modal show={props.show} onHide={props.onCloseModal} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.message}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.onCloseModal}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ErrorModal;
