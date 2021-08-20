import React from "react";
import { Navbar } from "react-bootstrap";

export default function Navigation() {
  return (
    <>
      <Navbar className="pl-3" sticky="top" expand="lg">
        <Navbar.Brand className="pl-2" href="/">
          Prefy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
      </Navbar>
    </>
  );
}
