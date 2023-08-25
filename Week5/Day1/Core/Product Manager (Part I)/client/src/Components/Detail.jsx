import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams();

    useEffect(() => {
        axios.get("http://localhost:7000/api/product/" + id)
            .then( res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch( err => console.log(err) );
    }, []);
    return (
        <div>
            <p>Product Name: {product.ProductName}</p>
            <p>Product Price: {product.ProductPrice}</p>
            <p>Product Description: {product.ProductDescription}</p>
        </div>
    );
}
export default Detail;

