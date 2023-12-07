import React, { useState, useEffect, useRef } from 'react';
import DiceBox from '../DiceBox/DiceBox';
import RollChart from '../RollChart/RollChart';
import ProfileCard from '../ProfileCard/ProfileCard';
import IndexCard from '../IndexCard/IndexCard';
import GameBox from '../GameBox/GameBox';

import './Market.css'

const Market = () => {
    const [leftValue, setLeftValue] = useState(0);
    const [rightValue, setRightValue] = useState(0);
    const [isRunning, setisRunning] = useState(false);
    const [rollStats, setRollStats] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [rollCount, setRollCount] = useState(0);
    const [total, setTotal] = useState(0);
    const [lightBalance, setLightBalance] = useState(100000000);
    const [darkBalance, setDarkBalance] = useState(100000000);
    const [point, setPoint] = useState(0);
    const [message, setMessage] = useState('');

    const gameRoll = useRef(0);
    const wager = 72000;

    let lightDifference = lightBalance - 100000000;
    let darkDifference = darkBalance - 100000000;
    let lightPercent = Number(((lightDifference / 100000000) * 100).toFixed(2));
    let darkPercent = Number(((darkDifference / 100000000) * 100).toFixed(2));

    useEffect(() => {
        let intervalId;
        const intervalFunction = () => {
            rollDice();
        };
        if (isRunning) {
            intervalId = setInterval(intervalFunction, 50);
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning]);

    useEffect(() => {
        // setMessage('')
        let prevRolls = rollStats.slice();
        switch (total) {
            case 2:
                prevRolls[0] = prevRolls[0] + 1;
                setRollStats(prevRolls);
                setRollCount(rollCount + 1)
                break;
            case 3:
                prevRolls[1] = prevRolls[1] + 1;
                setRollStats(prevRolls);
                setRollCount(rollCount + 1)
                break;
            case 4:
                prevRolls[2] = prevRolls[2] + 1;
                setRollStats(prevRolls);
                setRollCount(rollCount + 1)
                break;
            case 5:
                prevRolls[3] = prevRolls[3] + 1;
                setRollStats(prevRolls);
                setRollCount(rollCount + 1)
                break;
            case 6:
                prevRolls[4] = prevRolls[4] + 1;
                setRollStats(prevRolls);
                setRollCount(rollCount + 1)
                break;
            case 7:
                prevRolls[5] = prevRolls[5] + 1;
                setRollStats(prevRolls);
                setRollCount(rollCount + 1)
                break;
            case 8:
                prevRolls[6] = prevRolls[6] + 1;
                setRollStats(prevRolls);
                setRollCount(rollCount + 1)
                break;
            case 9:
                prevRolls[7] = prevRolls[7] + 1;
                setRollStats(prevRolls);
                setRollCount(rollCount + 1)
                break;
            case 10:
                prevRolls[8] = prevRolls[8] + 1;
                setRollStats(prevRolls);
                setRollCount(rollCount + 1)
                break;
            case 11:
                prevRolls[9] = prevRolls[9] + 1;
                setRollStats(prevRolls);
                setRollCount(rollCount + 1)
                break;
            case 12:
                prevRolls[10] = prevRolls[10] + 1;
                setRollStats(prevRolls);
                setRollCount(rollCount + 1)
                break;
            default:
                break;
        };
        // console.log(gameRoll.current, total, point, rollCount);

        const checkPoint = (total) => {
            if (total === point) {
                setMessage("Point Hit!");
                setLightBalance(prev => prev + wager);
                setDarkBalance(prev => prev - wager);
                setPoint(0)
                gameRoll.current = 0;
                return;
            } else if (total === 7) {
                setMessage("7 Out!");
                setLightBalance(prev => prev - wager);
                setDarkBalance(prev => prev + wager);
                setPoint(0)
                gameRoll.current = 0;
                return;
            } else {
                gameRoll.current = gameRoll.current + 1;
            }
        };

        if (rollCount === 0) {
            setPoint(total)
        }

        if (gameRoll.current === 0 && total === 7) {
            setMessage("Comeout 7!");
            setLightBalance(prev => prev + wager);
            setDarkBalance(prev => prev - wager);
            return;
        } else if (gameRoll.current === 0 && total === 11) {
            setMessage("Comeout 11!");
            setLightBalance(prev => prev + wager);
            setDarkBalance(prev => prev - wager);
            return;
        } else if (gameRoll.current === 0 && total === 12) {
            setMessage("Craps 12!");
            setLightBalance(prev => prev - wager);
            return;
        } else if (gameRoll.current === 0 && total === 2) {
            setMessage("Craps 2!");
            setLightBalance(prev => prev - wager);
            setDarkBalance(prev => prev + wager);
            return;
        } else if (gameRoll.current === 0 && total === 3) {
            setMessage("Craps 3!");
            setLightBalance(prev => prev - wager);
            setDarkBalance(prev => prev + wager);
            return;
        } else if (gameRoll.current === 0 && point === 0) {
            setMessage(`New Point ${total}`);
            setPoint(total);
            gameRoll.current = gameRoll.current + 1;
            return;
        };

        checkPoint(total);
        return;
    }, [total]);

    const rollDice = () => {
        let left = Math.floor(Math.random() * 6) + 1;
        let right = Math.floor(Math.random() * 6) + 1;
        setLeftValue(left);
        setRightValue(right);
        setTotal(left + right);
        return;
    };

    const startDice = () => {
        setisRunning(prev => !prev);
    };

    const handleClick = () => {
        rollDice();
    };

    return (
        <div className='market-app'>
            <DiceBox left={leftValue} right={rightValue} />
            <GameBox point={point} message={message} />
            <h1 className='title'>Live Market</h1>
            <div className='top-display'>
                <RollChart outcomes={rollStats} totalRolls={rollCount} />
            </div>
            <IndexCard lightBal={lightBalance} darkBal={darkBalance} />
            <button onClick={handleClick} >Roll Dice</button>
            <button onClick={startDice} >
                {isRunning ? "Stop" : "Start"}
            </button>
            <ProfileCard percentLight={lightPercent} percentDark={darkPercent} />
        </div>

    )
}

export default Market;

