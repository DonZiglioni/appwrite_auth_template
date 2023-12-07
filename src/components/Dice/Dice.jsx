import React from 'react';
import Die from '../Die/Die';
import './Dice.css'

const Dice = ({ left, right }) => {
    return (
        <div className='dice'>
            <Die side={'left'} value={left} />
            <Die side={'right'} value={right} />
        </div>
    )
}

export default Dice