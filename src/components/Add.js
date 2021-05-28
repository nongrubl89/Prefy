import { React, useState, useEffect, useRef } from "react";
import { Form, Button, Col, Container, Card, Row } from "react-bootstrap";
import ToastMessage from "./ToastMessage";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Add() {
  const [tail, setTail] = useState({
    tail_number: "",
    tail_icao: "",
    tail_owner: "",
  });
  const [show, setShow] = useState(false);
  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTail((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/tails/add", tail)
      .then((res) => console.log(res.data))
      .then(() => {
        setShow(true);
        setTail({ tail_number: "", tail_icao: "", tail_owner: "" });
      });
    history.push(`/`);
  };

  useEffect(() => {
    console.log(tail);
  });

  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  return (
    <Container fluid id="add-pref-container">
      <Row className="h-100 d-flex justify-content-center align-items-start">
        <Col md={6}>
          <Card className="shadow-lg mt-4">
            <Card.Header>Add new preference sheet</Card.Header>
            <Card.Body>
              <Form>
                <Form.Control
                  className="mb-3"
                  placeholder="Tail Number"
                  value={tail.tail_number}
                  onChange={handleChange}
                  name="tail_number"
                />
                <Form.Control
                  className="mb-3"
                  placeholder="Owner"
                  value={tail.tail_owner}
                  onChange={handleChange}
                  name="tail_owner"
                />

                <Form.Control
                  className="mb-1"
                  placeholder="Home Base ICAO"
                  value={tail.tail_icao}
                  onChange={handleChange}
                  name="tail_icao"
                />
                <Button
                  className="mt-3"
                  variant="primary"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <ToastMessage
        autohide
        message={usePrevious(tail.tail_number) + " has been created"}
        show={show}
        setShow={setShow}
      />
    </Container>
  );
}
