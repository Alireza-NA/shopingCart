import React ,{ useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

// Styles 
import styles from './ProductDetails.module.css'

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
        <div className={styles.container}>
            <img className={styles.image} src={image} alt='product'/>
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}><span>Category : </span>{category}</p>
                <div className={styles.buttonContainer}> 
                    <span className={styles.price}>{price} $ </span>
                    <Link to="/product">back to Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;