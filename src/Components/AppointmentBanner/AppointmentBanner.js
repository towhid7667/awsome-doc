import React, { useState } from 'react';
import imgBanner from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
const AppointmentBanner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div className="myhero hero p-10 relative my-1">
        <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center">
          <img alt='' src={imgBanner} className="rounded-lg w-full lg:w-1/2 md:w-3/4 shadow-2xl" />
          <div className='lg:mr-10 -ml-3 lg:-ml-0'>
                <DayPicker
                 mode="single"
                 selected={selectedDate}
                 onSelect={setSelectedDate}
                ></DayPicker>
                <p>Selected date: {format(selectedDate, 'PP')}</p>
          </div>
        </div>
      </div>
    );
};

export default AppointmentBanner;