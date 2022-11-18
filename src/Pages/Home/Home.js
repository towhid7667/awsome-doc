import React from 'react';
import BannerHome from '../../Components/BannerHome/BannerHome';
import InfoCards from '../../Components/Info Cards/InfoCards';


const Home = () => {
    return (
        <div className='mx-5'>
           <BannerHome></BannerHome>
           <InfoCards></InfoCards>
            
        </div>
    );
};

export default Home;