//unlike useEffect which runs asynchronously, useLayout runs synchronously
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
function Uselayout() {
    const [show, setShow] = useState(false)
    const button = useRef()
    const popup= useRef()
    useLayoutEffect(()=>{
        if (popup.current == null || button.current == null) return
        const { bottom } = button.current.getBoundingClientRect()
        popup.current.style.top = `${bottom + 100}px`
    }, [show])
    return (
        <div style={{position:'relative', height:'100vh'}}>
            <button ref={button} onClick={()=>setShow(prev => !prev)}>Click here</button>
            {show && <div style={{position:'absolute'}} ref={popup}>
                <p>This is a popup</p>
            </div>}
        </div>
    );
}

export default Uselayout;

