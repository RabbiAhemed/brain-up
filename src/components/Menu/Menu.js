import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import "./Menu.css";
const Menu = () => {
  return (
    <div className="menu fw-bold">
      <Navbar bg="" expand="lg">
        <Container fluid>
          <NavLink to="/" className="fs-1">
            Level<span style={{ color: "red" }}>Up</span>
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <div className="d-flex right-half">
              <NavLink to="/topics">Topics</NavLink>
              <NavLink to="/statistics">Statistics</NavLink>
              <NavLink to="/blog">Blog</NavLink>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
