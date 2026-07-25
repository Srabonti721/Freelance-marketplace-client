import React from 'react';
import Banner from '../components/homepage/Banner';
import Slider from '../components/homepage/Slider';
import Featured from '../components/homepage/Featured';

const Home = () => {
    return (
        <div>      
            <Slider/>
            <Banner/>
            <Featured/>
        </div>
    );
};

export default Home;