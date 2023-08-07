import React from 'react'
import './personalcard.css';

const PersonalCard = (props) => {
  return (
    <div className='personal-card'>
        <h1>{props.firstName} , {props.lastName}</h1>
        <p>Age: {props.age}</p>
        <p>hair Color: {props.hairColor}</p>
    </div>
  )
}

export default PersonalCard