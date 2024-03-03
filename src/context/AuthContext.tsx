"use client"
import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";
import { useRouter } from "next/navigation";
import * as authService from "@/services/AuthService";

type SignInData = {
  email: string;
  password: string;
}

type IAuthContext = {
  isAuthenticated: boolean;
  username: string | null;
  signIn: (data: SignInData) => Promise<void>;
}

export const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [username, setUsername] = useState<string | null>(null);
  const router = useRouter()
  const isAuthenticated = !!username;

  useEffect(() => {
    const { "walletadmin.token": token } = parseCookies();

    if(token){
      authService.validateToken(token).then((response) =>{
        setUsername(response.user.username)
      });
    };
  }, [])

  async function signIn({ email, password }: SignInData) {
    const response = await authService.login({
      email,
      password
    });

    if (!response) {
      throw new Error("User not found")
    }
    const { token, username } = response;

    setCookie(undefined, "walletadmin.token", token, {
      maxAge: 60 * 60 * 1, // 1 hour
    })

    setUsername(username);
    
    router.push("/dashboard");

  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}