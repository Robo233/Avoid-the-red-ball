function topToBottomAndBack(startPosition, endPosition, duration, elementId, speed) {
    console.log(elementId)
    var elem = document.getElementById(elementId)!;   
    console.log(elem)
    var id = setInterval(frame1, duration/2); 
    var id2;
    function frame1() {
      if (startPosition >= endPosition) { 
        clearInterval(id);
        id2 = setInterval(frame2, duration/2); 
      } else {
        elem.style.display = "block";
        startPosition+=speed; 
        elem.style.top = startPosition + 'px'; 
        
      }
    }

    function frame2() {
        if (startPosition <= endPosition) { 
          clearInterval(id2);
         
        } else {
          elem.style.display = "block";
          startPosition-=speed; 
          elem.style.top = startPosition + 'px'; 
          
        }
      }
  }

  export default topToBottomAndBack;