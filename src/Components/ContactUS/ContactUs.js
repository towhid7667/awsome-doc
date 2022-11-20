import React from 'react';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import bg from '../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <div className='flex flex-col items-center p-10 rounded-lg my-10' style={{background : `url(${bg})`}}>
            <div className='text-center'>
                <h4 className='text-xl text-primary'>Contact Us</h4>
                <h2 className='text-3xl text-white'>Stay connected with us</h2>
            </div>
            <div>
                <input className='lg:px-40 md:px-40 px-12 py-3 my-3 rounded-lg text-center' type="email" name="" id="" placeholder='email'/><br />
                <input className='lg:px-40 md:px-40 px-12 py-3 my-3 rounded-lg text-center' type="text" name="" id="" placeholder='subject'/><br />
                <input className='lg:px-40 md:px-40 px-12 py-16 my-3 rounded-lg text-center' type="text" name="" id="" placeholder='your message'/>
            </div>
            <ButtonPrimary>Submit</ButtonPrimary>
        </div>
    );
};

export default ContactUs;