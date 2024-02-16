import axios from "axios"
import { MdViewModule } from "react-icons/md"
import { Base_Url } from "../../utils/BaseUrl"



export const registerApi = async (userData) => {
    const response = await axios.post(`${Base_Url}/user/register`, userData, {
        withCredentials: true
    });
    return response.data
}

export const loginApi = async (userData) => {
    const response = await axios.post(`${Base_Url}/user/login`, userData, {
        withCredentials: true
    });
    return response.data
}
