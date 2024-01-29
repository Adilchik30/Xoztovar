import React, { useState } from 'react'
import "./CartProduct.css"
import { FaRegTrashAlt } from 'react-icons/fa'
import { decCart, incCart, removeFromCart, removeAllCart } from '../../context/cartSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const BOT_TOKEN = "6971186925:AAEUUB5Vs96v65p29-KvRLXvqZ5R2KDCWpY"
const USER_ID = 5409529185
const CHAT_ID = -1001941421037
// https://api.telegram.org/bot6971186925:AAEUUB5Vs96v65p29-KvRLXvqZ5R2KDCWpY/getUpdates
// https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]

function CartProducts({ data }) {
  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [address, setAddress] = useState("")
  const [message, setMessage] = useState("")
  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault()
    let text = "Yangi buyurtma %0A%0A"
    text += `Ism: <b>${name}</b> %0A`
    text += `Telefon Raqami: <b>${phoneNumber}</b> %0A`
    text += `Manzili: <b>${address}</b> %0A`
    text += `Xabari: <b> ${message}</b> %0A`

// %0A = <br/>
data.forEach((item)=>{
  text += `nomi: ${item.title} %0A`
  text += `soni: ${item.quantity} %0A`
  text += `narxi: ${item.price?.brm()} so'm %0A%0A`
  text += `${item.url}`
})
text += `Jami: <b>${data.reduce((a, b) => a + b.price * b.quantity, 0)?.brm()} so'm</b>`

   let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${USER_ID}&text=${text}&parse_mode=html`
   let api = new XMLHttpRequest()
   api.open("GET", url, true)
   api.send()
   toast.success("Qabul qilindi. Xaridingizdan minnatdormiz !😊👌", {position:"top-center"})
   dispatch(removeAllCart())
   setName("")
   setPhoneNumber("")
   setAddress("")
   setMessage("")
  }
  return (
    <div className='container cart__wrapper'>
      <div className="cart__products">
        {
          data?.map(el => <div key={el.title} className='cart__item'>
            <Link to={`/product/${el.id}`} className='cart__item-left'>
              <img src={el.url} alt={el.title} />
              <div>
                <h4>{el.title}</h4>
                <p>Kategoriya: {el.category}</p>
              </div>
            </Link>
            <div className="cart__item-right">
              <div className="cart__item-btns">
                <button disabled={el.quantity
                  <= 1} onClick={() => dispatch(decCart(el))}>-</button>
                <button>{el.quantity}</button>
                <button onClick={() => dispatch(incCart(el))}>+</button>
              </div>
              <div>
                <button
                  onClick={() => dispatch(removeFromCart(el))}
                  className='cart__trash-btn'><FaRegTrashAlt /></button>
                <h3>{el.price?.brm()} so'm</h3>
                <p> {(el.price * el.quantity)?.brm()} so'm</p>
              </div>
            </div>
          </div>)
        }
      </div>
      <div className="cart__register">
        <div className="input__reg">
          <h3>Ma'lumotlarni to'ldiring:</h3>
          <form onSubmit={handleSubmit} action="" >
            <input value={name} onChange={(e) => setName(e.target.value)} required type="text" placeholder="To'liq ismingiz" />
            <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required type="number" placeholder="+998 00-000-00-00" />
            <input value={address} onChange={(e) => setAddress(e.target.value)} required type="text" placeholder="Manzilingiz" />
            <input value={message} onChange={(e) => setMessage(e.target.value)} required type="text" placeholder="Habar yo'llash" />
            <div className="total">
              <p>Umumiy narx:</p>
              <b>{data?.reduce((a, b) => a + b.price * b.quantity, 0)?.brm()} so'm</b>
            </div>
            <button className="btn-reg"> Rasmiylashtirishga o'tish</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default CartProducts;