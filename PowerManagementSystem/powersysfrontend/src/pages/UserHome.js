import React, { useEffect, useState } from 'react'
import {
    Table
} from 'reactstrap'
import Base from '../components/Base'
import { toast } from 'react-toastify'
import { getCurrentUserDetail } from '../auth';

const UserHome = () => {
  const [bills,setBills] = useState([]);
  const currentUserDetails = getCurrentUserDetail;

  setBills(currentUserDetails.bills);

  const billList = bills.map(bill =>{
    return <tr key={bill.bill_Id}>
                  <td>
                    <div>{bill.bill_Date}</div>
                  </td>
                  <td>
                    <div>{bill.due_Date}</div>
                  </td>
                  <td>
                    <div>{bill.units}</div>
                  </td>
                  <td>
                    <div>{bill.amount}</div>
                  </td>
                  <td>
                    <div>{bill.status}</div>
                  </td>
                  <td>
                    <a href="#">View Bill Details</a>
                    <a href="#">Pay Bill</a>
                  </td>
                </tr>
  });

  return (
    <Base>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Bill Date</th>
          <th>Due Date</th>
          <th>Units</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {billList}
      </tbody>
    </Table>
    </Base>
  );
  
};

export default UserHome