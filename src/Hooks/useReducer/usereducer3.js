/* eslint-disable default-case */
//useReducer -Hook used for state management. alternative to useState
//useState is built using useReducer
//useReducer vs useState
//accepts 2 parameters
//useReducer(reducer, initialState)
//newState = reducer(currentState, action)
//returns a pair of values: [newState, dispatch]
import React, {useContext} from 'react';
import { UserContext } from '../useContext/usereducercontext';
// const initialState = 0
// const reducer = (state, action)=>{
//      switch(action) {
//         case 'Increment': 
//            return state + 1
//         case 'Decrement':
//            return state - 1
//         case 'reset':
//             return initialState
//         default:
//             return state
//      }
// }
function Usereducer3() {
    // const [count, dispatch] = useReducer(reducer, initialState)
    // const [count2, dispatch2] = useReducer(reducer, initialState)
    const contextcounter = useContext(UserContext);
    return (
        <div>
           Component: {contextcounter.countState}
            <button onClick={()=> contextcounter.counterDispatch('increment')}>Increment</button>
            <button onClick={()=> contextcounter.counterDispatch('decrement')}>Decrement</button>
            <button onClick={()=> contextcounter.counterDispatch('reset')}>Reset</button>
            {/* <p>Count - {count}</p>
            <button onClick={()=>dispatch('Increment')}>Increment</button>
            <button onClick={()=>dispatch('Decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
            <p>Count2 - {count2}</p> */}
         
        </div>
    );
}

export default Usereducer3;