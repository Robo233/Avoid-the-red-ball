function topToBottom(startPosition, endPosition, duration, elementId, speed) {
    var elem = document.getElementById(elementId)!;   
    var id = setInterval(frame, duration); 
    function frame() {
      if (startPosition >= endPosition) { 
        clearInterval(id);
      } else {
        startPosition+=speed; 
        elem.style.top = startPosition + 'px'; 
        
      }
    }
  }

  function leftToRight(startPosition, endPosition, duration, elementId) {
     
    var elem = document.getElementById(elementId)!;   
    var id = setInterval(frame, duration); 
    function frame() {
      if (startPosition == endPosition) { 
        clearInterval(id);
      } else {
        startPosition++; 
        elem.style.left = startPosition + 'px'; 
        
      }
    }
  }

  export default  {topToBottom, leftToRight} as const