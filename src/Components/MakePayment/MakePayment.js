import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckOut from "./CheckOut";

const stripePromise = loadStripe(process.env.REACT_APP_Stripe_PK);
const MakePayment = () => {
  const booking = useLoaderData();
  const navigation = useNavigation();
  const { treatment, price, appointmentDate, slot } = booking;

  if(navigation.state === "loading"){
    return <Loading></Loading>
}
  return (
    <div>
      <h3 className="text-3xl">Payment for {treatment}</h3>
      <p className="text-xl">
        Please pay <strong>${price}</strong> for your appointment on{" "}
        {appointmentDate} at {slot}
      </p>
      <div className="w-96 my-5">
        <Elements stripe={stripePromise} >
          <CheckOut booking = {booking} />
        </Elements>
      </div>
    </div>
  );
};

export default MakePayment;
