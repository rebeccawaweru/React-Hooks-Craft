import React from 'react';
import useDocumentTitle from './customhook';
import useCounter from './usecounter';
function Doctitle() {
    // const [count, setCount] = useState(0);
    const [count, increment, decrement, reset] = useCounter(10, 10)
    useDocumentTitle(count) 
    return (
    <div>
       <p>Count: {count}</p>
       <button onClick={()=>increment()}>Increment</button>
       <button onClick={()=>decrement()}>Decrement</button>
       <button onClick={()=>reset()}>Reset</button>
    </div>
    );
}

export default Doctitle;