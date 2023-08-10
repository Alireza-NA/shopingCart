import React ,{ useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {

    const BASE_URL = "https://fakestoreapi.com/products/";

    const params = useParams();
    const id = params.id;

    const [product , setProduct] = useState([]);
    
    useEffect(()=>{ 
       axios.get(`${BASE_URL} ${id}`)
        .then(response => setProduct(response.data))
    }, [])
    const {image ,title ,description , price , category} = product;
    
    return (
        <div>
            <img src={image} alt='product'/>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p><span>Category : </span>{category}</p>
                <div> 
                    <span>{price} $ </span>
                    <Link to="/product">back to Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;