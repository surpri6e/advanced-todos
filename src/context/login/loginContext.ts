import { AxiosResponse } from 'axios';
import React from 'react'
import { ILoginData } from './loginTypes';

interface ILoginContext {
    isAuth: boolean;
    data: ILoginData;
    registration: (pass: string, email: string) => Promise<void>;
    authorizate: (pass: string, email: string) => Promise<void>;
    checkAuth: (key: string, pass?: string, email?: string) => Promise<AxiosResponse<any, any>>;
    logout: () => void;
}

export const LoginContext = React.createContext<ILoginContext>({} as ILoginContext);