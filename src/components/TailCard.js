import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

export default function TailCard(props) {
  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md={6} xs={12}>
            <Card className="mx-auto mb-3 mt-3">
              <Card.Body>
                <Card.Title>{props.tailNumber}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {props.icao}
                </Card.Subtitle>
                <Button className="mr-2" variant="primary">
                  <a className="text-white" href={`/view/${props.id}`}>
                    View
                  </a>
                </Button>
                <Button variant="primary">
                  <a className="text-white" href={`/edit/${props.id}`}>
                    Edit
                  </a>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
