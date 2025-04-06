import React, { useEffect, useState } from 'react'
import "./Login.css"
import logo from "../../assets/cloneflix.png"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
const Login = () => {
  const [signup,setsignup]=useState(true)
  const navigate=useNavigate()
  const [signupauth,setSignupAuth]=useState({
    name:"",email:"",password:""
  })
const [login,setLogin]=useState({
  email:"",password:""
})
const handleLogin=(e)=>{
  setLogin({...login,[e.target.name]:e.target.value})
}
const verify=async()=>{
  try {
    const res= await axios.get("http://localhost:7676/auth/verify",{withCredentials:true})
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}
useEffect(()=>{
  verify()
})
const SubmitLogin=async(e)=>{
  try {
    e.preventDefault()
    const res=await axios.post("http://localhost:7676/auth/login",login,{withCredentials:true})
    const data2=res.data
    console.log(data2)
    
    if(data2.success===true)
      {

        localStorage.setItem("qlftdcfdamxnraaezogjkznrzdjqdgtf",data2.token)
        navigate("/")
        
        
       
      }
    
  } catch (error) {
    console.log(error)
    toast.error("Invalid Email or Password",{position:"top-right"})
  }
}
  const handleSignup=(e)=>{
    
    setSignupAuth({...signupauth,[e.target.name]:e.target.value})
  }

  const SignupSubmit=async(e)=>{
    try {
      e.preventDefault()
      const res= await axios.post("http://localhost:7676/auth/signup",signupauth,{withCredentials:true})
      const data2=res.data
      console.log(data2.response)
     if(data2.success===true)
     {
      toast.success(data2.message,{position:"top-right"})
      setsignup(false)
     }
     else
     {
      toast.error("User Already Exists",{position:"top-right"})
     }
      
      
    } catch (error) {
      console.log(error)
      toast.error("User Already Exists or Weak Password",{position:"top-right"})
    }
  }
  
  return (
    <>
    { signup===true && <div className='login'>
      <img src={logo} alt='logo' />
      <div className="login-form">
        <h1>Sign Up</h1>
        <form onSubmit={SignupSubmit}>
          <input type='text' placeholder='Name :'  value={signupauth.name} name='name' onChange={handleSignup}/>
          <input type='email' placeholder='Email :'value={signupauth.email} name='email' onChange={handleSignup}/>
          <input type='password' placeholder='Password : ' value={signupauth.password} name='password' onChange={handleSignup}/>
          <button type='submit'>Sign Up</button>
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
        <form onSubmit={SubmitLogin}>
         
          <input type='email' name='email' value={login.email} onChange={handleLogin} placeholder='Email :'/>
          <input type='password' name='password' value={login.password} onChange={handleLogin} placeholder='Password : '/>
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