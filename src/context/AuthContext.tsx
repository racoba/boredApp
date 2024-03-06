"use client"
import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";
import { useRouter } from "next/navigation";
import * as authService from "@/services/AuthService";
import * as walletService from "@/services/WalletService";
import { IUser, IWallet } from "@/models";

type SignInData = {
  email: string;
  password: string;
}

type IAuthContext = {
  isAuthenticated: boolean;
  user: IUser | null;
  userWallet: IWallet | null;
  signIn: (data: SignInData, openSnackbar: (state: boolean) => void) => Promise<void>;
  setUser: (user: IUser | null) => void;
}

export const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null);
  const [userWallet, setUserWallet] = useState<IWallet | null>(null);
  const router = useRouter()
  const isAuthenticated = !!user;

  useEffect(() => {

    const { "walletadmin.token": token } = parseCookies();
    if (token) {
      authService.validateToken(token).then((response) => {
        setUser(response.user);
      });
    };
  }, [])

  async function signIn({ email, password }: SignInData, openSnackbar: (state: boolean) => void) {

    if (!email || !password) {
      throw new Error("Missing Fields")
    }

    const response = await authService.login({
      email,
      password
    });

    if (!response) {
      throw new Error("User not found")
    }
    const { token, authUser } = response;

    setCookie(undefined, "walletadmin.token", token, {
      maxAge: 60 * 60 * 1, // 1 hour
    })

    setUser(authUser);
    if (userWallet) {
      const wallet = await walletService.getUserWallet(authUser.id)
      setUserWallet(wallet);
    }
    openSnackbar(true);

    router.push("/dashboard");

  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, userWallet, signIn, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}