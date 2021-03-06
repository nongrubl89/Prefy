import { React, useState, useEffect, useContext } from "react";
import { Container, Button } from "react-bootstrap";
import TailCard from "./TailCard";
import AlertCard from "./AlertCard";
import { TailContext } from "./TailContext";
import { useHistory } from "react-router-dom";

export default function CardContainer() {
  const [tails, setTails] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState(true);
  const { tailValue, setTailValue } = useContext(TailContext);
  const history = useHistory();

  const deletePref = (pId) => {
    return fetch(`http://localhost:4000/tails/${pId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .then(setTails(tails.filter((tail) => tail._id !== pId)));
  };

  const setTailContext = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/tails/view/${id}`);
      const data = await response.json();
      setTailValue(data);
      history.push(`/view/${id}`);
    } catch {
      setError(false);
    }
  };

  useEffect(() => {
    const fetchTails = async () => {
      try {
        const response = await fetch("http://localhost:4000/tails/");

        if (isLoaded) {
          const data = await response.json();
          setTails(data);
          console.log(tails);
        }

        setIsLoaded(false);
      } catch {
        setError(false);
      }
    };

    fetchTails();
  }, [isLoaded, tails]);

  if (tails.length === 0) {
    return (
      <Container fluid id="card-container">
        <AlertCard
          message={
            <p className="text-center pt-3">
              Nothing to see here! Start by <a href="/add">adding a pref.</a>
            </p>
          }
        />
      </Container>
    );
  } else if (!error) {
    return (
      <Container fluid id="card-container">
        <AlertCard message={error.message} />
      </Container>
    );
  } else if (!isLoaded && !error) {
    return (
      <Container fluid id="card-container">
        <AlertCard
          message={
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          }
        />
      </Container>
    );
  } else {
    return (
      <Container fluid id="card-container">
        {tails.map((tail) => (
          <TailCard
            setTailContext={setTailContext}
            key={tail._id}
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
