import React, { useEffect } from 'react';
import './App.css';
import Header from './components/headers/Header';
import LabelBottomNavigation from './components/Mainnav';
import {BrowserRouter, Route} from 'react-router-dom'
import { Container } from '@mui/system';
import Trending from './components/pages/trending/Trending';
import Movies from './components/pages/movies/Movies';
import Series from './components/pages/series/Series';
import Search from './components/pages/search/Search';
import {  Routes } from "react-router"
import { Button } from '@mui/material';
import { Login } from './components/headers/login/Login';
import { auth } from './firebase';
import {useDispatch, useSelector} from 'react-redux'
import { login, logout, selectUser } from './components/feature/userSlice';
import ProfileScreen from './components/headers/login/ProfileScreen';
// console.log(`${process.env.REACT_APP_API_KEY}`)
function App() {
  const user=useSelector(selectUser)
  // const user=null;
  // const user='null';
  const dispatch=useDispatch();
  useEffect(() => {
    
   const unsubscribe=auth.onAuthStateChanged((userAuth)=>{
    if(userAuth)
    //logged in
    // console.log(userAuth)
    dispatch(login({
      uid:userAuth.uid,
      email:userAuth.email,
    }));
    else
    {
      //logged out
      dispatch(logout());
    }
   })
    return unsubscribe;
  }, [dispatch])
  
  return (
    !user?<Login/>:(<>
      <Header/>
      <div className="app">    
      <Container className='app2'> 
      {/* <Switch> */}
      {/* <BrowserRouter> */}
      <Routes>
      <Route path= '/' element={<Trending/>}  exact/>
        <Route path= 'movies' element={<Movies/>}/>
        <Route path= 'Tvseries' element={<Series/>}/>
        <Route  path= '/profile' element={<ProfileScreen/>}/>
        <Route path= '/search' element={<Search/>}/>
    </Routes>
        {/* </BrowserRouter> */}
    {/* </Switch> */}
      </Container>
      </div>
      <LabelBottomNavigation/>
      </>)
  );
}

export default App;
