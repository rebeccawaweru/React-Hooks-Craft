//performance optimization by restricting re-renders only to components that need to re-render
//React.memo()
//useCallback is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed
//e.g will cache the increment salary function(value) and return it if salary is not incremented
//if salary is incremented then it means the dependancy has changed then a new function will be returned
//useCallback is useful when passing callbacks to optimized child components(e.g the button,salary,age) that rely on reference equality to prevent unnecessary renders
import React, { useState, useCallback } from 'react';
import Age from './age';
import Salary from './salary';
import Button from './button';
function Usecallback() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(5000)
    const incrementAge = useCallback(()=>{
      setAge(age + 1)
    }, [age])
    const decrementAge = useCallback(()=>{
        setSalary(salary + 1000)
    }, [salary])
    return (
        <div>
            <Age number={age}/>
            <Button 
            title='Increment Age' 
            onClick={incrementAge}
            />
            <Salary number={salary}/>
            <Button 
            title='Increment Salary' 
            onClick={decrementAge}
            />
        </div>
    );
}

export default Usecallback;
