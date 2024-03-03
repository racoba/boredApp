import { IAsset } from "@/models";
import { makeAutoObservable } from "mobx";
import * as walletService from "@/services/WalletService";
import * as assetsService from "@/services/AssetsService";


export default class Store {

    public assets: IAsset[] = [];

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
            const assets = await assetsService.getWalletAssets(this.walletId);
            this.assets = assets;
        } catch (e) {
            console.log(e);
        }
    }

    public createUserWallet = async (userId?: number) => {
        try {
            if (!userId) {
                throw new Error("User not logged");
            }
            const response = await walletService.createUserWallet({ userId })
            this.walletId = response.walletId;
        } catch (e) {
            console.log(e);
        }
    }

    public getUserWallet = async (userId: number) => {
        try {
            const wallet = await walletService.getUserWallet(userId)
            this.walletId = wallet.id;
        } catch (e) {
            console.log(e);
        }
    }

    public fetch = async (userId: number) => {
    if (!this.walletId) {
            this.getUserWallet(userId);
        }   
        else {
            // await this.getWalletAssets();
        }
    }
}