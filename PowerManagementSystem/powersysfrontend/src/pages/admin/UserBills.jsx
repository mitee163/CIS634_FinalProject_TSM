import React, { useEffect, useState } from 'react'
import {
    Table,
    Container,
    Row,
    Col
} from 'reactstrap'
import Base from '../../components/Base'
import { getUserDetails } from '../../services/user-service';
import { useParams } from 'react-router-dom';

const UserBills = () => {
  const [allUserBills,setAllUserBills] = useState([]);
  const { us_id  } = useParams();

  useEffect(() => {
    getUserDetails(us_id).then((data)=>{
      let userDetails = data;
      setAllUserBills(userDetails.bills);
      console.log("all bills of the user:",allUserBills);
    }).catch(error=>{
        console.log(error);
    })
}, []);

  return (
    <Base>
    <Container style={{marginTop: '20px'}}>
    <Row><Col><h3>User's Bills:</h3></Col></Row>
    <Table striped bordered hover style={{marginTop: '20px'}}>
      <thead>
        <tr>
          <th>Bill Date</th>
          <th>Due Date</th>
          <th>Units</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {
  allUserBills != undefined && (
  allUserBills.map(bill =>{
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
                </tr>
  }))
        }
      
      </tbody>
    </Table>
    </Container>
    </Base>
  );
  
};

export default UserBills