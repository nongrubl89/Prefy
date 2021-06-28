import React, { useState, useEffect } from "react";
import {
  Accordion,
  Card,
  Button,
  Row,
  Col,
  Container,
  Form,
} from "react-bootstrap";

export default function EditCrew() {
  const [crew, setCrew] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    preferredBreakfast: "",
    preferredLunch: "",
    preferredDinner: "",
  });

  useEffect(() => {
    console.log(crew);
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setCrew((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Container fluid className="bg-light">
      <Row className="d-flex justify-content-center p-3">
        <Col md={6}>
          <Accordion>
            <Card>
              <Accordion.Toggle id="jumbotron" as={Card.Header} eventKey="0">
                Add Crewmember
                <i className="fas fa-plus ml-2"></i>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Form className="p-3">
                  <Form.Group controlId="crewName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      value={crew.name}
                      onChange={handleChange}
                      name="name"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={crew.email}
                      onChange={handleChange}
                      name="email"
                    />
                  </Form.Group>
                  <Form.Group controlId="crewPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="(XXX) XXX-XXXX"
                      value={crew.phone}
                      onChange={handleChange}
                      name="phone"
                    />
                  </Form.Group>
                  <Form.Group controlId="jobTitle">
                    <Form.Label>Job Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="ex: PIC, SIC, Cabin Attendant"
                      value={crew.position}
                      onChange={handleChange}
                      name="position"
                    />
                  </Form.Group>
                  <h5>Food and Drink Preferences</h5>
                  <Form.Group controlId="breakfast">
                    <Form.Label>Preferred Breakfast</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="ex: Scrambled Eggs and Bacon"
                      value={crew.preferredBreakfast}
                      onChange={handleChange}
                      name="preferredBreakfast"
                    />
                  </Form.Group>
                  <Form.Group controlId="lunch">
                    <Form.Label>Preferred Lunch</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="ex: Club Sandwich with Jalapeno Kettle Chips"
                      value={crew.preferredLunch}
                      onChange={handleChange}
                      name="preferredLunch"
                    />
                  </Form.Group>
                  <Form.Group controlId="dinner">
                    <Form.Label>Preferred Dinner</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="ex: Spaghetti Bolognese"
                      value={crew.preferredDinner}
                      onChange={handleChange}
                      name="preferredDinner"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.File
                      id="exampleFormControlFile1"
                      label="Profile Picture"
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}
