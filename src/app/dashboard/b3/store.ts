import { IAsset } from "@/models";
import { makeAutoObservable } from "mobx";
import * as walletService from "@/services/WalletService";
import * as assetsService from "@/services/AssetsService";


export default class Store {

    public assets: IAsset[] | null = null;

    private walletId: number;
    private userId: number;

    constructor(userId: number, walletId: number) {
        this.userId = userId;
        this.walletId = walletId;
        makeAutoObservable(this);
    }

    public getWalletAssets = async () => {
        try {
            if (this.walletId == -1) {
                return;
            }
            const assets = await assetsService.getWalletAssets(this.walletId);
            this.assets = assets;
        } catch (e) {
            console.log(e);
        }
    }

    public createWallet = async () => {
        try {
            await walletService.createWallet({ userId: this.userId })
        } catch (e) {
            console.log(e);
        }
    }

    public fetch = async () => {
        console.log(this.assets)
        await this.getWalletAssets();
    }
}