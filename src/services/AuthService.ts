import axios from "axios";
import { environment } from "../../environment";
import { IUser } from "@/models";

const baseUrl = `${environment.baseUrl}/auth/`;

export const register = async (createdUser: IUser) => {
    try {
        const response = await axios.post(baseUrl + "register", createdUser);
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

export const login = async (email: string, password: string) => {
    try {
        const response = await axios.post(baseUrl + "login", { email, password })
        return response.data;
    } catch (e) {
        console.log(e);
    }
}