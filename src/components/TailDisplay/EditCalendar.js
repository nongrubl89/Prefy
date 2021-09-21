import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.css";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "react-bootstrap/Pagination";
import OneWayForm from "./OneWayForm";
import RoundtripForm from "./RoundtripForm";

export default function EditCalendar() {
  const [tripType, setTripType] = useState(true);

  const handleTripType = (e) => {
    if (e.target.id === "oneway") {
      setTripType(false);
    } else {
      setTripType(true);
    }
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
                      value="oneWAY"
                      onClick={handleTripType}
                      className={tripType === false ? "active" : ""}
                    >
                      One Way
                    </Pagination.Item>
                  </Pagination>
                  {tripType === true ? <RoundtripForm /> : <OneWayForm />}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}
