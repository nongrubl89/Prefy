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
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

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
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   console.log(crew);
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/tails/view/${id}/crew-edit`, crew)
      .then(() =>
        setCrew({
          name: "",
          email: "",
          phone: "",
          position: "",
          preferredBreakfast: "",
          preferredLunch: "",
          preferredDinner: "",
        })
      )
      .then((res) => {
        console.log(res);
        console.log("Crew member successfully updated");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
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
              <Accordion.Toggle
                onClick={() => setOpen(!open)}
                id="jumbotron"
                as={Card.Header}
                // eventKey="0"
              >
                Add Crewmember
                <i className="fas fa-plus ml-2"></i>
              </Accordion.Toggle>
              <Accordion.Collapse
                className={open ? "collapse show" : "collapse"}
                eventKey="0"
              >
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
                    onClick={handleSubmit}
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
