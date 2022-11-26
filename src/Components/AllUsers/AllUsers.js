import React from "react";
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

const AllUsers = () => {


    const {data : users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const res = await fetch('https://awsome-doctor-server-towhid7667.vercel.app/users');
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdmin = id =>{
      fetch(`https://awsome-doctor-server-towhid7667.vercel.app/users/admin/${id}`, {
        method : 'PUT',
        headers : {
          authorization : `bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.modifiedCount > 0){
          toast.success('Admin role given')
          refetch();
        }
      })
      
    }

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-2xl my-10">All User</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user?.role !== 'admin' && <button onClick={()=>handleMakeAdmin(user._id)} className="btn btn-xs btn-primary text-white">Make Admin</button>}</td>
                  <td><button className="btn btn-xs btn-danger ">Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
