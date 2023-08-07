import { useState } from "react";
export default function UseState(){
    const [count, setCount] = useState(0);
    return(
        <button onClick={()=>setCount(count + 1 )}>Count: {count}</button>
    )
}

//rules of Hooks
//Only call hooks at the Top level of your function
//Don't call Hooks inside loops,conditions or nested function
//Only call Hooks from react functions
