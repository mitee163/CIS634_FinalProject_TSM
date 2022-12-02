import { useEffect, useState } from "react"
import { Button, Card, CardBody, Container, Form, Input, Label } from "reactstrap"
import { createAddBills } from "../../services/addBills-service"
import { loadAllUsers } from "../../services/category-service"

const AddBills=()=>{

    const [users, setUsers] = useState([])

    const [addbills, setAddbills]=useState({
        bill_Date:new Date(),
        due_Date:new Date(),
        amount:"",
        units:"",
        status:"",
        user_Id:"",
    })

    useEffect(() => {

        loadAllUsers().then((data)=>{
            console.log(data);
            setUsers(data)
        }).catch(error=>{
            console.log(error);
        })
    }, [])

    //fieldChanged function
    const fieldChanged=(event)=>{
        
        setAddbills({...addbills,[event.target.name]:event.target.value})

    }
    

    //create bill function
    const createBill=(event)=>{

        event.preventDefault();

        console.log(addbills);
        if(addbills.amount.trim()===''){
            alert("Amount is required !!")
            return;
        }

        if(addbills.bill_Date.trim()===''){
            alert("Bill Date is required !!")
            return;
        }

        if(addbills.due_Date.trim()===''){
            alert("Due Date is required !!")
            return;
        }

        if(addbills.status.trim()===''){
            alert("Status is required !!")
            return;
        }

        if(addbills.units.trim()===''){
            alert("Units are required !!")
            return;
        }

        if(addbills.user_Id.trim()===''){
            alert("Please select User !!")
            return;
        }

        //submit the form on server
        createAddBills(addbills).then(data=>{
            alert("Bill created");
            // console.log(addbills);
        }).catch((error)=>{
            alert("error");
            console.log(error);
        })

    }


    return(
        <div className="wrapper">
            <Card className="shadow-sm">
                <CardBody>
                    {/* {JSON.stringify(addbills)} */}
                    <h3>Add Bill Details</h3>
                    <Form onSubmit={createBill}>
                    <div className="my-3">
                            <Label for="category">Post category</Label>
                            <Input type="select" id="category" placeholder="Enter here" name="user_Id" onChange={fieldChanged} defaultValue={0}>
                                <option disabled value={0}>--Select User--</option>
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
                            <Input type="text" id="title" placeholder="Enter here" name="amount" onChange={fieldChanged} />
                        </div>
                        <div className="my-3">
                            <Label for="bDate">Bill Date</Label>
                            <Input type="date" id="bDate" placeholder="date placeholder" name="bill_Date" onChange={fieldChanged} />
                        </div>
                        <div className="my-3">
                            <Label for="dDate">Due Date</Label>
                            <Input type="date" id="dDate" placeholder="date placeholder" name="due_Date" onChange={fieldChanged} />
                        </div>
                        <div className="my-3">
                            <Label for="check">Status</Label>
                            <Input type="text" id="check" placeholder="Paid or Unpaid" name="status" onChange={fieldChanged} />
                            {/* <FormGroup check inline>
                                <Label for="check">Paid</Label>
                                <Input type="checkbox" id="check" name="Status" onChange={fieldChanged}/>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label for="check">Unpaid</Label>
                                <Input type="checkbox" id="check" name="Status" onChange={fieldChanged}/>
                            </FormGroup> */}
                        </div>
                        <div className="my-3">
                            <Label for="unitsUsed">Units used</Label>
                            <Input type="number" id="unitsUsed" placeholder="Enter here" name="units" onChange={fieldChanged} />
                        </div>
                            <Container className="text-center">
                                <Button type="submit" color="primary">Add bill</Button>
                                <Button className="ms-2" color="danger">Reset</Button>
                            </Container>

                    </Form>
                </CardBody>
            </Card>

        </div>
    )
}

export default AddBills