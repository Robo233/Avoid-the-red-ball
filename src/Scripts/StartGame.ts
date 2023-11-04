import RedCircleGenerator from "./RedCircleGenerator"
import counterFunction from "../Engine/Counter";

function StartGame(blueSquareWidth,enemySpawnFrequency, enemyWidth, enemyHeight,mapWidth, mapHeight,enemySpeed,blueSquareDistanceFromTop,restart){
    const blueSquare = document.getElementById('blue-square')!;
    const startGameContainer = document.getElementById('start-menu')!;
    const gameOverMenu = document.getElementById('game-over-menu')!;
    const gameOverTitle = document.getElementById("game-over-title")!;
    const restartButton = document.getElementById("restart-button")!;
    const gameOverScore = document.getElementById("game-over-score")!;
    const gameOverBest = document.getElementById("game-over-best")!;
    const newHighscoreText = document.getElementById("new-highscore-text")!;
    let minutesElement = document.getElementById("minutes")!;
    let secondsElement = document.getElementById("seconds")!;
    let inGameUi = document.getElementById("in-game-ui")!;
 
    inGameUi.style.display = "block";
   
    gameOverTitle.style.display = "none"
    restartButton.style.display = "none"
    gameOverScore.style.display = "none"
    gameOverBest.style.display = "none"
    newHighscoreText.style.display = "none"
    

    minutesElement.innerHTML = "00";
    secondsElement.innerHTML = "00";
    startGameContainer.style.display = 'none';
    gameOverMenu.style.display = 'none';
    let isPlayingElement = document.getElementById("isPlaying")!;
    isPlayingElement.innerHTML = "true"
    let redCircles = document.getElementsByClassName("red-circle") as HTMLCollectionOf<HTMLElement>;
    for(let i = 0;i<redCircles.length;i++){
        redCircles[i].style.display = "none";
    }
    RedCircleGenerator(enemySpawnFrequency, enemyWidth, enemyHeight, mapWidth, mapHeight,enemySpeed,blueSquareDistanceFromTop);

    blueSquare.style.left = (mapWidth/2-blueSquareWidth/2)+'px';
    counterFunction("start")
}

export default StartGame;