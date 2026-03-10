import React, { useState, useEffect } from "react";

import AboutMe  from "./info-page/about-me";
import FavSites from "./info-page/favorite-sites";
function About(props) {
    //routing

    const [aboutme, setAboutMe] = useState(true);
    const [favSites, setFavSites] = useState(false);
    const [pageName, setPageName] = useState("🍓 about me 🍓");

    const handleInfoPages = (pageName) =>{
    setAboutMe(false);
    setFavSites(false);
    if (pageName == "aboutme"){
      setAboutMe(true);
      setPageName("🍓 about me 🍓");
    }
    if (pageName == "favSites"){
      setFavSites(true);
      setPageName("🍓 favorite sites 🍓");
    }
  }

  const scrollToSubheading = (subheading) =>{
    document.querySelector(`#${subheading}`).scrollIntoView();
  }
    return (
    <div id = "about-wrapper" className= {props.about?'about-wrapper':'page-hidden'}> 
    <button className='x-close' onClick={()=>props.handlePages("main")}>x</button>
     <div className = "title">
            <h1>🍓 Info 🍓</h1>
        </div> 
        <div className = "title-right">
            <h1>{pageName}</h1>
        </div> 
        <div id="info-links" className = "links">
            <p>links</p>
            <div className = "linkswrapper">
                <div onClick={()=> handleInfoPages("aboutme")}>About me</div>
                <div onClick={()=> handleInfoPages("favSites")}>Favorite sites</div>
                <div  onClick={()=> scrollToSubheading("games")}>--- Games</div>
                <div onClick={()=> scrollToSubheading("graphics")}>--- Graphics</div>
                <div onClick={()=> scrollToSubheading("inspo")}>--- Inspo</div>
            </div>
        </div>
        <AboutMe aboutme={aboutme}/>
        <FavSites favSites={favSites}/>
          
        </div>
    );
  }

  export default About;