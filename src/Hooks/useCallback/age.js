import React from "react"
const Age = ({number}) =>{
    console.log(`rendering age ${number}`)
    return (
        <p>Age - {number}</p>
    )
}
export default React.memo(Age);