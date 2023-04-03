import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Movie from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { useNavigate } from "react-router-dom"
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
const navigate=useNavigate()
  useEffect(() => {
    if(value==0) navigate('/')
    else if(value==1) navigate('/movies')
    else if(value==2) navigate('/Tvseries')
    else if(value==3) navigate('/search')


  }, [value])
  

  const bottom={
      backgroundColor:'#2d313a'
  }
  const bottomaction={
    color:'white',
  }
  return (
    <Box sx={{ width: '100%',
    position:'fixed',
     bottom:0,
     color:'white',
     zIndex:100 
     }}>
      <BottomNavigation
        showLabels
        style={bottom}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction style={bottomaction }  label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction style={bottomaction} label="Movie" icon={<Movie />} />
        <BottomNavigationAction style={bottomaction} label="Tv-series" icon={<TvIcon/>} />
        <BottomNavigationAction style={bottomaction} label="Search" icon={<ManageSearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}