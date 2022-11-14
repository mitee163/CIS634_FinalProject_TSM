import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { useEffect } from 'react';

const UserHome = () => {
  const navigate = useNavigate();
  const [bills,setBills] = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch('http://localhost:8080/api/v1/bills')
      .then(response => response.json())
      .then(data => {
        setBills(data);
        setLoading(false);
      })
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const billList = bills.map(bill =>{
    return <tr key={bill.bill_Id}>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{bill.bill_Date}</div>
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{bill.due_Date}</div>
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{bill.units}</div>
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{bill.amount}</div>
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{bill.status}</div>
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
        <div className="flex shadow border-b">
          <table className="min-w-full">
            <thead className="border-r-gray-50">
              <tr>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  Bill Date
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  Due Date
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  Units
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  Amount
                </th>
                <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  Status
                </th>
                <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {billList}
            </tbody>
          </table>
        </div>
      </div></>
  );
  
};

export default UserHome