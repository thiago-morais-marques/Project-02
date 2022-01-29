import React from 'react';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import Logo from '../../../assets/images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const AppNavbar = () => {
  return (
    <Navbar
      bg="white"
      expand="lg"
      style={{ marginRight: '2rem', marginLeft: '2rem' }}
    >
      <Container fluid>
        <Navbar.Brand href="/" style={{ width: '12rem' }}>
          <img
            src={Logo}
            alt="jurimetria-logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link href="/processos">Processos</Nav.Link>
            <Nav.Link href="/">Relatórios</Nav.Link>
            <Nav.Link className="d-lg-none" href="/">Login</Nav.Link>
            <Nav.Link className="d-lg-none" href="/">SignUp</Nav.Link>
          </Nav>
          <div
            style={{
              display: 'flex', width: '11rem', justifyContent: 'space-between',
            }}
          >
            <Button
              variant="outline-primary"
              style={{ color: '#063970', borderColor: '#063970' }}
              className="button d-none d-lg-block"
            >
              Sign Up
            </Button>
            <Button
              variant="outline-primary"
              style={{ color: '#063970', borderColor: '#063970' }}
              className="button d-none d-lg-block"
            >
              Login
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
