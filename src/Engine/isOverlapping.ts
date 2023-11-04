import removeLastTwoDigit from "./removeLastTwoDigit";

function isOverlapping(element, colliderElement){
    if(colliderElement.style.display!=="none"){
    
    let cubeWidth = Number(removeLastTwoDigit(element.style.width))
    let cubeHeight = Number(removeLastTwoDigit(element.style.height))

    var distanceFromLeft = Number(removeLastTwoDigit(colliderElement.style.left))
    var distanceFromLeftCube = Number(removeLastTwoDigit(element.style.left))
    var testCubeWidth = Number(removeLastTwoDigit(colliderElement.style.width))

    var distanceFromTop = Number(removeLastTwoDigit(colliderElement.style.top))
    var distanceFromTopCube = element.offsetTop
    var testCubeHeight = Number(removeLastTwoDigit(colliderElement.style.height))
  
    if(distanceFromTopCube !== distanceFromTopCube){
        distanceFromTopCube = 0;
    }
    
    if( (( distanceFromLeft + testCubeWidth > distanceFromLeftCube) &&  distanceFromLeft-cubeWidth<distanceFromLeftCube) &&  ((distanceFromTop + testCubeHeight  >distanceFromTopCube) &&  distanceFromTop - cubeHeight<distanceFromTopCube)){
        return true;
    }
}

}

export default isOverlapping;
