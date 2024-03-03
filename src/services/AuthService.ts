import axios from "axios";
import { environment } from "../../environment";
import { ICreateUser, IUserInfo } from "@/models";

const baseUrl = `${environment.baseUrl}auth/`;

type SignInData = {
    email: string;
    password: string;
}

type LoginResponse = {
    token: string;
    username: string;
}

export const register = async (createdUser: ICreateUser) => {
    try {
        const response = await axios.post(baseUrl + "register", createdUser);
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

export const login = async (data: SignInData): Promise<LoginResponse | null> => {
    try {
        const response = await axios.post<LoginResponse>(baseUrl + "login", { email: data.email, password: data.password })
        return response.data;
    } catch (e) {
        console.log(e);
        return null;
    }
}

export const validateToken = async (token: string): Promise<any> => {
    try {
        const response = await axios.get<boolean>(baseUrl + `validate-token?token=${token}`)
        return response.data
    } catch (e) {
        console.log(e);
    }
}