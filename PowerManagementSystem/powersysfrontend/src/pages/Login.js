import React from 'react'
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

const Login = () => {
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
                                <Form>
                                    {/* Email Field */}
                                    <FormGroup>
                                        <Label for="email">Enter Email</Label>
                                        <Input
                                            type="email"
                                            placeholder="Enter Here"
                                            id="email"
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
                                            className="ms-2"
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
