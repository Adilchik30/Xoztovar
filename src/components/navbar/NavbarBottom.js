import React from 'react'
import './NavbarContainer.css'
function NavbarBottom() {
    const ITEMS = [
        "Elektronika",
        "Aksessuarlar",
        "Maishiy texnika",
        "Kiyimlar",
        "Poyabzallar",
        "Go'zallik va parvarish",
        "Salomatlik",
        "Uy-ro'zg'or buyumlari",
        "Qurilish va ta'mirlash",
        "Bolalar tovarlari",
        "Xobbi va ijod",
        "Sport va hordiq",
        "Oziq ovqat mahsulotlari",
        "Maishiy va kimyoviy moddalar",
        "Kanselyariya tovarlari",
        "Hayvonlar uchun tovarlar",
        "Kitoblar",
        "Dacha bog' va tomorqa",
    ]
    return (
        <div className='container'>
      <div className="navbar__bottom">
        {
          ITEMS?.map((el, inx)=> <div className='navbar__bottom-item' key={inx}>
            <p>{el}</p>
          </div>)
        }
      </div>
    </div>
    )
}

export default NavbarBottom