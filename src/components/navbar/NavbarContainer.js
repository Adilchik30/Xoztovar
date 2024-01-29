import React from 'react'
import './NavbarContainer.css'
import SubHeader from './SubHeader'
import Navbar from './Navbar'
import NavbarBottom from './NavbarBottom'
import { useLocation } from 'react-router-dom'
function NavbarContainer() {
    const { pathname } = useLocation()
    if (pathname.includes("login") || pathname.includes("admin")) {
        return <></>
    }
    return (
        <div>
            <SubHeader />
            <Navbar />
            <NavbarBottom />
        </div>
    )
}

export default NavbarContainer;