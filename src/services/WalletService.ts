import axios from "axios";
import { environment } from "../../environment";
import { ICreateWallet } from "@/models";

const baseUrl = `${environment.baseUrl}wallets/`;

export const createUserWallet = async (wallet: ICreateWallet) => {
    try {
        const response = await axios.post(baseUrl + "create-wallet", wallet)
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

export const getUserWallet = async (walletId: number) => {
    try {
        const response = await axios.get(baseUrl + `get-user-wallet/${walletId}`)
        return response.data;
    } catch (e) {
        console.log(e);
    }
}
