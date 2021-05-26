import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { Switch, Route } from "react-router";
import { TailHome } from "./TailDisplay/TailHome.js";

export default function TailCard(props) {
  console.log(props);
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col md={6} xs={12}>
          <Card className="mx-auto mb-3">
            <Card.Body>
              <Card.Title>{props.tailNumber}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {props.icao}
              </Card.Subtitle>
              <Button className="mr-2" variant="primary">
                <a className="text-white" href={`/${props.id}`}>
                  View
                </a>
              </Button>
              <Button variant="primary">Edit</Button>
            </Card.Body>
          </Card>
          <Switch>
            <Route exact path={`/${props.id}`} component={TailHome}>
              <TailHome />
            </Route>
          </Switch>
        </Col>
      </Row>
    </Container>
  );
}
