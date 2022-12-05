import { useEffect, useState } from "react"
import { Button, Card, CardBody, Container, Form, Input, Label } from "reactstrap"
import Base from "../../components/Base"
import { editBillById } from "../../services/addBills-service"
import { useNavigate, useLocation } from "react-router-dom"

const EditBill=()=>{
    const location = useLocation();
    const billobj = location.state.billobj;
    const us_name = location.state.us_name;
    const navigate = useNavigate();

    const [addbills, setAddbills]= useState(billobj);

    /* useEffect(()=>{
        setAddbills(billobj);
    },[]); */

    //fieldChanged function
    const fieldChanged=(event)=>{

        setAddbills({...addbills,[event.target.name]:event.target.value})
    }
    
    const goBack=()=>{
        navigate("/admin/user-bills",{state:{us_id:billobj.user_Id}});
    }


    const resetData=() => {
        setAddbills(billobj)
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
        editBillById(addbills).then(data=>{
            alert("Bill modified!");
            setAddbills({
                bill_Date:new Date(),
                due_Date:new Date(),
                amount:"",
                units:"",
                status:"",
                user_Id:billobj.user_Id,
            });
            navigate("/admin/user-bills",{state:{us_id:billobj.user_Id,us_name:us_name}});
            // console.log(addbills);
        }).catch((error)=>{
            alert("error");
            console.log(error);
        })

    }


    return(
        <Base>
        <div className="wrapper">
            <Card className="shadow-sm">
                <CardBody>
                    <h3>Edit Bill Details (Name: {us_name})</h3>
                    <Form onSubmit={createBill}>
                        <div className="my-3">
                            <Label for="title">Amount</Label>
                            <Input type="text" id="title" placeholder="Enter here" name="amount" onChange={fieldChanged} defaultValue={billobj.amount} />
                        </div>
                        <div className="my-3">
                            <Label for="bDate">Bill Date</Label>
                            <Input type="date" id="bDate" placeholder="date placeholder" name="bill_Date" onChange={fieldChanged} defaultValue={billobj.bill_Date} />
                        </div>
                        <div className="my-3">
                            <Label for="dDate">Due Date</Label>
                            <Input type="date" id="dDate" placeholder="date placeholder" name="due_Date" onChange={fieldChanged} defaultValue={billobj.due_Date} />
                        </div>
                        <div className="my-3">
                            <Label for="check">Status</Label>
                            <Input type="text" id="check" placeholder="Paid or Unpaid" name="status" onChange={fieldChanged} defaultValue={billobj.status} />
                        </div>
                        <div className="my-3">
                            <Label for="unitsUsed">Units used</Label>
                            <Input type="number" id="unitsUsed" placeholder="Enter here" name="units" onChange={fieldChanged} defaultValue={billobj.units} />
                        </div>
                            <Container className="text-center">
                                <Button type="submit" color="primary">Save Changes</Button>
                                <Button onClick={resetData} type="reset" className="ms-2" color="danger">Reset</Button>
                                <Button onClick={goBack} type="reset" className="ms-2" color="danger">Cancel</Button>
                            </Container>

                    </Form>
                </CardBody>
            </Card>

        </div>
        </Base>
    )
}

export default EditBill