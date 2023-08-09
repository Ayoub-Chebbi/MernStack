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
            {
                name.length <2 ? <p>First Name must be at least 2 characters</p> : <p style={{display:"none"}}></p>
            }
            Last Name:
            <input type='text' onChange={(e)=>{setLastName(e.target.value)}} value={lastName}/><br />
            {
                lastName.length <2 ? <p>Last Name must be at least 2 characters</p> : <p style={{display:"none"}}></p>
            }
            Email:
            <input type='text' onChange={(e)=>{setEmail(e.target.value)}} value={email}/><br />
            
            {
                email.length <2 ? <p>Email must be at least 2 characters</p> : <p style={{display:"none"}}></p>
            }

            Password:
            <input type='text' onChange={(e)=>{setPassword(e.target.value)}} value={password}/><br />
            {
                password.length <8 ? <p> Password must be at least 8 characters</p> : <p style={{display:"none"}}></p>
            }
            
            Confirm Password:
            <input type='text' onChange={(e)=>{setConfirmPassword(e.target.value)}} value={confirmPassword}/>
        
            {
                password != confirmPassword ? <p>Password must match</p> : <p style={{display:"none"}}></p>
            }
        </form>
    </div>
  )
}

export default Form