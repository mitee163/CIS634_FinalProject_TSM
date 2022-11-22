import React, { useEffect, useState } from 'react'
import { signUp } from '../services/user-service'
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



const Signup = () => {

    const [data, setData]=useState({
        name:'',
        address:'',
        //email is passed as username
        username:'',
        password:'',
    })

    const [error, seterror]=useState({
        errors:{},
        isError:false
    })

    useEffect(() => {
        console.log(data);
    }, [data])

    //handle change
    const handleChange=(event,property)=>{
        //dynamic setting of values
        setData({...data,[property]:event.target.value})
    }

    //resetting the form
    const resetData=() => {
    setData({
        name:'',
        address:'',
        username:'',
        password:'',
    })
}

//submit the form
const submitForm=(event)=>{
    event.preventDefault()
    console.log(data);
    //data validate

    //call server api for sending data
        signUp(data).then((resp)=>{
            console.log(resp);
            console.log("success log");
        }).catch((error)=>{
            console.log(error);
            console.log("Error log");
        })
}

    return (
        <Base>
            <Container>
                <Row className="mt-4">
                    <Col sm={{ size: 6, offset: 3 }}>
                        <Card color="dark" inverse>
                            <CardHeader>
                                <h3>Add Information to Register.</h3>
                            </CardHeader>
                            <CardBody>
                                {/*creating form*/}
                                <Form onSubmit={submitForm}>
                                    {/* Name Field */}
                                    <FormGroup>
                                        <Label for="name">Enter Name</Label>
                                        <Input
                                            type="text"
                                            placeholder="Enter Here"
                                            id="name"
                                            onChange={(e)=>handleChange(e,'name')}
                                            value={data.name}
                                        />
                                    </FormGroup>

                                    {/* Address Field */}
                                    <FormGroup>
                                        <Label for="address">
                                            Enter Address
                                        </Label>
                                        <Input
                                            type="address"
                                            placeholder="Enter Here"
                                            id="address"
                                            onChange={(e)=>handleChange(e,'address')}
                                            value={data.address}
                                        />
                                    </FormGroup>

                                    {/* Email Field */}
                                    <FormGroup>
                                        <Label for="email">Enter Email</Label>
                                        <Input
                                            type="email"
                                            placeholder="Enter Here"
                                            id="email"
                                            onChange={(e)=>handleChange(e,'username')}
                                            value={data.username}
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
                                            onChange={(e)=>handleChange(e,'password')}
                                            value={data.password}
                                        />
                                    </FormGroup>

                                    <Container className="text-center">
                                        <Button color="light" outline>
                                            Register
                                        </Button>
                                        <Button
                                            color="secondary"
                                            outline
                                            type="reset"
                                            className="ms-2"
                                            onClick={resetData}
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

export default Signup
