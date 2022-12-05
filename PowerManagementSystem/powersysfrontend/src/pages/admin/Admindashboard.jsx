import React, { useEffect, useState } from 'react'
import { NavLink as ReactLink, useNavigate } from 'react-router-dom'
import {
    Table,
    Container,
    Row,
    Col,
    Button,
    NavItem,
    NavLink
} from 'reactstrap'
import Base from '../../components/Base'
import userContext from '../../context/userContext'
import { loadAllUsers } from "../../services/user-service"

const Admindashboard = () => {
    const [normalUsers, setNormalUsers] = useState([]);
    const navigate =useNavigate ();

    const viewUserBills = (event,param) => {        
      //let urlv = `/admin/user-bills/${param}`;
      navigate("/admin/user-bills",{state:{us_id:param.user_Id,us_name:param.name}});
   };

    useEffect(() => {
        loadAllUsers().then((data)=>{
            let filteredData = data;
            filteredData = filteredData.filter((item) => item.roles[0].role_Id === 602);
            setNormalUsers(filteredData);
        }).catch(error=>{
            console.log(error);
        });
    }, []);

  return(
    <userContext.Consumer>
      {(object) => (
        
        <Base>
        <Container style={{marginTop: '20px'}}>
        <Row className="text-center"><Col><h2>Admin Dashboard</h2></Col></Row>
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
  normalUsers != undefined && (
  normalUsers.map(u =>{
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
                  <Button variant="secondary" className="ms-2" onClick={event => viewUserBills(event,u)}>View Bills</Button>
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