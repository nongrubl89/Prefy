import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import Cloud from "./images/clouds1.png";

export default function Home() {
  return (
    <div>
      <Row>
        <Col md={1}></Col>
        <Col md={3} xs={0}>
          <img
            className="mt-3 pt-3"
            alt="cloud"
            style={{ opacity: "30%" }}
            src={Cloud}
          ></img>
        </Col>
        <Col md={2}></Col>
        <Col className="d-flex align-items-center" md={4}>
          <Card className="border-0 shadow-lg " style={{ width: "23rem" }}>
            <Card.Body>
              <Card.Text style={{ fontSize: "1.5em" }}>
                Prefy allows aviation professionals and aircraft owners to track
                and share information about passengers, trips, and teams all in
                one place.
              </Card.Text>
              <Link to="/home">Get started</Link>
            </Card.Body>
          </Card>
        </Col>

        <div className="navy"></div>
      </Row>
    </div>
  );
}
