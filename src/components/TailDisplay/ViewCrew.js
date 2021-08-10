import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ViewCrew() {
  const [crew, setCrew] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState(true);

  let { id } = useParams();

  const CrewCard = () =>
    crew.map((c) => {
      return (
        <ul>
          <li>{c.name}</li>
          <li>{c.email}</li>
          <li>{c.phone}</li>
        </ul>
      );
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
        <CrewCard></CrewCard>
      </>
    );
  }
}
