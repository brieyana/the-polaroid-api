import React from 'react';
import './Navbar.css'

const Navbar = ({ link }) => {
    const route = link === 'HOME' ? '/' : '/docs';
    return (
        <div id="navbar">
            <div className="link">
                <a href={route} rel="noreferrer">{link}</a>
            </div>
            <div className="link">
                <a href="https://github.com/brieyana" target="_blank" rel="noreferrer">GITHUB</a>
            </div>
        </div>
    )
}

export default Navbar;