import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import binari from './images/binari.jpg';
import { database } from "./firebaseConfig";
import Josh from "./components/josh"
import joshwhistle from "./other-assets/joshed.mp3";
import AudioPlayer from "./components/audio-player"
import { collection, doc, setDoc, onSnapshot  } from "firebase/firestore"; 

function App() {
  const [status, setStatus] = useState({
    date: 'Loading...', 
    message: 'Loading...'});

    const [josh, setJosh] = useState(false);



  useEffect(
    () =>
      onSnapshot(collection(database, "statuses"), (snapshot) => {
        snapshot.forEach((doc) => {
          let tempstatus = {
            date: doc.data().date,
            message: doc.data().message
          }
          setStatus(tempstatus);
        });
      }),
    []
  );

  let whistle = new Audio(joshwhistle);

  const handleJosh = () =>{
    setJosh(true);
    whistle.play();
    
    setTimeout(function() { setJosh(false); }, 3500);
    setTimeout(function() { whistle.pause(); }, 3560);

  }



  return (
    <div className='site-container'>
      <div className= 'popupWrapper' visibility={{  display: josh?'visible':'hidden'}} >
        <Josh josh={josh}/>
      </div>
      <div className="wrapper">
        <div className = "headshot">
          <div className = "icon">
              <img src = {binari}></img>
          </div>
          <div class = "attr">
              <a href="https://www.webtoons.com/en/fantasy/the-dark-lords-confession/list?title_no=4464">icon: the dark lord's confession</a>   
          </div>
        </div>

      {/* <!-- TITLE --> */}
      <div className = "title">
          <h1>🍓 marketchipping 🍓</h1>
      </div>

      {/* <!-- LINKS --> */}
      <div className = "links">
          <p>links</p>
          <div className = "linkswrapper">
              <div>about [TBD]</div>
              <div>blog [TBD]</div>
              {/* <!-- https://codex.wordpress.org/Integrating_WordPress_with_Your_Website --> */}
              <div>chatroom [TBD]</div>
              <div  onClick={() => handleJosh()}>josh</div>
          </div>
      </div>

      {/* <!-- BADGES / DOODADS --> */}
      <div className = "badges">
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/819c254f-4a99-42fe-aadc-6b8dc100389a/d2dl7yb-1894234e-6140-411d-bf0b-3cc50d3fc624.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi84MTljMjU0Zi00YTk5LTQyZmUtYWFkYy02YjhkYzEwMDM4OWEvZDJkbDd5Yi0xODk0MjM0ZS02MTQwLTQxMWQtYmYwYi0zY2M1MGQzZmM2MjQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-_ownc3QpLHF6toY3j-PDZ-Iz-QAxp0Cbce71VohWnU" alt="persona 3 badge"></img>
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/60904c9a-3161-4cc0-a776-9139a39fbbc9/d3f60lb-55148214-0c41-499f-96ec-be83497198fc.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi82MDkwNGM5YS0zMTYxLTRjYzAtYTc3Ni05MTM5YTM5ZmJiYzkvZDNmNjBsYi01NTE0ODIxNC0wYzQxLTQ5OWYtOTZlYy1iZTgzNDk3MTk4ZmMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6UdEqHhu5iyv-qVN9yTp9hY97KbAUd0flStX-j7CP4Y" alt="persona 3 badge"></img>
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b58ca07-d645-4380-aa97-78886aad5819/d2nfyfz-c74a9e17-38b6-40b2-9709-5740a53d797f.png/v1/fill/w_99,h_56,q_80,strp/p4_yosuke_stamp_c__by_crescentmarionette_d2nfyfz-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTYiLCJwYXRoIjoiL2YvNGI1OGNhMDctZDY0NS00MzgwLWFhOTctNzg4ODZhYWQ1ODE5L2QybmZ5ZnotYzc0YTllMTctMzhiNi00MGIyLTk3MDktNTc0MGE1M2Q3OTdmLnBuZyIsIndpZHRoIjoiPD05OSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.K4aw61R3iaq84K1tjc7UkF6s4PVfeg8O4Vojya5q0-E"></img>
      </div>

      <div className="mainmenu">
        <div className="status-wrapper">
        <p id="status-title">status</p>
          <div className = "status">
            <div id = "status-details">{status.date}</div>
            <div id = "status-message">
              <p>{status.message}</p>
            </div>
          </div>
        </div>
        <div className='badges-webrings'>
          <p id="webrings-title">badges & webrings</p>
          <p id = "badgedesc">Check in later to see!</p>
        </div>
      </div>

    

      {/* <!-- OTHJERS --> */}
      <div className = "other">
        <div className='photocards'>
          <div id="chuu">
          <img src='https://hywfhpjrxseqlrzqyghg.supabase.co/storage/v1/object/public/watermarked/cmjfk6as5004ijr04qanem62p-front-1766311354823.webp' alt='chuu photocard'></img>
          </div>
          <div id="choerry">
          <img src='https://hywfhpjrxseqlrzqyghg.supabase.co/storage/v1/object/public/watermarked/cmlkxye3z0043jr04rm8s8yx0-front-1770990396146.webp' alt = 'choerry photocard'></img>
          </div>
        </div>
          <AudioPlayer/>
      
      </div>
      </div>
    </div>

  );
}

export default App;
