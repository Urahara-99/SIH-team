import React, { useState } from 'react';
import Layout from './Layout';
import "./css/nav.css";
import { Link } from 'react-router-dom';
import { FaBarsStaggered } from "react-icons/fa6";
import Dropdown from './Dropdown';

const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className='container-nav'>
      <Link className="logo" to="/">Instructify</Link>
      <Layout />
      <FaBarsStaggered className="menu-icon" onClick={toggleDropdown} />
      {showDropdown && <Dropdown onClose={toggleDropdown} />}
    </div>
  );
}

export default Nav;