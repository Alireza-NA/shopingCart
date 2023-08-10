import React, {useContext} from 'react';
// Components
import Cart from './shared/Cart';


//Context 
import { Cartcontext } from '../context/CartContextProvider';
import { Link } from 'react-router-dom';



const ShopCart = () => {

    const {state , dispatch} = useContext(Cartcontext)

    return (
        <div>
            <div>
                {state.selectedItems.map(item => <Cart key={item.id} data={item}/>)}
            </div>
            {
                state.itemsCounter > 0 && 
                <div>
                    <p><span>Total Items : </span>{state.itemsCounter}</p>
                    <p><span>Total Payment : </span>{state.total}</p>
                    <div>
                        <button onClick={() => dispatch({type : "CHECKOUT"})}>Check Out</button>
                        <button onClick={() => dispatch({type : "CLEAR"})}> Clear </button>
                    </div>
                </div>
            }
            {
                state.checkout && 
                <div> 
                    <h3> Checked Out Successfully</h3>
                    <Link to="/products">Buy more</Link>
                </div>
            }
             {
                !state.checkout && state.itemsCounter === 0 &&
                <div> 
                    <h3> Want to Buy ? </h3>
                    <Link to="/products"> Go Back to Shop </Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;