import React from 'react'
import '../singlecontent/Singlecontent.css'
import { img_300,unavailable } from '../config/config'
import SimpleBadge from '../pages/Badge'
import ContentModels from '../contentmodel/ContentModels'
// import ContentModel2 from '../contentmodel/ContentModels'
const Singlecontent = ({id,poster,title,date,media_type,vote_average}) => {
  return (
    <ContentModels  media_type={media_type} id={id}>
    {/* // <ContentModel> */}
    <SimpleBadge badge={vote_average} />
    <img className='poster' src={poster?`${img_300}/${poster}`:unavailable} alt={title}></img>
    <b className='title'>{title}</b>
    <div className='parentsubtitle' >
    <span className='subtitle'>{media_type=='tv'?'Tv-series':'Movie'}</span>
    <span className='subtitle'>{date}</span>
    </div>
    </ContentModels>
  )
}

export default Singlecontent