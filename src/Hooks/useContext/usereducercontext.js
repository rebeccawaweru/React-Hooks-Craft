//userReducer is used for local state management
//Sharing state between components-Global state management
//useReducer + useContext
import React, {useReducer} from 'react';
import Usereducer3 from '../useReducer/usereducer3';
export const UserContext = React.createContext()
const initialState = 0
const reducer = (state, action) =>{
      switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
      }
}
function Usereducercontext() {
    const [count, dispatch] = useReducer(reducer, initialState)
   
    return (
    <UserContext.Provider value={{ countState:count, counterDispatch: dispatch}}>
       <div>
          <p>Count : {count}</p>
            <Usereducer3/>
             {/* <button onClick={()=>dispatch('increment', 1)}>Increment</button>
             <button onClick={()=>dispatch('decrement', 1)}>Decrement</button>
             <button onClick={()=>dispatch('reset')}>Reset</button> */}
 
        </div>
        </UserContext.Provider>
      
    );
}

export default Usereducercontext;