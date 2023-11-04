import React, { useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons'
import StartGame from "../Scripts/StartGame"

type GameOverMenuProps = {
    blueSquareWidth: number
	blueSquareDistanceFromTop: string
	mapWidth: number
	mapHeight: string
	enemySpawnFrequency: number
	enemyWidth: number
	enemyHeight: number
	enemySpeed: number
}

const GameOverMenu = (props: GameOverMenuProps) => {

return (
	<div id="game-over-menu" className="absolute bg-black bg-opacity-80 w-full h-[100%] z-10  hidden" >
	<a id="game-over-title" className="left-1/2 transform -translate-x-1/2 absolute top-[-10px] text-[80px] text-[#BC986A] hidden" >Over!</a>


	<a id="game-over-score" className="left-1/2 transform -translate-x-1/2 absolute top-[300px] text-6xl text-[#BC986A] hidden">Score:</a>
	<a id="game-over-best" className="left-1/2 transform -translate-x-1/2 absolute top-[380px] text-6xl text-[#BC986A] hidden">Best:</a>
	<a id="new-highscore-text" className="left-1/2 transform -translate-x-1/2 absolute   max-w-[310px] text-center  top-[450px] text-7xl text-[#bb8c4f] pr-[10px] hidden" >New Highscore</a>


	<button id="restart-button" className="absolute top-[200px]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#308d82] w-48 h-48 rounded-full hidden" onMouseDown={() => { StartGame(props.blueSquareWidth,props.enemySpawnFrequency,props.enemyWidth,props.enemyHeight,props.mapWidth,props.mapHeight,props.enemySpeed,props.blueSquareDistanceFromTop,true)}} >
		<FontAwesomeIcon icon={faRefresh} size="6x" className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
	</button>

	</div>
);
};




export default GameOverMenu;