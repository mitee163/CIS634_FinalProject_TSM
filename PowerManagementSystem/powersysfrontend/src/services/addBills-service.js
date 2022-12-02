import { privateAxios } from "./helper";

//create addbills function
export const createAddBills=(billData)=>{
    // console.log(billData);
    return privateAxios.post
    (
            "/bills",
            billData
    )
            .then((response)=>response.data)
};