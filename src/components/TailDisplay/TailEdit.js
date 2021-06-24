import { useState } from "react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Jumbotron, Container, Row } from "react-bootstrap";
import DetailCard from "../DetailCard";

export default function TailEdit() {
  const [error, setError] = useState(true);
  const [isLoaded, setIsLoaded] = useState(true);
  const [tail, setTail] = useState({});
  let { id } = useParams();

  useEffect(() => {
    const fetchTail = async () => {
      try {
        const response = await fetch(`http://localhost:4000/tails/edit/${id}`);

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
          <Row className="d-flex justify-content-center">
            <DetailCard
              image={
                <i className="text-primary fas fa-user-friends fa-2x align-middle"></i>
              }
              tailDetail="Passengers"
              action="Edit"
            />
            <DetailCard
              image={<i className="text-primary fas fa-utensils fa-2x"></i>}
              tailDetail="Catering"
              action="Edit"
            />
            <DetailCard
              image={<i className="text-primary fas fa-users fa-2x"></i>}
              tailDetail="Crew"
              action="Edit"
            />
          </Row>
        </Container>
      </>
    );
  }
}
