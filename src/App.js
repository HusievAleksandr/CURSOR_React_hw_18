
import { useEffect, useRef, useState } from 'react';
import './App.css';
import Timer from './Timer/Timer';


function App() {

const inputMinutes = useRef(),
      inputSeconds = useRef(),
      inputInterval = useRef(),

      [startTime, setStartTime] = useState(0),
      [stepInterval, setStepInterval] = useState(1),

      onChangeTime = ()=> { 
                      setStartTime(Number(inputSeconds.current.value )+
                                  Number(inputMinutes.current.value * 60))},
      onChangeInterval =()=>{
                      setStepInterval( Number(inputInterval.current.value));               
                      };

     
  return (
    <div className="App">
      <header className="App-header">

          <div className='header_main'>
            <h2>SET COUNTER PARAMETERS:</h2>
            <div>
              <label >Minutes</label>
              <input  onChange={onChangeTime} ref ={inputMinutes} type="number" min="1" max="60"  ></input>
              <label >Seconds</label>
              <input onChange={onChangeTime} ref ={inputSeconds} type="number" min="1" max="60" ></input>
            </div>

            <div>
              <label >Timer update interval</label>
              <input onChange={onChangeInterval} ref ={inputInterval} type="number" min="1" max="9"  ></input>
            </div>  

          </div> 
          
                <Timer props={startTime} step={stepInterval} />
        
      </header>
    </div>
  );
}

export default App;
