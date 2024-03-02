export interface IUser {
    id: number;
    username: string;
    email: string;
    walletId?: number;
}

export interface IUserInfo {
    username: string;
    email: string;
    walletId?: number;
}

export interface ICreateUser {
    username: string;
    email: string;
    password: string;
}