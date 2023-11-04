import React, { useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import StartGame from "../Scripts/StartGame"
import counterFunction from "../Engine/Counter";

const PauseMenu = () => {

return (
	<div id="pause-menu" className="absolute bg-black bg-opacity-80 w-full h-[100%] z-10 hidden" >
	<a id="pause-title" className="absolute left-1/2 transform -translate-x-1/2 top-[0px] text-[80px] text-[#be7d48] hidden" >Pause</a>
	<button id="resume-button" className="absolute top-[40%]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#308d82] w-64 h-64 rounded-full hidden" onMouseDown={() => { ResumeGame()}} >
		<FontAwesomeIcon icon={faPlay} size="6x" className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
	</button>

	</div>
);
};




export default PauseMenu;

function ResumeGame(){
    var isPlayingElement = document.getElementById("isPlaying")!; 
	var isPausedElement = document.getElementById("isPaused")!; 
    let pauseMenu = document.getElementById('pause-menu')!;
    isPlayingElement.innerHTML ="true";
    pauseMenu.style.display = "none";
	isPausedElement.innerHTML ="false";
	counterFunction("pause")

	let pauseTitle = document.getElementById("pause-title")!;
    let resumeButton = document.getElementById("resume-button")!;

    pauseTitle.style.display = "none";
    resumeButton.style.display = "none";

	let inGameUi = document.getElementById("in-game-ui")!;

    inGameUi.style.display = "block";
	
}