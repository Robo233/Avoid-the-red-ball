






function CountDown(timeleft,frequency, countdownId,   CountDownOverFunction, shouldTimerBePausedContainerId, text ){


  var wasLevelFinished = ((document.getElementById(shouldTimerBePausedContainerId)!.innerHTML)==='true');
 
if(timeleft <= 0 ){
  
  
  
  CountDownOverFunction()
  document.getElementById(shouldTimerBePausedContainerId)!.innerHTML = "true"
 
}
 if(wasLevelFinished){
  
  
 }
document.getElementById(countdownId)!.innerHTML =  (text + timeleft) as unknown as string;
timeleft -= 1;


   
    var downloadTimer = setInterval(function(){
    var wasLevelFinished = ((document.getElementById(shouldTimerBePausedContainerId)!.innerHTML)==='true');

    var isPaused
    var remaining
  
    if(isPaused){
      clearInterval(downloadTimer);
      remaining = timeleft
    }
    

  if(timeleft <= 0 ){
    
    clearInterval(downloadTimer);
    
    CountDownOverFunction()
    document.getElementById(shouldTimerBePausedContainerId)!.innerHTML = "true"
   
  }
   if(wasLevelFinished){
    clearInterval(downloadTimer);
    
   }
  document.getElementById(countdownId)!.innerHTML =  (text + timeleft) as unknown as string;
  timeleft -= 1;
  
}, frequency);



}

export default CountDown;
      
