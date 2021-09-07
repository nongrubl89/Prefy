import React, { useState } from "react";
import { Card, Row } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function DetailCard(props) {
  const [hover, setHover] = useState(false);
  return (
    <>
      <Card
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        id="detail-card"
        style={{ width: "14rem" }}
        className={hover ? "m-2 border-0 p-1 shadow-sm" : "m-2 border-0 p-1"}
      >
        <Card.Body>
          <Card.Title>
            <Row className="m-2">{props.image} </Row>
            <Row className="m-2 pt-1">
              <h5 style={{ fontWeight: 600 }}>{props.tailDetail}</h5>
            </Row>
          </Card.Title>
          <Card.Subtitle className="m-2">{props.text}</Card.Subtitle>
          <Row className="m-2">
            <Link
              className="m-1"
              to={props.linkToView}
              onClick={props.cardSetter}
            >
              View
              <i className="ml-1 mt-auto fas fa-arrow-right"></i>
            </Link>
            <Link className="m-1" to={props.linkToEdit}>
              Edit
              <i className="ml-1 mt-auto fas fa-arrow-right"></i>
            </Link>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}
