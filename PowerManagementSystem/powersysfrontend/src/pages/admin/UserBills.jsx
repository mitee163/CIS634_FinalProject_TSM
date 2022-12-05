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
import { useNavigate, useLocation, NavLink as ReactLink } from 'react-router-dom';
import { deletBillService } from '../../services/addBills-service';
import { toast } from 'react-toastify';

const UserBills = () => {
  const [allUserBills,setAllUserBills] = useState([]);
  const location = useLocation();
  const us_id = location.state.us_id;
  const us_name = location.state.us_name;
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
  navigate("/admin/add-bill",{state:{us_id:us_id,us_name:us_name}});
};

const editBill = (event,param) => {        
  navigate("/admin/edit-bill",{state:{billobj: param,us_name:us_name}});
};

const deleteBill = (event,param) => {        
  deletBillService(param.bill_Id).then((data)=>{
    getUserDetails(us_id).then((data)=>{
      let usr = data;
      setAllUserBills(usr.bills);
    }).catch(error=>{
        console.log(error);
    });
    toast.success("Bill deleted!");
  }).catch(error=>{
      console.log(error);
  })
};

  return (
    <Base>
    <Container style={{marginTop: '20px'}}>  
    <Row>
      <Col><h3>User's Bills: (Name: {us_name})</h3></Col>
      <Col xs={2}>
                  <Button outline className="text-right" onClick={event => addNewBill(event)}>
                    Add New Bill
                  </Button>
              </Col>
              <Col xs={3}>
                  <Button outline className="text-right" tag={ReactLink} to="/admin/dashboard">
                    Go To Admin Dashboard
                  </Button>
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
                    <Button variant="secondary" className="ms-2" onClick={event => deleteBill(event,bill)}>Delete Bill</Button>
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