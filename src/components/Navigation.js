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
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
      </Navbar>
    </>
  );
}
