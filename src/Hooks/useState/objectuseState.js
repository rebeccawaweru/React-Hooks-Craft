import React,{useState} from 'react';
function ObjectuseState() {
    const [name, setName] = useState({firstName:'', secondName:''});
    const handleChange = (e)=>{
        // const {name:inputName, value} = e.target
        // setName((prevState)=>({
        //     ...prevState, [inputName]:value
        // }))
        setName((prevState)=>({
            ...prevState, [e.target.name]:e.target.value
        }))
    }
    return (
        <div>
            <input name='firstName' type='text' onChange={handleChange}/>
            <input name='secondName' type='text' onChange={handleChange}/>
            {/* onChange={e =>setName({...name, firstName: e.target.value})} */}
            <h2>Your name is {name.firstName} {name.secondName}</h2>
        </div>
    );
}

export default ObjectuseState;
