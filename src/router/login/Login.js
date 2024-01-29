import React from 'react';
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa6";

import "./Login.css"
function Login() {
  return (
    <>
      <br />
      <br />
      <br />
      <div className='container login__box'>
        <form className="login-form">
          <h2 className='login__h2' style={{ color: "var(--bg-py)" }}> Login</h2>
          <label className='login__label' htmlFor="username">Username:</label>
          <input className='login__input' type="text" id="username" name="username" required />

          <label className='login__password' htmlFor="password">Password:</label>
          <input className='login__property' type="password" id="password" name="password" required />

          <button className='submit' type="submit"><a href={"./"}></a>Ro'yxatdan o'tish</button>
        </form>
        <br />
        <hr />
        <div className="login__icon">

          <FaGoogle />
          <FaGithub />
          <FaFacebook />
        </div>
      </div>
    </>
  );
}

export default Login;
