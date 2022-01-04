import React from "react";

import logo from '../../images/logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <img src={logo} alt="logo watchy" />
        </nav>
    )
}

export default Navbar;