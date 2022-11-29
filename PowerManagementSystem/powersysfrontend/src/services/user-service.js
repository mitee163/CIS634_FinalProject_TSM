import { myAxios } from "./helper";

export const signUp=(user)=>{
    
    return myAxios
    .post("/auth/register",user)
    .then((response)=> response.data);

};

export const loginUser = (loginDetail)=>{
    return myAxios.post("/auth/login", loginDetail).then((response)=>response.data)
}

export const getUserDetails = (userId)=>{
    return myAxios.get("/users").then((response)=>response.data)
}

export const getUsers = ()=>{
    return myAxios.post("/auth/users").then((response)=>response.data)
}