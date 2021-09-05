import React from "react";
import { Modal } from "react-bootstrap";

export default function DetailsModal(props) {
  return (
    <Modal show={props.show} onHide={props.onHideModal}>
      <Modal.Header closeButton>
        <Modal.Title>{props.modalInfo.name}'s Preferences</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h5>Breakfast</h5>
        <p>{props.modalInfo.preferredBreakfast}</p>
        <h5>Lunch</h5>
        <p>{props.modalInfo.preferredLunch}</p>
        <h5>Breakfast</h5>
        <p>{props.modalInfo.preferredDinner}</p>
      </Modal.Body>
    </Modal>
  );
}
