import React, { useContext } from 'react';

// Context
import { Cartcontext } from '../../context/CartContextProvider';

// Functions
import { shorten } from '../../helpers/functions';

//Icons
import trash from "../../assets/trash.svg";

const Cart = (props) => {
    
    const {dispatch} = useContext(Cartcontext);
    const {image,title,price ,quantity} = props.data;

    return (
        <>
            <div>
                <img src={image} alt='product'/>
                <div>
                    <h3>{shorten(title)}</h3>
                    <p>{price} $ </p>
                </div>
                <div>
                    <span>{quantity}</span>
                </div>
                <div>
                    {
                        quantity > 1 ? 
                        <button onClick={() => dispatch({type: "DECREASE" , payload : props.data})}> - </button>
                        : <button onClick={() => dispatch({type: "REMOVE_ITEM" , payload : props.data})}> <img src={trash} alt='trash_icon'/></button>
                        
                    }
                    {
                        <button onClick={() => dispatch({type:"INCREASE" ,payload : props.data})}> + </button>
                    }
                </div>
            </div>
            <div>

            </div>
        </>
    );
};

export default Cart;