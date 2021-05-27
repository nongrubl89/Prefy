import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import CardContainer from "./CardContainer";

export default function Navigation() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Prefy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/add">Add a pref</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search Prefs"
              className="mr-sm-2"
            />
            <Button variant="outline-success">Search Prefs</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
