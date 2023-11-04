import randomIntFromInterval from "../Engine/randomIntFromInterval"
import isOverlapping from "../Engine/isOverlapping"
import removeLastTwoDigit from "../Engine/removeLastTwoDigit"
import Death from "./Death"

let c=0;
var id;

function RedCircleGenerator(duration, enemyWidth, enemyHeight, mapWidth, mapHeight,enemySpeed,blueSquareDistanceFromTop) {
  let isPlayingElement = document.getElementById("isPlaying")!;
  let mapHeightNum = document.getElementById("map")!.offsetHeight;

  if(isPlayingElement.innerHTML === 'true') {
    
    const f = function frame() {
      if(isPlayingElement.innerHTML === 'true') {
      let map = document.getElementById("map")!; 
      let positionLeft = randomIntFromInterval(0,mapWidth-enemyWidth)
      let div = document.createElement('div');
      c++;
      let divId = "circle"+c;
      div.id = divId
      div.className = "red-circle"
      div.innerHTML = '<div  ></div>';
      div.style.width = enemyWidth +"px";
      div.style.height = enemyHeight+"px";
      div.style.backgroundColor ="red";
      div.style.borderRadius = "100%";
      div.style.position = "absolute";
      div.style.left = positionLeft + "px"
      map.appendChild(div);
      topToBottom(0, mapHeightNum  -enemyHeight-10, 30, divId, enemySpeed, div,enemyWidth, enemyHeight, mapWidth, mapHeight,blueSquareDistanceFromTop)
      }
    }
    id = setInterval(f, duration); 
    }
    else{
      clearInterval(id);
    }

    
  }

export default RedCircleGenerator;

function topToBottom(startPosition, endPosition, duration, elementId, enemySpeed, colliderElement, enemyWidth, enemyHeight, mapWidth, mapHeight,blueSquareDistanceFromTop) {
  
    let isPlayingElement = document.getElementById("isPlaying")!;
    let blueSquare = document.getElementById("blue-square")!; 
    var elem = document.getElementById(elementId)!;   
    var id = setInterval(frame, duration); 
  
    function frame() {
      if (startPosition >= endPosition) { 
        disableElement(elem)
        clearInterval(id);
      } else {
        if(isPlayingElement.innerHTML === 'true'){
        startPosition+=enemySpeed; 
        elem.style.top = startPosition + 'px'; 
        }
        if(isOverlapping(blueSquare,colliderElement)){
            Death(duration, enemyWidth, enemyHeight, mapWidth, mapHeight,enemySpeed,blueSquareDistanceFromTop);
        }
        
      }
    }
  }

  function disableElement(element){
    element.style.display = "none";
  }