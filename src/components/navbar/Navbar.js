import React from 'react'
import './NavbarContainer.css'
import { IoMenu, IoSearch, IoCartOutline, IoHomeOutline } from 'react-icons/io5'
import { FaRegHeart, FaRegUser } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
    const carts = useSelector(state => state.cart.value)
    return (
        <div className='container navbar'>
            <NavLink to={"/"} className="navbar__logo">
                {/* <img src="" alt="" /> */}
                <h2>anor market</h2>
            </NavLink>
            <button className='navbar__btn-category'>
                <IoMenu />
                <span>Katalog</span>
            </button>
            <div className='navbar__search'>
                <input type="search" placeholder='Mahsulotlar va turkumlarni qidirish...' />
                <button><IoSearch /></button>
            </div>
            <ul className='navbar__collection'>
                <li className='navbar__item'>
                    <NavLink to={"/"} className='navbar__link'>
                        <IoHomeOutline />
                        <span>Asosiy sahifa</span>
                    </NavLink>
                </li>
                <li className='navbar__item'>
                    <NavLink to={"/admin"} className='navbar__link'>
                        <FaRegUser />
                        <span>Kirish</span>
                    </NavLink>
                </li>
                <li className='navbar__item'>
                    <NavLink to={"/wishes"} className='navbar__link'>
                        <FaRegHeart />
                        <span>Sevimlilar</span>
                    </NavLink>
                </li>
                <li className='navbar__item'>
                    <NavLink to={"/cart"} className='navbar__link'>
                        <IoCartOutline />
                        <span>Savatcha 
                            {
                                carts.length ?
                                <sup>{carts.length}</sup>
                                :
                                <></>
                            }
                                </span>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar