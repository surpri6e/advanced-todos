export type TLoginReducerType = 'REGISTRATION' | 'AUTH' | 'LOGOUT' | 'CHECK_AUTH';

export interface ILoginData {
    password: string;
    email: string;
}


export interface ILogin {
    isAuth: boolean;
    data: ILoginData;
}

export interface ILoginAction {
    type: TLoginReducerType;
    payload?: ILogin; 
}
