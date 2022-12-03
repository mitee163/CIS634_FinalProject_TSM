import React, { useEffect, useState } from 'react'
import {
    Table,
    Container,
    Row,
    Col,
    Button
} from 'reactstrap'
import Base from '../../components/Base'
import userContext from '../../context/userContext'
import { loadAllUsers } from "../../services/category-service"

const Admindashboard = () => {
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        loadAllUsers().then((data)=>{
            setAllUsers(data)
        }).catch(error=>{
            console.log(error);
        })
    }, []);

  return(
    <userContext.Consumer>
      {(object) => (
        
        <Base>
        <Container style={{marginTop: '20px'}}>
        <Row><Col><h3>Admin Details:</h3></Col></Row>
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
            <Row style={{marginTop: '20px'}}><Col><h5>All users of the system:</h5></Col></Row>
        <Table striped bordered hover style={{marginTop: '20px'}}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
  allUsers != undefined && (
  allUsers.map(u =>{
    return <tr key={u.user_Id}>
                  <td>
                    <div>{u.name}</div>
                  </td>
                  <td>
                    <div>{u.username}</div>
                  </td>
                  <td>
                    <div>{u.address}</div>
                  </td>
                  <td>
                  <Button variant="secondary" className="ms-2">View Bills</Button>
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

export default Admindashboard