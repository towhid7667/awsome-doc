import React from 'react';
import img from '../../assets/images/treatment.png'

const Hero2 = () => {
    return (
        <div className=" mt-8 hero bg-base-200 p-10 rounded-lg">
        <div className="hero-content flex-col lg:flex-row">
          <img alt='' src={img} className="lg:w-4/12 rounded-lg shadow-2xl" />
          <div className='lg:w-5/12 lg:mx-4 text-center lg:text-start md:text-start'>
            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Hero2;