//useTransition used to make pages load faster
//allows us to make different state changes at the same time and rank them in order of how important we want them to be(priority)
//load high priority items like user interface
//only use it when you absolutely need it
//useTransition causes more renders
//only use it when dealing with performance related issues
//or code that slows down the application

import React, {useState, useTransition} from 'react';

function Usetransition() {
     const [isPending, startTransition] = useTransition()
    const [input1, setInput] = useState('')
    const [list, setList] = useState([])
    const LIST_SIZE = 2000
    function handleChange(e){
       setInput(e.target.value);//high priority
       //low priority
       startTransition(() => {
        const lst = []
        for (let i = 0; i < LIST_SIZE; i++){
         lst.push(e.target.value) 
        }
        setList(lst);
       })
     
    }
    return (
        <div>
    <input type='text' value={input1} onChange={handleChange}/>
           {isPending ? 'Loading...' : list.length > 0 && list.map((l,index) =>{
              return <div key={index}>{l}</div>
           })}
        </div>
    );
}

export default Usetransition;