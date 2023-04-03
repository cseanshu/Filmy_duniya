import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
// import "react-alice-carousel/lib/scss/alice-carousel.scss";
import { img_300, noPicture } from '../../config/config';
import './Carousel.css'
const handleDragStart = (e) => e.preventDefault();
// const items = [
//   <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
//   <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
//   <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
// ];
const responsive={
  0:{
    items:3
  },
  512:{
   items:5
  },
  1024:{
    items:7
  }
}
const Carousel = ({media_type,id}) => {
  const [credit, setcredit] = useState()
  const items=credit?.map((c)=>(
  <div className='CarouselItems'>
<img src={c.profile_path?`${img_300}/${c.profile_path}`:noPicture} alt={c?.name}
  onDragStart={handleDragStart}
  className='CarouselItem__img'
/>
<b className='CarouselItem__txt'>{c?.name}</b>
  </div>))
  const fetchCredits= async()=>{
  const {data}=await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
  setcredit(data.cast)
  }
  useEffect(() => {
   fetchCredits();
  }, [])
  
  return (
    <AliceCarousel autoPlay 
    responsive={responsive}
    infinite
    disableDotsControls
    disableButtonsControls
    mouseTracking items={items} />
  );
}
export default Carousel