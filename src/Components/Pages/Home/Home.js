import React from 'react';
import Services from '../../Pages/Services/Services';
import Slider2 from '../../Shared/Slider2.js/Slider2';
import Showcase1 from '../Showcase/Showcase1';
import Showcase2 from '../Showcase/Showcase2';

const Home = () => {
    return (
        <div className=''>
            <Slider2></Slider2>
            <Showcase1></Showcase1>
            <Showcase2></Showcase2>
            <Services></Services>
            
        </div>
    );
};

export default Home;