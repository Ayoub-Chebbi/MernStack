import React, { useState } from 'react'

const Form = (props) => {

    const [name , setName] = useState("")
    const [lastName , setLastName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [confirmPassword , setConfirmPassword] = useState("")

  return (
    <div>
        <form>
            Name:
            <input type='text' onChange={(e)=>{setName(e.target.value)}} value={name}/><br />
            Last Name:
            <input type='text' onChange={(e)=>{setLastName(e.target.value)}} value={lastName}/><br />
            Email:
            <input type='text' onChange={(e)=>{setEmail(e.target.value)}} value={email}/><br />
            Password:
            <input type='text' onChange={(e)=>{setPassword(e.target.value)}} value={password}/><br />
            Confirm Password:
            <input type='text' onChange={(e)=>{setConfirmPassword(e.target.value)}} value={confirmPassword}/>
        </form>

        <div>
            <p>First Name : {name}</p>
            <p>Last Name : {lastName}</p>
            <p>Email : {email}</p>
            <p>Password : {password}</p>
            <p>Confirm Password : {confirmPassword}</p>
        </div>
    </div>
  )
}

export default Form