import React, { useState } from 'react'

const Text = (props) => {
    const [age, setAge]= useState(props.age)
    const increment = ()=>{
        console.log(age)
        setAge(age+1);
    }

  return (
    <div>
        <h1>{props.firstName}, {props.lastName}</h1>
        <p>Age: {age}</p>
        <p>hair Color: {props.hairColor}</p>

        <button onClick={()=>{increment()}}>{props.btn} </button>
    </div>
  )
}

export default Text;