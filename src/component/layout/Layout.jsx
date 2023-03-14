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
        <div className="presentation-desktop">
          <Presentation />
        </div>
        <div className="content-body">
          <div className="body">
            {children}
          </div>
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
