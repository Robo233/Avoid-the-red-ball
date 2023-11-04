var sec = 0;
function Counter ( val ) { return val > 9 ? val : "0" + val  ; }
var duration = 1000

function counterFunction(gameMode) {
      
    let isPlayingElement = document.getElementById("isPlaying")!;
    var isPausedElement = document.getElementById("isPaused")!; 
    var id = setInterval(frame, duration);
    if(document.getElementById("time")){
    if(isPausedElement.innerHTML == "false"){
    document.getElementById("time")!.innerHTML = ""
    }
  }

  if(gameMode==="start"){
    sec = 0
    }

    function frame() {
      if (isPlayingElement.innerHTML=="false" ) { 
        clearInterval(id);
       
      } else {
        document.getElementById("seconds")!.innerHTML=Counter(++sec%60); 
        document.getElementById("minutes")!.innerHTML=Counter(parseInt(sec/60 as unknown as string ,10));
      }
    }
  }

export default counterFunction;
