import React, { useEffect, useState } from 'react'
import {
    Table,
    Container,
    Row,
    Col,
    Button
} from 'reactstrap'
import Base from '../../components/Base'
import { getUserDetails } from '../../services/user-service';
import { useNavigate, useLocation } from 'react-router-dom';

const UserBills = () => {
  const [allUserBills,setAllUserBills] = useState([]);
  const location = useLocation();
  const us_id = location.state.us_id;
  const navigate =useNavigate ();

  useEffect(() => {
    getUserDetails(us_id).then((data)=>{
      let userDetails = data;
      setAllUserBills(userDetails.bills);
      console.log("all bills of the user:",allUserBills);
    }).catch(error=>{
        console.log(error);
    })
}, []);

const addNewBill = (event) => {        
  navigate("/admin/add-bill",{state:{us_id:us_id}});
};

const editBill = (event,param) => {        
  navigate("/admin/edit-bill",{state:{billobj: param}});
};

  return (
    <Base>
    <Container style={{marginTop: '20px'}}>  
    <Row>
      <Col><h3>User's Bills:</h3></Col>
      <Col xs={2}>
      <div>
                  <Button outline className="text-right" onClick={event => addNewBill(event)}>
                    Add New Bill
                  </Button>
              </div>
              </Col>
      </Row>
    <Table striped bordered hover style={{marginTop: '20px'}}>
      <thead>
        <tr>
          <th>Bill Date</th>
          <th>Due Date</th>
          <th>Units</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Action</th>
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
                  <td>
                    <div>
                    <Button variant="secondary" className="ms-2" onClick={event => editBill(event,bill)}>Edit Bill</Button>
                    </div>
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