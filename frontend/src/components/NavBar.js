import React from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

import "../styles/Navbar.css";

function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="nav-main"
    >
      <Container>
        <div className="nav-logo">
          <Navbar.Brand as={Link} to="/">
            <img
              src="../loon-logo-2.png"
              width="75"
              height="60"
              alt="Loon logo"
            />
          </Navbar.Brand>
        </div>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <div className="nav-links">
              <NavLink
                eventKey="1"
                as={Link}
                to="/land"
                className="navbar-land"
              >
                Land
              </NavLink>
              <NavLink eventKey="2" as={Link} to="/sea" className="navbar-sea">
                Sea
              </NavLink>
              <NavLink eventKey="3" as={Link} to="/sky" className="navbar-sky">
                Sky
              </NavLink>
            </div>
            <div className="nav-right">
              <NavLink eventKey="4" as={Link} to="/new" className="navbar-new">
                Create a New Item
              </NavLink>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
