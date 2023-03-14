import './DrawerLeft.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react';
import { Drawer } from '@mui/material';
import { FaEllipsisV } from 'react-icons/fa';
import Presentation from '../Presentation/Presentation';

function DrawerLeft() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="ellips">
      <div>
        <FaEllipsisV
          onClick={() => setisOpen(!isOpen)}
          size={17}
        />
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setisOpen(!isOpen)}
      >
        <Navbar>
          <Container className="container-mobile">
            <Presentation />
          </Container>
        </Navbar>
      </Drawer>
    </div>
  );
}

export default DrawerLeft;
