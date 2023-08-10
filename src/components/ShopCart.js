import React, {useContext} from 'react';
// Components
import Cart from './shared/Cart';

//Styles
import styles from "./ShopCart.module.css";

//Context 
import { Cartcontext } from '../context/CartContextProvider';
import { Link } from 'react-router-dom';



const ShopCart = () => {

    const {state , dispatch} = useContext(Cartcontext)

    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItems.map(item => <Cart key={item.id} data={item}/>)}
            </div>
            {
                state.itemsCounter > 0 && 
                <div className={styles.payments}>
                    <p><span>Total Items : </span>{state.itemsCounter}</p>
                    <p><span>Total Payment : </span>{state.total}</p>
                    <div className={styles.buttonContainer}>
                        <button onClick={() => dispatch({type : "CHECKOUT"})}>Check Out</button>
                        <button onClick={() => dispatch({type : "CLEAR"})}> Clear </button>
                    </div>
                </div>
            }
           {
                state.itemsCounter === 0 && !state.checkout && <div className={styles.complete}>
                        <h3>Want to buy?</h3>
                        <Link to="/products">Go to shop</Link>
                    </div>
            }

            {
                state.checkout && <div className={styles.complete}>
                        <h3>Checked out successfully</h3>
                        <Link to="/products">Buy More</Link>
                    </div>
            }
        </div>
    );
};

export default ShopCart;