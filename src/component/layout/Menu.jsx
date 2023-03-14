import './Menu.css';
import React from 'react';
import DrawerRight from './DrawerRight';

function Menu() {
  return (
    <div className="menu-right">
      <div className="menu-fixed">
        <DrawerRight position="right" />
      </div>
    </div>
  );
}

export default Menu;
