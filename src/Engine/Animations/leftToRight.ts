function leftToRight(startPosition, endPosition, duration, elementId, speed) {
     
    var elem = document.getElementById(elementId)!;   
    var id = setInterval(frame, duration); 
    function frame() {
      if (startPosition >= endPosition) { 
        clearInterval(id);
      } else {
        elem.style.display = "block";
        startPosition+=speed; 
        elem.style.left = startPosition + '%'; 
        
      }
    }
  }

  export default leftToRight;