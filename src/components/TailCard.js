import React from "react";
import { Card, Button } from "react-bootstrap";

export default function TailCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.tailNumber}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.icao}</Card.Subtitle>
        <Button variant="primary">More</Button>
      </Card.Body>
    </Card>
  );
}
