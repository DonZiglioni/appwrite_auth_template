import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className='App'>
            <div className='home'>
                <h1>Welcome!</h1>
                <p>New Player?</p>
                <button onClick={() => navigate('/signup')}>Signup</button>
                <p>Returning Player?</p>
                <button onClick={() => navigate('/login')}>Login</button>
            </div>
        </div>
    )
}

export default Home