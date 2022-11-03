import React, { useContext, useEffect, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi';
import { Link, useParams } from 'react-router-dom';
import { valContext } from '../App'
import { imageUrl } from '../Url';
import './MovieDetails.css'
function MovieDetails() {
    const param = useParams().id
    const {value1,value2,value3,hideSide} = useContext(valContext)
    const [isNav, setIsnav]=hideSide
    const [film, setfilm] = useState([])
    useEffect(() => {
      setIsnav(false)
      const [pfilm, setpfilm] = value3
      const [lfilm, setlfilm] = value1
      const [cfilm, setcfilm] = value2
      setfilm([...pfilm, ...lfilm, ...cfilm])

    }, [value3, value1, value2,film,setIsnav])
    
  return (
    <div className='movie-container'>
        {/* {[value1[0],value2[0],value3[0]].filter((it)=>console.log(it))} */}
        {film.filter((itr)=>itr.id===parseInt(param) ).map(item=>{
          
            return(
            <div>
              <Link to='/'><div className='back-icon'><BiArrowBack/></div></Link>
              <div className='film-cover'>
              <img src={imageUrl+item.backdrop_path} alt='cover'/>
              <div className="film-over-data">
                <div className="film-image">
                <img src={imageUrl+item.poster_path} alt='film-poster'/>
              </div>
                <div className="film-short">
                  <div className="film-name">
                    {item.title || item.name}
                  </div>
                  <div>
                  Rating: {(item.vote_average)}
                  </div>
                  <div className="release-date">
                    {item.release_date || item.first_air_date}
                  </div>
                 
                </div>
              </div>
              </div>
              <div className='film-content'>
                <div className="content-title">Overview</div>
                {item.overview}
              </div>
                {/* {item.title}<br/>
                {item.overview}<br/>
                {item.release_date}<br/>
                {item.vote_average}<br/>
                {item.backdrop_path}<br/>
                {item.popularity}<br/>
                {item.poster_path}<br/> */}

            </div>
            )
        })}
        </div>
  )
}
export default MovieDetails