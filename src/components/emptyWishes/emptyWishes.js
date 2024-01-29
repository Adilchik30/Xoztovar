import React from 'react'
import "./emptyWishes.css"
import rasm from "../../assets/uzum market/photo_2024-01-25_09-09-50.jpg"
function EmptyWishes() {
  return (
    <div className='container Heart'>
      
          <img className='heart__img' src={rasm} alt="" />
          <br />
          <h2 className='heart__title'>Sizga yoqqanini qo`shing</h2>
          <br />
          <p className="heart__heading">Mahsulotdagi ♡ belgisini bosing. Akkauntga kiring va barcha saralanganlar saqlanib qoladi</p>
          <br />
          <button className="heart__btn"><a href="/">Asosiy sahifa</a></button>
    </div>
  )
}

export default EmptyWishes