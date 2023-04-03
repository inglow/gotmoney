import './DrawerLeft.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react';
import { Drawer } from '@mui/material';
import { FaEllipsisV } from 'react-icons/fa';
import Presentation from '../presentation/Presentation';

function DrawerLeft() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="ellips">
          <FaEllipsisV
            onClick={() => setisOpen(!isOpen)}
            size={17}
          />
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setisOpen(!isOpen)}
      >
        <Navbar className="navbar-mobile">
          <Container className="container-mobile">
            <Presentation />
          </Container>
        </Navbar>
      </Drawer>
    </div>
  );
}

export default DrawerLeft;
