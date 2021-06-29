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
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

export default function EditCrew() {
  let { id } = useParams();
  const history = useHistory();
  const [crew, setCrew] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    preferredBreakfast: "",
    preferredLunch: "",
    preferredDinner: "",
  });

  // useEffect(() => {
  //   console.log(crew);
  // });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:4000/tails/view/${id}/crew-edit`, crew)
      // .then((res) => console.log(res.data))
      .then(() => {
        setCrew({
          name: "",
          email: "",
          phone: "",
          position: "",
          preferredBreakfast: "",
          preferredLunch: "",
          preferredDinner: "",
        });
      });
    history.push(`/view/${id}/crew-edit`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setCrew((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const categories = [
    {
      item: "name",
      placeholder: "Name",
      value: crew.name,
    },
    { item: "email", placeholder: "Email", value: crew.email },

    { item: "phone", placeholder: "Phone", value: crew.phone },
    { item: "position", placeholder: "Position", value: crew.position },
    {
      item: "preferredBreakfast",
      placeholder: "Preferred Breakfast",
      value: crew.preferredBreakfast,
    },
    {
      item: "preferredLunch",
      placeholder: "Preferred Lunch",
      value: crew.preferredLunch,
    },
    {
      item: "preferredDinner",
      placeholder: "Preferred Dinner",
      value: crew.preferredDinner,
    },
  ];

  return (
    <Container fluid className="bg-light min-vh-100">
      <Row className="d-flex justify-content-center p-3">
        <Col md={6}>
          <Accordion>
            <Card className="shadow-lg">
              <Accordion.Toggle id="jumbotron" as={Card.Header} eventKey="0">
                Add Crewmember
                <i className="fas fa-plus ml-2"></i>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Form className="p-3">
                  {categories.map((category) => (
                    <Form.Group key={category.placeholder}>
                      <Form.Label>{category.placeholder}</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder={category.placeholder}
                        value={category.value}
                        onChange={handleChange}
                        name={category.item}
                      />
                    </Form.Group>
                  ))}
                  <Form.Group>
                    <Form.File
                      id="exampleFormControlFile1"
                      label="Profile Picture"
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    onSubmit={handleSubmit}
                  >
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
