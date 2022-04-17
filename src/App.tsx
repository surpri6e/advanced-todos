import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { routes } from './routes/routes'

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className={'container pt-4'}>
        <Routes>
          {
            routes.map((route) => 
              <Route path={route.path} element={route.elem}></Route>
            )
          }
        </Routes>
      </div>
    </BrowserRouter>
  )
}

