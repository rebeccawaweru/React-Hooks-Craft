import React, { useState } from 'react';
import useInput from './useInput';

function UserForm() {
    // const [name,setName] = useState({
    //     firstname:'',
    //     lastname:''
    // })
    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindlastName, resetlastName] = useInput('')
    // const handleChange = (e) =>{
    //   const {name: inputName, value} = e.target;
    //   setName({...name, [inputName]:value})
    // }
    const handleSubmit = (e) =>{
        e.preventDefault()//stop page from refreshing
        alert(`Hello, ${firstName} ${lastName}`)
         resetFirstName()
         resetlastName()
    }
    return (
        <div>
          <form onSubmit={handleSubmit}>
            <label>First Name</label>
            <input type='text' {...bindFirstName}/>
            <label>Last Name</label>
            <input type='text' {...bindlastName}/>
            <button type='submit'>Submit</button>
          </form>

        </div>
    );
}

export default UserForm;