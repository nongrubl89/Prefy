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
import OneWayForm from "./OneWayForm";
import RoundtripForm from "./RoundtripForm";

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
                  {tripType === true ? (
                    <RoundtripForm
                      roundtrip={roundtrip}
                      airports={airports}
                      handleRoundtripCalendar={handleRoundtripCalendar}
                      handleTwoWayDetails={handleTwoWayDetails}
                    />
                  ) : (
                    <OneWayForm
                      oneWayTrip={oneWayTrip}
                      airports={airports}
                      handleOneWayCalendar={handleOneWayCalendar}
                      handleOneWayDetails={handleOneWayDetails}
                    />
                  )}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}
