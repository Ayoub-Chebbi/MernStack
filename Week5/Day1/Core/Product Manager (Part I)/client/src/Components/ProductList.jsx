import React, { useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const ProductList = (props) => {
const {product , setProduct} = props

    useEffect(()=>{
        axios.get("http://localhost:7000/api/product")
        .then((res)=>{
            console.log(res.data)
                setProduct(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
  return (
    <div>
        {
                product.map((
                    product, index)=>{
                return (
                    <div key={index}>
                        <p>{product.ProductName}</p> 
                        <p>{product.ProductPrice}</p>
                        <p>{product.ProductDescription}</p>
                        <Link to={`/product/${product._id}`}> {product.ProductName}'s Page! </Link>
                    </div> 
                )})
            }
    </div>
  )
}

export default ProductList