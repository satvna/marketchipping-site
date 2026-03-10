

function AboutMe(props) {
    return (
       <div id = "about-me-wrapper" className= {props.aboutme?'info-subpage-wrapper':'page-hidden'}> 
         {/* <!-- TITLE --> */}
       
        
        {/* ABOUT SECTION */}
         {/* MY INFO SUMMARY */}
         <div id="status-wrapper-aboutme-positioner" className="about-me">
            <div  className="status-wrapper">
            <p id="status-title">status</p>
                <div className = "status">
                <div id = "status-details">This is a header.</div>
                <div id = "status-message">
                    <p>This is about me.</p>
                </div>
                </div>
            </div>
            {/* MY BUTTON */}
            <div id="status-wrapper-button-positioner" className="status-wrapper">
            <p id="status-title">status</p>
                <div className = "status">
                <div id = "status-details">This is a header.</div>
                <div id = "status-message">
                    <p>This is about me.</p>
                </div>
                </div>
            </div>
          </div>
          </div>
    );
  }

  export default AboutMe;