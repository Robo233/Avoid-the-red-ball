import React, { useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import StartGame from "../Scripts/StartGame"

type StartMenuProps = {
    blueSquareWidth: number
	blueSquareDistanceFromTop: string
	mapWidth: number
	mapHeight: string
	enemySpawnFrequency: number
	enemyWidth: number
	enemyHeight: number
	enemySpeed: number
}

const StartMenu = (props: StartMenuProps) => {

return (
	<div id="start-menu" className="absolute bg-black bg-opacity-80 w-full h-[100%] z-10" >
	
	<button id="start-button" className="absolute top-[300px]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#308d82] w-64 h-64 rounded-full " onMouseDown={() => { StartGame(props.blueSquareWidth,props.enemySpawnFrequency,props.enemyWidth,props.enemyHeight,props.mapWidth,props.mapHeight, props.enemySpeed, props.blueSquareDistanceFromTop,false)}} >
		<FontAwesomeIcon icon={faPlay} size="6x" className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
	</button>

	</div>
);
};




export default StartMenu;