import React from "react";
import { useContext } from "react";
import { Image, Tooltip } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import ReactSwitch from "react-switch";
import logo from "../../image/logo (2).png";
import { AuthContext } from "../../UseContext/UseContext";

const Header = () => {
  const { user, logOut, toggleTheme, theme } = useContext(AuthContext);

  const singOutUser = () => {
    logOut()
      .then(() => {
        // sing out successful
      })
      .catch((err) => {
        // error
      });
  };
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
              <Link to="/tech" className="text-decoration-none me-5 fw-bold">
                Technology
              </Link>
              <Link to="/faq" className="text-decoration-none me-5 fw-bold">
                FAQ
              </Link>
              <Link to="/blog" className="text-decoration-none fw-bold ">
                Blog
              </Link>
            </Nav>
            <Nav>
              {user ? (
                <Link
                  onClick={singOutUser}
                  className="text-decoration-none me-5 fw-bold"
                >
                  Log out
                </Link>
              ) : (
                <Link className="text-decoration-none me-5 fw-bold" to="/login">
                  Login
                </Link>
              )}

              {user ? (
                <>
                  <p className="me-3">{user.displayName}</p>

                  <Image className="img" rounded src={user.photoURL}></Image>
                </>
              ) : (
                ""
              )}

              <ReactSwitch
                onChange={toggleTheme}
                checked={theme === "dark"}
              ></ReactSwitch>
              <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
