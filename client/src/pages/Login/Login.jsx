import React, { useState } from 'react'
import "./Login.css"
import logo from "../../assets/cloneflix.png"
const Login = () => {
  const [signup,setsignup]=useState(true)
  return (
    <>
    { signup===true && <div className='login'>
      <img src={logo} alt='logo' />
      <div className="login-form">
        <h1>Sign Up</h1>
        <form>
          <input type='text' placeholder='Name :'/>
          <input type='email' placeholder='Email :'/>
          <input type='password' placeholder='Password : '/>
          <button>Sign Up</button>
          <div className="form-help">
            <div className="remember">
              <input type='checkbox' />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          <p>Already have account ? <span onClick={()=>setsignup(false)}>Log In </span></p>
          
          
        </div>
      </div>
    </div>}
    {signup===false && <div className='login'>
      <img src={logo} alt='logo' />
      <div className="login-form">
        <h1>Login </h1>
        <form>
         
          <input type='email' placeholder='Email :'/>
          <input type='password' placeholder='Password : '/>
          <button>Login</button>
          <div className="form-help">
            <div className="remember">
              <input type='checkbox' />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          <p>New to CloneFlix ? <span onClick={()=>setsignup(true)}>Sign Up </span></p>
          
          
        </div>
      </div>
    </div>}
    </>
  )
}

export default Login