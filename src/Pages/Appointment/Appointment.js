import React, { useState } from 'react';
import AppointmentBanner from '../../Components/AppointmentBanner/AppointmentBanner';
import AvailableAppointments from '../../Components/AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
       <AppointmentBanner selectedDate={selectedDate} setSelectedDate = {setSelectedDate}></AppointmentBanner> 
       <AvailableAppointments selectedDate={selectedDate}></AvailableAppointments>  
        </div>
    );
};

export default Appointment;