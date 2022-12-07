import './DrawerRight.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { Drawer } from '@mui/material';

function DrawerRight() {
  return (
    <div className="navbar-drawer-mobile">
      <Drawer
        anchor="right"
        open={false}
      >
        <div />
        <Navbar>
          <Container class="container-mobile">
            <Nav className="me-auto-mobile">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/experience">Experience</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Drawer>
    </div>
  );
}

export default DrawerRight;
