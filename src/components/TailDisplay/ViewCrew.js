import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Card,
  Row,
  Col,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import ToastMessage from "../ToastMessage";
import axios from "axios";
import AlertCard from "../AlertCard";
import DetailsModal from "./DetailsModal";

export default function ViewCrew() {
  const [crew, setCrew] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [tailNumber, setTailNumber] = useState(null);
  const [modalInfo, setModalInfo] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showModal, setShowModal] = useState(false);

  let { id } = useParams();

  const hideShow = () => {
    setShowToast(false);
  };

  const copyEmail = (text) => {
    navigator.clipboard.writeText(text);
    setShowToast(true);
  };

  const showPhone = (text) => {
    setPhoneNumber(text);
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {phoneNumber}
    </Tooltip>
  );

  const displayModal = (c) => {
    setModalInfo(c);
    setShowModal(true);
  };

  const onHideModal = () => setShowModal(false);

  const deleteCrewMember = async (cId) => {
    await axios({
      method: "delete",
      url: `http://localhost:4000/tails/view/${id}/crew`,
      data: { crewId: cId },
    })
      .then((res) => console.log(res.data))
      .then(setCrew(crew.filter((c) => c._id !== cId)))
      .catch((err) => console.log(err));
  };

  const CrewCard = () =>
    crew.map((c, index) => {
      return (
        <Col md={4}>
          <Card
            key={index}
            className="border-0 shadow-sm"
            style={{ width: "18rem" }}
          >
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
                  <Card.Subtitle>{c.position}</Card.Subtitle>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <Row className="text-center">
                <Col md={12}>
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <Button
                      onClick={() => copyEmail(c.email)}
                      className="button-in-card"
                      onMouseEnter={() => showPhone("Click to copy e-mail")}
                    >
                      <i data-nav={c.email} className="fas fa-envelope"></i>
                    </Button>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <Button
                      className="button-in-card"
                      onMouseEnter={() => showPhone(c.phone)}
                    >
                      <i className="p-1 fas fa-phone"></i>
                    </Button>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <Button
                      className="button-in-card"
                      onClick={() => deleteCrewMember(c._id)}
                      onMouseEnter={() =>
                        showPhone(`Delete ${c.name} from ${tailNumber}`)
                      }
                    >
                      <i className="p-1 fas fa-trash"></i>
                    </Button>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <Button
                      className="button-in-card"
                      onClick={() => displayModal(c)}
                      onMouseEnter={() =>
                        showPhone(`Show the rest of ${c.name}'s preferences`)
                      }
                    >
                      <i className="fas fa-info-circle"></i>
                    </Button>
                  </OverlayTrigger>
                </Col>
              </Row>
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
          setTailNumber(data.tail_number);
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
  } else if (crew.length === 0) {
    return (
      <Container fluid id="card-container">
        <AlertCard
          message={
            <p className="text-center pt-3">
              Nothing to see here! Start by{" "}
              <a href="/add">adding a crewmember.</a>
            </p>
          }
        />
      </Container>
    );
  } else {
    return (
      <Container fluid id="card-container">
        <Container className="p-3">
          <Row className="d-flex justify-content-center p-3">
            <ToastMessage
              show={showToast}
              message={"Email Address Copied to Clipboard"}
              hideShow={hideShow}
              position={"top-end"}
            />
          </Row>
          <Row>
            <CrewCard />
          </Row>
          {modalInfo ? (
            <DetailsModal
              show={showModal}
              modalInfo={modalInfo}
              onHideModal={onHideModal}
            />
          ) : (
            <div></div>
          )}
        </Container>
      </Container>
    );
  }
}
