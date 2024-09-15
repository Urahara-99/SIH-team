import React, { useEffect } from 'react';
import './css/dropdown.css';
import { MdClose } from "react-icons/md";
import { Link } from 'react-router-dom'

const Dropdown = ({ onClose }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className='dropdown-container'>
      <header className='header-conatiner'>
        <h1 className='logo'>Instructify</h1>
        <MdClose className="close-icon" onClick={onClose} />
      </header>   
      <nav>
        <ul className="menu-container-dropdown">
          <li>
            <Link className="dropdown-menu" to="/">Home</Link>
          </li>
          <li>
            <Link className="dropdown-menu" to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link className="dropdown-menu" to="/contact">Contact</Link>
          </li>
          <li>
            <Link className="dropdown-menu" to="/register">Register</Link>
          </li>
          <li>
            <Link className="dropdown-menu" to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Dropdown;