import React from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="nav-color"
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink eventKey="1" as={Link} to="/" className="navbar-logo-name">
              Loon
            </NavLink>
            <NavLink eventKey="2" as={Link} to="/land" className="navbar-land">
              Land
            </NavLink>
            <NavLink eventKey="3" as={Link} to="/sea" className="navbar-sea">
              Sea
            </NavLink>
            <NavLink eventKey="4" as={Link} to="/sky" className="navbar-sky">
              Sky
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
