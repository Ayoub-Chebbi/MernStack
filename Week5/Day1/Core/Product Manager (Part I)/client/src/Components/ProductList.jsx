import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    const { removeFromDom, product, setProduct } = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:7000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId);
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            {product.map((product , index) => (
                <div key={index}>
                    <Link to={"/product/" + product._id}>
                        {product.ProductName}, {product.ProductPrice},{product.ProductDescription}
                    </Link>
                    |
                    <Link to={"/product/edit/" + product._id}>
                        Edit
                    </Link>
                    |
                    <button onClick={(e) => {deleteProduct(product._id)}}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
