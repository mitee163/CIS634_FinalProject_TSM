import { useEffect, useState } from "react"
import { Button, Card, CardBody, Container, Form, Input, Label } from "reactstrap"
import Base from "../../components/Base"
import { createAddBills } from "../../services/addBills-service"
import { useNavigate, useLocation } from "react-router-dom"

const AddBills=()=>{
    //const [users, setUsers] = useState([]);
    const location = useLocation();
    const us_id = location.state.us_id;
    const us_name = location.state.us_name;
    const navigate = useNavigate();

    const [addbills, setAddbills]=useState({
        bill_Date:new Date(),
        due_Date:new Date(),
        amount:"",
        units:"",
        status:"",
        user_Id:us_id,
    })

   /*  useEffect(() => {

        loadAllUsers().then((data)=>{
            console.log(data);
            setUsers(data)
        }).catch(error=>{
            console.log(error);
        })
    }, []) */

    //fieldChanged function
    const fieldChanged=(event)=>{
        
        setAddbills({...addbills,[event.target.name]:event.target.value})

    }
    

    const resetData=() => {
        setAddbills({
            bill_Date:new Date(),
            due_Date:new Date(),
            amount:"",
            units:"",
            status:"",
            user_Id:us_id,
        })
    }
    
    const goBack=()=>{
        navigate("/admin/user-bills",{state:{us_id:us_id,us_name:us_name}});
    }


    //create bill function
    const createBill=(event)=>{

        event.preventDefault();

        console.log(addbills);
        if(addbills.amount === null){
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

        if(addbills.units === null){
            alert("Units are required !!")
            return;
        }

        if(addbills.user_Id === null){
            alert("Please select User !!")
            return;
        }


        //submit the bill on server
        createAddBills(addbills).then(data=>{
            alert("Bill created");
            setAddbills({
                bill_Date:new Date(),
                due_Date:new Date(),
                amount:"",
                units:"",
                status:"",
                user_Id:us_id,
            });
            navigate("/admin/user-bills",{state:{us_id:us_id,us_name:us_name}});
            // console.log(addbills);
        }).catch((error)=>{
            alert("error");
            console.log(error);
        })

    }


    return(
        <Base>
        <Container style={{marginTop: '20px'}}>
        <div className="wrapper">
            <Card className="shadow-sm">
                <CardBody>
                    {/* {JSON.stringify(addbills)} */}
                    <h3>Add Bill Details (Name: {us_name})</h3>
                    <Form onSubmit={createBill}>
                    {/* <div className="my-3">
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
                        </div> */}
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
                            <Input type="select" id="check" placeholder="Enter here" name="status" onChange={fieldChanged} defaultValue={0}>
                                <option>--Select--</option>
                                <option>paid</option>
                                <option>unpaid</option>
                            </Input>
                        </div>
                        <div className="my-3">
                            <Label for="unitsUsed">Units used</Label>
                            <Input type="number" id="unitsUsed" placeholder="Enter here" name="units" onChange={fieldChanged} />
                        </div>
                            <Container className="text-center">
                                <Button type="submit" color="primary">Add bill</Button>
                                <Button onClick={resetData} type="reset" className="ms-2" color="danger">Reset</Button>
                                <Button onClick={goBack} type="reset" className="ms-2" color="danger">Cancel</Button>
                            </Container>
                    </Form>
                </CardBody>
            </Card>

        </div>
        </Container>
        </Base>
    )
}

export default AddBills