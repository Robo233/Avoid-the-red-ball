import React, { useState } from "react";
import "./App.css";
import StartMenu from './Components/StartMenu'
import PauseMenu from './Components/PauseMenu'
import GameOverMenu from './Components/GameOverMenu'
import Map from './Components/Map'
import InGameUi from './Components/InGameUi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import Move from "./Engine/Move";
import removeLastTwoDigit from "./Engine/removeLastTwoDigit";

var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
var travelDistance = 10;
var distanceFromTop = 0;
var distanceFromBottom = 0;
var distanceFromLeft = 0;
var distanceFromRight = 0;
var mapDistanceFromTop = '60px';
var mapWidth = 1250;
var mapHeight = '600px';
var blueSquareWidth = 50;
var blueSquareHeight = 50;
var blueSquareDistanceFromTop = (removeLastTwoDigit(mapHeight) as number - blueSquareHeight)+'px';
var blueSquareDistanceFromBottom = 'unset'
var enemySpawnFrequency = 200;
var enemyWidth = 60;
var enemyHeight = 60;
var enemySpeed = 10;

if(screenWidth<1250){
	mapWidth = 750
	enemySpawnFrequency = 500;
}
if(screenWidth<750){
	mapWidth = screenWidth
	enemySpawnFrequency = 1000;

	mapHeight = '90vh';
	mapDistanceFromTop = 'unset';
	blueSquareDistanceFromTop = 'unset';
	blueSquareDistanceFromBottom='0vh'
	
}
console.log(screenHeight)
if(screenHeight<625){
	mapHeight = '90vh';
	mapDistanceFromTop = 'unset';
	blueSquareDistanceFromTop = 'unset';
	blueSquareDistanceFromBottom='0vh'
}

const App = () => {

return (
	<div id="app">
	<StartMenu blueSquareWidth={blueSquareWidth} mapWidth={mapWidth} mapHeight={mapHeight} enemySpawnFrequency={enemySpawnFrequency} enemyWidth={enemyWidth} enemyHeight={enemyHeight} enemySpeed={enemySpeed} blueSquareDistanceFromTop={blueSquareDistanceFromTop}/>
	<Map mapWidth={mapWidth} mapHeight={mapHeight} mapDistanceFromTop={mapDistanceFromTop} blueSquareWidth={blueSquareWidth} blueSquareHeight={blueSquareHeight} blueSquareDistanceFromTop={blueSquareDistanceFromTop} blueSquareDistanceFromBottom={blueSquareDistanceFromBottom}/>
	<GameOverMenu blueSquareWidth={blueSquareWidth} mapWidth={mapWidth} mapHeight={mapHeight} enemySpawnFrequency={enemySpawnFrequency} enemyWidth={enemyWidth} enemyHeight={enemyHeight} enemySpeed={enemySpeed} blueSquareDistanceFromTop={blueSquareDistanceFromTop}/>
	<InGameUi />
	<PauseMenu />

	<div id="variables" >
		<a id="isPlaying" className="hidden" >false</a>
		<a id="isPaused" className="hidden" >false</a>
	</div>

	</div>
);
};

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;
	const blueSquare = document.getElementById('blue-square')!;
    	const map = document.getElementById('map')!;
		let blueSquareWidth = removeLastTwoDigit(blueSquare.style.width);
    	let mapWidth = removeLastTwoDigit(map.style.width);
		distanceFromRight = (mapWidth-blueSquareWidth);
   
    if (e.keyCode == '37'|| e.keyCode == '65') {
		
		Move(blueSquare,"left",travelDistance,distanceFromTop,distanceFromBottom,distanceFromLeft,distanceFromRight,"isPlaying");
	
    }
    else if (e.keyCode == '39'|| e.keyCode == '68') {
		Move(blueSquare,"right",travelDistance,distanceFromTop,distanceFromBottom,distanceFromLeft,distanceFromRight,"isPlaying");
    }

}

export default App;


