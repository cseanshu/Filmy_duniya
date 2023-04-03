import { Chip } from '@mui/material';
import axios from 'axios'
import React, { useEffect } from 'react'
// const  genres=[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]
const Genres = ({
  selectedgenres,
  setselectedgenres,
  genres,
  setGenres,
  type,
  setpage
}) => {
      const handleAdd=(genre)=>{
        setselectedgenres([...selectedgenres,genre])
        setGenres(genres.filter((g)=>g.id!=genre.id))
        setpage(1);
      }
      const handleDelelte=(genre)=>{
      setselectedgenres(selectedgenres.filter((g)=>g.id!=genre.id))
      setGenres([...genres,genre])
      setpage(1)
      }
      const fetchGenres=async()=>{
       const {data}=await axios.get(`
       https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US `);
       setGenres(data.genres);
      };
      console.log(genres)
    useEffect(()=>{
        fetchGenres();
        return ()=>{setGenres({})};
  
      },[])
    
  return (
    <div style={{padding:'6px 0'}}>
     {
       selectedgenres && selectedgenres.map((genre)=>(<Chip style={{backgroundColor:'#194959',color:'white',margin:2}} key={genre.id} label={genre.name} clickable onDelete={()=>handleDelelte(genre)}/>))
     }
     {
       genres && genres.map((genre)=>(<Chip style={{backgroundColor:'white' ,margin:2}} key={genre.id} label={genre.name} clickable onClick={()=>handleAdd(genre)} />))
     }
    </div>
  )
}

export default Genres