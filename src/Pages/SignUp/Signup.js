import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signup = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleSignUp = data => {
        console.log(data)
    }


    return (
        <div className="flex h-[600px] lg:w-3/12 w-10/12 md:w-5/12 mx-auto my-20 shadow-xl p-10 justify-center items-center rounded-xl">
      <div className="w-full">
        <h2 className="text-xl font-bold uppercase text-center">Sign up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>

          <label className="label"><span className="label-text">Name</span></label>
          <input type='text'
            {...register("name", { required: "Name is required" })} 
            aria-invalid={errors.name ? "true" : "false"}
            placeholder="name"
            className="input input-bordered w-full"
          />
           {errors.name && <p className="text-red-600">{errors.name?.message}</p>}

          <label className="label"><span className="label-text">Email</span></label>
          <input type='email'
            {...register("email", { required: "Email Address is required" })} 
            aria-invalid={errors.email ? "true" : "false"}
            placeholder="email"
            className="input input-bordered w-full"
          />
           {errors.email && <p className="text-red-600">{errors.email?.message}</p>}

           <label className="label"><span className="label-text">Password</span></label>
          <input type='password' {...register("password", { required: "Password is required",
          minLength : {value : 6, message: 'Password must be 6 character or more'},
          pattern : {value :/(?=.*[A-Z])(?=.*[@#$&*])(?=.*[0-9])/, message : 'password must be Strong'}
        })} 
             placeholder="password" className="input input-bordered w-full"/>
              {errors.password && <p className="text-red-600">{errors.password?.message}</p>}

  
          <input type="submit" value='SIGNUP' className="input input-bordered w-full bg-accent text-white font-bold mt-3 hover:bg-slate-800"/>
        </form>
        <p className="text-center text-1xl">Have Account? <Link to='/login'><span className="font-semibold text-primary">Please Log in</span></Link></p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">SIGN IN WITH GOOGLE</button>
      </div>
    </div>
    );
};

export default Signup;