import { useState } from "react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";

export default function TailHome() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [tail, setTail] = useState({});
  let { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/tails/view/${id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setTail(result);
          console.log(tail);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [id, tail]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return <Jumbotron>{tail.tail_number}</Jumbotron>;
  }
}
