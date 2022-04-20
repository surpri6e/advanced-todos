import React from 'react'
import { NavLink } from 'react-router-dom'
import { routes } from '../routes/routes'

const Header = () => {
  return (
    <nav className={'navbar navbar-light navbar-expand-lg bg-warning bg-gradient bg-opacity-50 justify-content-start'}>
        <a className={'navbar-brand ps-5 text-dark fs-3'} href={'/'}>Your Books</a>
        <ul className={'navbar-nav flex-row'}>
            {
                routes.map((route) => 
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