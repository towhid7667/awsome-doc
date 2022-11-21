import React from 'react';
import imgBanner from '../../assets/images/chair.png'

const AppointmentBanner = () => {
    return (
        <div className="myhero hero p-10 relative my-1">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img alt='' src={imgBanner} className="rounded-lg w-full lg:w-1/2 md:w-3/4 shadow-2xl" />
          <div>

          </div>
        </div>
      </div>
    );
};

export default AppointmentBanner;