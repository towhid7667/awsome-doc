import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  return (
    <div className="flex h-[500px] lg:w-3/12 w-10/12 md:w-5/12 mx-auto my-20 shadow-xl p-10 justify-center items-center rounded-xl">
      <div className="w-full">
        <h2 className="text-xl font-bold uppercase text-center">Login</h2>
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <label className="label"><span className="label-text">Email</span></label>
          <input
            {...register("email")}
            placeholder="email"
            className="input input-bordered w-full"
          />
           <label className="label"><span className="label-text">Password</span></label>
          <input type='password' {...register("password")} placeholder="password" className="input input-bordered w-full"/>
          <label className="label "><span className="label-text hover:text-blue-500 font-semibold"><Link>Forgot Password?</Link></span></label>


          {/* <p>{data}</p> */}
          <input type="submit" value='SUBMIT' className="input input-bordered w-full bg-accent text-white font-bold mt-3 hover:bg-slate-800"/>
        </form>
        <p className="text-center text-1xl">Don't Have Account? <Link><span className="font-semibold text-primary">Create an account</span></Link></p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">SIGN IN WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
