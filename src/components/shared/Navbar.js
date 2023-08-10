import React , { useContext } from 'react';
import {Link} from "react-router-dom";

// Styles
import styles from "./Navbar.module.css"
// Context
import { Cartcontext } from '../../context/CartContextProvider';

// Icons
import cart from "../../assets/shopping-cart.svg"

const Navbar = () => {

    const {state} = useContext(Cartcontext) ;

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to="/products">Products</Link>
                <div className={styles.iconContainer}>
                    <Link to="/cart"><img src={cart} alt='shop-icon'/></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;