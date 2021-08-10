import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Container, Card, Row, Col} from 'react-bootstrap'

export default function ViewCrew() {
  const [crew, setCrew] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState(true);

  let { id } = useParams();

  const CrewCard = () =>
    crew.map((c) => {
      return (
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{c.name}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    });

  useEffect(() => {
    const fetchTail = async () => {
      try {
        const response = await fetch(`http://localhost:4000/tails/view/${id}`);

        if (isLoaded) {
          const data = await response.json();
          console.log(data.tail_crew);
          setCrew(data.tail_crew);
          console.log(crew);
        }

        setIsLoaded(false);
      } catch {
        setError(false);
      }
    };

    fetchTail();
  }, [crew, isLoaded, id]);

  if (!error) {
    return <div>{error.message}</div>;
  } else if (!isLoaded && !error) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <CrewCard />
      </>
    );
  }
}
