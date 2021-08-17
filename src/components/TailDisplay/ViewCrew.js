import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Row, Col } from "react-bootstrap";

export default function ViewCrew() {
  const [crew, setCrew] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState(true);

  let { id } = useParams();

  const CrewCard = () =>
    crew.map((c, index) => {
      console.log(c.image[0].filename);
      return (
        <Col md={4}>
          <Card key={index}>
            <Card.Img
              variant="top"
              src={`http://localhost:4000/public/uploads/resized/${c.image[0].filename}`}
              className="rounded-circle"
            />
            <Card.Body>
              <Card.Title>{c.name}</Card.Title>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Col>
      );
    });

  useEffect(() => {
    const fetchTail = async () => {
      try {
        const response = await fetch(`http://localhost:4000/tails/view/${id}`);

        if (isLoaded) {
          const data = await response.json();
          setCrew(data.tail_crew);
        }

        setIsLoaded(false);
      } catch {
        setError(false);
        console.log(error);
      }
    };

    fetchTail();
  }, [crew, isLoaded, id]);

  if (!error) {
    return <div>Error</div>;
  } else if (!isLoaded && !error) {
    return <div>Loading...</div>;
  } else {
    return (
      <Container fluid id="card-container">
        <Container className="p-3">
          <Row>
            <CrewCard />
          </Row>
        </Container>
      </Container>
    );
  }
}
