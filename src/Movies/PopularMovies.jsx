import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { valContext } from '../App'
import { imageUrl } from '../Url'

function PopularMovies() {

  const {value3} = useContext(valContext)
  const [popularfilms, setpopularfilms] = value3


  return (
    <div><h1>Popular Movies</h1>
    
    <div className='grid-container' style={{flexWrap:'wrap'}} >
      {popularfilms.map((items)=>{
          return(
           <Link to={'/film/'+items.id} > <div className='film-card' key={items.id}>
            <div style={{width:'fit-content'}}><img
            src={imageUrl+items.poster_path}
            alt='poster'
            /></div>
            <div className="film-title">
            {items.title}

            </div>
            </div>
            </Link>
            )})}
            </div>

    </div>
    
  )
}

export default PopularMovies