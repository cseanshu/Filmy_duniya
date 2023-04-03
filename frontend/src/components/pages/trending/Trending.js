import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Singlecontent from '../../singlecontent/Singlecontent'
import '../trending/Trending.css'
import Custompagination from '../../pagination/Custompagination'
const Trending = () => {
    const [content, setcontent] = useState([])
    const [page, setpage] = useState(1)
    const fetchTrending= async()=>{
   const {data}=await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
    //  console.log(data)
    setcontent(data.results)
    };
useEffect(()=>{
    fetchTrending();
},[page])
  return (
    <div><span className='pagetitle'>Trending</span>
    <div className='trending'>
      {
        content&&content.map((c)=>(<Singlecontent key={c.id} id={c.id} poster={c.poster_path} title={c.title||c.name}
          date={c.first_air_date||c.release_date} media_type={c.media_type} vote_average={(c.vote_average.toFixed(1))}
        />))
      }
    </div>
    <Custompagination setpage={setpage}/>
    </div>
  )
}

export default Trending