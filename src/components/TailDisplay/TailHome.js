import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Jumbotron, Container, Row } from "react-bootstrap";
import DetailCard from "../DetailCard";
import { useRouteMatch } from "react-router-dom";
import { TailContext } from "../TailContext";

export default function TailHome() {
  let { id } = useParams();
  let { url } = useRouteMatch();
  const { tailValue } = useContext(TailContext);

  const { tail_number, tail_owner, tail_icao } = tailValue;

  return (
    <>
      <Jumbotron id="jumbotron">
        <Container>
          <h2>{tail_number}</h2>
          <h6>{tail_owner}</h6>
          <h6>{tail_icao}</h6>
        </Container>
      </Jumbotron>
      <Container>
        <Row className="d-block d-flex justify-content-center">
          <DetailCard
            image={<i className="fas fa-user-friends fa-2x align-middle"></i>}
            tailDetail="Passengers"
            text="Add passengers and preferences"
            linkToView={`${url}/passengers`}
            linkToEdit={`${url}/passengers-edit`}
          />
          <DetailCard
            image={<i className="fas fa-utensils fa-2x"></i>}
            tailDetail="Catering"
            text="Add preferred restaurants, caterers and vendors in common destinations"
            linkToView={`${id}/catering`}
            linkToEdit={`${url}/catering-edit`}
          />
          <DetailCard
            image={<i className="fas fa-users fa-2x"></i>}
            tailDetail="Crew"
            text="Add crewmembers and their preferences"
            linkToView={`${url}/crew`}
            linkToEdit={`${url}/crew-edit`}
          />
        </Row>
      </Container>
    </>
  );
}
