import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";
import Cloud from "./images/clouds1.png";
import TwoClouds from "./images/twoclouds.png";

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
                  Prefy allows aviation professionals and aircraft owners to
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
      <Row className="mt-3">
        <Col md={8}></Col>
        <Col md={3}>
          <Button className="m-2" variant="outline-dark">
            Log In
          </Button>
          <Button className="m-2" variant="outline-dark">
            Sign Up
          </Button>
        </Col>
      </Row>
    </>
  );
}

{
  /* <Jumbotron id="navy">
<Row>
  <Col
    md={4}
    style={{ zIndex: "1000" }}
    className="d-flex justify-content-center align-content-center"
  >
    <img
      alt="cloud"
      style={{ opacity: "30%", zIndex: "0" }}
      src={TwoClouds}
    ></img>{" "}
  </Col>
  <Col
    md={4}
    className="d-flex justify-content-center align-items-end mt-3"
  >
    {" "}
    <img
      className="mt-3 pt-3"
      alt="cloud"
      style={{ opacity: "30%", zIndex: "1" }}
      src={Cloud}
    ></img>{" "}
  </Col>
  <Col md={4}>
    {" "}
    <img
      className="d-flex justify-content-center align-items-start mb-3 cloud-2"
      alt="cloud"
      style={{ opacity: "30%", zIndex: "1" }}
      src={Cloud}
    ></img>{" "}
  </Col>
</Row>
<Jumbotron id="top-jumbotron">
  {" "}
  <Card
    className="border-0 shadow-lg"
    style={{ width: "23rem", zIndex: "1" }}
  >
    <Card.Body>
      <Card.Text style={{ fontSize: "1.5em" }}>
        Prefy allows aviation professionals and aircraft owners to track
        and share information about passengers, trips, and teams all in
        one place.
      </Card.Text>
      <Link to="/home">Get started</Link>
    </Card.Body>
  </Card>
</Jumbotron>
</Jumbotron> */
}
