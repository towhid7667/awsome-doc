import React from 'react';
import BannerHome from '../../Components/BannerHome/BannerHome';
import DoctorBanner from '../../Components/DoctorBanner/DoctorBanner';
import Hero2 from '../../Components/Hero-02/Hero2';
import InfoCards from '../../Components/Info Cards/InfoCards';
import Services from '../../Components/Services/Services';


const Home = () => {
    return (
        <div className='mx-5'>
           <BannerHome></BannerHome>
           <InfoCards></InfoCards>
           <Services></Services>
           <Hero2></Hero2>
           <DoctorBanner></DoctorBanner>
            
        </div>
    );
};

export default Home;