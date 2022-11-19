import React from 'react';
import bannerImg from '../../assets/images/chair.png'
import './BannerHome.css'


const BannerHome = () => {


    return (
        <div className="myhero hero p-10 relative">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img alt='' src={bannerImg} className="rounded-lg w-full lg:w-1/2 md:w-3/4 shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default BannerHome;   