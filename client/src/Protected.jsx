
import React from 'react'
import { Navigate } from 'react-router-dom'


const Protected = ({children}) => {
    const token= localStorage.getItem("qlftdcfdamxnraaezogjkznrzdjqdgtf")
    
    if(!token )
    {
        return <Navigate to="/login"/>
    }

  return (
    children
  )
}

export default Protected