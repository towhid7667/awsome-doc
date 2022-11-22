import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({treatment, selectedDate}) => {
    const {name, slots} = treatment;
    const date = format(selectedDate, 'PP')
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold uppercase">{name}</h3>
    <form action="">
    <input type="text" disabled value={date} className="input input-bordered w-full mt-3" />
    <select className="select select-bordered w-full mt-3"> 
    
    {
        slots.map(slot => <option value={slot}>{slot}</option>)
    }
    </select>
    <input type="text" placeholder="Type here" className="input input-bordered w-full mt-3" />
    <input type="text" placeholder="Type here" className="input input-bordered w-full mt-3 " />
    <input type="text" placeholder="Type here" className="input input-bordered w-full mt-3" />
    <input type="submit" value='Submit' className="input input-bordered w-full bg-accent text-white font-bold mt-3" />
    </form>
  </div>
</div>
        </div>
    );
};

export default BookingModal;