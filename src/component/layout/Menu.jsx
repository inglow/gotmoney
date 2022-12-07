import './Menu.css';
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

function Menu() {
  return (
    <div className="menu-right">
      <div className="hambuger">
        <GiHamburgerMenu size={35} />
      </div>
    </div>
  );
}

export default Menu;
