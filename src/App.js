import './App.css';
import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { ComedyFilms, LatestFilms, PopularFilms } from './Url'
import Home from './Home/Home'
import './NavBar/NavBar.css'
// import PopularMovies from './Movies/PopularMovies'
// import ComedyMovies from './Movies/ComedyMovies'
// import NavBar from './NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import LatestMovies from './Movies/LatestMovies';
import SideBar from './NavBar/SideBar';
import MovieDetails from './Movies/MovieDetails';
import Movies from './Movies/Movies';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsSearch } from 'react-icons/bs';

const valContext = createContext()


function App() {
  const [random, setrandom] = useState({})
  const [toggle, settoggle] = useState(false)
  const [latestfilms, setlatestfilms] = useState([])
  const [comedyFilms, setcomedyFilms] = useState([])
  const [popularfilms, setpopularfilms] = useState([])
  const [isNav, setIsnav] = useState(true)
  const [search, setsearch] = useState("")
  // let isNav=true;
  // const New=popularfilms[randomnum]
  useEffect(() => {
    axios.get(LatestFilms).then(({data})=>{
      setlatestfilms(data.results)
      const randomNo =Math.abs(Math.floor(Math.random() * data.results.length-1))
      // console.log(randomNo);
      const randomData =data.results[randomNo]
      setrandom(randomData)
      // console.log(random);
    }).catch(err=>{
      console.log(err);
    })

    axios.get(PopularFilms).then(({data})=>{
      setpopularfilms(data.results)
     

    }).catch(err=>{
      console.log(err);
    })

    axios.get(ComedyFilms).then((result)=>{
      setcomedyFilms(result.data.results)
    }).catch(err=>{
      console.log(err);
    })

  //   const randomNo = Math.floor(Math.random() * popularfilms.length-1)
  //   setrandomnum(randomNo)
  // console.log(randomnum);
  //   console.log(popularfilms[randomnum]);
  //   setrandom()
    // console.log('random after',random);
  }, [])


  return (
    <div className="App">
     


     <valContext.Provider value={{value1:[latestfilms, setlatestfilms],value2:[comedyFilms, setcomedyFilms],value3:[popularfilms, setpopularfilms],value4:[toggle, settoggle],
      value5:[random, setrandom],hideSide:[isNav, setIsnav],searchKey:[search, setsearch]}}>
       <BrowserRouter>
       <div className="left">
       {isNav?
       <SideBar/>
       :""}
       </div>
       <div className="right" style={{width:'100%',overflow:'hidden'}}>
       
       
       <div className='top-bar'>
    <div className="ham-menu">
      <GiHamburgerMenu/>
    </div>
    <div className="search">
    <input type="text" placeholder='Movies' onChange={(evt)=>{setsearch(evt.target.value)}} name="search" id="" />
    <div className="icon">
      <BsSearch/>
    </div>
    </div>
   </div>

       
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        {/* <Route path='/popular' element={<PopularMovies/>}></Route> */}
        {/* <Route path='/latest' element={<LatestMovies/>}></Route> */}
        <Route path='/film/:id' element={<MovieDetails hideNav={[isNav, setIsnav]}/>}></Route>
        {/* <Route path='/comedy' element={<ComedyMovies/>}></Route> */}
        <Route path='/test' element={<SideBar/>}></Route>
        <Route path='/latest' element={<Movies url={LatestFilms}/>}></Route>
        <Route path='/comedy' element={<Movies url={ComedyFilms}/>}></Route>
        <Route path='/popular' element={<Movies url={PopularFilms}/>}></Route>
      </Routes>
      </div>
    </BrowserRouter>
    </valContext.Provider>  


    </div>
  );
}

export default App;
export {valContext}
