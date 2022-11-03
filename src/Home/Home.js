import React, {  useContext, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import { valContext } from '../App'
import { imageUrl } from '../Url'
import './Home.css'
// import picholder from '../../src/assets/download.png'

function Home() {
  const scrollElement = useRef(null)
  const scrollLeft = () => {

    scrollElement.current.scrollLeft += 302

}
  const {value1,value2,value3,value5,hideSide} = useContext(valContext)
  const [valfive, setvalfive] = value5
  const [isNav, setIsnav]=hideSide
  useEffect(() => {
    setIsnav(true)
  }, [setIsnav])
  

  return (
    <div className='home-container'>
      <Link to={'/film/'+valfive.id}><div className='banner'>
        <div className='banner-img'>
        <img src={imageUrl+valfive.backdrop_path || imageUrl+valfive.poster_path} alt='film-cover'/>
        </div>
        <div className='banner-text'>
          {valfive.title}
          <div className="description">
            {valfive.overview}
          </div>
          </div>
      </div></Link>
      <div style={{display:'flex',justifyContent:'space-between'}}>
          <div className="title">
          Trending
          </div>
         <Link to='/popular'><div className="see-more">See More &gt;</div></Link> 
          </div>
      <div className='film-container' ref={scrollElement}>
        {/* <button className='right-button' onClick={scrollLeft}>Left</button> */}
        {value3[0].slice(0,6).map((items,index)=>{
          return(
            <div>
            <Link to={'/film/'+items.id} ><div className='film-popular-card' key={items.id}>
              {/* <div className='no'>{index+1}</div> */}
            <div className='film-img' style={{width:'fit-content'}}><img
            src={imageUrl+items.poster_path}
            alt='poster'
            /></div>
            <div className="film-title">
            <div className="head">
              {items.title}
            </div>
            <div className="date">
              {items.release_date.slice(0,4)}
            </div>
            </div>
            </div>
            </Link>
            </div>
            )})}

            <button className='left-button' onClick={scrollLeft}>&gt;&gt;</button>
          </div>


          <div style={{display:'flex',justifyContent:'space-between'}}>
          <div className="title">
          Latest
          </div>
         <Link to='/latest'><div className="see-more">See More &gt;</div></Link> 
          </div>
      <div className='film-container' >
        {value1[0].slice(0,8).map((items,index)=>{
          return(
            <Link to={'/film/'+items.id} ><div className='film-card' key={items.id}>
              {/* <div className='no'>{index+1}</div> */}
            <div className='film-img' style={{width:'fit-content'}}><img
            src={imageUrl+items.poster_path}
            alt='poster'
            /></div>
            <div className="film-title">
            <div className="head">
            {items.title}
              </div>
              <div className="date">
              {items.release_date.slice(0,4)}
              </div>
            </div>
            </div>
            </Link>
            )})}
          </div>
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <div className="title">
          Comedy
          </div>
         <Link to='/comedy'><div className="see-more">See More &gt;</div></Link> 
          </div>
        <div className='film-container' >
        {value2[0].slice(0,8).map((items)=>{
          return(
            <Link to={'/film/'+items.id} > <div className='film-card' key={items.id}>
            <div className='film-img' style={{width:'fit-content'}}><img
            src={imageUrl+items.poster_path}
            alt='poster'
            className='background'
            /></div>
            <div className="film-title">
              <div className="head">
            {items.name}
              </div>
              <div className="date">
              {items.first_air_date.slice(0,4)}
              </div>
            </div>
            </div>
            </Link>
        )})}
        </div>
        </div>
  )
}

export default Home