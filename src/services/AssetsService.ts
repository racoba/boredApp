import axios from "axios";
import { environment } from "../../environment";
import { ICreateAsset } from "@/models";

const baseUrl = `${environment.baseUrl}assets/`;

export const createAsset = async(asset: ICreateAsset) => {
    try{
        const response = await axios.post(baseUrl + "create-asset", asset)
        return response.data;
    } catch (e){
        console.log(e);
    }
}

export const getWalletAssets = async(walletId: number) => {
    try{
        const response = await axios.get(baseUrl + `get-assets-by-wallet/${walletId}`)
        return response.data;
    } catch (e){
        console.log(e);
    }
}
