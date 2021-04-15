import { React, useState } from "react";
import { Form, Button, Col, Container } from "react-bootstrap";
import ToastMessage from "./ToastMessage";

export default function Add() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [fullName, setFullName] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
    setFullName(`${fName} ${lName}`);
    setFName("");
    setLName("");
    console.log(fullName);
  };

  return (
    <Container className="p-3">
      <Form>
        <Form.Row>
          <Col>
            <Form.Control
              placeholder="First name"
              value={fName}
              onChange={(e) => setFName(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Last name"
              value={lName}
              onChange={(e) => setLName(e.target.value)}
            />
          </Col>
        </Form.Row>
        <Button
          className="mt-3"
          variant="primary"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Form>
      <ToastMessage message={`${fullName} has been created`} show={show} />
    </Container>
  );
}
