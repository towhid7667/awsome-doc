
import imgBanner from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
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
                
          </div>
        </div>
      </div>
    );
};

export default AppointmentBanner;