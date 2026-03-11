import images from "../../images";


function AboutMe(props) {
    return (
       <div id = "about-me-wrapper" className= {props.aboutme?'info-subpage-wrapper':'page-hidden'}> 
         {/* <!-- TITLE --> */}
       
        
        {/* ABOUT SECTION */}
         {/* MY INFO SUMMARY */}
         <div id="status-wrapper-aboutme-positioner" className="about-me">
            <div  className="status-wrapper">
            <p id="status-title">about</p>
                <div className = "status">
                <div id = "status-details">hiiiiii</div>
                <div id = "status-message">
                    <p>i actually don't know what to put here :)</p>
                </div>
                </div>
            </div>
            {/* MY BUTTON */}
            <div id="status-wrapper-button-positioner" className="status-wrapper">
            <p id="status-title">button</p>
                <div className = "status">
                <div id = "status-details">it's still a wip, but the URL will remain the same when it's updated.</div>
               
                <div id = "status-message">
                     <div id = "site-button">
                        <img src={images.button.url}></img>
                    </div>
                    <textarea id="code-snippet" rows="2" cols="11" readOnly="">
                        {'<a href="https://www.marketchipping.xyz" title="marketchipping.xyz"><img src="" width="88" height="31"></a>'}
                    </textarea>
                </div>
                </div>
            </div>
          </div>
          </div>
    );
  }

  export default AboutMe;