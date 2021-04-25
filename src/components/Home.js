import React from "react";
import { Container } from "react-bootstrap";
import CardContainer from "./CardContainer";

export default function Home() {
  return (
    <Container className="p-4">
      <CardContainer />
    </Container>
  );
}
