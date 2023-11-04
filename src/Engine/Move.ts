import removeLastTwoDigit from "./removeLastTwoDigit";

var positionTop;
var positionLeft;



function Move(cube, direction, travelDistance, distanceFromTop, distanceFromBottom, distanceFromLeft, distanceFromRight, isPlayingElementId){
	var isPlaying = ((document.getElementById(isPlayingElementId)!.innerHTML)==='true');
	if(isPlaying){
	positionTop = Number(removeLastTwoDigit(cube.style.top));
	positionLeft = Number(removeLastTwoDigit(cube.style.left));

	switch(direction){
		
		case "top":
			if(removeLastTwoDigit(cube.style.top)>distanceFromTop){
				positionTop -= travelDistance;
				cube.style.top =  positionTop + 'px';
			}
		break;
		case "down":
			if(removeLastTwoDigit(cube.style.top)<distanceFromBottom){
				positionTop += travelDistance;
				cube.style.top =  positionTop + 'px';
			}
		break;
		case "left":
			
			if(removeLastTwoDigit(cube.style.left)>distanceFromLeft){
				
				positionLeft -= travelDistance;
				cube.style.left =  positionLeft + 'px';
			}
		break;
		case "right":
		
			if(removeLastTwoDigit(cube.style.left)<distanceFromRight){
			positionLeft += travelDistance;
			cube.style.left =  positionLeft + 'px';
			}
		break;

	}
}
	
}

export default Move;