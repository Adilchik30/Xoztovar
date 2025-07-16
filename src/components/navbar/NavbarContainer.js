import React from 'react'
import './NavbarContainer.css'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'
function NavbarContainer() {
    const { pathname } = useLocation()
    if (pathname.includes("login") || pathname.includes("admin")) {
        return <></>
    }
    return (
        <div>
            <Navbar />
        </div>
    )
}

export default NavbarContainer;