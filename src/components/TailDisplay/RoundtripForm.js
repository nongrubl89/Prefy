import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Typeahead } from "react-bootstrap-typeahead";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function RoundtripForm(props) {
  const ref1 = useRef();
  const ref2 = useRef();
  const airports = [
    { name: "", value: "" },
    { name: "KSFO - San Francisco, CA", value: "KSFO" },
    { name: "KMDW - Chicago, IL", value: "KMDW" },
    { name: "KTEB - New York, NY", value: "KTEB" },
    { name: "KVNY - Van Nuys, CA", value: "KVNY" },
    { name: "KSJC - San Jose, CA", value: "KSJC" },
    { name: "KOPF - Miami, FL", value: "KOPF" },
    { name: "KEGE - Eagle County, CO", value: "KEGE" },
  ];

  const [roundtrip, setRoundtrip] = useState({
    departureDate1: "",
    departureTime1: "",
    departureAirport: "",
    arrivalAirport: "",
    departureDate2: "",
    departureTime2: "",
    passengers: [],
  });

  let { id } = useParams();

  const handleTwoWayDetails = (e) => {
    const { id, value } = e.target;
    setRoundtrip((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    ref1.current.clear();
    ref2.current.clear();
    await axios({
      method: "put",
      url: `http://localhost:4000/tails/view/${id}/calendar-edit`,
      data: roundtrip,
    }).then(() =>
      setRoundtrip({
        departureDate1: "",
        departureTime1: "",
        departureAirport: "",
        arrivalAirport: "",
        departureDate2: "",
        departureTime2: "",
        passengers: [],
      })
    );
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
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Row>
          <Col md={6} xs={12}>
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
              ref={ref1}
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
              ref={ref2}
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
            <Button type="submit" id="create-trip">
              Create Trip
            </Button>
          </Col>
        </Row>
      </Form.Group>
    </Form>
  );
}
