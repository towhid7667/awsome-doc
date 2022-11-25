import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from './../../Context/AuthProvider';

const BookingModal = ({treatment, selectedDate, setTreatment}) => {
    const {name, slots} = treatment;
    const date = format(selectedDate, 'PP')
    const {user} = useContext(AuthContext);


    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phoneNo = form.phoneNo.value;
        console.log(date, slot, name, email, phoneNo)
        setTreatment(null)
    }


    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold uppercase">{name}</h3>
    <form onSubmit={handleBooking}>
    <input name='slot' type="text" disabled value={date} className="input input-bordered w-full mt-3" />
    <select className="select select-bordered w-full mt-3"> 
    
    {
        slots.map(slot => <option key={slot} value={slot}>{slot}</option>)
    }
    </select>
    <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered w-full mt-3" />
    <input name='email' type="email" defaultValue={user?.email} disabled placeholder="email" className="input input-bordered w-full mt-3 " />
    <input name='phoneNo' type='number' placeholder="Phone No" className="input input-bordered w-full mt-3" />
    <input type="submit" value='Submit' className="input input-bordered w-full bg-accent text-white font-bold mt-3 hover:bg-slate-800" />
    </form>
  </div>
</div>
        </div>
    );
};

export default BookingModal;