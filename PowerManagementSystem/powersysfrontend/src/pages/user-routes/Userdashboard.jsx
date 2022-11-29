import React, { useEffect, useState } from 'react'
import {
    Table,
    Container,
    Row,
    Col
} from 'reactstrap'
import Base from '../../components/Base'
import { toast } from 'react-toastify'
import { isLoggedIn, getCurrentUserDetail } from '../../auth'
import userContext from '../../context/userContext'

const Userdashboard = () => {
let billList = [];
  

  return(
    <userContext.Consumer>
      {(object) => (
        <Base>
        <Container fluid style={{marginTop: '10px'}}>
        <Row><Col><h3>User Details:</h3></Col></Row>
        <Row>
                <Col>Name:</Col>
                <Col>{object.user.data.name}</Col>
            </Row>
            <Row>
                <Col>Email:</Col>
                <Col>{object.user.data.username}</Col>
            </Row>
            <Row>
                <Col>Address:</Col>
                <Col>{object.user.data.address}</Col>
            </Row>
        <Table striped bordered hover style={{marginTop: '10px'}}>
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
        {/* {
  billList = user.bills.map(bill =>{
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
  })
        } */}
      
      </tbody>
    </Table>
    </Container>
        </Base>
      )}
    </userContext.Consumer>
  );


  
  
};

export default Userdashboard