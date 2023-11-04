import React, { useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause } from '@fortawesome/free-solid-svg-icons'
import leftToRight from '../Engine/Animations/leftToRight'

const Map = () => {

return (
    <div id="in-game-ui">
        <a id="minutes" className="absolute left-[7px] top-[-3px] text-6xl text-[#924e20]">00</a>
        <a className="absolute left-[62px] top-[-10px] text-6xl text-[#924e20]">:</a>
        <a id="seconds" className="absolute left-[76px] top-[-3px] text-6xl text-[#924e20]">00</a>
    <button id="pause-button" className="absolute top-[10px] right-[15px] text-[#924e20]" onMouseDown={() => { PauseGame()}} >
	    <FontAwesomeIcon icon={faPause} size="6x" />
	</button>
	</div>
);
};

export default Map;

function PauseGame(){
    var isPlayingElement = document.getElementById("isPlaying")!; 
    var isPausedElement = document.getElementById("isPaused")!; 
    isPlayingElement.innerHTML ="false";
    isPausedElement.innerHTML = "true"
    let pauseMenu = document.getElementById('pause-menu')!;
    pauseMenu.style.display = "block";
    let inGameUi = document.getElementById("in-game-ui")!;

    inGameUi.style.display = "none";

    leftToRight(-50,50,1,'pause-title',1)
    leftToRight(-50,50,1,'resume-button',2)
}