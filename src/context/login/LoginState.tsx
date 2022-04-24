import axios from 'axios';
import React from 'react'
import { LoginContext } from './loginContext'
import { loginReducer } from './loginReducer';

interface LoginStateProps {
    children: React.ReactNode | React.ReactChild;
}

export interface ICheckAuth {
  flag: boolean
}

const URL: string = `${process.env.REACT_APP_DB_URL!}`;

const LoginState: React.FC<LoginStateProps> = ({children}) => {

  const [state, dispatch] = React.useReducer(loginReducer, {isAuth: !sessionStorage.length ? false : true, data: {
    password: sessionStorage.length ? JSON.parse(sessionStorage.getItem('data')!).pass : '', 
    email: sessionStorage.length ? JSON.parse(sessionStorage.getItem('data')!).email : '',
  }});



  const checkAuth = async (key: string, pass?: string, email?: string) => {
    const emailJSON = email ? email.split('').map(s => s === '.' ? '__' : s).join('') : 'und';
    return await axios.get(`${URL}/${emailJSON}/account.json`);
  }

  const registration = async (pass: string, email: string) => {
    const emailJSON = email.split('').map(s => s === '.' ? '__' : s).join('');
    await axios.post(`${URL}/${emailJSON}/account.json`, {pass, email});
    dispatch({type: 'REGISTRATION', payload: {data: {email, password: pass}, isAuth: false}})
  }

  const authorizate = async (pass: string, email: string) => {
    sessionStorage.setItem('data', JSON.stringify({pass, email}));
    dispatch({type: 'AUTH'});
    window.location.reload();
  }

  const logout = () => {
    dispatch({type: 'LOGOUT'})
  }

  return (
    <LoginContext.Provider value={{isAuth: state.isAuth, checkAuth, registration, authorizate, logout, data: state.data}}>
        {children}
    </LoginContext.Provider>
  )
}

export default LoginState