import React from 'react';
import { NavLink } from "react-router-dom";

import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light header">
          <NavLink to="/" activeclass="active">
            <span className="navbar-brand" href="#">
              <img src="assets/logo_black.png" data-rjs="2" alt="" />
            </span>
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav flex-grow-1 justify-content-end">
              <li className="nav-item">
                <NavLink exact={true} to="/" activeclass="active">WORK</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" activeclass="active">ABOUT</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <label className='hamMenu d-lg-none'>
          <input type="checkbox" />
          <span class="menu">
            <span class="hamburger"></span>
          </span>
          <ul>
            <li>
              <a href="/">Work</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </label>
      </div>
    );
  }
}

export default Header;
