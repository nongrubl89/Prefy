import React, { useState } from "react";
import { Navbar, Nav, OverlayTrigger, Button, Tooltip } from "react-bootstrap";

export default function Navigation() {
  const [add, setAdd] = useState(null);
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {add}
    </Tooltip>
  );

  const showAdd = (text) => {
    setAdd(text);
  };
  return (
    <>
      <Navbar className="pl-3" sticky="top" expand="lg">
        <Navbar.Brand className="pl-2" href="/">
          Prefy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/add">
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <Button
                  className="button-in-card"
                  onMouseEnter={() => showAdd("Add")}
                >
                  <i className="fas fa-plus"></i>
                </Button>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <Button
                  className="button-in-card"
                  onMouseEnter={() => showAdd("Login")}
                >
                  <i className="far fa-user"></i>
                </Button>
              </OverlayTrigger>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
