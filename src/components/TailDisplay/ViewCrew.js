import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Card,
  Row,
  Col,
  Button,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import ToastMessage from "../ToastMessage";

export default function ViewCrew() {
  const [crew, setCrew] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState(true);
  const [show, setShow] = useState(false);
  // const [phoneShow, setPhoneShow] = useState(false);
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const target = useRef(null);

  let { id } = useParams();

  const hideShow = () => {
    setShow(false);
  };

  // const showOverlay = (text) => {
  //   // setPhoneShow(true);
  //   setPhoneNumber(text);
  // };

  const copyEmail = (text) => {
    navigator.clipboard.writeText(text);

    setShow(true);
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover right</Popover.Header>
      <Popover.Body>test</Popover.Body>
    </Popover>
  );

  const CrewCard = () =>
    crew.map((c, index) => {
      console.log(c.image[0].filename);
      return (
        <Col md={4}>
          <Card key={index} className="border-0" style={{ width: "18rem" }}>
            <Card.Header>
              <Row className="text-center">
                <Col md={12}>
                  <Card.Img
                    variant="top"
                    src={`http://localhost:4000/public/uploads/resized/${c.image[0].filename}`}
                    className="rounded-circle m-2 border border-primary"
                  />
                </Col>
              </Row>
              <Row className="text-center">
                <Col md={12}>
                  <Card.Title>{c.name}</Card.Title>
                </Col>
              </Row>
              <Row className="text-center">
                <Col md={12}>
                  <Button
                    onClick={() => copyEmail(c.email)}
                    className="button-in-card"
                  >
                    <i data-nav={c.email} className="fas fa-envelope"></i>
                  </Button>
                  <i className="p-1 fas fa-trash"></i>
                </Col>
              </Row>
              <Card.Body> </Card.Body>
            </Card.Header>
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
  }, [crew, isLoaded, error, id]);

  if (!error) {
    return <div>Error</div>;
  } else if (!isLoaded && !error) {
    return <div>Loading...</div>;
  } else {
    return (
      <Container fluid id="card-container">
        <Container className="p-3">
          <Row className="d-flex justify-content-center p-3">
            <ToastMessage
              show={show}
              message={"Email Address Copied to Clipboard"}
              hideShow={hideShow}
              position={"top-end"}
            />
          </Row>
          <Row>
            <CrewCard />
          </Row>
        </Container>
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <Button className="button-in-card">
            <i className="p-1 fas fa-phone"></i>
          </Button>
        </OverlayTrigger>
      </Container>
    );
  }
}
