import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand >EverythingStore</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/store">Home</Nav.Link>
            <Nav.Link href="#features">My cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header