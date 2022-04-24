
import { ILogin, ILoginAction } from "./loginTypes";

export const loginReducer = (state: ILogin, action: ILoginAction): ILogin => {
    switch(action.type) {
        case 'REGISTRATION':
            return {...state, data: action.payload ? action.payload.data : {...state.data}}
        case 'CHECK_AUTH': 
            return {...state, isAuth: action.payload ? action.payload.isAuth : state.isAuth}
        case 'LOGOUT':
            return {...state, isAuth: false}
        case 'AUTH': 
            return {...state, isAuth: true}
        default: 
            return state;
    }
}