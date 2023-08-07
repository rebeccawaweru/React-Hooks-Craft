//this example covers running useEffect once
import React, { useEffect, useState } from 'react';
function OnceuseEffect() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const logMousePosition = e =>{
        console.log("mouse event")
        setX(e.clientX);
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)
        return ()=>{
            //cleanup function
            window.removeEventListener('mousemove', logMousePosition)
        }
    },[])//if you pass an empty array the function in the useEffect will only run once/i.e only run on initial render

    return (
        <div>
        Hooks {x} - {y}
        </div>
    );
}

export default OnceuseEffect;