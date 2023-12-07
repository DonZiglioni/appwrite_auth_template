import React, { createContext } from 'react'
import './IndexCard.css'

const IndexCard = ({ lightBal, darkBal }) => {

    const lightDifference = lightBal - 100000000;
    const darkDifference = darkBal - 100000000;
    let lightPercent = ((lightDifference / 100000000) * 100).toFixed(2);
    let darkPercent = ((darkDifference / 100000000) * 100).toFixed(2);

    return (
        <div className='index-card'>
            <div className='light-info'>
                <p>Starting: $100,000,000</p>
                <p>Wager: $72,000</p>
                <p>Balance: ${lightBal}</p>
                <p>Gain/Loss: ${lightDifference}</p>
                <p>Percent: {lightPercent}%</p>
            </div>
            <div className='dark-info'>
                <p>Starting: $100,000,000</p>
                <p>Wager: $72,000</p>
                <p>Balance: ${darkBal}</p>
                <p>Gain/Loss: ${darkDifference}</p>
                <p>Percent: {darkPercent}%</p>
            </div>

        </div>
    )
}

export default IndexCard