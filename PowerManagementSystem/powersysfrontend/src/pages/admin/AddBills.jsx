import { useEffect, useState } from "react"
import { Button, Card, CardBody, Container, Form, FormGroup, Input, Label } from "reactstrap"
import { loadAllUsers } from "../../services/category-service"

const AddBills=()=>{

    const [users, setUsers] = useState([])

    useEffect(() => {

        loadAllUsers().then((data)=>{
            console.log(data);
            setUsers(data)
        }).catch(error=>{
            console.log(error);
        })
    }, [])
    

    return(
        <div className="wrapper">
            <Card className="shadow-sm">
                <CardBody>
                    <h3>Add Bill Details</h3>
                    <Form>
                    <div className="my-3">
                            <Label for="category">Post category</Label>
                            <Input type="select" id="category" placeholder="Enter here">
                                {
                                    users.map((user) => (
                                        <option value={user.user_Id} key={user.user_Id}>
                                            {user.name}
                                        </option>
                                    ))
                                }
                            </Input>
                        </div>
                        <div className="my-3">
                            <Label for="title">Amount</Label>
                            <Input type="text" id="title" placeholder="Enter here" />
                        </div>
                        <div className="my-3">
                            <Label for="date">Bill Date</Label>
                            <Input type="date" id="date" placeholder="date placeholder" name="date" />
                        </div>
                        <div className="my-3">
                            <Label for="title">Due Date</Label>
                            <Input type="date" id="date" placeholder="date placeholder" name="date" />
                        </div>
                        <div className="my-3">
                            <FormGroup check inline>
                                <Label for="check">Paid</Label>
                                <Input type="checkbox" id="title"/>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label for="check">Unpaid</Label>
                                <Input type="checkbox" id="title"/>
                            </FormGroup>
                        </div>
                        <div className="my-3">
                            <Label for="title">Units used</Label>
                            <Input type="text" id="title" placeholder="Enter here" />
                        </div>
                            <Container className="text-center">
                                <Button color="primary">Add bill</Button>
                                <Button className="ms-2" color="danger">Reset</Button>
                            </Container>

                    </Form>
                </CardBody>
            </Card>

        </div>
    )
}

export default AddBills