import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { valContext } from '../App'
import { imageUrl } from '../Url'
import './Movies.css'



function Movies({url}) {
    const {hideSide,searchKey} = useContext(valContext)
    const [isNav, setIsnav]=hideSide
    const [search, setsearch]=searchKey
    const [films, setfilms] = useState([])
    const [filter, setfilter] = useState([])
    useEffect(() => {
      setIsnav(true)
        axios.get(url).then(({data})=>{
            setfilms(data.results)
            // const randomNo =Math.abs(Math.floor(Math.random() * data.results.length-1))
            // console.log(randomNo);
            // const randomData =data.results[randomNo]
            // setrandom(randomData)
            // console.log(random);
          }).catch(err=>{
            console.log(err);
          })
      console.log(search);
      //  setfilms(film=>film.filter(it=>{return(it.title == search)}))   
          let filData = films.filter((it)=>(it.title || it.name).toLowerCase().includes(search.toLowerCase()))
          setfilter(filData)
    }, [url,setIsnav,search,films])

  return (
    <div>
      <h1>Movies</h1>

      <div className='grid-container' style={{flexWrap:'wrap'}} >
        {/* {films?"found":"not"} */}
      {filter.length>0?(filter.map((items)=>{
         
          return(
            <Link to={'/film/'+items.id} > <div className='film-card' key={items.id}>
            <div style={{width:'fit-content'}}><img
            src={imageUrl+items.poster_path}
            alt='poster'
            /></div>
            <div className="film-title">
            {items.title || items.name}

            </div>
            </div></Link>
            )})):(<div style={{textAlign:'center',width:'100vw',padding:'20px'}}>No Result</div>)
      }
            </div>

    </div>
  )
}

export default Movies