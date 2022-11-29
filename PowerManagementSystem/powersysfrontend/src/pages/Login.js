import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Row,
} from 'reactstrap'
import Base from '../components/Base'
import { loginUser } from '../services/user-service'
import { doLogin } from '../auth';
import { useNavigate } from 'react-router-dom'
import userContext from '../context/userContext'

const Login = () => {
    const userContextData=useContext(userContext);

    const navigate =useNavigate ();

    const[loginDetail, setLoginDetail]=useState({
        username:"",
        password:""
    })

    const handleChange=(event,field)=>{

        let actualValue=event.target.value
        setLoginDetail({
            ...loginDetail,
            [field]:actualValue
        })

    }

    const handleReset=()=>{
        setLoginDetail({
            username:"",
            password:""
        })
    }

    const handleFormSubmit=(event)=>{
        event.preventDefault();
        console.log(loginDetail);
        //validation
        if(loginDetail.username.trim()=='' || loginDetail.password.trim()==''){
            toast.error("Username or password is required !!")
            return;
        }


        //submit the data to server to generate token
        loginUser(loginDetail).then((data)=>{
            console.log(data);

            //save the data to localstorage
            doLogin(data,()=>{
                console.log("login details saved to localstorage");
                //redirect to user dashboard page
                userContextData.setUser({
                    data: data,
                    login: true
                });
                navigate("/user/dashboard");
                

            })

            toast.success("User logged in successfully!!")
        }).catch(error=>{
            console.log(error);
            if(error.response.status==400 || error.response.status==404){
                toast.error(error.response.data.message)
            }
            else{
                toast.error("Somethin went wrong on server !!")
            }
        })

    };

    return (
        <Base>
            <Container>
                <Row className="mt-4">
                    <Col sm={{ size: 6, offset: 3 }}>
                        <Card color="dark" inverse>
                            <CardHeader>
                                <h3>Login</h3>
                            </CardHeader>
                            <CardBody>
                                {/*creating form*/}
                                <Form onSubmit={handleFormSubmit}>
                                    {/* Email Field */}
                                    <FormGroup>
                                        <Label for="email">Enter Email</Label>
                                        <Input
                                            type="email"
                                            placeholder="Enter Here"
                                            id="email"
                                            value={loginDetail.username}
                                            onChange={(e)=> handleChange(e,'username')}
                                        />
                                    </FormGroup>

                                    {/* Password Field */}
                                    <FormGroup>
                                        <Label for="password">
                                            Enter Password
                                        </Label>
                                        <Input
                                            type="password"
                                            placeholder="Enter Here"
                                            id="password"
                                            value={loginDetail.password}
                                            onChange={(e)=> handleChange(e,'password')}
                                        />
                                    </FormGroup>

                                    <Container className="text-center">
                                        <Button color="light" outline>
                                            Login
                                        </Button>
                                        <Button
                                            color="secondary"
                                            type="reset"
                                            outline
                                            className="ms-2"onClick={handleReset}
                                        >
                                            Reset
                                        </Button>
                                    </Container>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Base>
    )
}

export default Login
