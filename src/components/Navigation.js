import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default function Navigation() {
  return (
    <>
      <Navbar className="p-3" sticky="top" expand="lg">
        <Navbar.Brand className="text-light" href="/">
          Prefy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Button variant="primary">
              <a className="text-light" href="/add">
                Add a pref
                <i className="ml-2 fas fa-arrow-right"></i>
              </a>
            </Button>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search Prefs"
              className="mr-sm-2"
            />
            <Button variant="primary">Search Prefs</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
