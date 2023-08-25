import React, { useEffect, useState } from 'react'
import axios from "axios"
const Form = (props) => {
    const [ProductName, setProductName] = useState("")
    const [ProductPrice, setProductPrice] = useState(0)
    const [ProductDescription, setProductDescription] = useState("")
    const {product , setProduct} = props
    const handleSubmit = (e)=>{
        e.preventDefault()
            axios.post("http://localhost:7000/api/product",{
                ProductName,
                ProductPrice,
                ProductDescription
            })
                .then(res=>{
                    console.log(res.data)
                    setProduct([...product,res.data])
                })
                .catch(err => console.log(err))
    }
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Product Manager</h1>
            Title <input type='text' onChange={(e)=>{setProductName(e.target.value)}}/><br/>
            Price <input type='number' onChange={(e)=>{setProductPrice(e.target.value)}}/><br/>
            Description <input type='text' onChange={(e)=>{setProductDescription(e.target.value)}}/><br/>
            <input type='submit'/>
        </form>
    </div>
  )
}

export default Form