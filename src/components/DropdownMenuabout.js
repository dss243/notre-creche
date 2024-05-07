import React from 'react';

const DropdownMenuabout = ({ isOpen, closeMenu }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="dropdown-menu">
      <ul>
        <li>
          <a href="#" onClick={closeMenu}>Contact us</a>
        </li>
        <li>
          <a href="#" onClick={closeMenu}>Blog</a>
        </li>
        <li>
          <a href="#" onClick={closeMenu}>About us</a>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenuabout;