import React , {useContext} from 'react';
import { Link } from 'react-router-dom';
// Context
import { Cartcontext } from '../../context/CartContextProvider';
// functions
import { shorten , isInCart , quantityCount} from '../../helpers/functions';
// Icons
import trash from "../../assets/trash.svg"
const Product = ({productData}) => {

    const {state , dispatch} = useContext(Cartcontext);

    return (
        <div>
            <img src={productData.image} alt='user_img' style={{width: "200px"}}/>
            <h3> {shorten(productData.title)} </h3>
            <p> {productData.price}</p>
            <div>
                <Link to={`/products/${productData.id}`}>details</Link>
                <div>
                    {quantityCount(state , productData.id) > 1 && <button onClick={() => dispatch({type:"DECREASE" , payload: productData})}> - </button>}
                    {quantityCount(state , productData.id) === 1 && <button onClick={() => dispatch({type:"REMOVE_ITEM" , payload : productData})}><img src={trash} alt="trash" /></button>}   
                    {
                        isInCart(state , productData.id) ?
                        <button onClick={()=> dispatch({type: "INCREASE" , payload : productData})}> + </button>
                        : <button onClick={() => dispatch({type: "ADD_ITEM", payload: productData})}>Add to Csrt</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;