import axios from "axios";
import { environment } from "../../environment";
import { ICreateWallet } from "@/models";

const baseUrl = `${environment.baseUrl}wallets/`;

export const createWallet = async(wallet: ICreateWallet) => {
    try{
        const response = await axios.post(baseUrl + "create-user-wallet", wallet)
        return response.data;
    } catch (e){
        console.log(e);
    }
}

export const getUserWallet = async(walletId: number) => {
    try{
        const response = await axios.get(baseUrl + `create-asset/${walletId}`)
        return response.data;
    } catch (e){
        console.log(e);
    }
}
