import { makeAutoObservable, runInAction } from "mobx";
import * as authService from "@/services/AuthService";

interface IForm {
    email: string;
    password: string;
    username: string;
}

export default class Store {

    public form: IForm = { email: "", password: "", username: "" };

    constructor() {
        makeAutoObservable(this);
    }

    public setForm = (newEmail?: string, newPassword?: string, newUsername?: string) => {
        if (newEmail !== undefined || newEmail === "") this.form.email = newEmail;
        if (newPassword !== undefined || newPassword === "") this.form.password = newPassword;
        if (newUsername !== undefined || newUsername === "") this.form.username = newUsername;
    }

    public register = async () => {
        try {
            if (!this.form.username || !this.form.email || !this.form.password) {
                throw new Error("Invalid data")
            }

            const newUser = await authService.register({
                email: this.form.email,
                password: this.form.password,
                username: this.form.username
            });

        } catch (e) {
            console.log(e)
        }
    };

}