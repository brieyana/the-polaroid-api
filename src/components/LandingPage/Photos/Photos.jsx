import React from 'react';
import './Photos.css';
import tree from './images/tree.png';
import flowers from './images/flowers.png';

const Photos = () => {
    return (
        <div class="container">
            <div id="photos">
                <img className="photo" src={tree} alt="A tree" />
                <img className="photo" src={flowers} alt="Flowers" />
                <img className="photo" src={tree} alt="A tree" />
            </div>
        </div>
    )
}

export default Photos;