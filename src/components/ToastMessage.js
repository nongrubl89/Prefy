import React from "react";
import { Toast } from "react-bootstrap";

export default function ToastMessage(props) {
  return (
    <Toast show={props.show}>
      <Toast.Header>
        <strong className="mr-auto">Prefy</strong>
      </Toast.Header>
      <Toast.Body>{props.message}</Toast.Body>
    </Toast>
  );
}
