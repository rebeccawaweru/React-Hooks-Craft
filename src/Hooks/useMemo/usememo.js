import React, {useState, useMemo} from 'react';

function Usememo() {
     const [count, setCount] = useState(0)
     const [count1, setCount1] = useState(0)

     const incrementOne = () =>{
       setCount(count + 1)
     }

     const incrementTwo = () => {
        setCount1(count1 + 1)
     }

     const isEven = useMemo(() =>{
        let i = 0
        while( i < 2000000000) i++
        return count % 2 === 0
     },[count])

    return (
        <div>
            <p>First Count: {count}</p>
            <span>{isEven ? 'Even' : 'Odd'}</span>
            <p>Second Count: {count1}</p>
            <button onClick={()=>incrementOne()}>IncrementOne</button>
            <button onClick={()=>incrementTwo()}>IncrementTwo</button>
        </div>
    );
}
export default Usememo;

//difference between useMemo and useCallback
//useCallback caches the provided function instance itself
//whereas useMemo invokes the provided function and caches its result
//useCallback - if you want to cache a function
//useMemo - cache the result of an invoked function
