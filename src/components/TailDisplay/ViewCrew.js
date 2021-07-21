import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ViewCrew() {
  const [crew, setCrew] = useState({});
  const [loaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(true);

  let { id } = useParams();

  useEffect(() => {
    const fetchCrews = async () => {
      try {
        const response = await fetch(`http://localhost:4000/tails/view/${id}`);

        if (loaded) {
          const data = await response.json();
          setCrew(data);
          console.log(crew);
        }

        setIsLoaded(false);
      } catch {
        setError(false);
      }
    };

    fetchCrews();
  }, [setIsLoaded, crew]);

  if (!error) {
    return <div>{error.message}</div>;
  } else if (!setIsLoaded && !error) {
    return <div>Loading...</div>;
  } else {
    return <div>Hello</div>;
  }
}
