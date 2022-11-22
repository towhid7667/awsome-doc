import React from 'react';
import ButtonPrimary from './../ButtonPrimary/ButtonPrimary';

const AvailableOptions = ({availableOption}) => {
    const {name, slots} = availableOption;
    return (
        <div className="card bg-base-100 shadow-xl">
        <div className="card-body text-center">
          <h2 className="text-2xl text-center text-primary font-bold uppercase">
            {name}
          </h2>
          <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
          <p>{slots.length} {slots.length > 1 ? 'spaces' : "space"} Available</p>
          <div className="card-actions justify-center mt-5">
           <ButtonPrimary>Book Now</ButtonPrimary>
          </div>
        </div>
      </div>
    );
};

export default AvailableOptions;