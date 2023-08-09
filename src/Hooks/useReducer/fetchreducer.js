//FETCHING DATA FROM API WITH useReducer()
import React, {useEffect, useReducer} from 'react';
import axios from 'axios';
const initialState = {
    loading: true,
    error:'',
    posts:[]
}
const reducer = (state, action) =>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                posts: action.payload,
                error:''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                posts: [],
                error: "Something went wrong"
            }
        default:
            return state
    }
}

function Fetchreducer() {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>{
            dispatch({type:'FETCH_SUCCESS', payload: response.data})
        })
        .catch(err =>{
            dispatch({type: 'FETCH_ERROR'})
        })
    },[])
    return (
    <div>   
       {state.loading ? 'Loading...' :
       <ul>
       {state.posts.map(post =>{
          return <li key={post.id}>{post.title}</li>
      })}
       </ul>
       }
       {state.error ? state.error : null}
    </div>
    );
}

export default Fetchreducer;

//useState vs useReducer
//useState when using Number, String, Boolean
//useReducer when using object/array
//useReducer better when handling many state transitions
//if the state transitons are related e.g loading, posts, error as above, the useReducer is better
//useReducer is for complex business logic while useState no businness logic
//useState is used for local state management while useReducer is used for global state management e.g one dispatch
//action can be used to update several state varuables based on the action types

