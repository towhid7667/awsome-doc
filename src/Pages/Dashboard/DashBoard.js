import React from 'react';
import MyAppointment from '../../Components/MyAppointments/MyAppointment';

const DashBoard = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='text-2xl my-10'>My Appointments</h2>
            <MyAppointment></MyAppointment>
        </div>
    );
};

export default DashBoard;