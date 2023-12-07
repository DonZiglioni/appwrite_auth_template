import React, { useState, useEffect } from 'react'
import One from '../../assets/Dice/One.png';
import Two from '../../assets/Dice/Two.png';
import Three from '../../assets/Dice/Three.png';
import Four from '../../assets/Dice/Four.png';
import Five from '../../assets/Dice/Five.png';
import Six from '../../assets/Dice/Six.png';
import OneRed from '../../assets/Dice/OneRed.png';
import TwoRed from '../../assets/Dice/TwoRed.png';
import ThreeRed from '../../assets/Dice/ThreeRed.png';
import FourRed from '../../assets/Dice/FourRed.png';
import FiveRed from '../../assets/Dice/FiveRed.png';
import SixRed from '../../assets/Dice/SixRed.png';
import './Die.css'

const Die = ({ side, value }) => {

    const [dieImage, setDieImage] = useState('');

    useEffect(() => {
        getDieImage();
    }, [side, value])

    const getDieImage = () => {
        if (side === 'left') {
            switch (value) {
                case 1:
                    setDieImage(One)
                    break;
                case 2:
                    setDieImage(Two)
                    break;
                case 3:
                    setDieImage(Three)
                    break;
                case 4:
                    setDieImage(Four)
                    break;
                case 5:
                    setDieImage(Five)
                    break;
                case 6:
                    setDieImage(Six)
                    break;
                default:
                    break;
            };
        } else if (side === 'right') {
            switch (value) {
                case 1:
                    setDieImage(OneRed)
                    break;
                case 2:
                    setDieImage(TwoRed)
                    break;
                case 3:
                    setDieImage(ThreeRed)
                    break;
                case 4:
                    setDieImage(FourRed)
                    break;
                case 5:
                    setDieImage(FiveRed)
                    break;
                case 6:
                    setDieImage(SixRed)
                    break;
                default:
                    break;
            };
        };
    };

    return (
        <div className='dice-img'>
            <img src={dieImage} alt='Waiting...' />
        </div>
    )
}

export default Die