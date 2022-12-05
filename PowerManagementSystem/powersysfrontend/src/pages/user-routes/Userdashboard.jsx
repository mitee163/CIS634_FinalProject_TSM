import React, { useEffect, useState } from 'react'
import { NavLink as ReactLink, useNavigate } from 'react-router-dom'
import {
    Table,
    Container,
    Row,
    Col,
    Button
} from 'reactstrap'
import Base from '../../components/Base'
import userContext from '../../context/userContext'
import { editBillById } from '../../services/addBills-service'

const Userdashboard = () => {

  const navigate = useNavigate();

  const billPayment = (event,param) => {  
    const obj = param;
    obj.status = "paid";
    editBillById(obj).then(data=>{
      navigate("/user/billPaid");
  }).catch((error)=>{
      alert("error");
      console.log(error);
  })
  };      

  return(
    <userContext.Consumer>
      {(object) => (
        
        <Base>
        <Container style={{marginTop: '20px'}}>
        <Row className="text-center"><Col><h2>User Dashboard</h2></Col></Row>
        <Row><Col><h3>User Details:</h3></Col></Row>
        <Row>
                <Col xs={3}>Name:</Col>
                <Col>{object.user.data.name}</Col>
            </Row>
            <Row>
                <Col xs={3}>Email:</Col>
                <Col>{object.user.data.username}</Col>
            </Row>
            <Row>
                <Col xs={3}>Address:</Col>
                <Col>{object.user.data.address}</Col>
            </Row>
            <Row style={{marginTop: '20px'}}><Col><h5>User's Bills:</h5></Col></Row>
        <Table striped bordered hover style={{marginTop: '20px'}}>
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
        {
  object.user.data.bills != undefined && (
  object.user.data.bills.map(bill =>{
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
                  <Button variant="secondary" className="ms-2" disabled={bill.status == "paid"} onClick={event => billPayment(event,bill)}>Pay Bill</Button>
                  </td>
                </tr>
  }))
        }
      
      </tbody>
    </Table>
    </Container>
        </Base>
      )}
    </userContext.Consumer>
  );


  
  
};

export default Userdashboard