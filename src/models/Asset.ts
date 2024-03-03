export interface IAsset{
    id: number;
    quantity: number;
    averagePrice: number;
    walletId: number;
}

export interface ICreateAsset{
    quantity: number;
    averagePrice: number;
    walletId: number;
}