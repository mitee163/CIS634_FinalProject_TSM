import React, { useState } from 'react'
import Userservice from '../services/UserService';

const RegisterUser = () => {

  const [user, setUser] = useState({
    id:"",
    name:"",
    address:"",
    email:"",
    password:"",
  });

    const handleChange = (e) => {
      const value = e.target.value;
      setUser({ ...user,[e.target.name]: value});
    };

    const saveUser = (e) => {
      e.preventDefault();
      Userservice.saveUser(user)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
        <div className="px-8 py-8">
          <div className="font-thin text-2xl tracking-wider">
            <h1>Register New User</h1>
          </div>
          <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Name</label>
            <input 
              type="text"
              name="name"
              value={user.name}
              onChange={(e) => handleChange(e)}
              className="h-10 w-96 border mt-2 px-2 py-2"></input>
          </div>
          <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Address</label>
            <input 
              type="text" 
              name="address"
              value={user.address}
              onChange={(e) => handleChange(e)}
              className="h-10 w-96 border mt-2 px-2 py-2"></input>
          </div>
          <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Email</label>
            <input 
              type="email"
              name="email"
              value={user.email}
              onChange={(e) => handleChange(e)}
              className="h-10 w-96 border mt-2 px-2 py-2"></input>
          </div>
          <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Password</label>
            <input 
              type="password" 
              name="password"
              value={user.password}
              onChange={(e) => handleChange(e)}
              className="h-10 w-96 border mt-2 px-2 py-2"></input>
          </div>
          <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
            <button onClick={saveUser} className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
              Register
            </button>
            <button className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
              Clear
            </button>
          </div>
        </div>
    </div>
  )
}

export default RegisterUser