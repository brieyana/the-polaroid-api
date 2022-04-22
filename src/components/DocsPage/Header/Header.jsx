import React from 'react';
import './Header.css'
import Navbar from '../../Navbar';

import './Header.css';

const Header = () => {
    return (
        <div id="header">
            <Navbar link="HOME" />
            <div className="title">
                <h1>The Polaroid<br />API Docs</h1>
            </div>
        </div>
    )
}

export default Header;