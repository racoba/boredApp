import { makeAutoObservable } from "mobx";


export default class Store {


    public walletId: number | null = null;
    public userId: number | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    public getWalletAssets = async () => {
        try {
            if (this.walletId == null) {
                throw new Error("Wallet not found")
            }
        } catch (e) {
            console.log(e);
        }
    }

    public createUserWallet = async (userId?: number) => {
        try {
            if (!userId) {
                throw new Error("User not logged");
            }
        } catch (e) {
            console.log(e);
        }
    }

    public getUserWallet = async (userId: number) => {
        try {
        } catch (e) {
            console.log(e);
        }
    }

    public fetch = async (userId: number) => {
    if (!this.walletId) {
        }   
        else {
            // await this.getWalletAssets();
        }
    }
}