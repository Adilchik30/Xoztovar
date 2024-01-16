import React from 'react'
import './NavbarContainer.css'
import SubHeader from './SubHeader'
import Navbar from './Navbar'
import NavbarBottom from './NavbarBottom'
function NavbarContainer() {
    return (
        <div>
            <SubHeader />
            <Navbar />
            <NavbarBottom />
        </div>
    )
}

export default NavbarContainer;