import React, {useEffect, useRef}  from 'react';

function Focusinput() {
    const inputRef = useRef(null)
    useEffect(()=>{
      //focus the input elements
      inputRef.current.focus()
    },[])
    return (
        <div>
         <input ref={inputRef} type='text'/>
        </div>
    );
}

export default Focusinput;