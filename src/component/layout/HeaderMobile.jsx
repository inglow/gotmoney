import React from 'react';
import Lang from '../lang/Lang';
import DrawerLeft from './DrawerLeft';
import DrawerRight from './DrawerRight';
import './HeaderMobile.css';

function HeaderMobile() {
  return (
    <div className="navbar-header-mobile">
      <DrawerLeft />
      <div style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 10,
      }}
      >
        <Lang />
        <DrawerRight position="top" />
      </div>
    </div>
  );
}

export default HeaderMobile;
