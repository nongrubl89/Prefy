import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

export default function TailCard(props) {
  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md={6} xs={12}>
            <Card className="mx-auto mb-3 mt-3 shadow-sm" key={props.keys}>
              <Card.Header>{props.tailNumber}</Card.Header>
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  {props.icao}
                </Card.Subtitle>
                <Button
                  className="mr-2"
                  variant="outline-dark"
                  onClick={() => props.setTailContext(props.id)}
                >
                  {/* <a href={`/view/${props.id}`}>View</a> */}
                  View
                </Button>
                {/* <Button variant="primary">
                  <a className="text-white" href={`/edit/${props.id}`}>
                    Edit
                  </a>
                </Button> */}
                <Button
                  className="ml-2"
                  onClick={() => props.deletePref(props.id)}
                  variant="outline-dark"
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
