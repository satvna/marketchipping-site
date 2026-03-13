import React, { useState, useEffect } from "react";

import AboutMe  from "./info-page/about-me";
import FavSites from "./info-page/favorite-sites";
function About(props) {
    //routing

    const [aboutme, setAboutMe] = useState(true);
    const [favSites, setFavSites] = useState(false);
    const [pageName, setPageName] = useState("about me");

    
  const scrollToSubheading = (subheading) =>{
    document.querySelector(`#${subheading}`).scrollIntoView();
  }

  const handleInfoPages = (pageName) =>{
    setAboutMe(false);
    setFavSites(false);

    if (pageName == "aboutme"){
      setAboutMe(true);
      setPageName("about me");
    }
    if (pageName == "favSites"){
      setFavSites(true);
      setPageName("favorite sites");
    }
    if (pageName == "games" || pageName == "graphics" || pageName == "inspo"){
      setFavSites(true);
      setPageName("favorite sites");
      scrollToSubheading(pageName);
    }
  }

    return (
    <div id = "about-wrapper" className= {props.about?'about-wrapper':'page-hidden'}> 
    <button className={favSites?'x-close-favsites':'x-close'} onClick={()=>props.handlePages("main")}>{'<'}--- back to home</button>
     <div className = "title">
            <h1>🍓 info 🍓</h1>
        </div> 
        <div className = "title-right">
            <h1>{pageName}</h1>
        </div> 
        <div id="info-links" className = "links">
            <p>links</p>
            <div className = "linkswrapper">
                <div onClick={()=> handleInfoPages("aboutme")}>About me</div>
                <div onClick={()=> handleInfoPages("favSites")}>Favorite sites</div>
                <div  onClick={()=> handleInfoPages("games")}>--- Games</div>
                <div onClick={()=> handleInfoPages("graphics")}>--- Graphics</div>
                <div onClick={()=> handleInfoPages("inspo")}>--- Inspo</div>
            </div>
        </div>
        <AboutMe aboutme={aboutme}/>
        <FavSites favSites={favSites}/>
          
        </div>
    );
  }

  export default About;