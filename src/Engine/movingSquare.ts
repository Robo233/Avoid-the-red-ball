import removeLastTwoDigit from "./removeLastTwoDigit";
import topToBottom from "./Animations/topToBottom";
import bottomToTop from "./Animations/bottomToTop";

var direction = "up"

const  movingSquare = (elementId, travelDistance, duration) => {
   
    
    setTimeout(function next() {
        var isPlaying = ((document.getElementById("isPlaying")!.innerHTML) === "true")
        if(isPlaying){
        let element = document.getElementById(elementId)!
        let positionTop = Number(removeLastTwoDigit(element.style.top));
        let currentPositionTop = positionTop
        
        if(direction=="up"){
            console.log("up")
            positionTop += travelDistance
            element.style.top =  positionTop + 'px';
            direction = "down"
        
        } else{
            console.log("down")
            positionTop -= travelDistance
            element.style.top =  positionTop + 'px';
            direction = "up"
            
        }
        
        setTimeout(next, duration);
        }
        else{
            console.log("stop")
        }
    
    }, duration);
}


export default movingSquare;