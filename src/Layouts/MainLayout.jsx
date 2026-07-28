import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

const MainLayout = () => {
    const {state} = useNavigation()
    return (
        <div className='container mx-auto'>
            <Header/>
            <main className='bg-base-200'>
            {
                state === "loading" ? <Loading/>: <Outlet/>
            }
            </main>

            <Footer/>
        </div>
    );
};

export default MainLayout;