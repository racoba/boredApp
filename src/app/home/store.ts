import { makeAutoObservable } from "mobx";


export default class Store {
    public userId: number | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    public fetch = async (userId: number) => {
        
    }
}