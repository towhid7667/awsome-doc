import React from 'react';


const AvailableOptions = ({availableOption, setTreatment}) => {
    const {name, slots, price} = availableOption;
    return (
        <div className="card bg-base-100 shadow-xl">
        <div className="card-body text-center">
          <h2 className="text-2xl text-center text-primary font-bold uppercase">
            {name}
          </h2>
          <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
          <p>{slots.length} {slots.length > 1 ? 'spaces' : "space"} Available</p>
          <p>${price}</p>
          <div className="card-actions justify-center mt-5">
          <label disabled = {slots.length === 0} onClick={()=> setTreatment(availableOption)} htmlFor="booking-modal" className="btn btn-primary bg-gradient-to-r from-primary to-secondary  hover:from-secondary hover:to-primary text-white">open modal</label>
          </div>
        </div>
      </div>
    );
};

export default AvailableOptions;