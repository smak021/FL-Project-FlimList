import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './SideBar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {MdOutlineTheaterComedy,MdOutlineUpdate} from 'react-icons/md'
import {BiTrendingUp} from 'react-icons/bi'
import { valContext } from '../App'

function SideBar() {

    const {value3} = useContext(valContext)
    const [toggle, settoggle] = value3

  return (
    <div className='sidebar-container'>
        <div className="section-container">

        <div className="sidebar-section">
            <div className="section-title">Menu</div>
            <div className={toggle?'section-list open':'section-list close'}>
            <Link to='/'> <div className="normal-list"><AiOutlineHome style={{marginRight:'10px'}}/>Home</div></Link>
            <Link to='/latest'><div className="normal-list"><MdOutlineUpdate style={{marginRight:'10px'}}/>Latest</div></Link>
            <Link to='/comedy'>  <div className="normal-list"><MdOutlineTheaterComedy style={{marginRight:'10px'}}/>Comedy</div></Link>
            <Link to='/popular'><div className="normal-list"><BiTrendingUp style={{marginRight:'10px'}}/>Popular</div></Link>
            </div>
        </div>


        {/* <div className="sidebar-section">
            <div className="section-title">Filter</div>
            <div className="section-list">
                <div className="list">Comedy</div>
                <div className="list">Action</div>
                <div className="list">Adventure</div>
                <div className="list">Sci-Fi</div>
            </div>
        </div> */}
        <hr/>
        <div className="sidebar-section">
            <div className="section-list">
                <div className="normal-list">Settings</div>
                {/* <div className="normal-list">Dark Mode</div> */}
            </div>
        </div>
        </div>
    </div>
  )
}

export default SideBar