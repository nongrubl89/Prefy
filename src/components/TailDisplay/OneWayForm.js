import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Typeahead } from "react-bootstrap-typeahead";

export default function OneWayForm(props) {
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
            onChange={props.handleOneWayDetails}
            value={props.oneWayTrip.departureDate}
          />
        </Col>

        <Col md={6} xs={12}>
          <Form.Label>Select Departure Time</Form.Label>
          <Form.Control
            type="time"
            name="departureOneWay"
            placeholder="Departure"
            id="departureTime"
            onChange={props.handleOneWayDetails}
            value={props.oneWayTrip.departureTime}
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
              props.handleOneWayCalendar(
                selected,
                "oneWayTrip",
                "departureAirport"
              )
            }
            options={props.airports}
            placeholder="Choose airport"
            selected={props.oneWayTrip.departureAirport}
          />
        </Col>
        <Col md={6} xs={12}>
          <Form.Label>Arrival Airport</Form.Label>
          <Typeahead
            id="arrivalAirport"
            labelKey="name"
            onChange={(selected, stateValue, objectKey) =>
              props.handleOneWayCalendar(
                selected,
                "oneWayTrip",
                "arrivalAirport"
              )
            }
            options={props.airports}
            placeholder="Choose airport"
            selected={props.oneWayTrip.arrivalAirport}
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
}
