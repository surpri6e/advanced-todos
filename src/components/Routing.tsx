import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { LoginContext } from '../context/login/loginContext'
import { privateRoutes, publicRoutes } from '../routes/routes';

const Routing = () => {

    const {isAuth} = React.useContext(LoginContext);
  return (
    <Routes>
    {isAuth
        ?
            privateRoutes.map((route) => 
              <Route path={route.path} element={route.elem} key={route.path}></Route>
            )
        :
            publicRoutes.map((route) => 
                <Route path={route.path} element={route.elem} key={route.path}></Route>
            )}
    </Routes>
  )
}

export default Routing