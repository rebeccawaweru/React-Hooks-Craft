/* eslint-disable default-case */
//useReducer -Hook used for state management. alternative to useState
//useState is built using useReducer
//useReducer vs useState
//accepts 2 parameters
//useReducer(reducer, initialState)
//newState = reducer(currentState, action)
//returns a pair of values: [newState, dispatch]
//userReducer is used for local state management

import React, {useReducer} from 'react';
const initialState = 0
const reducer = (state, action)=>{
     switch(action) {
        case 'Increment': 
           return state + 1
        case 'Decrement':
           return state - 1
        case 'reset':
            return initialState
        default:
            return state
     }
}
function Usereducer() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <p>Count - {count}</p>
            <button onClick={()=>dispatch('Increment')}>Increment</button>
            <button onClick={()=>dispatch('Decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
        </div>
    );
}

export default Usereducer;