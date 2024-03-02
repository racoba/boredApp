import { makeAutoObservable } from "mobx";

import strings from "@/resources/strings";
import { getAsset } from "@/services/AssetsService";

export default class Store {

    public quotes: string[];
    public assets: any[] | null = null

    constructor(quotes: string[]) {
        this.quotes = quotes;
        makeAutoObservable(this);
    }

    public getAsset = async (quotes: string[]) => {
        try{
            this.assets = await getAsset(quotes);
            console.log(this.assets);
        } catch (e){
            console.log(e);
        }
    }

    public fetch = async () => {
        await this.getAsset(this.quotes);
    }
}