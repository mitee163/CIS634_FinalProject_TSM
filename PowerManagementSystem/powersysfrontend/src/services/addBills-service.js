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

export const editBillById=(billData)=>{
        // console.log(billData);
        const apiurlvar = `/bills/${billData.user_Id}`;
        return privateAxios.put
        (
                apiurlvar,
                billData
        )
                .then((response)=>response.data)
    };