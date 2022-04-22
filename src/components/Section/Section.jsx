import React from 'react';
import './Section.css';

const Section = ({ title, text }) => {
    return (
        <div className="section">
            <h2 className="title">{title}</h2>
            <p className="text">{text}</p>
        </div>
    );
}

export default Section;