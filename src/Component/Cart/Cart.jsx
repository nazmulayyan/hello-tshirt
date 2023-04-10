import React from 'react';
import './Cart.css'
const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if(cart.length === 0){
        message = <p>please add some products</p>
    }
    else{
        message = <p>thanks for added products</p>
    }
    return (
        <div>
            <h3 className={cart.length === 1 ? 'chocolate' : 'red'}>order summary: {cart.length}</h3>

            <p className={`bold bordered ${cart.length===3 ? 'green' : 'purple'}`}>something</p>

            {cart.length > 2 ? <span className='purple'>wow you did it</span> : <span>you can add more</span>}
            {message}
            {
                cart.map(tShirt => <p
                    key={tShirt._id}>
                    {tShirt.name}
                    <button onClick={()=>handleRemoveFromCart(tShirt._id)}>X</button>
                </p>)
            }
            {
                cart.length === 2 && <p>you are selected only 2 items</p>
            }
            {
                cart.length === 3 || <h3>those aren't three</h3>
            }

        </div>
    );
};

export default Cart;

/*
* CONDITIONAL RENDERING
1. use if else to set a variable that will contain an element, component
2. ternary: condition ? 'for true' : 'false'
3. logical && : (if the condition is true then the next thing will be displayed)
4. logical || (if the condition is false then the next thing will be displayed)

*/
/*
*CONDITIONAL CSS CLASS
1.
*/