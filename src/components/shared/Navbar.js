import React , { useContext } from 'react';
import {Link} from "react-router-dom";

// Context
import { Cartcontext } from '../../context/CartContextProvider';

// Icons
import cart from "../../assets/shopping-cart.svg"

const Navbar = () => {

    const {state} = useContext(Cartcontext) ;

    return (
        <div>
            <div>
                <Link to="/products">Products</Link>
                <div>
                    <Link to="/cart"><img src={cart} alt='shop-icon'/></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;