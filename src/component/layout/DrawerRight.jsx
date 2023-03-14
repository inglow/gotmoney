import './DrawerRight.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react';
import { Drawer } from '@mui/material';
import { GiHamburgerMenu } from 'react-icons/gi';
import PropTypes from 'prop-types';

function DrawerRight({ position }) {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className={`navbar-drawer-mobile-${position}`}>
      <div className={`hamburger-${position}`}>
        <GiHamburgerMenu
          onClick={() => setisOpen(!isOpen)}
          size={20}
        />
      </div>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => setisOpen(!isOpen)}
      >
        <Navbar>
          <Container className="container-mobile">
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

DrawerRight.propTypes = {
  position: PropTypes.string.isRequired,
};

export default DrawerRight;
