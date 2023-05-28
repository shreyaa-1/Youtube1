import React , {useState} from "react";
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import {Container} from 'react-bootstrap';
import Video from './components/videos/video';
import Homescreen from './components/screen/homescreen';
import './app.css';
const App=()=> {
  const [sidebar, toggleSidebar]= useState(false);

  const handleToggleSidebar= ()=>toggleSidebar(value=>!value)
  return (
    <>
    <Header className="header" handleToggleSidebar={handleToggleSidebar}/>
    <div className="app-container">

   <Sidebar className = "sidebar" sidebar={sidebar} handleToggleSidebar= {handleToggleSidebar}
     />
     <Video/>
     </div>
   
      
     
    </>
  );
}

export default App;

