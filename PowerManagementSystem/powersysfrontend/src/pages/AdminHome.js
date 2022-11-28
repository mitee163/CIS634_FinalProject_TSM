import React, { useEffect, useState } from 'react'
import {
    Table
} from 'reactstrap'
import Base from '../components/Base'
import { toast } from 'react-toastify'
import { getUsers } from '../services/user-service';

const UserList = () => {
    const [users, setUsers] = useState([]);

    getUsers().then((data)=>{
      console.log(data);
      setUsers(data);
  }).catch(error=>{
      console.log(error);
      if(error.response.status==400 || error.response.status==404){
          toast.error(error.response.data.message)
      }
      else{
          toast.error("Somethin went wrong on server !!")
      }
  })
    
    const allusers = users.map(user =>{
        return <tr key={user.user_Id}>
                      <td>
                        <div>{user.name}</div>
                      </td>
                      <td>
                        <div>{user.email}</div>
                      </td>
                      <td>
                        <div>{user.address}</div>
                      </td>
                      <td>
                        <a href="#">View Bills</a>
                        <a href="#">Edit User Details</a>
                        <a href="#">Delete User</a>
                      </td>
                    </tr>
      });

  return (
    <Base>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {allusers}
      </tbody>
    </Table>
    </Base>
  );
};

export default UserList;