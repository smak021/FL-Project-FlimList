import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { valContext } from '../App'
import { imageUrl } from '../Url'




function ComedyMovies() {
  const {value2} = useContext(valContext)
  const [comedyfilms, setcomedyfilms] = value2


  return (
    <div>
      <h1>Comedy Movies</h1>

      <div className='grid-container' style={{flexWrap:'wrap'}} >
      {comedyfilms.map((items)=>{
          return(
            <Link to={'/film/'+items.id} ><div className='film-card' key={items.id}>
            <div style={{width:'fit-content'}}><img
            src={imageUrl+items.poster_path}
            alt='poster'
            /></div>
            <div className="film-title">
            {items.name}

            </div>
            </div>
            </Link>
            )})}
            </div>
    </div>
  )
}

export default ComedyMovies