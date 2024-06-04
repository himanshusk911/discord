import React from 'react'
import "./Login.css"
import { Button } from '@mui/material'
import { auth, provider } from './Firebase'


function Login() {
    const signIn=()=>{
     auth.signInWithPopup(provider).catch((error)=>alert(error.message));
    }
  return (
    <div className='login'><h1>Login</h1>
    <div className="login_logo">
        <img src="https://1000logos.net/wp-content/uploads/2021/06/Discord-logo-500x281.png"
        alt='discordimage'/>
    </div>
    <Button onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login