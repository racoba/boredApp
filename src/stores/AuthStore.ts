import { IUser } from "@/models";
import { makeAutoObservable, runInAction } from "mobx";
// import strings from "../../resources/strings";
import * as authService from "@/services/AuthService";

interface IHandleResponse {
	onSuccess: () => void;
	onError: (e: string) => void;
}

export default class AuthStore {

	public receivedToken = "";
	public currentUser: IUser | null = null;

	private localstorage_key = "wallet-api_currentUser";

	

	constructor() {
		makeAutoObservable(this);
	}

	public login = async () => {
		try {
			await authService.login("", "");
		} catch (e) {
            console.log(e)
		} 
	};

	public getCurrentnUser = async () => {
		const currentUserJson = this.getCurrentUserLocalStorage();

		try {
			if (!currentUserJson) {
				throw new Error("User is not logged");
			}

			const currentUser = await api.getCurrentAdminLogged(JSON.parse(currentUserJson));
			this.setCurrentUser(currentUser);
		} catch (e) {
			console.log(e)
		} 
	};

	

	public isLogged = async () => {

		try {
			const resultUser = await api.getCurrentAdminLogged();
			this.setCurrentAdminUser(resultUser);
		} catch (e) {
			localStorage.clear();
		} 

		return !!this.currentUser;
	};
	
	public authenticate = async (
		onSuccess: () => void = () => { },
		onFail: () => void = () => { },
	) => {
		if (!(await this.isLogged())) {
			onFail();
		} else {
			onSuccess();
		}
	};


	public setCurrentUser = (user: IUser | null) => {
		this.currentUser = user;
		if (!user) {
			this.removeFromLocalStorage();
			return;
		}

		this.saveOnLocalStorage();
	};

	public logout = async () => {
		try {
			await api.logoutAdminUser();
			this.setCurrentUser(null);
		} catch (e) {
			console.log(e);
		} 
	};

	public validateToken = async (onSuccess: (message: string) => void, onError: (e: string) => void) => {
		this.form.fieldError.clearErrors();
		const data = this.form.getValues();
		if (this.loader.isLoading) {
			return;
		}

		this.loader.start();

		try {
			const resultValidate = await api.validateToken(data.token);

			if (resultValidate) {
				runInAction(() => {
					this.receivedToken = data.token;
				});
			}
			onSuccess(strings.recoveryPage.validToken);
		} catch (e) {
			const errors = Errors.handleError(e);
			this.form.fieldError.addError({
				message: errors,
				field: "token",
			});
			onError(e.message);
		} finally {
			this.loader.end();
		}
	};

	public validateTokenUrl = async (
		onSuccess: () => void,
		onError: () => void,
		token: string,
	) => {
		this.form.fieldError.clearErrors();
		if (this.loader.isLoading) {
			return;
		}

		this.loader.start();

		try {
			const resultValidateUrl = await api.validateToken(token);
			if (resultValidateUrl) {
				runInAction(() => (this.receivedToken = token));
			}

			onSuccess();
		} catch (e) {
			onError();
		} finally {
			this.loader.end();
		}
	};

	public setToken = (token: string) => {
		runInAction(() => (this.receivedToken = token));
	};

	public resetPassword = async (onSuccess: () => void, onError: (e: string) => void) => {
		this.form.fieldError.clearErrors();

		if (this.loader.isLoading) {
			return;
		}

		this.loader.start();

		try {
			const data = this.form.getValues();
			if (data.newPassword !== data.confirmNewPassword) {
				this.form.fieldError.addError({
					message: strings.recoveryPage.samePasswordError,
					field: "password",
				});
				this.form.fieldError.addError({
					message: strings.recoveryPage.samePasswordError,
					field: "confirmNewPassword",
				});
			} else {
				await api.resetPassword(this.receivedToken, data.newPassword);
				runInAction(() => {
					data.password = data.newPassword;
				});
				this.login();
				this.clear();
				onSuccess();
			}
		} catch (e) {
			const error = JSON.parse(e.message);
			onError(error.message);
		} finally {
			this.loader.end();
		}
	};

	public sendNewPassword = async (onSuccess: () => void, onError: (e: string) => void) => {
		this.form.fieldError.clearErrors();
		const data = this.form.getValues();
		this.loader.start();

		try {
			await api.sendRequestResetPassword(data.email);
			onSuccess();
		} catch (e) {
			const errors = Errors.handleError(e);
			this.form.fieldError.addError({
				message: errors,
				field: "email",
			});
			onError(e.message);
		} finally {
			this.loader.end();
		}
	};

	private clear = () => {
		const data = this.form.getValues();
		runInAction(() => {
			data.email = "";
			data.password = "";
			this.receivedToken = "";
			data.token = "";
		});
	};

	public getCurrentAdminUserLocalStorage = () => {
		const currentAdminUserString = localStorage.getItem(this.localstorage_key);
		return currentAdminUserString;
	};

	public saveOnLocalStorage = () => {
		localStorage.setItem(this.localstorage_key, JSON.stringify(this.currentAdminUser));
	};

	public removeFromLocalStorage = () => {
		localStorage.removeItem(this.localstorage_key);
	};
}