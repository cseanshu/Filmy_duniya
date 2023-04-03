import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Genres from '../../genres/Genres'
import useGenre from '../../genres/useGenre/useGenre'
import Custompagination from '../../pagination/Custompagination'
import Singlecontent from '../../singlecontent/Singlecontent'

const Series = () => {
  const [page, setpage] = useState(1)
  const [content, setcontent] = useState([])
  const [noofpages, setnoofpages] = useState(1)
  const [genres, setGenres] = useState([])
  const [selectedGenres, setSelectedGenres] = useState([])
  const genreforURL=useGenre(selectedGenres)
  const fectchMovies= async()=>{
   const {data}=await axios.get(`
   https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`)
  //  console.log(data)
   setcontent(data.results)
   setnoofpages(data.total_pages)
  };
  useEffect(()=>{
    fectchMovies();

  },[genreforURL,page])
  return (
    <div>
    <div><span className='pagetitle'>Series</span>
    <Genres type='tv'
      selectedgenres={selectedGenres}
      setselectedgenres={setSelectedGenres}
      genres={genres}
      setGenres={setGenres} 
      setpage={setpage} />
    <div className='trending'>
      {
        content&&content.map((c)=>(<Singlecontent key={c.id} id={c.id} poster={c.poster_path} title={c.title||c.name}
          date={c.first_air_date||c.release_date} media_type='tv' vote_average={(c.vote_average.toFixed(1))}
        />))
      }
    </div>
    { noofpages>1&&(
    <Custompagination setpage={setpage} noofpages={noofpages}/>)}
    </div>
    </div>

  
  )
}

export default Series
