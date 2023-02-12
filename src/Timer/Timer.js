import React, { useEffect, useState } from 'react';
import "./Timer.css"
import {getCorrectTime} from './helpers/getCorrectTime';


const Timer = ({props, step}) => {

const   [time, setTime] =useState(props),
        [autostart, setAutostart]= useState(false),
        minutes = getCorrectTime(Math.floor(time/60)),
        seconds = getCorrectTime(Math.floor(time-minutes*60));

const   buttonStart = ()=>{  setAutostart(true);
                                 setTime(props); 
                console.log("Таймер запущено!")},

        buttonPause = ()=>{  setAutostart(false)
                console.log("Таймер на паузі!")},

        buttonStop  = ()=>{  setAutostart(false)
                           setTime(0)          };

useEffect(()=>{
        const onTick = setInterval(()=>{
                        autostart && 
                        setTime((time)=> (time>=1?time-(1*step):0) );                       
                        },step*1000);
                        console.log("Залишилось часу: " + time + "секунд");
        if(time <=0 ) {console.log("Час вийшов!");setTime(props)};

        return ()=> clearInterval(onTick);

        },[time, autostart]);

       
    return (
        <div>
            <div>
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
            </div>

            <div>
                    {autostart?
                    (<button onClick={buttonPause}>Pause</button>):
                    (<button onClick={buttonStart}>Start</button>)}

                    <button onClick={buttonStop}>Stop</button>                   
                    
            </div>
        </div>
    );
};



export default Timer;