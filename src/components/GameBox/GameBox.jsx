import React from 'react';
import './GameBox.css';

const GameBox = ({ point, message }) => {
    return (
        <div className='game-box'>
            <h2 className='point'>Point: {point}</h2>
            <p className='msg'>{message ? message : ''}</p>
        </div>
    )
}

export default GameBox;