import React from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../image/logo (2).png";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Container>
          <Navbar.Brand href="#home">
            <Image style={{ width: "auto", height: "40px" }} src={logo}></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Link className="text-decoration-none me-5 fw-bold">Tech</Link>
              <Link className="text-decoration-none me-5 fw-bold">FAQ</Link>
              <Link className="text-decoration-none fw-bold ">Blog</Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
