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
        // Implement your logout logic here
        alert('Logged out');
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">My App</div>
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
