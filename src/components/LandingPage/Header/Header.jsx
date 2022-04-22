import React from 'react';
import Navbar from '../../Navbar';
import Photos from '../Photos';
import './Header.css';


const Header = () => {
    return (
        <div id="header">
            <Navbar link="DOCS" />
            <div className="title">
                <h1>The<br />Polaroid<br />API</h1>
            </div>
            <Photos />
        </div>
    );
}

export default Header;