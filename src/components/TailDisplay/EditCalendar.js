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
    departureAirport: "",
    arrivalAirport: "",
    departureDate2: "",
    departureTime2: "",
    passengers: [],
  });

  const airports = [
    { name: "KSFO - San Francisco, CA", value: "KSFO" },
    { name: "KMDW - Chicago, IL", value: "KMDW" },
    { name: "KTEB - New York, NY", value: "KTEB" },
    { name: "KVNY - Van Nuys, CA", value: "KVNY" },
    { name: "KSJC - San Jose, CA", value: "KSJC" },
    { name: "KOPF - Miami, FL", value: "KOPF" },
    { name: "KEGE - Eagle County, CO", value: "KEGE" },
  ];
  const handleTripType = (e) => {
    if (e.target.id === "oneway") {
      setTripType(false);
    } else {
      setTripType(true);
    }
  };

  useEffect(() => {
    console.log(roundtrip);
  });

  const handleOneWayCalendar = (selected, stateValue, objectKey) => {
    console.log("select", stateValue);
    console.log("select", objectKey);
    setOneWayTrip((prevState) => ({
      ...prevState,
      [objectKey]: selected,
    }));
  };

  const handleOneWayDetails = (e) => {
    const { id, value } = e.target;
    setOneWayTrip((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleTwoWayDetails = (e) => {
    const { id, value } = e.target;
    setRoundtrip((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleRoundtripCalendar = (selected, stateValue, objectKey) => {
    console.log("select", stateValue);
    console.log("select", objectKey);
    console.log(selected);
    setRoundtrip((prevState) => ({
      ...prevState,
      [objectKey]: selected,
    }));
  };
  const OneWayForm = () => {
    return (
      <Form.Group controlId="dob">
        <Row>
          <Col md={6}>
            <Form.Label>Select Departure Date</Form.Label>
            <Form.Control
              type="date"
              id="departureDate"
              name="departureOneWay"
              placeholder="Departure"
              onChange={handleOneWayDetails}
              value={oneWayTrip.departureDate}
            />
          </Col>

          <Col md={6} xs={12}>
            <Form.Label>Select Departure Time</Form.Label>
            <Form.Control
              type="time"
              name="departureOneWay"
              placeholder="Departure"
              id="departureTime"
              onChange={handleOneWayDetails}
              value={oneWayTrip.departureTime}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col md={6} xs={12}>
            <Form.Label>Departure Airport</Form.Label>
            <Typeahead
              id="departureAirport"
              labelKey="name"
              onChange={(selected, stateValue, objectKey) =>
                handleOneWayCalendar(selected, "oneWayTrip", "departureAirport")
              }
              options={airports}
              placeholder="Choose airport"
              selected={oneWayTrip.departureAirport}
            />
          </Col>
          <Col md={6} xs={12}>
            <Form.Label>Arrival Airport</Form.Label>
            <Typeahead
              id="arrivalAirport"
              labelKey="name"
              onChange={(selected, stateValue, objectKey) =>
                handleOneWayCalendar(selected, "oneWayTrip", "arrivalAirport")
              }
              options={airports}
              placeholder="Choose airport"
              selected={oneWayTrip.arrivalAirport}
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
              id="departureDate1"
              name="departureOneWay"
              placeholder="Departure"
              onChange={handleTwoWayDetails}
              value={roundtrip.departureDate1}
            />
          </Col>
          <Col md={6} xs={12}>
            <Form.Label>Select Departure Time</Form.Label>
            <Form.Control
              id="departureTime1"
              type="time"
              name="departureOneWay"
              placeholder="Departure"
              onChange={handleTwoWayDetails}
              value={roundtrip.departureTime1}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col md={6} xs={12}>
            <Form.Label>Departure Airport</Form.Label>
            <Typeahead
              id="departureAirport1"
              labelKey="name"
              onChange={(selected, stateValue, objectKey) =>
                handleRoundtripCalendar(
                  selected,
                  "roundtrip",
                  "departureAirport"
                )
              }
              options={airports}
              placeholder="Choose airport"
              selected={roundtrip.departureAirport}
            />
          </Col>
          <Col md={6} xs={12}>
            <Form.Label>Arrival Airport</Form.Label>
            <Typeahead
              id="arrivalAirport1"
              labelKey="name"
              onChange={(selected, stateValue, objectKey) =>
                handleRoundtripCalendar(selected, "roundtrip", "arrivalAirport")
              }
              options={airports}
              placeholder="Choose airport"
              selected={roundtrip.arrivalAirport}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Label>Select Return Date</Form.Label>
            <Form.Control
              type="date"
              id="departureDate2"
              onChange={handleTwoWayDetails}
              name="departureOneWay"
              placeholder="Departure"
              value={roundtrip.departureDate2}
            />
          </Col>
          <Col md={6} xs={12}>
            <Form.Label>Select Return Departure Time</Form.Label>
            <Form.Control
              type="time"
              onChange={handleTwoWayDetails}
              id="departureTime2"
              name="departureOneWay"
              value={roundtrip.departureTime2}
              placeholder="Departure"
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
                      value={roundtrip.departureTime2}
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
