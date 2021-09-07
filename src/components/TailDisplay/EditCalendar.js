import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import SelectSearch from "react-select-search";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function EditCalendar() {
  const [tripType, setTripType] = useState("");
  const airports = [
    { name: "KSFO - San Francisco, Ca", value: "KSFO" },
    { name: "KMDW - Chicago, Il", value: "KMDW" },
    { name: "KTEB - New York, Ny", value: "KTEB" },
    { name: "KVNY - Van Nuys, Ca", value: "KVNY" },
    { name: "KSJC - San Jose, Ca", value: "KSJC" },
    { name: "KOPF - Miami, Fl", value: "KOPF" },
    { name: "KEGE - Eagle County, Co", value: "KEGE" },
  ];

  const oneWayForm = () => {
    return (
      <Form.Group controlId="dob">
        <Row>
          <Col md={12}>
            <Form.Label>Select Departure Date</Form.Label>
            <Form.Control
              type="date"
              name="departureOneWay"
              placeholder="Departure"
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col md={6} xs={12}>
            <Form.Label>Select Departure Airport</Form.Label>
            <SelectSearch
              options={airports}
              search
              placeholder="Select departure airport"
            />
          </Col>
          <Col md={6} xs={12}>
            <Form.Label>Select Arrival Airport</Form.Label>
            <SelectSearch
              options={airports}
              search
              placeholder="Select departure airport"
            />
          </Col>
        </Row>
      </Form.Group>
    );
  };

  const twoWayForm = () => {
    return (
      <Form.Group controlId="dob">
        <Row>
          <Col md={12}>
            <Form.Label>Select Departure Date</Form.Label>
            <Form.Control
              type="date"
              name="departureOneWay"
              placeholder="Departure"
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col md={6} xs={12}>
            <Form.Label>Select Departure Airport</Form.Label>
            <SelectSearch
              options={airports}
              search
              placeholder="Select departure airport"
            />
          </Col>
          <Col md={6} xs={12}>
            <Form.Label>Select Arrival Airport</Form.Label>
            <SelectSearch
              options={airports}
              search
              placeholder="Select departure airport"
            />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Form.Label>Select Return Date</Form.Label>
            <Form.Control
              type="date"
              name="departureOneWay"
              placeholder="Departure"
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col md={6} xs={12}>
            <Form.Label>Select Departure Airport</Form.Label>
            <SelectSearch
              options={airports}
              search
              placeholder="Select departure airport"
            />
          </Col>
          <Col md={6} xs={12}>
            <Form.Label>Select Arrival Airport</Form.Label>
            <SelectSearch
              options={airports}
              search
              placeholder="Select departure airport"
            />
          </Col>
        </Row>
      </Form.Group>
    );
  };

  return (
    <Container fluid className="min-vh-100">
      <Row className="d-flex justify-content-center p-3">
        <Col md={6}>
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Create New Trip
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Form>
                    <Form.Select aria-label="Default select example">
                      <option>Select trip type</option>
                      <option value="oneWay">One Way</option>
                      <option value="roundTrip">Round Trip</option>
                    </Form.Select>
                  </Form>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}
