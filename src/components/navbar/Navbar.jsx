import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
 
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="nasa__navbar">
      <div className="nasa__navbar-links">
        <div className="nasa__navbar-links_logo">
        
        </div>
        <div className="nasa__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#About">About</a></p>
          <p><a href="#missions">missions</a></p>
          <p><a href="#Galleries">Galleries</a></p>
          <p><a href="#follow">Follow nasa</a></p>
        </div>
      </div>
      <div className="nasa__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="nasa__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="nasa__navbar-menu_container scale-up-center">
          <div className="nasa__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#About">About</a></p>
            <p><a href="#missions">Missions</a></p>
            <p><a href="#Galleries">Galleries</a></p>
            <p><a href="#follow">Follow nasa</a></p>
          </div>
          <div className="nasa__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
