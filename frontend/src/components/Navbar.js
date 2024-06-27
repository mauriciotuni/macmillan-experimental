import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    alert('Logged out');
    navigate('/home');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="https://www.macmillaneducationeverywhere.com/images/Logo_MEE.svg" alt="Logo" className="logo" />
      </div>
      <div className="profile-menu">
        <button onClick={toggleDropdown} className="profile-button">Profile</button>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
