import React from 'react';
import PropTypes from 'prop-types'
import { Link, IndexLink } from 'react-router';
import './index.css'

const SideBar = () => {
    return (
      <div className="main-div-menu">
        <nav className="menu">
          <ul className="menu-list">
            <li className="menu-list-item home-li">Home</li>
            <li className="menu-list-item about-li">About</li>
            <li className="menu-list-item map-li">Map</li>
          </ul>
        </nav>
      </div>
    );
};

export default SideBar
