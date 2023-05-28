import React from 'react';
import "./sidebar.css"
import {AiOutlineHome} from 'react-icons/ai';
import {MdAppShortcut} from 'react-icons/md';
import {MdOutlineSubscriptions} from 'react-icons/md';
import {MdOutlineLibraryMusic} from 'react-icons/md';
import {MdOutlineVideoSettings} from 'react-icons/md';
import {AiOutlineSetting} from 'react-icons/ai';
import {MdHistory} from 'react-icons/md';
import {BsFlag} from 'react-icons/bs';
import {MdOutlineHelpOutline} from 'react-icons/md';
import {MdOutlineFeedback} from 'react-icons/md';
const sidebar = ({sidebar, handleToggleSidebar}) => {
  return (
    <div className="navbar">
     <nav className = {sidebar? "sidebar open":"sidebar"}
     onClick={()=>handleToggleSidebar(false)}>
      <li>
<AiOutlineHome size="25px"/> <span> Home</span>
    </li>
    <li>
<MdAppShortcut size="25px"/> <span> Shorts</span>
    </li>
    <li>
<MdOutlineSubscriptions size="25px"/> <span> Subsciptions</span>
    </li>
    <hr/>

    <li>
<MdOutlineLibraryMusic size="25px"/> <span> Library</span>
    </li>
    <li>
<MdHistory size="25px"/> <span> History</span>
    </li>
    <li>
<MdOutlineVideoSettings size="25px"/> <span> Your videos</span>
    </li>
    <hr/>
    <li>
<AiOutlineSetting size="25px"/> <span> Setting</span>
    </li>
    <li>
<BsFlag size="25px"/> <span> Report History</span>
    </li>
    <li>
<MdOutlineHelpOutline size="25px"/> <span> Help</span>
    </li>
    <li>
<MdOutlineFeedback size="25px"/> <span> Your videos</span>
    </li>
    
     </nav>
    </div>
  )
}

export default sidebar
