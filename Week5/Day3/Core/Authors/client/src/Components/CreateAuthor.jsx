import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CreateAuthor = () => {
    const [name , setName] = useState("")
    const handleSubmit = (e)=>{
        e.preventDefault()
        const newObj = {
            Name : name,
        }
        axios.post("http://localhost:5000/api/author" , newObj)
            .then(res=>{
                setName("")
            })
            .catch(err=>{console.log(err)})
    }

  return (
    <div>
        <Link to="/">Home</Link>
        <p>Add a new Author : </p>
        <form onSubmit={handleSubmit}>
            Name:<br/>
            <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <button>Submit</button>
        </form>
        <Link to="/">
            <button>Cancel</button>
        </Link>
    </div>
  )
}

export default CreateAuthor