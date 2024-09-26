import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap';
import './Navbar.css'; // Optional for custom styling

const CustomNavbar = () => {
  return (
    <>
    <div className="bg-transperent text-light position-absolute z-1 w-100 bg_color_nav">
      {/* <Container> */}
        <Row className='py-4 px-4 border-bottom'>
          <Col className="d-flex align-items-center">
            <i className="fas fa-map-marker-alt me-2"></i>
            <span>1200 Main St. Santa Rosa, CA 93541</span>
          </Col>
          <Col className="text-end d-flex justify-content-end align-items-center">
            <i className="fab fa-facebook-f me-3"></i>
            <i className="fab fa-twitter me-3"></i>
            <i className="fab fa-instagram me-3"></i>
            <i className="fab fa-youtube me-3"></i>
            <i className="fas fa-envelope"></i>
          </Col>
        </Row>
        {/* <hr/> */}
      {/* </Container> */}

    <Navbar expand="lg" className="navbar-dark py-4 px-4">
      {/* <Container> */}
        {/* Logo */}
        <Navbar.Brand href="#">
          <img
            src="src\assets\Shuma_logo.png"
            alt="Shuma Logo"
            className="d-inline-block align-top w-50"
          />
        </Navbar.Brand>

        {/* Toggler for mobile view */}
        <Navbar.Toggle aria-controls="navbar-dark basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Menu Items */}
          <Nav className="mx-auto margin-left-0 font-size-navLinks">
            <Nav.Link href="#home" className="mx-2 text-white nav-link-hover">Home</Nav.Link>
            <Nav.Link href="#company" className="mx-2 text-white">Company</Nav.Link>
            <NavDropdown title="Shop" id="shop-dropdown" className="mx-2 text-white">
              <NavDropdown.Item href="#all-bikes">All Bikes</NavDropdown.Item>
              <NavDropdown.Item href="#electric">Electric</NavDropdown.Item>
              <NavDropdown.Item href="#urban">Urban</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pages" id="pages-dropdown" className="mx-2 text-white">
              <NavDropdown.Item href="#about">About</NavDropdown.Item>
              <NavDropdown.Item href="#support">Support</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#news" className="mx-2 text-white">News</Nav.Link>
            <Nav.Link href="#contact" className="mx-2 text-white">Contact</Nav.Link>
          </Nav>

          {/* Cart */}
          <Nav className="ml-auto border-shoping-cart py-2 px-4">
            <Nav.Link href="#cart" className="position-relative text-white ">
              <span style={{ marginRight: '5px' }}>$0</span>
              <i className="fas fa-shopping-bag"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
    </div>
    </>
  );
};

export default CustomNavbar;
