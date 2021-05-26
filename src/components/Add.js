import { React, useState, useEffect, useRef } from "react";
import { Form, Button, Col, Container } from "react-bootstrap";
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
    <Container className="p-3">
      <Form>
        <Form.Row>
          <Col>
            <Form.Control
              placeholder="Tail Number"
              value={tail.tail_number}
              onChange={handleChange}
              name="tail_number"
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Owner"
              value={tail.tail_owner}
              onChange={handleChange}
              name="tail_owner"
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Home Base ICAO"
              value={tail.tail_icao}
              onChange={handleChange}
              name="tail_icao"
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
        message={usePrevious(tail.tail_number) + " has been created"}
        show={show}
        setShow={setShow}
      />
    </Container>
  );
}
