import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

export default function AlertCard(props) {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col md={6} xs={12}>
          <Card className="mx-auto mb-3 mt-3 shadow-lg">
            <Card.Body>{props.message}</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
