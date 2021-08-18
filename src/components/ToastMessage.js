import React from "react";
import { Toast } from "react-bootstrap";

export default function ToastMessage(props) {
  return (
    <Toast
      onClose={props.hideShow}
      show={props.show}
      position={props.position}
      autohide
      delay={2000}
    >
      <Toast.Header>
        <strong className="mr-auto">Prefy</strong>
      </Toast.Header>
      <Toast.Body>{props.message}</Toast.Body>
    </Toast>
  );
}
