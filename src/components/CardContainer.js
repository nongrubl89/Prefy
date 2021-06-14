import { React, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import TailCard from "./TailCard";

export default function CardContainer() {
  const [tails, setTails] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  const deletePref = (pId) => {
    return fetch(`http://localhost:4000/tails/${pId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .then(setTails(tails.filter((tail) => tail._id !== pId)));
  };

  useEffect(() => {
    fetch("http://localhost:4000/tails/")
      .then((res) => res.json())
      .then(
        (result) => {
          setTails(result);
          setLoaded(true);
        },
        (error) => {
          setLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (tails.length === 0) {
    return <div>Nothing to see here</div>;
  } else if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!loaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Container fluid id="card-container">
        {tails.map((tail) => (
          <TailCard
            key={tail.id}
            id={tail._id}
            tailNumber={tail.tail_number}
            icao={tail.tail_icao}
            deletePref={() => deletePref(tail._id)}
          ></TailCard>
        ))}
      </Container>
    );
  }
}
