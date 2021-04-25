import React from "react";
import { Toast } from "react-bootstrap";

export default function ToastMessage(props) {
  const minutesFrom = () => {
    const date = new Date();
    return `${date.getMinutes()} minutes ago`;
  };

  const toggleShow = () => {
    props.setShow(!props.show);
  };

  return (
    <Toast show={props.show} onClose={toggleShow} delay={3000}>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">Prefy</strong>
        <small>{minutesFrom()}</small>
      </Toast.Header>
      <Toast.Body>{props.message}</Toast.Body>
    </Toast>
  );
}
