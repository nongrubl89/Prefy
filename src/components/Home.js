import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";
import Cloud from "./images/clouds1.png";

export default function Home() {
  return (
    <>
      <div>
        <Row>
          <Col md={1}></Col>
          <Col md={3} xs={0} className="d-flex align-items-baseline">
            <img
              className="mt-3 pt-3 cloud"
              alt="cloud"
              style={{ opacity: "30%" }}
              src={Cloud}
            ></img>
          </Col>
          <Col md={3}></Col>
          <Col
            className="d-flex align-items-center justify-content-center"
            md={4}
            xs={12}
          >
            <Card
              className="border-0 shadow-sm card-in-jumbotron mt-3"
              style={{ width: "20rem" }}
            >
              <Card.Body>
                <Card.Text style={{ fontSize: "1.5em" }}>
                  With Prefy, aviation professionals and aircraft owners can
                  track and share information about passengers, trips, and teams
                  all in one place.
                </Card.Text>
                <Button variant="outline-dark">
                  <Link to="/home">
                    Get started<i class="fas m-1 p-1 fa-plane-departure"></i>
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <div className="navy"></div>
        </Row>
      </div>
    </>
  );
}
