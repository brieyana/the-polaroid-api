import React, { useState } from 'react';
import './Sidebar.css';
import endpoints from './endpoints'

const Sidebar = () => {
    const [activeLink, setActiveLink] = useState(null);

    const handleOnClick = (index) => {
        setActiveLink(index);
    }

    const renderItems = items => {
        return items.map((item, index) => {
            const linkColor = index === activeLink ? 'red' : 'black';
            return (
                <a href="#!" key={index} className={`endpoint ` + linkColor}>
                    <div className="link" onClick={() => handleOnClick(index)}>
                        {item}
                    </div>
                </a>
            );
        });
    }

    return (
        <div className="sidebar">
            <h2>Endpoints</h2>
            {renderItems(endpoints)}
        </div>
    );
}

export default Sidebar;