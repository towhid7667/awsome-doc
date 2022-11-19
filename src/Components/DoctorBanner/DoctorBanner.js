import React from 'react';
import doctor from '../../assets/images/doctor.png'
import bg from '../../assets/images/appointment.png'
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
const DoctorBanner = () => {
    
    return (
        <div className=" p-10 lg:p-0 hero mt-15 lg:mt-32 lg:h-[432px] rounded-lg" style={{background : `url(${bg})`}}>
  <div className="hero-content flex-col lg:flex-row">
    <img src={doctor} alt='' className="-mt-52 hidden lg:w-1/2 lg:block rounded-lg" />
    <div>
        <h3 className='text-xl text-primary'>Appointment</h3>
      <h1 className="text-5xl font-bold text-white">Make an appointment Today</h1>
      <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
    <ButtonPrimary>Get Started</ButtonPrimary>
    </div>
  </div>
</div>
    );
};

export default DoctorBanner;