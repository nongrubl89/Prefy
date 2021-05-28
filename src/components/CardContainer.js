import { React, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import TailCard from "./TailCard";

export default function CardContainer() {
  const [tails, setTails] = useState([]);

  const getTails = () => {
    return fetch("http://localhost:4000/tails/").then((data) => data.json());
  };

  useEffect(() => {
    let mounted = true;
    getTails().then((tails) => {
      if (mounted) {
        setTails(tails);
      }
      console.log(tails);
    });
    return () => (mounted = false);
  }, []);
  return (
    <Container fluid id="card-container">
      {tails.map((tail) => (
        <TailCard
          key={tail.id}
          id={tail._id}
          tailNumber={tail.tail_number}
          icao={tail.tail_icao}
        ></TailCard>
      ))}
    </Container>
  );
}
