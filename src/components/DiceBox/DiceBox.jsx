import React from 'react';
import Dice from '../Dice/Dice';
import './DiceBox.css'

const DiceBox = ({ left, right }) => {
    return (
        <div className='dice-box'>
            <Dice left={left} right={right} />
            <div className='total-box'>
                <h3 className='total-text'>{left + right}</h3>
            </div>
        </div>
    )
}

export default DiceBox