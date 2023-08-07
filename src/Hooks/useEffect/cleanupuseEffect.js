//mimick componentDidUnmount()
import React,{useState} from 'react';
import OnceuseEffect from './onceuseEffect';
function CleanupuseEffect() {
    const [display, setDisplay] = useState(true)

    return (
    <div>
      <button onClick={()=>setDisplay(!display)}>ToogleDisplay </button>
      {display && <OnceuseEffect/>}
    </div>
    );
}

export default CleanupuseEffect;

//clean up
//to cancel timers