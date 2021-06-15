import { useState } from "react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";

export default function TailHome() {
  const [error, setError] = useState(true);
  const [isLoaded, setIsLoaded] = useState(true);
  const [tail, setTail] = useState({});
  let { id } = useParams();

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
      <Jumbotron>
        {tail.tail_number} {tail.tail_owner}
      </Jumbotron>
    );
  }
}
