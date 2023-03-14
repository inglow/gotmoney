import React from 'react';
import DrawerLeft from './DrawerLeft';
import DrawerRight from './DrawerRight';
import './HeaderMobile.css';

function HeaderMobile() {
  return (
    <div className="navbar-header-mobile">
      <DrawerLeft />
      <DrawerRight position="top" />
    </div>
  );
}

export default HeaderMobile;
