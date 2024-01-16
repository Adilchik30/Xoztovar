import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import './NavbarContainer.css'
import uzb_logo from '../../assets/uzb.jpg'
function SubHeader() {
    return (
        <div className='sub__header'>
            <div className='container sub__header-wrapper'>
                <p>
                    <CiLocationOn />
Shahar: <u>
                        <select name="Shaharni tanlang" id="select">

                            <option value="na">Namangan</option>
                            <option value="ta">Toshkent</option>
                            <option value="an">Andijon</option>
                            <option value="nav">Navoiy</option>
                            <option value="qa">Qarshi</option>

                        </select></u></p>
                <p>Buyurtma 1 kunda bepul yetkazib beramiz</p>
                <p>Savol-javoblar.Buyurtmalar. <img className='uzbek__logo' src={uzb_logo} alt="" /> Uzbek</p>
            </div>
        </div>
    )
}

export default SubHeader