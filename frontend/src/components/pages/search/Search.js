import { Button, createTheme, Tab, Tabs, TextField, ThemeProvider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios'
import Singlecontent from '../../singlecontent/Singlecontent';
import Custompagination from '../../pagination/Custompagination';
const darkTheme=createTheme({
  palette:{
    type:'dark',
    primary:{
      main:'#fff'
     
    }
  }
})

const Search = () => {
  const [type, settype] = useState(0)
  const [page, setpage] = useState(1)
  const [searchText, setsearchText] = useState('')
  const [content, setcontent] = useState('')
  const [noofpages, setnoofpages] = useState()
  const fetchSearch= async()=>{
    const {data}=await axios.get(`https://api.themoviedb.org/3/search/${type?"tv":"movie"}?api_key=${process.env.REACT_APP_API_KEY }&language=en-US&query=${searchText}&page=${page}&include_adult=false`)
     setcontent(data.results)
     setnoofpages(data.total_pages)
   }
   useEffect(()=>{
    window.scroll(0,0);
    fetchSearch();
   },[type,page])
  return (
    <div>
    <ThemeProvider theme={darkTheme}>
    <div style={{display:'flex', margin:'15px 0'}} >
    <TextField className='searchBox' label='Search'
      variant='filled' style={{flex:1}} onChange={(e)=>setsearchText(e.target.value)}
    />
   <Button  variant='contained' style={{marginLeft:10}} onClick={fetchSearch}><SearchIcon/> </Button>
    </div>
    <Tabs value={type} indicatorColor='primary' textColor='primary'
     centered onChange={(event,newvalue)=>{
      settype(newvalue)
      setpage(1)
     }}
     >
    <Tab style={{width:'50%', color:'white'}} label='search-movies'/>
      <Tab style={{width:'50%',color:'white'}} label='search-tvseries' />

    </Tabs>
   </ThemeProvider>
   <div className='trending'>
      {
        content&&content.map((c)=>(<Singlecontent key={c.id} id={c.id} poster={c.poster_path} title={c.title||c.name}
          date={c.first_air_date||c.release_date} media_type={type?'tv':'movie'} vote_average={(c.vote_average.toFixed(1))}
        />))
      }
      {searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
    </div>
    { noofpages>1&&(
    <Custompagination setpage={setpage} noofpages={noofpages}/>)}
    </div>
  )
}

export default Search