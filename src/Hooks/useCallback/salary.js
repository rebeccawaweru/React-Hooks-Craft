import React from "react"
const Salary = ({number}) =>{
    console.log(`rendering salary ${number}`)
    return (
        <p>Salary - {number}</p>
    )
}
export default React.memo(Salary)