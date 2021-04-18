import { React, useState, useEffect } from "react";
import { Form, Button, Col, Container } from "react-bootstrap";
import ToastMessage from "./ToastMessage";

export default function Add() {
  const [tailNumber, setTailNumber] = useState("");
  const [homeBase, setHomeBase] = useState("");
  const [owner, setOwner] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
    fetch("http://localhost:4000/tails/add", {
      method: "POST",
      body: JSON.stringify(tailNumber, homeBase, owner),
    })
      .then((result) => result.json())
      .then((info) => {
        console.log(info);
      });
    setTailNumber("");
    setHomeBase("");
    setOwner("");
  };

  useEffect(() => {
    console.log(tailNumber);
    console.log(show);
  });

  return (
    <Container className="p-3">
      <Form>
        <Form.Row>
          <Col>
            <Form.Control
              placeholder="Tail Number"
              value={tailNumber}
              onChange={(e) => setTailNumber(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Owner"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Home Base ICAO"
              value={homeBase}
              onChange={(e) => setHomeBase(e.target.value)}
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
      <ToastMessage
        autohide
        delay={5000}
        message={`${tailNumber} has been created`}
        show={show}
        setShow={setShow}
      />
    </Container>
  );
}
