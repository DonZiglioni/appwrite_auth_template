import React, { useState, useEffect } from 'react';
import './ProfileCard.css';
import { useAuth } from '../../auth/authContext';
import Dice from '../Dice/Dice';

const ProfileCard = ({ percentLight, percentDark }) => {
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        investment: 0,
        allocation: 50,
    });
    const [buyAmount, setBuyAmount] = useState(0);
    const [investmentBalance, setInvestmentBalance] = useState(0);
    const [userBalance, setUserBalance] = useState(10000);
    const [lightAmount, setLightAmount] = useState(0);
    const [darkAmount, setDarkAmount] = useState(0);
    const [profit, setProfit] = useState(0);
    let lightInvestment = buyAmount * (lightAmount / 100);
    let darkInvestment = buyAmount * (darkAmount / 100);
    let lightProfit = lightInvestment * (percentLight / 100);
    let darkProfit = darkInvestment * (percentDark / 100);
    let totalProfit = lightProfit + darkProfit;
    let newAmount = buyAmount + totalProfit;

    let difference = buyAmount - newAmount;

    let percent = ((newAmount - buyAmount) / buyAmount) * 100;

    useEffect(() => {
        console.log("totalProf", totalProfit, "dif", difference, "new", newAmount);
        setProfit(totalProfit.toFixed(0))
        setInvestmentBalance(newAmount)
    }, [percentLight, percentDark]);


    const handleSubmit = (e) => {
        e.preventDefault();
        setBuyAmount(Number(formData.investment));
        setInvestmentBalance(Number(formData.investment));
        setUserBalance((prev) => prev - Number(formData.investment));
        setLightAmount(Number(100 - formData.allocation));
        setDarkAmount(Number(formData.allocation));
        setFormData({
            investment: 0,
            allocation: 50,
        });
    };

    const sell = () => {
        console.log(percent);
    };

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(data => ({ ...data, [name]: value }));
    };

    return (
        <div className='profile-card'>
            <div className='user-data'>
                <p>Username:{user.name}</p>
                <p>Balance: ${userBalance}</p>
            </div>
            <form onSubmit={(e) => handleSubmit(e, formData)}>
                <div className='input-bet'>
                    <label htmlFor='investment'>Buy Amount: </label>
                    <input
                        type='text'
                        id='investment'
                        name='investment'
                        value={formData.investment}
                        placeholder='Enter Amount'
                        onChange={handleChange}
                    />
                </div>
                <label htmlFor='allocation'><u>Allocation</u></label>
                <div className='input-allocation'>
                    <span> {100 - formData.allocation} </span>
                    <input
                        type='range'
                        id='allocation'
                        name='allocation'
                        min={0}
                        max={100}
                        value={formData.allocation}
                        onChange={handleChange}
                    />
                    <span> {formData.allocation} </span>
                </div>
                <div className='buttons'>
                    <button type='submit'>Buy</button>
                    <button onClick={sell}>Sell</button>
                </div>
            </form>
            <div className='investment-box'>
                <p><u>Investment</u></p>
                <p><u>Allocation</u></p>
                <p><u>Gain/Loss</u></p>
                <p>Balance: ${investmentBalance}</p>
                <p>Light : Dark</p>
                <p>Gain/Loss: ${profit}</p>
                <p>Started at: ${buyAmount}</p>
                <p>{lightAmount} : {darkAmount}</p>
                <p>Percent: {percent ? percent.toFixed(2) : 0}%</p>
            </div>

        </div>
    )
};

export default ProfileCard;
