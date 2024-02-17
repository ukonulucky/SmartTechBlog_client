import axios from "axios"
import { MdViewModule } from "react-icons/md"
import { Base_Url } from "../../utils/BaseUrl"



export const registerApi = async (userData) => {
    const response = await axios.post(`${Base_Url}/users/register`, userData, {
        withCredentials: true
    });
    return response.data
}

export const loginApi = async (userData) => {
    const response = await axios.post(`${Base_Url}/users/login`, userData, {
        withCredentials: true
    });
    return response.data
}

export const logOutApi = async () => {
    const response = await axios.post(`${Base_Url}/users/logOut`, {},{
        withCredentials: true
    });
    console.log(response.data)
    return response.data
}



export const authenticateUserApi = async () => {
         const response = await axios.get(`${Base_Url}/users/authenticate`, {
            withCredentials: true
         });
         return response.data
}

