import images from "../../images";


function AboutMe(props) {
    return (
       <div id = "about-me-wrapper" className= {props.aboutme?'info-subpage-wrapper':'page-hidden'}> 
         {/* <!-- TITLE --> */}
       
        
        {/* ABOUT SECTION */}
         {/* MY INFO SUMMARY */}
         <div id="status-wrapper-aboutme-positioner" className="about-me">
            <div  className="aboutme-status-wrapper">
            <p id="status-title">about</p>
                <div className = "status">
                <div id = "status-details"></div>
                <div className = "status-message" id="about-me-description">
                    <p>welcome to my personal site!</p>
                    <p>this website adheres to industry standard mobile-second web design. feel free to view on your phone for a mobile-second browsing experience.</p>
                    <p>it's still under construction (but aren't they all?)</p>

                    <p>facts about me:</p>
                    <p>- i love anime, video games, and i don't have a personality outside of that.</p>
                    <p>- i only know how to center divs using flexbox</p>
                    <p>- i love strawberries, but perhaps not to the extent my site implies</p>

                </div>
                </div>
            </div>
           
            {/* MY BUTTON */}
            <div id="status-wrapper-button-positioner" className="aboutme-status-wrapper">
            <p id="status-title">button</p>
                <div className = "status">
                <div id = "status-details"></div>
               
                <div className = "status-message" id="button-container">
                     <div id = "site-button">
                        <a href="https://marketchipping.xyz" title="marketchipping.xyz"><img src={images.button.url} width="88" height="31"/></a>
                    </div>
                    <textarea id="code-snippet" rows="2" cols="11" readOnly="">
                        {'<a href="https://marketchipping.xyz" title="marketchipping.xyz"><img src="http://marketchipping.xyz/images/marketchipping.gif" width="88" height="31"/></a>'}
                    </textarea>
                </div>
                </div>
            </div>
             
          </div>
          <div id="pagedoll">
                <img src={images.aya.url}></img>
            </div>
          </div>
    );
  }

  export default AboutMe;