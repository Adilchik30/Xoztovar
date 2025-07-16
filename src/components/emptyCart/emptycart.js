import React from 'react'
import "./emptyCart.css"
import img from "../../assets/uzum market/photo_2024-01-25_09-15-35.jpg"
function EmptyCart() {
  return (
    <div>
            <img className='cart__img' src={"https://images.icon-icons.com/2392/PNG/512/doctor_advise_warning_suggestion_avatar_icon_145586.png"} alt="" />
          <br />
          <h2 className='cart__title'>Shifokor qabuliga hech qanday tekshiruv yo'q</h2>
          <br />
          <p className="cart__heading">Tugmani bosgan holda 👇 tekshiruvlardan birini tanlang </p>
          <br />
          <button className="cart__btn"><a href="/wishes">Xizmat turlaridan birini tanlash</a></button>
    </div>
  )
}

export default EmptyCart