import React from 'react';
import BannerHome from '../../Components/BannerHome/BannerHome';
import ContactUs from '../../Components/ContactUS/ContactUs';
import DoctorBanner from '../../Components/DoctorBanner/DoctorBanner';
import Hero2 from '../../Components/Hero-02/Hero2';
import InfoCards from '../../Components/Info Cards/InfoCards';
import Services from '../../Components/Services/Services';
import Testimonials from '../../Components/Testimonials/Testimonials';


const Home = () => {
    return (
        <div className='mx-5'>
           <BannerHome></BannerHome>
           <InfoCards></InfoCards>
           <Services></Services>
           <Hero2></Hero2>
           <DoctorBanner></DoctorBanner>
           <Testimonials></Testimonials>
           <ContactUs></ContactUs>
            
        </div>
    );
};

export default Home;