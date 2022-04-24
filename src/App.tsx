import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Alert from './components/Alert'
import Header from './components/Header'
import Routing from './components/Routing'
import AlertState from './context/alert/AlertState'
import FirebaseState from './context/firebase/FirebaseState'
import LoginState from './context/login/LoginState'


export default function App() {

  return (
    <FirebaseState>
      <LoginState>
      <AlertState>
        <BrowserRouter>
          <Header/>
          <div className={'container pt-4'}>
            <Alert/>
            <Routing/>
          </div>
        </BrowserRouter>
      </AlertState>
      </LoginState>
    </FirebaseState>
  )
}

