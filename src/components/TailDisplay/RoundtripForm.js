import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Typeahead } from "react-bootstrap-typeahead";

export default function RoundtripForm(props) {
  return (
    <Form.Group>
      <Row>
        <Col md={6} xs={12}>
          <Form.Label>Select Departure Date</Form.Label>
          <Form.Control
            type="date"
            id="departureDate1"
            name="departureOneWay"
            placeholder="Departure"
            onChange={props.handleTwoWayDetails}
            value={props.roundtrip.departureDate1}
          />
        </Col>
        <Col md={6} xs={12}>
          <Form.Label>Select Departure Time</Form.Label>
          <Form.Control
            id="departureTime1"
            type="time"
            name="departureOneWay"
            placeholder="Departure"
            onChange={props.handleTwoWayDetails}
            value={props.roundtrip.departureTime1}
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
              props.handleRoundtripCalendar(
                selected,
                "roundtrip",
                "departureAirport"
              )
            }
            options={props.airports}
            placeholder="Choose airport"
            selected={props.roundtrip.departureAirport}
          />
        </Col>
        <Col md={6} xs={12}>
          <Form.Label>Arrival Airport</Form.Label>
          <Typeahead
            id="arrivalAirport1"
            labelKey="name"
            onChange={(selected, stateValue, objectKey) =>
              props.handleRoundtripCalendar(
                selected,
                "roundtrip",
                "arrivalAirport"
              )
            }
            options={props.airports}
            placeholder="Choose airport"
            selected={props.roundtrip.arrivalAirport}
          />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Label>Select Return Date</Form.Label>
          <Form.Control
            type="date"
            id="departureDate2"
            onChange={props.handleTwoWayDetails}
            name="departureOneWay"
            placeholder="Departure"
            value={props.roundtrip.departureDate2}
          />
        </Col>
        <Col md={6} xs={12}>
          <Form.Label>Select Return Departure Time</Form.Label>
          <Form.Control
            type="time"
            onChange={props.handleTwoWayDetails}
            id="departureTime2"
            name="departureOneWay"
            value={props.roundtrip.departureTime2}
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
}
