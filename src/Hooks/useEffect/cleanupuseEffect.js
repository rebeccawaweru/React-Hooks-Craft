//mimick componentDidUnmount()
import React,{useEffect, useState} from 'react';
import OnceuseEffect from './onceuseEffect';
function CleanupuseEffect() {
    const [display, setDisplay] = useState(true)
    const [count, setCount] = useState(0)
    const Tick = ()=>{
        setCount(count + 1)
    }

    useEffect(()=>{
       const interval = setInterval(Tick, 1000)
       return ()=>{
        clearInterval(interval)
       }
    },[count])//you can use prevCount instead if you don't want to pass the dependancies
    return (
    <div>
      <button onClick={()=>setDisplay(!display)}>ToogleDisplay </button>
    <p>{count}</p>

    </div>
    );
}

export default CleanupuseEffect;

//clean up
//to cancel timers
//include multiple useEffects i.e separate useEffects

