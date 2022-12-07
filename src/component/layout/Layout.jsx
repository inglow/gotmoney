import PropTypes from 'prop-types';
import React from 'react';
import Presentation from '../Presentation/Presentation';
import Menu from './Menu';
import HeaderMobile from './HeaderMobile';
import './Layout.css';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="layout">
      <HeaderMobile />
      <div className="container-top" />
      <div className="content">
        <Presentation />
        <div className="content-body">
          {children}
          <Footer />
        </div>
        <Menu />
      </div>
      <div className="container-bottom" />
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
