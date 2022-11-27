import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import Loading from "./../Shared/Loading";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const imageHostKey = process.env.REACT_APP_imagebb_key;
  console.log(imageHostKey);

  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch(
        "https://awsome-doctor-server-towhid7667.vercel.app/appoitmentSpeciality"
      );
      const data = await res.json();
      //    console.log(data)
      return data;
    },
  });

  const handleAddDoctors = (data) => {
    const image = data.photo[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          // console.log(imgData.data.url);
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
          };

          fetch(
            "https://awsome-doctor-server-towhid7667.vercel.app/awsomeDoctors",
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
              },
              body: JSON.stringify(doctor),
            })
            .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.name} is added successfully`);
                    navigate('/dashboard/manageDoctors')
                  
                })
              
        }
      


      });

  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="lg:w-5/12 md:w-8/12 w-10/12 mx-auto lg:mx-0  p-7 my-5 border shadow-lg">
      <h2 className="my-5 text-2xl">Add doctor here</h2>
      <form onSubmit={handleSubmit(handleAddDoctors)}>
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
          aria-invalid={errors.name ? "true" : "false"}
          placeholder="name"
          className="input input-bordered w-full"
        />
        {errors.name && <p className="text-red-600">{errors.name?.message}</p>}

        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          {...register("email", { required: "Email Address is required" })}
          aria-invalid={errors.email ? "true" : "false"}
          placeholder="email"
          className="input input-bordered w-full"
        />
        {errors.email && (
          <p className="text-red-600">{errors.email?.message}</p>
        )}

        <label className="label">
          <span className="label-text">Speciality</span>
        </label>
        <select
          {...register("specialty")}
          className="select select-bordered w-full "
        >
          {specialties.map((specialty) => (
            <option key={specialty._id} value={specialty.name}>
              {specialty.name}
            </option>
          ))}
        </select>
        <label className="label">
          <span className="label-text">Photo</span>
        </label>
        <input
          type="file"
          {...register("photo", { required: "Photo is required" })}
          aria-invalid={errors.photo ? "true" : "false"}
          className="file-input file-input-bordered file-input-secondary w-full"
        />
        {errors.photo && (
          <p className="text-red-600">{errors.photo?.message}</p>
        )}
        <input
          type="submit"
          value="Add Doctor"
          className="input input-bordered w-full bg-accent text-white font-bold mt-3 hover:bg-slate-800"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
