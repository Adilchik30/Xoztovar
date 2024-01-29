import React from 'react'
import "./emptyCart.css"
import img from "../../assets/uzum market/photo_2024-01-25_09-15-35.jpg"
function EmptyCart() {
  return (
    <div>
            <img className='cart__img' src={img} alt="" />
          <br />
          <h2 className='cart__title'>Savatda hozircha mahsulot yoʻq</h2>
          <br />
          <p className="cart__heading">Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping</p>
          <br />
          <button className="cart__btn"><a href="/">Bosh sahifa</a></button>
    </div>
  )
}

export default EmptyCart