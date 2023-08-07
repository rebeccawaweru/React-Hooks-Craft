import { useState } from "react";
export default function PrevState(){
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    const incrementFive = ()=>{
        for(let i = 0; i < 5; i++){
            setCount(prevCount=>prevCount + 1)
        }
    }
    return(
        <div>
            <p>Count: {count}</p>
           <button onClick={()=>setCount(initialCount)}>Reset</button>
           <button onClick={()=>setCount(prevCount=>prevCount + 1)}>Increment</button>
           <button onClick={()=>setCount(prevCount=>prevCount - 1)}>Decrement</button>
           <button onClick={incrementFive}>Five</button>
        </div>
    )
}

//use prevState to move through images in carousel/slider
