export interface IUser {
    id: number;
    username: string;
    email: string;
    pictureUrl?: string;
}

export interface IUserInfo {
    username: string;
    email: string;
    pictureUrl?: string;
}

export interface ICreateUser {
    username: string;
    email: string;
    password: string;
}