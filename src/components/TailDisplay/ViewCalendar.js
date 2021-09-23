import React, { useState, useContext, useEffect } from "react";
import { TailContext } from "../TailContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ViewCalendar() {
  const [trips, setTrips] = useState([]);
  const { tailValue } = useContext(TailContext);
  const { tail_trips, tail_crew } = tailValue;
  useEffect(() => setTrips(tail_trips));

  const TripCard = () =>
    trips.map((trip, index) => {
      return (
        <Col key={index}>
          <Card key={index} className="border-0 shadow-sm">
            <Card.Body>
              <Row className="text-center">
                <Col md={12}>
                  <Card.Subtitle>
                    <div className="m-2">
                      <i className="m-1 fas fa-plane-departure"></i>
                      {trip.departureAirport[0].name}
                    </div>
                    <div className="m-2">
                      <i className="m-1 fas fa-plane-arrival"></i>
                      {trip.arrivalAirport[0].name}
                    </div>
                  </Card.Subtitle>
                  <Card.Subtitle></Card.Subtitle>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      );
    });

  return (
    <Container fluid id="card-container">
      <Container className="p-3">
        <Row className="d-flex justify-content-center p-3">
          <TripCard />
        </Row>
      </Container>
    </Container>
  );
}
