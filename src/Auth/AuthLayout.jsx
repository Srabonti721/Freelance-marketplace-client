import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AuthLayout = () => {
    return (
        <div className='container mx-auto'>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default AuthLayout;