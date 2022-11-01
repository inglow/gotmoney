import { Drawer } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import Presentation from '../Presentation/Presentation';
import Header from './Header';
import './Layout.css';

function Layout({ children }) {
  return (
    <div className="">
      <Header />
      <div className="content">
        <Presentation />
        {children}
      </div>
      <Drawer
        anchor="right"
        open={false}
      >
        ddddd

      </Drawer>
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
