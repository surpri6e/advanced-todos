import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Alert from './components/Alert'
import Header from './components/Header'
import AlertState from './context/alert/AlertState'
import FirebaseState from './context/firebase/FirebaseState'
import { routes } from './routes/routes'

export default function App() {

  return (
      <AlertState>
        <BrowserRouter>
          <Header/>
          <div className={'container pt-4'}>
            <Alert/>
            <FirebaseState>
            <Routes>
              {
                routes.map((route) => 
                  <Route path={route.path} element={route.elem} key={route.path}></Route>
                )
              }
            </Routes>
            </FirebaseState>
          </div>
        </BrowserRouter>
      </AlertState>
  )
}

