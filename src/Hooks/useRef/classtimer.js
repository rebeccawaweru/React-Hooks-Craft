//useref can be used to store a mutable value
//the value will persist through the re-renders
//it does not cause re-renders if the data it stores changes
import React, { useEffect, useState, useRef } from 'react';

function ClassTimer(){
    const [value, setValue] = useState(0)
     const intervalRef = useRef()
    useEffect(() =>{
        intervalRef.current = setInterval(() => {
            setValue(prevState => prevState + 1)
        }, 1000)
    return () =>{
        clearInterval(intervalRef.current)//cancels a timed, repeating action which was previously established by a call to setInterval()
    }
    }, [])
    return (
            <div>
            <p>Hook Timer: {value}</p>
            <button onClick={()=>clearInterval(intervalRef.current)}>Clear</button>
            </div>
        )
}
export default ClassTimer
// function Classtimer() {
//     return (
//         <div>
            
//         </div>
//     );
// }

// export default Classtimer;