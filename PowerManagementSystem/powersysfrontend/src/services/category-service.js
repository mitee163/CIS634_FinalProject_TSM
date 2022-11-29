import { myAxios } from "./helper";

export const loadAllUsers=()=>{
    return myAxios.get(`/users/`).then(response=>{return response.data})
}