import React,{useState}from 'react'


let watchinterval=undefined;
function Stopwatch() {

    const [watch, setWatch] = useState(0);
    const [disable, setDisable] = useState(false);
    const [minute, setMinute] = useState(0)
    const [hour, setHour] = useState(0)
  
    function startWatch(){
      setDisable(true)
      watchinterval=setInterval(()=>{setWatch((x)=>{if(x===60){ setMinute((y)=>{ if(y===60){setHour((z)=>{if(z===23){return 0}return z+1});return 0}return y+1});return 0} return x+1})},1000)
    }
        
      
  
  
        
        
    function stopWatch(){
    clearInterval(watchinterval)
      setWatch(watch);
      setMinute(minute);
      setHour(hour);

    }
  
    function resetWatch(){
      clearInterval(watchinterval);
      setWatch(0);
      setMinute(0);
      setHour(0)
      setDisable(false)
   
    }
  




  return (
    
        <div className="App">
      <h4>Stop Watch</h4>
      <h1>{hour}:{minute}:{watch}</h1>
      <button disabled={disable}  onClick={startWatch}>Start</button>
      <button onClick={stopWatch}>Stop</button>
      <button onClick={resetWatch}>Reset</button>

      
    </div>
    
  )
}

export default Stopwatch;