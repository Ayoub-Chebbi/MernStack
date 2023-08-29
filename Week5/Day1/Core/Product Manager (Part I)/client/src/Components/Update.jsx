import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
const Update = (props) => {
    const { id } = useParams();
    const [ProductName, setProductName] = useState("")
    const [ProductPrice, setProductPrice] = useState(0)
    const [ProductDescription, setProductDescription] = useState("")
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:7000/api/product/' + id)
            .then(res => {
                setProductName(res.data.ProductName);
                setProductPrice(res.data.ProductPrice);
                setProductDescription(res.data.ProductDescription);
            })
            .catch(err => console.log(err))
    }, [])
    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:7000/api/product/' + id, {
            ProductName,
            ProductPrice,
            ProductDescription
        })
            .then(res => {
                console.log(res);
                navigate("/home"); 
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Product Name</label><br />
                    <input type="text" 
                    name="productName" 
                    value={ProductName} 
                    onChange={(e) => { setProductName(e.target.value) }} />
                </p>
                <p>
                    <label>Product Description</label><br />
                    <input type="text" 
                    name="ProductDescription"
                    value={ProductDescription} 
                    onChange={(e) => { setProductDescription(e.target.value) }} />
                </p>
                <p>
                    <label>Product Price</label><br />
                    <input type="number" 
                    name="productPrice"
                    value={ProductPrice} 
                    onChange={(e) => { setProductPrice(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
export default Update;

