import React from 'react';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Market from './components/Market/Market';
import PrivateRoutes from './PrivateRoutes';

import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './auth/authContext';

const RoutesList = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />

                <Route element={<PrivateRoutes />} >
                    <Route path='/market' element={<Market />} />
                    {/* <Route path='/market:id' element={<Profile />} /> */}
                </Route>
            </Routes>
        </AuthProvider>
    )
}

export default RoutesList