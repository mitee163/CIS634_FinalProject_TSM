import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserService from '../services/UserService';
import Navbar from './Navbar';

const UserList = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setLoading = (true);
    //         try {
    //             const response = await UserService.getUser();
    //             setUsers(response.data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //         setLoading(false);
    //     }
    //     fetchData();
    // }, []);

    useEffect(() => {
        setLoading(true);
    
        fetch('http://localhost:8080/api/v1/users')
          .then(response => response.json())
          .then(data => {
            setUsers(data);
            setLoading(false);
          })
      }, []);

    if (loading) {
        return <p>Loading...</p>;
      }
    
    const allusers = users.map(user =>{
        return <tr key={user.user_Id}>
                      <td className="text-left px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{user.name}</div>
                      </td>
                      <td className="text-left px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{user.address}</div>
                      </td>
                      <td className="text-left px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </td>
                      <td className="text-left px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{user.password}</div>
                      </td>
                      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
                        <a href="#" className="text-indigo-600 hover:text-indigo-800 px-4">Edit</a>
                        <a href="#" className="text-indigo-600 hover:text-indigo-800">Delete</a>
                      </td>
                    </tr>
      });

  return (
    <>
    <Navbar />
    <div className="container mx-auto my-8">
          {/* <div className="h-12">
        <button onClick={() => navigate("/addUser")}
        className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">Register User</button>
    </div> */}
          <div className="flex shadow border-b">
              <table className="min-w-full">
                  <thead className="border-r-gray-50">
                      <tr>
                          <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                              Name
                          </th>
                          <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                              Address
                          </th>
                          <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                              Email
                          </th>
                          <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                              Password
                          </th>
                          <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                              Actions
                          </th>
                      </tr>
                  </thead>
                  {!loading && (
                      <tbody>
                          {allusers}
                      </tbody>
                  )}
              </table>
          </div>
      </div></>
  );
};

export default UserList;