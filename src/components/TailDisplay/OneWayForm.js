import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Typeahead } from "react-bootstrap-typeahead";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function OneWayForm(props) {
  const ref1 = useRef();
  const ref2 = useRef();
  const [oneWayTrip, setOneWayTrip] = useState({
    departureDate: "",
    departureTime: "",
    departureAirport: "",
    arrivalAirport: "",
    passengers: [],
  });

  let { id } = useParams();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    ref1.current.clear();
    ref2.current.clear();
    await axios({
      method: "put",
      url: `http://localhost:4000/tails/view/${id}/calendar-edit`,
      data: oneWayTrip,
    }).then(() =>
      setOneWayTrip({
        departureDate: "",
        departureTime: "",
        departureAirport: "",
        arrivalAirport: "",
        passengers: [],
      })
    );
  };

  const airports = [
    { name: "KSFO - San Francisco, CA", value: "KSFO" },
    { name: "KMDW - Chicago, IL", value: "KMDW" },
    { name: "KTEB - New York, NY", value: "KTEB" },
    { name: "KVNY - Van Nuys, CA", value: "KVNY" },
    { name: "KSJC - San Jose, CA", value: "KSJC" },
    { name: "KOPF - Miami, FL", value: "KOPF" },
    { name: "KEGE - Eagle County, CO", value: "KEGE" },
  ];
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
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
              ref={ref1}
              id="departureAirport"
              labelKey="name"
              onChange={(selected, stateValue, objectKey) =>
                handleOneWayCalendar(selected, "oneWayTrip", "departureAirport")
              }
              options={airports}
              placeholder="Choose airport"
              defaultSelected={oneWayTrip.departureAirport}
            />
          </Col>
          <Col md={6} xs={12}>
            <Form.Label>Arrival Airport</Form.Label>
            <Typeahead
              ref={ref2}
              id="arrivalAirport"
              labelKey="name"
              onChange={(selected, stateValue, objectKey) =>
                handleOneWayCalendar(selected, "oneWayTrip", "arrivalAirport")
              }
              options={airports}
              placeholder="Choose airport"
              defaultSelected={oneWayTrip.arrivalAirport}
            />
          </Col>{" "}
        </Row>
        <Row className="mt-2">
          <Col md={6} xs={12} lg={12} className="d-flex align-items-end mb-1">
            <Button type="submit" id="create-trip">
              Create Trip
            </Button>
          </Col>
        </Row>
      </Form.Group>
    </Form>
  );
}
