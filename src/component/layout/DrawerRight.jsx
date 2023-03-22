import './DrawerRight.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react';
import { Drawer } from '@mui/material';
import { GiHamburgerMenu } from 'react-icons/gi';
import PropTypes from 'prop-types';

function DrawerRight({ position }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`navbar-drawer-mobile-${position}`}>
      <div className={`hamburger-${position}`}>
        <GiHamburgerMenu
          onClick={() => setIsOpen(!isOpen)}
          size={20}
        />
      </div>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(!isOpen)}
      >
        <Navbar>
          <Container>
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
