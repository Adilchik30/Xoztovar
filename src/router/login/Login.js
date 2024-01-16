import React from 'react'
import './Login.css'
function Login() {
  return (
    <div className='container'>
    <div className='login'>
      <div className="login__box">
        <h3 className='login__rec'>Telefon raqamingizni kiriting</h3>
        <p className='login__rec'>Tasdiqlash kodi Telegram orqali yuboriladi</p>
        <input required  className='login__inp' placeholder='Telefon raqam yoki userneym' type="text" /><br />
        <p className='login__rec'>SMS orqali olish</p>
        <input required type="text" className='login__inp' placeholder='Telefon raqamingiz' /><br /><br />
        <button className='login__button'>Kodni olish</button>
        
      </div>
    </div>
    </div>
  )
}

export default Login