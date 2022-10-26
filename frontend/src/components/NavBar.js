import React from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="nav-color"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="../loon-logo.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Loon logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink eventKey="1" as={Link} to="/land" className="navbar-land">
              Land
            </NavLink>
            <NavLink eventKey="2" as={Link} to="/sea" className="navbar-sea">
              Sea
            </NavLink>
            <NavLink eventKey="3" as={Link} to="/sky" className="navbar-sky">
              Sky
            </NavLink>
            <NavLink eventKey="4" as={Link} to="/new" className="navbar-new">
              Create a New Item
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
