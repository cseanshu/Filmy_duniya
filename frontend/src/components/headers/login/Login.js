import { Margin } from '@mui/icons-material'
import { Button } from '@mui/material'
import React, { useState } from 'react'
import'./login.css'
import SignupScreen from './SignupScreen'
export const Login = () => {
  const [signin, setsignin] = useState(false)
  return (
    <div className='login'>
  <div className='login_gradient'>
    <div className='login_container'>
  <span className='heading_name'>FilmyDuniya </span>
        <button className='signin_button' onClick={()=>setsignin(true)}>signIn</button>
    </div>
    <div className='loginscreen_body'>
     {signin?<SignupScreen/>:
     <>
        <h1>Unlimited flims TV programs,and
        more.</h1>
        <h2> Go Unlimited, watch anywhere</h2>
        <h3>ready to watch? Enter your email address to watch or restart
         your membership</h3>
         <div className='loginscreen_input'>
          <form>
            <input type='email' placeholder='Email Address'/>
            <button className='loginscreen_getstarted'
             onClick={()=>setsignin(true)}
            >GET STARTED</button>
          </form>
         </div>
      </>
     }
    </div>
    </div>
<div className='credit'>made with💖mishra_</div>
  </div>
  )
}
