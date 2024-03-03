import { makeAutoObservable, runInAction } from "mobx";
import * as authService from "@/services/AuthService";

interface IForm {
    email: string;
    password: string;
    username: string;
}

export default class Store {

    public form: IForm = { email: "", password: "", username: "" };

    public setForm = (newEmail?: string, newPassword?: string, newUsername?: string) => {
        if (newEmail) this.form.email = newEmail;
        if (newPassword) this.form.password = newPassword;
        if (newUsername) this.form.username = newUsername;
    }

    constructor() {
        makeAutoObservable(this);
    }

    public resetForm = () => {
        this.form.email = "";
        this.form.password = "";
    }

    public register = async () => {
        try {
            if (!this.form.username) {
                throw new Error("Invalid data")
            }

            console.log(this.form)
            await authService.register({
                email: this.form.email,
                password: this.form.password,
                username: this.form.username
            });

        } catch (e) {
            console.log(e)
        }
    };

}