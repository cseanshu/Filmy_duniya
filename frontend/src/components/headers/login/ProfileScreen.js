import React from 'react'
import { useSelector } from 'react-redux'
import { auth } from '../../../firebase'
import { selectUser } from '../../feature/userSlice'
import Header from '../Header'
import PlainScreen from './PlainScreen'
import './profileScreen.css'
const ProfileScreen=()=> {
    const user=useSelector(selectUser)
  return (
    <div className='profile_screen'> 
    <div className='profilescreen_body'>
        <h1>Edit Profile</h1>
        <div className='profilescreen_info'>
            <img src='https://i.pinimg.com/736x/c4/88/34/c488340ad56e5454f4576f6c708b63aa.jpg'/>
        <div className='profilescreen_details'>
            <h2>{user.email}</h2>
            <div className='profilescreen_plans'>
            <h3>plans</h3>
            <PlainScreen/>
            <button className='profilescreen_button' onClick={()=>auth.signOut()}>signOut</button>
            </div>
        </div>
        </div>
    </div>

    </div>
  )
}

export default ProfileScreen