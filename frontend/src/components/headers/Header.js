import React from 'react'
import { useNavigate } from 'react-router';
import './Header.css';
import { Login } from './login/Login';
import { Premium } from './premium/Premium';
import { colors } from '@mui/material';
const Header = () => {
  const header1={
    backgroundColor:'#39445a'
  }
  const button={
    cursor:'pointer',
    padding: '12px 14px 13px 16px',
    color:'black',
    border:'none',
    borderRadius:'5px',
    marginBottom:'6px',
    fontSize:'15px',
    fontWeight:'600',
    fontFamily: 'Merriweather'
    

  }
  const navigate=useNavigate();
  return (<>
    {/* <span  style={header1}>
    <div  style={{backgroundColor:'yellow'}}>
   <Theme/>
    </div>
    <div style={{backgroundColor:'blue'}}>
    <span style={{marginLeft:'660px'}}>
    <Login/>
    </span>
   <span  style={{marginRight:'40px'}}><Premium/> </span>
   </div>
     </span> */}
     <div className='header'style={header1} >
     {/* <div className='onedirection'> */}
     <span onClick={()=>window.scroll(0,0)} style={{cursor: 'pointer'}}>FilmyDuniya</span>
     {/* <div style={{marginRight:'10px'}}><Theme/></div> */}
     {/* <div style={{marginRight:'30px'}}><img src='https://i.pinimg.com/736x/c4/88/34/c488340ad56e5454f4576f6c708b63aa.jpg' width="43px" onClick={()=>navigate('/profile')} style={{cursor:'pointer'}}></img></div> */}
     <div style={{marginRight:'30px'}}><button  onClick={()=>navigate('/profile')} style={button}>Profile</button></div>
       </div>
     {/* </div> */}
    </>
 
  )
}

export default Header

