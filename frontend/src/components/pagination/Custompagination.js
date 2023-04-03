import { ThemeProvider } from '@emotion/react'
import {  createTheme, Pagination } from '@mui/material'
// import { dark } from '@mui/material/styles/createPalette'
import React from 'react'

const Custompagination = ({setpage,noofpages=10}) => {

   const handlechange=(page,)=>{
    setpage(page)
    // setnoofpages(page)
    window.scroll(0,0);
   }
   const darktheme=createTheme({
    palette:{
        type:'dark'
    }
   })
   const pagination={
    width:'100%',
    display:'flex',
    justifyContent:'center',
    marginTop:'10px',
   }
  return (
    <ThemeProvider theme={darktheme}>
    <div style={pagination}>
    <Pagination count={noofpages} onChange={(e)=>handlechange(e.target.textContent)}
     hideNextButton
     hidePrevButton
     color='primary'
     />
    </div>
     </ThemeProvider>
  )
}

export default Custompagination