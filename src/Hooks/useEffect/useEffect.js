//what are the lifecycle methods?
//useEffect handles 3 lifecycle methods
//mimicks componentDidMount, componentDidUpdate
//useEffect runs after every render of the component
//this example covers running useEffect conditionally
import React, {useEffect, useState} from "react";
function UseEffect() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('')
    useEffect(()=>{
        console.log('updating document title....')
        document.title = `You clicked ${count} times`
    },[count])//conditionally run useEffect if count changes
    return (
        <div>
            <input type="text" value={name} onChange={e =>setName(e.target.value)}/>
            <button onClick={()=>setCount(prevCount => prevCount + 1)}>Click {count} times</button>
        </div>
    );
}

export default UseEffect;

