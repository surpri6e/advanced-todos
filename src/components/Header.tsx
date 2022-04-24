import React from 'react'
import { NavLink } from 'react-router-dom'
import { LoginContext } from '../context/login/loginContext'
import { publicRoutes, privateRoutes } from '../routes/routes'

const Header = () => {

    const {isAuth, logout, data} = React.useContext(LoginContext);

    const logoutAcc = () => {
        logout();
        sessionStorage.clear();
    }

  return (
    <nav className={'navbar navbar-light navbar-expand-lg bg-warning bg-gradient bg-opacity-50 justify-content-start'}>
        <a className={'navbar-brand ps-5 text-dark fs-3'} href={isAuth ? '/' : "/log"}>Your Books</a>
        <ul className={'navbar-nav flex-row'}>
            {
                isAuth
                    ?
                    <>
                    {
                    privateRoutes.map((route) => 
                    <li key={route.path} className= {'nav-item pe-2'}>
                        <NavLink to={route.path} className={'nav-link'} >{route.inHeader}</NavLink>
                    </li>
                    )
                    }
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-danger" onClick={logoutAcc}>Выйти</button>
                    </div>
                    <div className='d-flex align-items-center ms-2'>
                        <a href="#" className="link-dark">{data.email}</a>
                    </div>
                    </>
                    :
                    publicRoutes.map((route) => 
                    <li key={route.path} className= {'nav-item pe-2'}>
                        <NavLink to={route.path} className={'nav-link'} >{route.inHeader}</NavLink>
                    </li>
                    )
            }
        </ul>
    </nav>
  )
}

export default Header