import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { valContext } from '../App'
import { imageUrl } from '../Url'
import './Movies.css'





function LatestMovies() {

  const {value1} = useContext(valContext)
  const [latestfilms, setlatestfilms] = value1


  return (
    <div>
      <h1>Latest Movies</h1>

      <div className='grid-container' style={{flexWrap:'wrap'}} >
      {latestfilms.map((items)=>{
          return(
            <Link to={'/film/'+items.id} > <div className='film-card' key={items.id}>
            <div style={{width:'fit-content'}}><img
            src={imageUrl+items.poster_path}
            alt='poster'
            /></div>
            <div className="film-title">
            {items.title}

            </div>
            </div></Link>
            )})}
            </div>

    </div>
  )
}

export default LatestMovies