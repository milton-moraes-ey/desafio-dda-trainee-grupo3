import { createContext, useState } from "react";
import { signInRequest } from "../services/auth";
import { setCookie } from 'nookies';
import Router from 'next/router';



type User = {
    name: string;
    email: string;
}

type SignInData = {
    email: string;
    password: string;
}

type AuthContextType = {
    isAuthenticated: Boolean;
    user: User;
    signIn: (data: SignInData) => Promise<void>
}


export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
    const [user, setUser] = useState<User | null>(null);

    const isAuthenticated = !!user;

    async function signIn({ email, password }: SignInData) {
        const { token, user } = await signInRequest({
            email,
            password,
        })
        
        setCookie(undefined, 'hero-app.token', token, {
            maxAge: 60 * 60 * 1, // 1 hora
        })

        setUser(user)

        Router.push('/dashboard')

    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}