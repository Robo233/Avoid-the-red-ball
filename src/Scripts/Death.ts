import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RedCircleGenerator from "./RedCircleGenerator"
import leftToRight from "../Engine/Animations/leftToRight"
let bestMinutes = 0;
let bestSeconds = 0;

function Death(duration, enemyWidth, enemyHeight, mapWidth, mapHeight,enemySpeed,blueSquareDistanceFromTop){


    let gameOverMenu = document.getElementById("game-over-menu")!;
    let minutesElement = document.getElementById("minutes")!;
    let secondsElement = document.getElementById("seconds")!;
    let gameOverScore = document.getElementById("game-over-score")!;
    let gameOverBest = document.getElementById("game-over-best")!;
    let isPlayingElement = document.getElementById("isPlaying")!;
    let newHighscoreText = document.getElementById("new-highscore-text")!;
    let inGameUi = document.getElementById("in-game-ui")!;

    inGameUi.style.display = "none";

    if(isPlayingElement.innerHTML === "true"){
    leftToRight(-50,50,1,'game-over-title',1)
    leftToRight(-50,50,1,'restart-button',1.5)
    leftToRight(-50,50,1,'game-over-score',2)
    leftToRight(-50,50,1,'game-over-best',2.5)
    
    isPlayingElement.innerHTML = "false";
    }

    if(isPlayingElement.innerHTML === "false"){
    gameOverMenu.style.display = "block";
    }
    RedCircleGenerator(duration, enemyWidth, enemyHeight, mapWidth, mapHeight,enemySpeed,blueSquareDistanceFromTop);
    let seconds = secondsElement.innerHTML;
    let minutes = minutesElement.innerHTML;
  

    if(secondsElement.innerHTML.charAt(0)=="0"){
        seconds = secondsElement.innerHTML.charAt(1)
     
    }
    if(minutesElement.innerHTML.charAt(0)=="0"){
        minutes = minutesElement.innerHTML.charAt(1)
     
    }

    let minutesNum = minutes as unknown as number
    let secondsNum = seconds as unknown as number
   
    if(minutesNum>bestMinutes){
        bestMinutes = minutesNum as unknown as number
        bestSeconds = secondsNum as unknown as number
        if(window.innerHeight>615){
        newHighscoreText.innerHTML = "New Highscore!"
        leftToRight(-50,50,1,'new-highscore-text',3)
        }
        else{ 
            newHighscoreText.innerHTML = ""
        }
    }
    else if(minutesNum == bestMinutes && secondsNum>bestSeconds ){
        bestMinutes = minutesNum as unknown as number
        bestSeconds = secondsNum as unknown as number
        if(window.innerHeight>615){
        newHighscoreText.innerHTML = "New Highscore!"
        leftToRight(-50,50,1,'new-highscore-text',3)
        }
        else{ 
            newHighscoreText.innerHTML = ""
        }
        
    }
    else if(secondsNum<bestSeconds){
        newHighscoreText.innerHTML = ""
    }
   

   

    if(minutesElement.innerHTML=="00"){
        gameOverScore.innerHTML = "Score:" + seconds + "s"
        
    }
    else{
        gameOverScore.innerHTML = "Score:" + minutes + "min," + seconds + "s";
    }
   
    

    if(minutesElement.innerHTML=="00"){
        gameOverBest.innerHTML = "Best:" + bestSeconds + "s"
        
    }
    else{
        gameOverBest.innerHTML = "Best:" + bestMinutes + "min," + bestSeconds + "s";
    }
    
 

}

export default Death;