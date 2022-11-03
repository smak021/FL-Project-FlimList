import React, { createContext, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import {
  BsSearch
} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import { valContext } from '../App'

const NavBar = () => {
  const {value3} = useContext(valContext)
  const [toggle, settoggle] = value3
  const [searchkey, setsearchkey] = useState("")
  const toggleSB=()=>{
    settoggle(!toggle)
    console.log(toggle);
  }
  const search = (event)=>{
    console.log(evt.target.value);
  }

  return (
    
   <div className='top-bar'>
    <div className="ham-menu">
      <GiHamburgerMenu onClick={toggleSB}/>
    </div>
    <div className="search">
    <input type="text" placeholder='Movies' onChange={(evt)=>{console.log(evt.target.value)}} name="search" id="" />
    <div className="icon">
      <BsSearch/>
    </div>
    </div>
   </div>
    

  )
}

export default NavBar