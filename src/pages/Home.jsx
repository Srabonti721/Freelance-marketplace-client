import React from 'react';
import Banner from '../components/homepage/Banner';
import Slider from '../components/homepage/Slider';

const Home = () => {
    return (
        <div className='container mx-auto'>
            
            <Slider/>
            <Banner/>
        </div>
    );
};

export default Home;