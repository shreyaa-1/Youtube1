import React , { useState , useEffect} from 'react'
import "./header.css";
import {FaBars} from "react-icons/fa";
import { RxHamburgerMenu } from 'react-icons/rx';
import {BsMic} from 'react-icons/bs';
import {BiSearch} from 'react-icons/bi';
import {BiVideoPlus} from 'react-icons/bi'
import {BsSearch} from 'react-icons/bs';
import {AiOutlineBell} from 'react-icons/ai';

const header = ({handleToggleSidebar}) => {

  return (
    <div className="header-container">
      <FaBars className= "header__menu"
      onClick={()=>handleToggleSidebar()} />
   <div className="left-header">

  
<img src = "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
alt="yt_logo"
className="yt_logo"/>
</div>

<div className="header-center">
<div className="search input-box">
   <form>
     <input type="text" placeholder="Search" />
     <button class="search-btn"><i className="react-icons"><BiSearch size="1.5em"/></i></button>
   </form>
 
 </div>

<button className="mic"><BsMic size="20px"/></button>
 </div>
     <div className="right-navbar">
  
    <button className="video-btn"><i className="react-icons"><BiVideoPlus size="1.8em"/></i></button>
    <button className="bell-btn"><i className="react-icons"><AiOutlineBell size="1.8em"/></i></button>
    <img className="profile-btn" src="https://www.shutterstock.com/image-vector/vector-user-icon-600w-162433460.jpg" />
    </div>
   

    </div>
  )
}


export default header;
