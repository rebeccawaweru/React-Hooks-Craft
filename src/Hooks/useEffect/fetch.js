import React,{useState,useEffect} from 'react';
import axios from 'axios';
function Fetch() {
    const [post, setPost] = useState({})
    const [id, setId] = useState('')
    const [idfrombtn, setidfromBtn] = useState(1)
    const handleClick = ()=>{
        setidfromBtn(id)
    }
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/"+idfrombtn)
        .then(res =>{
          setPost(res.data)
          console.log(res)
        })
        .catch(err =>{
            console.log(err)
        })
    },[idfrombtn])
    return (
        <div>
         <input type='text' value={id} onChange={(e)=>setId(e.target.value)}/>
         <button onClick={handleClick}>Click</button>
           <p>{post.title}</p>
            {/* <ul>
                {posts.map(post =>(
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
        </div>
    );
}

export default Fetch;