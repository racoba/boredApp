import { IUser } from "@/models";
import { makeAutoObservable } from "mobx";
import * as authService from "@/services/AuthService";

interface IForm {
	email: string;
	password: string;
}

export default class Store {

	public form: IForm = { email: "", password: "" };

	constructor() {
		makeAutoObservable(this);
	}

	public setForm = (newEmail?: string, newPassword?: string) => {
		if (newEmail !== undefined || newEmail === "") this.form.email = newEmail;
		if (newPassword !== undefined || newPassword === "") this.form.password = newPassword;
	}

}