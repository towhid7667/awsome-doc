import React, { useState } from 'react';
import { format } from 'date-fns';
import AvailableOptions from './AvailableOptions';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';

const AvailableAppointments = ({selectedDate}) => {
    // const [availableOptions, setAvailableOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const {data : availableOptions = []} = useQuery({
        queryKey : ['availableOptions'],
        queryFn : () => fetch('https://awsome-doctor-server-towhid7667.vercel.app/appointmentOptions')
        .then(res => res.json())
    })

    // useEffect(() => {
    //     fetch('https://awsome-doctor-server-towhid7667.vercel.app/appointmentOptions')
    //     .then(res => res.json())
    //     .then(data => setAvailableOptions(data))
    // }, [])
    return (
        <section className='my-16'>
            <p className='text-secondary text-center font-bold'>Selected date: {format(selectedDate, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
            {
                availableOptions.map(availableOption => <AvailableOptions key={availableOption._id} availableOption ={availableOption} setTreatment ={setTreatment}></AvailableOptions>)
            }
            </div>
            {       treatment &&
                 <BookingModal treatment = {treatment} selectedDate ={selectedDate} setTreatment = {setTreatment}></BookingModal>
            }
           
        </section>
    );
};

export default AvailableAppointments;