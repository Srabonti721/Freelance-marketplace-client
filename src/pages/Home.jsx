import React from 'react';
import Banner from '../components/homepage/Banner';
import Slider from '../components/homepage/Slider';
import Featured from '../components/homepage/Featured';
import { Helmet } from 'react-helmet-async';
import Faq from '../components/Faq';

const Home = () => {
    return (
        <div>    
            <Helmet>
                <title>Freelances || Home</title>
                </Helmet>  
            <Slider/>
            <Banner/>
            <Featured/>
            <Faq/>
        </div>
    );
};

export default Home;