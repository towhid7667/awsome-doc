import React from 'react';
import BannerHome from '../../Components/BannerHome/BannerHome';
import InfoCards from '../../Components/Info Cards/InfoCards';
import Services from '../../Components/Services/Services';


const Home = () => {
    return (
        <div className='mx-5'>
           <BannerHome></BannerHome>
           <InfoCards></InfoCards>
           <Services></Services>
            
        </div>
    );
};

export default Home;