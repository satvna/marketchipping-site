import React, { useState, useEffect } from "react";

import mysong from "../other-assets/melty-land-nightmare.mp3";



function AudioPlayer() {

    const [audioPlaying, setAudioPlaying] = useState(false);
    const [audio] = useState(new Audio(mysong));

    const handleAudioPlayer = () =>{
        if (audioPlaying == false){
          setAudioPlaying(true);
          audio.volume = 0.5;
          audio.play();
          }
        else if (audioPlaying == true) {
          setAudioPlaying(false);
          audio.pause();
        }
        else {
          console.log('error');
        }
      }

    return (
        <div className = 'music-player-container'>
            <div id='music-player-details'> Melty Land Nightmare </div>
            <div id='music-player-mechanics'> 
            <button onClick={() => handleAudioPlayer()}>
                <i class={audioPlaying ? "fa-solid fa-pause" : "fa-solid fa-play"}></i>
                </button>
            
            </div>
        </div>
    );
  }

  export default AudioPlayer;