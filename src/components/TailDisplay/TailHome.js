import { useState } from "react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Jumbotron, Container, Row } from "react-bootstrap";
import DetailCard from "../DetailCard";
import { useRouteMatch } from "react-router-dom";

export default function TailHome(props) {
  const [error, setError] = useState(true);
  const [isLoaded, setIsLoaded] = useState(true);
  const [tail, setTail] = useState({});
  const [showCards, setShowCards] = useState(true);
  let { id } = useParams();
  let { path, url } = useRouteMatch();

  // console.log(pathParameter);

  // console.log("path", path);
  // console.log("url", url);

  const showCardsSetter = () => {
    setShowCards(!showCards);
    console.log("click");
  };

  useEffect(() => {
    const fetchTail = async () => {
      try {
        const response = await fetch(`http://localhost:4000/tails/view/${id}`);

        if (isLoaded) {
          const data = await response.json();
          setTail(data);
          console.log(tail);
        }

        setIsLoaded(false);
      } catch {
        setError(false);
      }
    };

    fetchTail();
  }, [id, isLoaded, tail]);

  if (!error) {
    return <div>{error.message}</div>;
  } else if (!isLoaded && !error) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Jumbotron id="jumbotron">
          <h2>{tail.tail_number}</h2>
          <h6>{tail.tail_owner}</h6>
          <h6>{tail.tail_icao}</h6>
        </Jumbotron>
        <Container>
          <Row className="d-block d-flex justify-content-center">
            <DetailCard
              image={<i className="fas fa-user-friends fa-2x align-middle"></i>}
              tailDetail="Passengers"
              text="Add passengers and preferences"
              linkToView={`${url}/passengers`}
              linkToEdit={`${url}/passengers-edit`}
              cardSetter={showCardsSetter}
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
        {/* <Route path="/view/:id/catering" component={ViewCatering} />
        <Route path="/view/:id/passengers" component={ViewPassengers} />
        <Route path="/view/:id/crew" component={ViewCrew} />
        <Route path="/view/:id/catering-edit" component={EditCatering} />
        <Route path="/view/:id/passengers-edit" component={EditPassengers} />
        <Route path="/view/:id/crew-edit" component={EditCrew} /> */}
      </>
    );
  }
}
