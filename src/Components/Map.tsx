import React, { useState } from "react";
import "../App.css";
import removeLastTwoDigit from "../Engine/removeLastTwoDigit"

type MapProps = {
    mapWidth: number
	mapHeight: string
	mapDistanceFromTop: string
	blueSquareWidth: number
	blueSquareHeight: number
	blueSquareDistanceFromTop:string
	blueSquareDistanceFromBottom:string
}



const Map = (props: MapProps) => {

	var mapWidth = props.mapWidth;
	var mapHeight = props.mapHeight;
	var mapDistanceFromTop = props.mapDistanceFromTop;	
	var blueSquareWidth = props.blueSquareWidth;
	var blueSquareHeight = props.blueSquareHeight;

return (
	<div id="map" className="absolute left-1/2 transform -translate-x-1/2  bg-[#353535]  " style={{width:mapWidth+'px', height:mapHeight/*90vh'*/, top:mapDistanceFromTop, bottom:'unset' /*'10vh'*/}} >
     
		<div id="blue-square" className="absolute bg-[#308d82]  " style={{  left:(mapWidth/2-blueSquareWidth/2)+'px', top:props.blueSquareDistanceFromTop, bottom:props.blueSquareDistanceFromBottom /*'0vh'*/,  width:blueSquareWidth+'px', height:blueSquareHeight+'px'}}  ></div>
	
	</div>
);
};




export default Map;

