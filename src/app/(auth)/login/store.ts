import { IUser } from "@/models";
import { makeAutoObservable } from "mobx";
import * as authService from "@/services/AuthService";

interface IForm {
	email: string;
	password: string;
}

export default class Store {

	public form: IForm = { email: "", password: "" };

	public setForm = (newEmail?: string, newPassword?: string) => {
		if (newEmail) this.form.email = newEmail;
		if (newPassword) this.form.password = newPassword;
	}

	constructor() {
		makeAutoObservable(this);
	}

	public resetForm = () => {
		this.form.email = "";
		this.form.password = "";
	}
	
}