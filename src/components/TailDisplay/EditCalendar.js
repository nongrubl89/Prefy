import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.css";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "react-bootstrap/Pagination";
import { Typeahead } from "react-bootstrap-typeahead";

export default function EditCalendar() {
  const [tripType, setTripType] = useState(true);
  const [airport, setAirport] = useState([]);
  const [oneWayTrip, setOneWayTrip] = useState({
    departureDate: "",
    departureTime: "",
    departureAirport: "",
    arrivalAirport: "",
    passengers: [],
  });
  const [roundtrip, setRoundtrip] = useState({
    departureDate1: "",
    departureTime1: "",
    departureAirport1: "",
    arrivalAirport1: "",
    departureDate2: "",
    departureTime2: "",
    departureAirport2: "",
    arrivalAirport2: "",
    passengers: [],
  });

  const airports = [
    { name: "KSFO - San Francisco, Ca", value: "KSFO" },
    { name: "KMDW - Chicago, Il", value: "KMDW" },
    { name: "KTEB - New York, Ny", value: "KTEB" },
    { name: "KVNY - Van Nuys, Ca", value: "KVNY" },
    { name: "KSJC - San Jose, Ca", value: "KSJC" },
    { name: "KOPF - Miami, Fl", value: "KOPF" },
    { name: "KEGE - Eagle County, Co", value: "KEGE" },
  ];
  const handleTripType = (e) => {
    if (e.target.id === "oneway") {
      setTripType(false);
    } else {
      setTripType(true);
    }
  };

  useEffect(() => {
    console.log(tripType);
  });

  const OneWayForm = () => {
    return (
      <Form.Group controlId="dob">
        <Row>
          <Col md={6}>
            <Form.Label>Select Departure Date</Form.Label>
            <Form.Control
              type="date"
              name="departureOneWay"
              placeholder="Departure"
            />
          </Col>

          <Col md={6} xs={12}>
            <Form.Label>Select Departure Time</Form.Label>
            <Form.Control
              type="time"
              name="departureOneWay"
              placeholder="Departure"
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col md={6} xs={12}>
            <Form.Label>Departure Airport</Form.Label>
            <Typeahead
              id="departureAirport"
              labelKey="name"
              onChange={setAirport}
              options={airports}
              placeholder="Choose airport"
              selected={airport}
            />
          </Col>
          <Col md={6} xs={12}>
            <Form.Label>Arrival Airport</Form.Label>
            <Typeahead
              id="arrivalAirport"
              labelKey="name"
              onChange={setAirport}
              options={airports}
              placeholder="Choose airport"
              selected={airport}
            />
          </Col>{" "}
        </Row>
        <Row className="mt-2">
          <Col md={6} xs={12} lg={12} className="d-flex align-items-end mb-1">
            <Button id="create-trip">Create Trip</Button>
          </Col>
        </Row>
      </Form.Group>
    );
  };

  const TwoWayForm = () => {
    return (
      <Form.Group controlId="dob">
        <Row>
          <Col md={6} lg={12}>
            <Form.Label>Select Departure Date</Form.Label>
            <Form.Control
              type="date"
              name="departureOneWay"
              placeholder="Departure"
            />
          </Col>
          <Col md={6} xs={12}>
            <Form.Label>Select Departure Time</Form.Label>
            <Form.Control
              type="time"
              name="departureOneWay"
              placeholder="Departure"
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col md={6} xs={12}>
            <Form.Label>Departure Airport</Form.Label>
            <Typeahead
              id="departureAirport1"
              labelKey="name"
              onChange={setAirport}
              options={airports}
              placeholder="Choose airport"
              selected={airport}
            />
          </Col>
          <Col md={6} xs={12}>
            <Form.Label>Arrival Airport</Form.Label>
            <Typeahead
              id="arrivalAirport1"
              labelKey="name"
              onChange={setAirport}
              options={airports}
              placeholder="Choose airport"
              selected={airport}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Label>Select Return Date</Form.Label>
            <Form.Control
              type="date"
              name="departureOneWay"
              placeholder="Departure"
            />
          </Col>
          <Col md={6} xs={12}>
            <Form.Label>Select Departure Time</Form.Label>
            <Form.Control
              type="time"
              name="departureOneWay"
              placeholder="Departure"
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col md={6} xs={12}>
            <Form.Label>Departure Airport</Form.Label>
            <Typeahead
              id="departureAirport2"
              labelKey="name"
              onChange={setAirport}
              options={airports}
              placeholder="Choose airport"
              selected={airport}
            />
          </Col>
          <Col md={6} xs={12}>
            <Form.Label>Arrival Airport</Form.Label>
            <Typeahead
              id="arrivalAirport2"
              labelKey="name"
              onChange={setAirport}
              options={airports}
              placeholder="Choose airport"
              selected={airport}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col md={6} xs={12} className="d-flex align-items-end mb-1">
            <Button id="create-trip">Create Trip</Button>
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
                  <Pagination>
                    {" "}
                    <Pagination.Item
                      id="roundtrip"
                      onClick={handleTripType}
                      style={{ cursor: "pointer" }}
                      value="roundtrip"
                      className={tripType === true ? "active" : ""}
                    >
                      Round Trip
                    </Pagination.Item>
                    <Pagination.Item
                      id="oneway"
                      value="oneway"
                      onClick={handleTripType}
                      className={tripType === false ? "active" : ""}
                    >
                      One Way
                    </Pagination.Item>
                  </Pagination>
                  {tripType === true ? <TwoWayForm /> : <OneWayForm />}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}
