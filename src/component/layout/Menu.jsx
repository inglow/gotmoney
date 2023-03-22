import './Menu.css';
import React from 'react';
import DrawerRight from './DrawerRight';
import Lang from '../lang/Lang';

function Menu() {
  return (
    <div className="menu-right">
      <div className="menu-fixed">
        <DrawerRight position="right" />
        <div className="lang">
          <Lang />
        </div>
      </div>

    </div>
  );
}

export default Menu;
